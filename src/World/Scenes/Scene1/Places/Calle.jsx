import React, { useEffect, useState } from 'react';
import {
  setPlaceFirebase,
  setSceneDecisionsFirebase,
  setSceneFireplace,
} from '../../../../api/game';
import Gif from '../../../../components/design/FondoGif';
import withLoading from '../../../../components/design/WithLoading';
import { useGameStore } from '../../../../store/game';
import { getSceneScript } from '../../../../utils/script';

const Calle = () => {
  const {
    setDialogue,
    setChoice,
    setDecision,
    setScene,
    setPlace,
    setIsChoice,
    resetDialogue,
    addToBacklog,
    setActionsGame,
    getActionsGame,
  } = useGameStore.getState();
  const [sound] = useState(() => new Audio('/assets/sounds/tv.wav'));
  const [hasPlayed, setHasPlayed] = useState(false);
  const [actionsGame, decisions, dialogue] = useGameStore((state) => [
    state.actionsGame,
    state.decisions,
    state.dialogue,
  ]);

  const goToBunkerEffect = () => {
    setDecision('followedCrowd', true);
    setDecision('continueGirlfriendSearch', false);
    setActionsGame('showD3S1', true);
  };

  const goForGirlfriendEffect = () => {
    setDecision('continueGirlfriendSearch', true);
    setDecision('followedCrowd', false);
    setActionsGame('showD3S1', true);
  };

  useEffect(() => {
    const showFirstDialog = () => {
      if (!getActionsGame('showD3S1')) {
        setPlaceFirebase('Calle');

        setChoice([]);
        setTimeout(() => {
          const script = getSceneScript(1, decisions, 'scriptNews');
          const action= () => {
            console.log('aaa');
          };
          setDialogue({ script});
          setChoice({
            content: [
              { text: 'Ingresar al bunker', effect: goToBunkerEffect },
              { text: 'Ir a buscar a sofía', effect: goForGirlfriendEffect },
            ],
            nameChoice: 'choiceBunkerOrSofia',
          });
        }, 2500);
      } else {
        showDialogueAfterDecision();
      }
    };
    showFirstDialog();
  }, []);

  const showDialogueAfterDecision = () => {
    if (getActionsGame('showD3S1')) {
      if (actionsGame.choiceBunkerOrSofia) {
        if (decisions.followedCrowd) {
          const script = getSceneScript(1, [], 'scriptGoToBunker');
          const action = () => {
            setSceneFireplace(2);
            setPlaceFirebase('bunker');
            setSceneDecisionsFirebase('scene1', { hasKey: false });
            setScene(2);

            setPlace('bunker');
            setDecision('hazKey', false);
          };
          setDialogue({ script, action });
        } else if (decisions.continueGirlfriendSearch) {
          const script = getSceneScript(1, [], 'scriptGoToSofia');
          const action = () => {
            setSceneFireplace(2);
            setPlaceFirebase('bunker');
            setSceneDecisionsFirebase('scene1', { hasKey: true });
            setScene(2);
            setPlace('bunker');
            setDecision('hazKey', true);
            addToBacklog('key');
          };
          setDialogue({ script, action });
        }
      }
    }
  };

  useEffect(() => {
    showDialogueAfterDecision();
  }, [actionsGame]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && !hasPlayed) {
        sound.currentTime = 0;
        sound.volume = 0.5;
        sound.play().catch((error) => {
          console.log('Error al reproducir el audio:', error);
        });
        sound.loop = true;
        setHasPlayed(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasPlayed]);

  useEffect(() => {
    return () => {
      sound.pause();
    };
  }, []);

  return (
    <>
      <Gif url="/assets/images/backgrounds/giftreet.gif" />
    </>
  );
};

export default withLoading(Calle, 2500);
