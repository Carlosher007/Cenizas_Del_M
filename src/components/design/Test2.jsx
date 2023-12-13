import { Html } from '@react-three/drei';
import React, { useEffect, useState } from 'react';
import { useGameStore } from '../../store/game';
import { getSceneScript } from '../../utils/script';
import Backlog from './Backlog';

const Test2 = () => {
  const [load, setLoad] = useState(false);
  const {
    setActionsGame,
    addToBacklog,
    resetBacklog,
    setScene,
    setPlace,
    setDialogue,
    removeFromBacklog,
    reset,
    setChoice,
    setDecision,
  } = useGameStore.getState();

  const [decisions, actionsGame, backlog] = useGameStore((state) => [
    state.decisions,
    state.actionsGame,
    state.backlog,
  ]);

  // useEffect(() => {
  //   reset();
  //   setActionsGame('showBacklog', true);
  //   setDecision('knowsAboutSofia', true);
  //   setDecision('helpToOldMen', false);
  //   setDecision('helpToChild', false);
  //   setDecision('helpToNoBody', true);
  //   setLoad(true);
  //   // setScene(99)
  // }, []);

  /* ------------------- Mostrar el Dialogo de introducción ------------------- */
  // Eliminar el if de laod, ese es de prueba
  useEffect(() => {
    if (load) {
      if (!actionsGame.choiceFaceGroup) {
        const script = getSceneScript(
          3,
          decisions,
          'IntroHostilGroup',
          backlog
        );
        const action = () => {
          setActionsGame('choiceFaceGroup', true);
          alert('Cambia de place del minijuego');
        };
        setDialogue({ script, action });
      }
    }
  }, [load]);

  useEffect(() => {
    /* ---------------------- Choice para ayudar a alguien o no, va despues del dialogo de introduction --------------------- */
    if (actionsGame.showD1S3 && !actionsGame.choiceHelpToSomeone) {
      const script = getSceneScript(3, decisions, 'helpToSomeone', backlog);
      setDialogue({ script });
      const actionsHelpToNobody = () => {
        setDecision('helpToNobody', true);
      };
      const actionsHelpToSomebody = () => {};
      setChoice({
        content: [
          {
            text: 'Ayudar a alguien',
            effect: actionsHelpToSomebody,
          },
          decisions.knowsAboutSofia && {
            text: 'No ayudar a nadie',
            effect: actionsHelpToNobody,
          },
        ].filter(Boolean),
        nameChoice: 'choiceHelpToSomeone',
      });
    }

    /* -------------- Dialogo despues de que alex ayudo al anciano -------------- */
    if (
      actionsGame.choiceHelpToSomeone &&
      !actionsGame.showD2S3 &&
      decisions.helpToOldMen
    ) {
      const script = getSceneScript(3, decisions, 'helpToOldMen', backlog);
      const action = () => {
        if (backlog.includes('medical')) {
          removeFromBacklog('medical');
        } else {
          setDecision('isOldMenDead', true);
        }
        setActionsGame('showD2S3', true);
      };  
      setDialogue({ script, action });
    }

    /* -------------- Dialogo de efecto despues de que alex ayudo al anciano -------------- */
    if (
      actionsGame.showD2S3 &&
      !actionsGame.showD3S3 &&
      decisions.helpToOldMen &&
      !decisions.knowsAboutSofia
    ) {
      // const script = getSceneScript(
      //   3,
      //   decisions,
      //   'effectHelpToOldMen',
      //   backlog
      // );
      // const action = () => {
      //   if(decisions.isOldMenDead){
      //     setActionsGame('finishStory', true);
      //   }
      //   setActionsGame('showD3S3', true);
      // };
      // setDialogue({ script, action });
      alert(
        'Finaliza la historia, entonces ir a lugar para que finalice la historia'
      );
      setActionsGame('showD3S3', true);
      setActionsGame('showBacklog', false);
    }

    /* -------------- Dialogo de efecto despues de que alex ayudo al anciano -------------- */
    if (
      actionsGame.showD2S3 &&
      !actionsGame.showD3S3 &&
      decisions.helpToOldMen &&
      decisions.knowsAboutSofia
    ) {
      alert('Cambiar al place de los maleantes');
    }

    /* --------------- Dialogo despues de que alex ayudo a la niña -------------- */
    if (
      actionsGame.choiceHelpToSomeone &&
      !actionsGame.showD2S3 &&
      decisions.helpToChild
    ) {
      const script = getSceneScript(3, decisions, 'helpToChild', backlog);
      const action = () => {
        setActionsGame('showD2S3', true);
        alert('Cambia de place a los maleantes');
      };
      setDialogue({ script, action });
    }

    /* -------------- Dialogo despues de que alex no ayudo a nadie -------------- */
    if (
      actionsGame.choiceHelpToSomeone &&
      !actionsGame.showD2S3 &&
      decisions.helpToNoBody
    ) {
      const script = getSceneScript(3, decisions, 'helpToNoBody', backlog);
      const action = () => {
        setActionsGame('showD2S3', true);
        alert('Cambia de place a los maleantes');
      };
      setDialogue({ script, action });
    }
  }, [actionsGame, decisions]);

  return <></>;
};

export default Test2;
