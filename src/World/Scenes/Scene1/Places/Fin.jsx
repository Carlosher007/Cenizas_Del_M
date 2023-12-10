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

const Fin = () => {
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
    reset,
    setActionToChange,
  } = useGameStore.getState();
  const [sound] = useState(() => new Audio('/assets/sounds/sad.wav'));
  const [hasPlayed, setHasPlayed] = useState(false);
  const [load, setLoad] = useState(false);
  const [actionsGame, decisions, dialogue, backlog] = useGameStore((state) => [
    state.actionsGame,
    state.decisions,
    state.dialogue,
    state.backlog,
  ]);

  // useEffect(() => {
  //   reset();
  //   setActionsGame('playedMiniGame2', true);
  //   setLoad(true);
  // }, []);

  useEffect(() => {
    if (load) {
      if (
        actionsGame.showD3S3 &&
        decisions.helpToOldMen &&
        !decisions.knowsAboutSofia
      ) {
        const script = getSceneScript(
          3,
          decisions,
          'effectHelpToOldMen',
          backlog
        );
        const action = () => {
          setActionsGame('finishStory', true);
          alert('Finalizo la historia');
        };
        setDialogue({ script, action });
      }
      if (actionsGame.playedMiniGame2 && !actionsGame.winMiniGame2) {
        const script = getSceneScript(3, decisions, 'lostMiniGame', backlog);
        const action = () => {
          setActionsGame('finishStory', true);
        };
        setDialogue({ script, action });
      }
      if (actionsGame.playedMiniGame2 && actionsGame.winMiniGame2) {
        const script = getSceneScript(3, decisions, 'winMiniGame', backlog);
        const action = () => {
          setActionsGame('finishStory', true);
        };
        setDialogue({ script, action });
      }
    }
  }, [load]);

  useEffect(() => {
    if (
      actionsGame.finishStory &&
      actionsGame.playedMiniGame2 &&
      !actionsGame.winMiniGame2 &&
      backlog.includes('medical')
    ) {
      const script = getSceneScript(3, decisions, 'comeToNewBunker', backlog);
      const action = () => {
        alert('Finalizo la historia');
      };
      setDialogue({ script, action });
    }
    if (
      actionsGame.finishStory &&
      actionsGame.playedMiniGame2 &&
      actionsGame.winMiniGame2 
    ) {
      const script = getSceneScript(3, decisions, 'comeToNewBunker', backlog);
      const action = () => {
        alert('Finalizo la historia');
      };
      setDialogue({ script, action });
    }
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
      <Gif url="/assets/images/backgrounds/fin1.gif" />
    </>
  );
};

export default withLoading(Fin, 2500);
