import { Environment, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { MathUtils } from 'three';
import withLoading from '../../../../../components/design/WithLoading';
import { useCircleGameStore } from '../../../../../store/circle-game';
import { useGameStore } from '../../../../../store/game';
import { getSceneScript } from '../../../../../utils/script';
import CircleGame from './Circle';
import EnvironmentGame from './EnvironmentGame';
import LineGame from './Line';

const GameCircle = () => {
  const { setColoredParts, setLevel, setIsPlaying, setWin , setFirstTime} =
    useCircleGameStore.getState();
  const {
    setDialogue,
    setActionsGame,
    setPlace,
    resetDialogue,
    getActionsGame,
    addToBacklog,
    removeFromBacklog,
  } = useGameStore.getState();

  useEffect(() => {
    const showIninitScript = () => {
      const script = getSceneScript(2, [], 'scriptCircleGameInit', '');
      const action = () => {
        setIsPlaying(true);
      };
      setDialogue({ script, action });
    };
    showIninitScript();
  }, []);

  const [level, lives, win, parts, coloredParts,firstTime] = useCircleGameStore(
    (state) => [
      state.level,
      state.lives,
      state.win,
      state.parts,
      state.coloredParts,
      state.firstTime,
    ]
  );

  const [decisions] = useGameStore((state) => [state.decisions]);

  const [circleScale, setCircleScale] = useState();
  const [lineScale, setLineScale] = useState({});
  const [lengthArray, setLengthArray] = useState();
  const [velocity, setVelocity] = useState();

  useFrame((state) => {
    if (level === 0) {
      if(!firstTime){
        // window.location.reload();
        setFirstTime(true)
      }
      // state.camera.position.x = MathUtils.lerp(2, 0, 0.1);
      // state.camera.position.z = MathUtils.lerp(5, -5, 0.1);
      //pongamos todas las componentes de la camara en 0
      state.camera.position.x = 0;
      state.camera.position.y = 0;
      state.camera.position.z = 5;
    } else if (level === 1) {
      // state.camera.position.x = MathUtils.lerp(
      //   state.camera.position.x,
      //   3,
      //   0.1
      // );
      // state.camera.position.z = MathUtils.lerp(state.camera.position.z, 8, 0.1);
      state.camera.position.x = 2;
      state.camera.position.y = 0;
      state.camera.position.z = 5;
    } else if (level === 2) {
      // state.camera.position.x = MathUtils.lerp(state.camera.position.x, 0, 0.1);
      // state.camera.position.z = MathUtils.lerp(state.camera.position.z, 3, 0.1);
      //   state.camera.position.y = MathUtils.lerp(
      //     state.camera.position.y,
      //     1.5,
      //     0.1
      //   );
        state.camera.position.x = -2;
        state.camera.position.y = 0;
        state.camera.position.z = 5;
    }
  });

  useEffect(() => {
    const changeCircleScale = () => {
      const levelToScale = {
        0: 0.2,
        1: 0.15,
        2: 0.1,
      };
      setCircleScale(levelToScale[level] || 0.2);
    };
    changeCircleScale();

    const changeLineScale = () => {
      const levelToScale = {
        0: {
          width: 1.7,
          height: 0.2,
          depth: 0.2,
        },
        1: {
          width: 1.2,
          height: 0.2,
          depth: 0.2,
        },
        2: {
          width: 0.8,
          height: 0.2,
          depth: 0.2,
        },
      };
      setLineScale(
        levelToScale[level] || {
          width: 2.8,
          height: 0.2,
          depth: 0.2,
        }
      );
    };
    changeLineScale();

    const changeLengthArray = () => {
      const levelToScale = {
        0: 1.3,
        1: 1,
        2: 0.7,
      };
      setLengthArray(levelToScale[level] || 2);
    };
    changeLengthArray();

    const changeVelocity = () => {
      const levelToVelocity = {
        0: 1,
        1: 4,
        2: 8,
      };
      setVelocity(levelToVelocity[level] || 0.01);
    };
    changeVelocity();
  }, [level]);

  useEffect(() => {
    if ((level === 0) & (coloredParts.length === 0)) {
      setColoredParts([1, 5, 7]);
      setLevel(1);
    } else if ((level === 1) & (coloredParts.length === 0)) {
      setColoredParts([4, 7, 2]);
      setLevel(2);
    } else if ((level === 2) & (coloredParts.length === 0)) {
      setWin(true);
    }
  }, [coloredParts]);

  useEffect(() => {
    const consultLives = () => {
      if (lives === 0) {
        setIsPlaying(false);
        setWin(false);
      }
    };
    consultLives();

    const consultWin = () => {
      if (lives === 0 && win === false) {
        setIsPlaying(false);
        const showScript = () => {
          const script = getSceneScript(2, [], 'scriptCircleGameLose', '');
          const action = () => {
            setActionsGame('winMiniGame', false);
            setActionsGame('playedMinigame', true)
            removeFromBacklog('key')
            resetDialogue()
            // Perdio y no tenía la llave
            if(getActionsGame('hasNone')){
              setActionsGame('showOverlay', false);
              setPlace('bunker');
            }
            // Perdio, tenia la llave y la compartio
            else if(decisions.openSafeInGroup){
              setActionsGame('showOverlay', false);
              setPlace('bunker');
            }
            // Perdio, tenia la llave y no la compartio
            else {
              addToBacklog('medical')
              setActionsGame('showOverlay', false);
              setPlace('bunker');
            }
          };
          setDialogue({ script, action });
        };
        showScript();
      } else if (win === true) {
        setIsPlaying(false);
        const showScript = () => {
          const script = getSceneScript(2, [], 'scriptCircleGameWin', '');
          const action = () => {
            setActionsGame('playedMinigame', true);
            setActionsGame('winMiniGame', true);
            removeFromBacklog('key');
            resetDialogue();
            // Gano y no tenia la llave
            if(getActionsGame('hasNone')){
              setActionsGame('showOverlay', false);
              setPlace('bunker');
              addToBacklog('medical');
            }
            // Gano, tenia la llave y la compartio
            else if(decisions.openSafeInGroup){
              addToBacklog('medical');
              setActionsGame('showOverlay', false);
              setPlace('bunker');
            }
            // Gano, tenia la llave y no la compartio
            else{
              setActionsGame('showOverlay', true);
              setPlace('chooseObjects');
            }
          };
          setDialogue({ script, action });
        };
        showScript();
      }
    };
    consultWin();
  }, [lives, win]);

  return (
    <>
      <OrbitControls enableZoom={false} />
      <EnvironmentGame />
      <CircleGame scale={circleScale} />
      <LineGame
        size={lineScale}
        lengthArray={lengthArray}
        velocity={velocity}
      />
      <ambientLight intensity={0.5} />
    </>
  );
};

export default withLoading(GameCircle,2500)
