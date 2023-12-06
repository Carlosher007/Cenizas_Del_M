import { KeyboardControls, Sky, Text, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier';
import Ecctrl, { EcctrlAnimation } from 'ecctrl';
import { Howl } from 'howler';
import React, { useEffect, useRef, useState } from 'react';
import Backlog from '../../../../components/design/Backlog';
import withLoading from '../../../../components/design/WithLoading';
import { keyboardControls } from '../../../../hooks/useControls';
import { useCircleGameStore } from '../../../../store/circle-game';
import { useGameStore } from '../../../../store/game';
import { getSceneScript } from '../../../../utils/script';
import { Alex } from '../../../Characters/Alex';
import { Survivor1 } from '../../../Characters/Survivor1';
import { Survivor2 } from '../../../Characters/Survivor2';
import { Survivor3 } from '../../../Characters/Survivor3';
import { Survivor4 } from '../../../Characters/Survivor4';
import { Survivor5 } from '../../../Characters/Survivor5';
import { Survivor6 } from '../../../Characters/Survivor6';
import { Survivor7 } from '../../../Characters/Survivor7';
import { Survivor8 } from '../../../Characters/Survivor8';
import { Lamp } from '../Items/Lamp';
import { Safe } from '../Items/Safe';
import { SmallLamp } from '../Items/SmallLamp';
import { Bunker } from '../Places/Bunker';
import { BunkerTecho } from '../Places/BunkerTecho';
import Lights from '../Places/Lights';

const Underground = () => {
  const {
    setPlace,
    setDialogue,
    setChoice,
    setActionsGame,
    setDecision,
    getActionsGame,
    getDecisions,
    addToBacklog,
    isInBacklog,
    removeFromBacklog,
    getDialogueLength,
    resetDialogue,
    setActionToChange,
  } = useGameStore.getState();
  const { resetCircleGame } = useCircleGameStore.getState();
  const [decisions, actionsGame] = useGameStore((state) => [
    state.decisions,
    state.actionsGame,
  ]);

  const [pressed, setPressed] = useState('none');
  const [lastPressed, setLastPressed] = useState('none');
  const [listenersAdded, setListenersAdded] = useState(false);
  const [wPressed, setWPressed] = useState(false);
  const [aPressed, setAPressed] = useState(false);
  const [sPressed, setSPressed] = useState(false);
  const [dPressed, setDPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setLastPressed('none');
      if (e.code === 'KeyR') {
        setPressed('r');
      } else if (e.code === 'Enter') {
        setPressed('enter');
      } else if (e.code === 'KeyW') {
        setWPressed(true);
      } else if (e.code === 'KeyA') {
        setAPressed(true);
      } else if (e.code === 'KeyS') {
        setSPressed(true);
      } else if (e.code === 'KeyD') {
        setDPressed(true);
      }
    };

    const handleKeyUp = (e) => {
      setPressed('none');
      if (e.code === 'KeyR') {
        setLastPressed('r');
      } else if (e.code === 'Enter') {
        setLastPressed('enter');
      } else if (e.code === 'KeyW') {
        setWPressed(false);
      } else if (e.code === 'KeyA') {
        setAPressed(false);
      } else if (e.code === 'KeyS') {
        setSPressed(false);
      } else if (e.code === 'KeyD') {
        setDPressed(false);
      }
    };

    if (!listenersAdded) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
      setListenersAdded(true);
    }

    setActionsGame('showOverlay', false);

    const resetDialogueWithoutInteraction = () => {
      resetDialogue();
    };
    resetDialogueWithoutInteraction();
    setActionsGame('showBacklog', true);
  }, []);

  const [gameControls, setGameControls] = useState(keyboardControls);
  useEffect(() => {
    if (lastPressed === 'enter') {
      const dialogueLength = getDialogueLength();
      if (dialogueLength === 0) {
        setGameControls(keyboardControls);
      } else {
        setGameControls([]);
      }
    }
  }, [lastPressed]);

  const [safe, setSafe] = useState(false);
  const [charla, setCharla] = useState(false);
  const [charla1Displayed, setCharla1Displayed] = useState(false);
  const [charla2Displayed, setCharla2Displayed] = useState(false);

  const sharingFlashlightEffect = () => {
    setDecision('wantsToShareKey', false);
    setDecision('wantsToShareFlashlight', true);
    removeFromBacklog('flashlight');
    setDecision('hasFlashlight', false);
  };

  const sharingKeyEffect = () => {
    setDecision('wantsToShareKey', true);
    setDecision('wantsToShareFlashlight', false);
    removeFromBacklog('key');
    setDecision('hasKey', false);
  };

  const notSharingEffect = () => {
    setDecision('wantsToShareKey', false);
    setDecision('wantsToShareFlashlight', false);
  };

  const actionsOpenSafeInGroup = () => {
    setDecision('openSafeInGroup', true);
  };

  const actionsOpenSafeAlone = () => {
    setDecision('openSafeAlone', true);
  };

  useEffect(() => {
    const groupMeeting = () => {
      if (pressed === 'r' && charla && !getActionsGame('choiceSharing')) {
        setGameControls([]);
        setinteractionTxtPosition([-5, -10, 6.2]);
        setinteractionTxtBackgroundPosition([-5, -10, 6.2]);
        const script = getSceneScript(
          2,
          decisions,
          'scripMeetingSurvivors',
          ''
        );
        setDialogue({ script });
        setChoice({
          content: [
            { text: 'No compartir nada', effect: notSharingEffect },
            isInBacklog('flashlight') && {
              text: 'Compartir la linterna',
              effect: sharingFlashlightEffect,
            },
            isInBacklog('key') && {
              text: 'Compartir la llave',
              effect: sharingKeyEffect,
            },
          ].filter(Boolean),
          nameChoice: 'choiceSharing',
        });
      }
    };

    groupMeeting();


    const showScriptSleep = () => {
      if (
        pressed === 'r' &&
        charla &&
        !getActionsGame('showDSleepS2') &&
        getActionsGame('showD2S2')
      ) {
        setGameControls([]);
        const script = getSceneScript(
          2,
          decisions,
          'scriptToSleep',
          ''
        );
        setDialogue({ script });
      }
    };

    showScriptSleep();

    const showScriptTraitorFound = () => {
      if (
        pressed === 'r' &&
        charla &&
        !getActionsGame('showD3S2') &&
        getActionsGame('showDSleepS2')
      ) {
        setGameControls([]);
        setinteractionTxtPosition([-5, -10, 6.2]);
        setinteractionTxtBackgroundPosition([-5, -10, 6.2]);
        const script = getSceneScript(2, decisions, 'scriptTraitorFound', '');
        setActionToChange(['showD3S2', 'action']);
        setDialogue({ script });
      }
    };
    showScriptTraitorFound();
  }, [pressed, charla]);

  const showscriptAfterTraitorFound = () => {
    setGameControls([]);
    setinteractionTxtPosition([-5, -10, 6.2]);
    setinteractionTxtBackgroundPosition([-5, -10, 6.2]);
    const script = getSceneScript(2, decisions, 'scriptAfterTraitorFound', '');
    setDialogue({ script });
    // setActionToChange(['choiceSafeSharing','action']);
    setChoice({
      content: [
        {
          text: 'Decirles que tienes la llave',
          effect: actionsOpenSafeInGroup,
        },
        {
          text: 'No decirles que tienes la llave',
          effect: actionsOpenSafeAlone,
        },
      ].filter(Boolean),
      nameChoice: 'choiceSafeSharing',
    });
  };

  const showScriptSafeAlone = () => {
    setGameControls([]);
    setinteractionTxtPosition([-5, -10, 6.2]);
    setinteractionTxtBackgroundPosition([-5, -10, 6.2]);
    const script = getSceneScript(2, decisions, 'scriptOpenSafeAlone', '');
    const actions = () => {
      setActionsGame('showD4S2', true);
    };
    setActionToChange(['showD4S2', 'action']);
    setDialogue({ script, actions });
  };

  const showScriptSafeGroup = () => {
    setGameControls([]);
    setinteractionTxtPosition([-5, -10, 6.2]);
    setinteractionTxtBackgroundPosition([-5, -10, 6.2]);
    const script = getSceneScript(2, decisions, 'scriptOpenSafeGroup', '');
    const actions = () => {
      setActionsGame('showD4S2', true);
    };
    setActionToChange(['showD4S2', 'action']);
    setDialogue({ script, actions });
  };

  const showDialogueAfterDecisionChoosing = () => {
    
      setGameControls([]);
      const script = getSceneScript(
        2,
        decisions,
        'scriptAnsweringSurvivorsResources',
        ''
      );
      setActionToChange(['showD2S2', 'action']);
      setDialogue({ script });
  };

  useEffect(() => {
    if (getActionsGame('showD3S2') && !getActionsGame('choiceSafeSharing')) {
      showscriptAfterTraitorFound();
    }
    if (
      !getActionsGame('showD2S2') &&
      getActionsGame('choiceSharing') 
    ) {
      showDialogueAfterDecisionChoosing()
    }
    if (getActionsGame('choiceSafeSharing') && !getActionsGame('showD4S2')) {
      if (decisions.openSafeAlone) {
        showScriptSafeAlone();
      } else if (decisions.openSafeInGroup) {
        showScriptSafeGroup();
      }
    }
  }, [actionsGame]);

  useEffect(() => {
    const groupMeeting = () => {
      if (pressed === 'r' && safe) {
        setActionsGame('showBacklog', false);
        resetCircleGame();
        setPlace('game');
        window.location.reload();
      }
    };

    groupMeeting();
  }, [pressed, charla]);

  const alexURL = '/assets/models/character/alex_main.glb';
  const [speed, setSpeed] = useState(6);

  const animationSet = {
    idle: 'idle',
    walk: 'walking',
    run: 'running',
    jump: 'moving-jump',
    jumpIdle: 'idle-jump',
    jumpLand: 'idle',
    fall: 'idle', // This is for falling from high sky
    action1: 'pickup',
  };

  const [interactionTxtPosition, setinteractionTxtPosition] = useState([
    -5, -10, 6.2,
  ]);
  const [interactionTxt, setinteractionTxt] = useState('Presiona R para abrir');
  const [interactionTxtRotation, setinteractionTxtRotation] = useState(
    -Math.PI
  );
  const [
    interactionTxtBackgroundPosition,
    setinteractionTxtBackgroundPosition,
  ] = useState(-5, -10, 6.2);

  return (
    <>
      <group>
        <mesh
          position={interactionTxtBackgroundPosition}
          rotation-y={interactionTxtRotation}
        >
          <planeGeometry attach="geometry" args={[3, 0.6]} />
          <meshBasicMaterial
            attach="material"
            color="white"
            opacity={0.7}
            transparent
          />
        </mesh>
        <Text
          position={interactionTxtPosition}
          rotation-y={interactionTxtRotation}
          fontSize={0.25}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          {interactionTxt}
        </Text>
      </group>
      <Lamp position={[-6, 1, -1]} scale={0.05} rotation-y={-Math.PI / 2} />
      <Lamp position={[2, 1, -1]} scale={0.05} rotation-y={-Math.PI / 2} />
      <Lamp position={[2, 1, -12]} scale={0.05} />
      <Lamp position={[2, 1, 12]} scale={0.05} />
      <Lamp position={[17, 1, 12]} scale={0.05} />
      <Lamp position={[17, 1, -12]} scale={0.05} />
      <Lamp position={[32, 1, -12]} scale={0.05} />
      <Lamp position={[32, 1, 12]} scale={0.05} />
      <Lamp position={[52, 1, 12]} scale={0.05} />
      <Lamp position={[52, 1, -12]} scale={0.05} />
      <Lamp position={[2, -5.3, -12]} scale={0.05} />
      <Lamp position={[2, -5.3, 12]} scale={0.05} />
      <Lamp position={[17, -5.3, 12]} scale={0.05} />
      <Lamp position={[17, -5.3, -12]} scale={0.05} />
      <Lamp position={[32, -5.3, -12]} scale={0.05} />
      <Lamp position={[32, -5.3, 12]} scale={0.05} />
      <Lamp position={[55, -5.3, -1]} scale={0.05} rotation-y={-Math.PI / 2} />
      <Lamp position={[46, -5.3, -1]} scale={0.05} rotation-y={-Math.PI / 2} />
      <Lamp position={[42, -5.3, 12]} scale={0.05} />
      <Lamp position={[42, -5.3, -12]} scale={0.05} />
      <Lamp position={[-4, -5.3, -1]} scale={0.05} rotation-y={-Math.PI / 2} />
      <SmallLamp position={[30, 3, 19]} scale={2} />
      <Safe position={[28.7, -1.7, 18.5]} />
      <Physics>
        <Lights />
        <Sky
          sunPosition={[0, 0, 0]}
          inclination={0}
          azimuth={180}
          mieCoefficient={1}
          elevation={5}
          mieDirectionalG={0}
          rayleigh={0.1}
          turbidity={10}
          exposure={0.1}
        />
        <KeyboardControls map={gameControls}>
          <Ecctrl
            position={[0, 0, 0]}
            autoBalance={false}
            maxVelLimit={speed}
            capsuleRadius={0.35}
            floatHeight={0}
            capsuleHalfHeight={0.91}
            friction={0.2}
            dragDampingC={0.2}
            name="alex"
            animated
          >
            <EcctrlAnimation characterURL={alexURL} animationSet={animationSet}>
              <Alex position={[0, -1.25, 0]} scale={1.65} />
            </EcctrlAnimation>
          </Ecctrl>
        </KeyboardControls>
        // Caja fuerte
        <RigidBody
          type="fixed"
          onCollisionEnter={({ other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === 'alex') {
                setinteractionTxtPosition([29.2, 0.2, 18.5]);
                setinteractionTxtBackgroundPosition([29.1, 0.2, 18.5]);
                setinteractionTxt('Presiona R para abrir');
                setSafe(true);
                setinteractionTxtRotation(Math.PI / 2);
              }
            }
          }}
          onCollisionExit={() => {
            setinteractionTxtPosition([-5, -10, 6.2]);
            setinteractionTxtBackgroundPosition([-5, -10, 6.2]);
            setSafe(false);
          }}
        >
          <CuboidCollider
            position={[29.2, -1.7, 18.5]}
            args={[0.025, 1.5, 1.2]}
          />
        </RigidBody>
        <BunkerTecho position={[22, 0, 0]} scale={2.1} />
        //Escaleras
        <RigidBody
          type="fixed"
          colliders="cuboid"
          onCollisionEnter={({ other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === 'alex') {
                setSpeed(10);
              }
            }
          }}
          onCollisionExit={() => {
            setSpeed(6);
          }}
        >
          <mesh
            rotation={[(3 * Math.PI) / 2, Math.PI / 5.6, 0]}
            position={[9.2, -7.8, -1]}
          >
            <CuboidCollider args={[7.1, 2, 0.1]} position={[0, 0, 0]} />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[52.5, -9.6, 5.5]}>
            <CuboidCollider args={[2.5, 2.2, 2.6]} position={[-0.5, 5.5, 0]} />
          </mesh>
        </RigidBody>
        <RigidBody
          type="fixed"
          colliders="cuboid"
          onCollisionEnter={({ other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === 'alex') {
                setSpeed(10);
              }
            }
          }}
          onCollisionExit={() => {
            setSpeed(6);
          }}
        >
          <mesh rotation={[1, Math.PI, 0]} position={[52.5, -9.2, 5.5]}>
            <CuboidCollider args={[2.5, 4, 0.1]} position={[0, 0, 0]} />
          </mesh>
          <mesh
            rotation={[(3 * Math.PI) / 2, Math.PI / 5.6, 0]}
            position={[52.5, -5, 5.5]}
          >
            <CuboidCollider
              args={[2.6, 2.3, 0.1]}
              position={[-4.1, -5.5, -3.3]}
            />
          </mesh>
        </RigidBody>
        //Piso Superior
        <RigidBody type="fixed">
          //Zona 1
          <mesh position={[-6.7, -4, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry attach="geometry" args={[20, 33]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          //Lado derecho (Piso)
          <mesh position={[-6.7, -4, 22.5]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry attach="geometry" args={[103, 33]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          //Lado derecho (Muro)
          <mesh position={[-4.4, -2, 13.4]} rotation={[0, 0, 0]}>
            <CuboidCollider args={[2.8, 1, 3.4]} position={[24.5, 0, -3.2]} />
            <planeGeometry attach="geometry" args={[65.8, 20]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <mesh position={[44.5, -2, 13.4]} rotation={[0, 0, 0]}>
            <planeGeometry attach="geometry" args={[25, 20]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          //Habitacion
          <mesh position={[30, -1, 24]} rotation={[0, 0, 0]}>
            <planeGeometry attach="geometry" args={[10, 5]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <mesh position={[35, -1, 22]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry attach="geometry" args={[10, 5]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <mesh position={[26, -1, 22]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry attach="geometry" args={[10, 5]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <mesh position={[26.8, -1, 16]} rotation={[0, 0.8 + Math.PI, 0]}>
            <planeGeometry attach="geometry" args={[3.6, 5]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <mesh
            position={[33.5, -1, 15.7]}
            rotation={[0, 0.8 + Math.PI / 2, 0]}
          >
            <planeGeometry attach="geometry" args={[3.4, 5]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <mesh position={[28.3, -1, 14]} rotation={[0, (3 * Math.PI) / 2, 0]}>
            <planeGeometry attach="geometry" args={[1.2, 5]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <mesh position={[32, -1, 14]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry attach="geometry" args={[1.2, 5]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <CuboidCollider args={[1.3, 1.3, 0.8]} position={[31.8, -3, 21.6]} />
          <CuboidCollider args={[1.3, 1.3, 3]} position={[27.8, -3, 20.3]} />
          //Escombros
          <CuboidCollider args={[2.8, 1, 3.4]} position={[24.5, 0, -3.2]} />
          //Lado Izquierdo (Piso)
          <mesh position={[-6.7, -4, -24]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry attach="geometry" args={[103, 32]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          //Lado Izquierdo (Muro)
          <mesh position={[-4.4, -2, -15.5]} rotation={[Math.PI, 0, 0]}>
            <planeGeometry attach="geometry" args={[125, 20]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          //Zona 2
          <mesh position={[40, -4, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry attach="geometry" args={[10, 33]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <mesh position={[50, -4, -1]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry attach="geometry" args={[30, 7]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
        </RigidBody>
        //Computadores Zona 2
        <CuboidCollider args={[0.8, 1, 1]} position={[29.8, -3, 6.8]} />
        <CuboidCollider args={[0.8, 1, 1]} position={[29.8, -3, -9]} />
        <CuboidCollider args={[0.6, 1, 0.9]} position={[37.5, -3, -4.6]} />
        //Muros Zona 1
        <RigidBody type="fixed">
          <mesh position={[-12.5, -4, -1]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry attach="geometry" args={[15, 12]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <mesh position={[-12.5, -4, -7.3]} rotation={[0, 0, 0]}>
            <planeGeometry attach="geometry" args={[16, 15]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <mesh position={[-12.5, -4, 5]} rotation={[0, 0, 0]}>
            <planeGeometry attach="geometry" args={[16, 15]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <mesh position={[-4.3, 0, -12]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry attach="geometry" args={[9, 8]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <mesh position={[-4.4, 0, 9.5]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry attach="geometry" args={[9, 8]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
        </RigidBody>
        //Barandas Zona 2
        <RigidBody type="fixed">
          <mesh position={[40, 0, 0]} rotation={[0, 0, 0]}>
            <CuboidCollider args={[3.5, 10, 16]} position={[20, 0, 0]} />
            <CuboidCollider args={[9, 1.5, 1]} position={[13.5, -2, 2]} />
            <CuboidCollider args={[9, 1.5, 1]} position={[13.5, -2, -4.6]} />
            <CuboidCollider args={[0.7, 1.3, 1.8]} position={[5.2, -2, -6]} />
            <CuboidCollider args={[0.7, 1.3, 2.9]} position={[5.2, -2, 5.9]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          //Barandas Zona 1
          <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <CuboidCollider args={[0.7, 1.3, 2.9]} position={[3, -2, 3.6]} />
            <CuboidCollider args={[0.7, 1.3, 2.9]} position={[3, -2, -6]} />
            <CuboidCollider
              args={[16.5, 1.3, 0.8]}
              position={[20.4, -2, -8.4]}
            />
            <CuboidCollider args={[17, 1.3, 0.8]} position={[19.5, -2, 6]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          <mesh position={[40, 0, 0]} rotation={[0, 0, 0]}>
            <CuboidCollider args={[4.5, 9, 7.3]} position={[-7.5, 0, -1]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
        </RigidBody>
        //Piso inferior
        <RigidBody type="fixed">
          <mesh position={[0, -10.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry attach="geometry" args={[120, 120]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
          //Escombros
          <CuboidCollider args={[7.5, 2, 3]} position={[26, -9.5, 11]} />
          <CuboidCollider args={[4.8, 2, 3]} position={[28.8, -9.5, 7]} />
          <mesh position={[-4.4, -10, -1]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry attach="geometry" args={[30, 12]} />
            <meshStandardMaterial transparent={true} opacity={0} />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <CuboidCollider args={[0.8, 2.5, 0.8]} position={[42, -10.2, 11]} />
          <CuboidCollider args={[0.8, 2.5, 0.8]} position={[39, -10.2, 10]} />
          <CuboidCollider args={[0.8, 2.5, 0.8]} position={[44, -10.2, 9]} />
          <CuboidCollider args={[0.8, 2.5, 0.8]} position={[25, -3.8, -15.5]} />
          <CuboidCollider args={[0.8, 2.5, 0.8]} position={[24, -3.8, 12]} />
          <CuboidCollider args={[0.8, 2.5, 0.8]} position={[39, -10.2, 7]} />
          <CuboidCollider args={[0.8, 2.5, 0.8]} position={[43.6, -10.2, 7]} />
          <CuboidCollider args={[1, 2.3, 1]} position={[15.5, -10.2, -16]} />
        </RigidBody>
        <Survivor1
          position={[42, -10.2, 11]}
          rotation-y={Math.PI}
          scale={1.55}
        />
        <Survivor2 position={[39, -10.2, 10]} rotation-y={2.2} scale={1.65} />
        <Survivor3
          position={[44, -10.2, 9]}
          rotation-y={1.5 + Math.PI}
          scale={1.65}
        />
        <Survivor4
          position={[25, -3.8, -15.5]}
          rotation-y={Math.PI}
          scale={1.65}
        />
        <Survivor6
          position={[24, -3.8, 12]}
          rotation-y={1.2 + Math.PI}
          scale={1.75}
        />
        <Survivor5 position={[39, -10.2, 7]} rotation-y={1.2} scale={1.65} />
        <Survivor7
          position={[43.6, -10.2, 7]}
          rotation-y={1.7 + Math.PI}
          scale={1.65}
        />
        <Survivor8 position={[15.5, -10.2, -16]} scale={1.65} />
        <RigidBody
          type="fixed"
          onCollisionEnter={({ other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === 'alex') {
                setinteractionTxtPosition([41.5, -6, 7]);
                setinteractionTxtBackgroundPosition([41.5, -6, 7.1]);
                setinteractionTxt('Presiona R para hablar');
                setCharla(true);
                setinteractionTxtRotation(-Math.PI);
              }
            }
          }}
          onCollisionExit={() => {
            setinteractionTxtPosition([-5, -10, 6.2]);
            setinteractionTxtBackgroundPosition([-5, -10, 6.2]);
            setCharla(false);
          }}
        >
          <CuboidCollider position={[41.5, -9, 7]} args={[1.1, 1.5, 0.025]} />
        </RigidBody>
      </Physics>
    </>
  );
};

export default withLoading(Underground, 2600);
