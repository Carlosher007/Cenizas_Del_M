/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { KeyboardControls, Text, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { Howl } from "howler";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Backlog from "../../../../components/design/Backlog";
import Loader from "../../../../components/design/Loader";
import withLoading from "../../../../components/design/WithLoading";
import { keyboardControls } from "../../../../hooks/useControls";
import { useGameStore } from "../../../../store/game";
import { getSceneScript } from "../../../../utils/script";
import { Alex } from "../../../Characters/Alex";
import { Backpack } from "../Items/Backpack";
import { Flashlight } from "../Items/Flashlight";
import { Key } from "../Items/Key";
import { Phone } from "../Items/Phone";
import Lights from "../Lights";
import { LivingRoom } from "../Places/LivingRoom";
import Door from "./Door";
import { setPlaceFirebase, setSceneFireplace } from "../../../../api/game";

const updateFirebase = async () => {
  await setPlaceFirebase("Calle")
}

const Sala = () => {
  const alexRef = useRef();
  const [showTransition, setShowTransition] = useState(false);
  const {
    setPlace,
    setDialogue,
    setChoice,
    setActionsGame,
    setDecision,
    getActionsGame,
    getDecisions,
    addToBacklog,
    removetoBacklog,
    getDialogueLength,
    resetDialogue,
  } = useGameStore.getState();
  const [decisions, actionsGame] = useGameStore((state) => [
    state.decisions,
    state.actionsGame,
  ]);

  const alexURL = "/assets/models/character/alex_main.glb";

  const animationSet = {
    idle: "idle",
    walk: "walking",
    run: "running",
    jump: "moving-jump",
    jumpIdle: "idle-jump",
    jumpLand: "idle",
    fall: "idle", // This is for falling from high sky
    action1: "pickup",
  };

  useEffect(() => {
    const showFirstDialog = () => {
      const showD2 = getActionsGame("showD2");
      if (!showD2) {
        setGameControls([]);
        setPlayPhoneSound(true);
        const script = getSceneScript(1, [], "scriptFirstDialog");
        const action = () => {
          setActionsGame("showD1", true);
        };
        setDialogue({ script, action });
      }
    };

    showFirstDialog();
  }, []);

  const [gravity, setGravity] = useState([0, -1, 0]);
  useEffect(() => {
    setTimeout(() => {
      setGravity([0, -10, 0]);
    }, 5000);
  }, []);

  const [interactionTxtPosition, setinteractionTxtPosition] = useState([
    -5, -4, 6.2,
  ]);
  const [interactionTxt, setinteractionTxt] = useState("Presiona R para abrir");
  const [interactionTxtRotation, setinteractionTxtRotation] = useState(
    -Math.PI
  );
  const [
    interactionTxtBackgroundPosition,
    setinteractionTxtBackgroundPosition,
  ] = useState(-5, -4, 6.2);

  const telSound = new Howl({
    src: ["/assets/sounds/tel.wav"],
  });

  const [telephone, setTelephone] = useState(false);
  const [backpack, setBackpack] = useState(false);
  const [flashlight, setFlashlight] = useState(false);
  const [key, setKey] = useState(false);
  const [door, setDoor] = useState(false);
  const [pressed, setPressed] = useState("none");
  const [lastPressed, setLastPressed] = useState("none");
  const [listenersAdded, setListenersAdded] = useState(false);
  const [wPressed, setWPressed] = useState(false);
  const [aPressed, setAPressed] = useState(false);
  const [sPressed, setSPressed] = useState(false);
  const [dPressed, setDPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setLastPressed("none");
      if (e.code === "KeyR") {
        setPressed("r");
      } else if (e.code === "Enter") {
        setPressed("enter");
      } else if (e.code === "KeyW") {
        setWPressed(true);
      } else if (e.code === "KeyA") {
        setAPressed(true);
      } else if (e.code === "KeyS") {
        setSPressed(true);
      } else if (e.code === "KeyD") {
        setDPressed(true);
      }
    };

    const handleKeyUp = (e) => {
      setPressed("none");
      if (e.code === "KeyR") {
        setLastPressed("r");
      } else if (e.code === "Enter") {
        setLastPressed("enter");
      } else if (e.code === "KeyW") {
        setWPressed(false);
      } else if (e.code === "KeyA") {
        setAPressed(false);
      } else if (e.code === "KeyS") {
        setSPressed(false);
      } else if (e.code === "KeyD") {
        setDPressed(false);
      }
    };

    if (!listenersAdded) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
      setListenersAdded(true);
    }
  }, []);

  useEffect(() => {
    if (pressed === "r" && telephone) {
      const showD2 = getActionsGame("showD2");
      if (!showD2) {
        setPlayPhoneSound(false);
        setGameControls([]);
        telSound.currentTime = 0;
        telSound.volume = 0.2;
        telSound.play();
        const decisions = getDecisions();
        const script = getSceneScript(1, decisions, "scriptConversation1");
        const action = () => {
          setActionsGame("showD2", true);
        };
        setDialogue({ script, action });
      } else {
        console.log("Ya llame a mi madre");
      }
    }
  }, [pressed, telephone]);

  const grabSound = new Howl({
    src: ["/assets/sounds/item.wav"],
  });

  useEffect(() => {
    if (pressed === "r" && backpack) {
      grabSound.volume(0.5);
      grabSound.play();
      setBackpack(false);
      setDecision("hasBackpack", true);
      setActionsGame("showBacklog", true);
    }
  }, [pressed, backpack]);

  useEffect(() => {
    if (
      pressed === "r" &&
      flashlight &&
      !decisions.hasBackpack &&
      !decisions.flashlight
    ) {
      setGameControls([]);
      const script = getSceneScript(1, [], "warningsSala");
      const auxScript = [];
      auxScript.push(script[0]);
      setDialogue({ script: auxScript });
    }
    if (
      pressed === "r" &&
      flashlight &&
      decisions.hasBackpack &&
      !decisions.flashlight
    ) {
      grabSound.volume(0.5);
      grabSound.play();
      setFlashlight(false);
      setDecision("hasFlashlight", true);
      addToBacklog("flashlight");
    }
  }, [pressed, flashlight]);

  useEffect(() => {
    if (pressed === "r" && key && decisions.hasBackpack && !decisions.hasKey) {
      setDecision("hasKey", true);
      addToBacklog("key");
    }
  }, [pressed, key]);

  useEffect(() => {
    if (pressed === "r" && door && !actionsGame.showD2) {
      setGameControls([]);
      const script = getSceneScript(1, [], "warningsSala");
      const auxScript = [];
      auxScript.push(script[2]);
      setDialogue({ script: auxScript });
      return;
    }

    if (pressed === "r" && door && !decisions.hasBackpack) {
      setGameControls([]);
      const script = getSceneScript(1, [], "warningsSala");
      const auxScript = [];
      auxScript.push(script[1]);
      setDialogue({ script: auxScript });
      return;
    }
    if (
      pressed === "r" &&
      door &&
      decisions.hasBackpack &&
      actionsGame.showD2
    ) {
      setPlace("Calle");
      setActionsGame("showBacklog", false);
      resetDialogue();
      window.location.reload();
    }
  }, [pressed, door]);

  const livingRoomDoorRef = useRef();
  const kitchenDoorRef = useRef();
  const bathroomDoorRef = useRef();
  const bathroom2DoorRef = useRef();
  const room1DoorRef = useRef();
  const room2DoorRef = useRef();
  const room3DoorRef = useRef();
  const [kitchenDoorTouch, setKitchenDoorTouch] = useState(false);
  const [room1DoorTouch, setRoom1DoorTouch] = useState(false);
  const [room2DoorTouch, setRoom2DoorTouch] = useState(false);
  const [room3DoorTouch, setRoom3DoorTouch] = useState(false);
  const [livingRoomDoorTouch, setLivingroomDoorTouch] = useState(false);
  const [room1DoorOpened, setRoom1DoorOpened] = useState(false);
  const [room2DoorOpened, setRoom2DoorOpened] = useState(false);
  const [room3DoorOpened, setRoom3DoorOpened] = useState(false);
  const [bathroomDoorTouch, setBathroomDoorTouch] = useState(false);
  const [bathroom2DoorTouch, setBathroom2DoorTouch] = useState(false);
  const [livingRoomDoorOpened, setLivingRoomDoorOpened] = useState(false);
  const [kitchenDoorOpened, setKitchenDoorOpened] = useState(false);
  const [bathroomDoorOpened, setBathroomDoorOpened] = useState(false);
  const [bathroom2DoorOpened, setBathroom2DoorOpened] = useState(false);
  const [speed, setSpeed] = useState(8);
  const [playPhoneSound, setPlayPhoneSound] = useState(false);
  const [walking, setWalking] = useState(false);

  useEffect(() => {
    const walkSound = new Howl({
      src: ["/assets/sounds/walk.wav"],
    });
    if (walking && gameControls.length > 0) {
      const interval = setInterval(() => {
        walkSound.volume(0.2);
        walkSound.play();
      }, 500);
      return () => clearInterval(interval);
    } else if (!walking) {
      walkSound.stop();
    }
  }, [walking]);

  useEffect(() => {
    if (wPressed || aPressed || sPressed || dPressed) {
      setWalking(true);
    } else if (!wPressed && !aPressed && !sPressed && !dPressed) {
      setWalking(false);
    }
  }, [wPressed, aPressed, sPressed, dPressed]);

  const [gameControls, setGameControls] = useState(keyboardControls);
  useEffect(() => {
    if (lastPressed === "enter") {
      const dialogueLength = getDialogueLength();
      if (dialogueLength === 0) {
        setGameControls(keyboardControls);
      } else {
        setGameControls([]);
      }
    }
  }, [lastPressed]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playPhoneSound) {
        telSound.currentTime = 0;
        telSound.volume(0.15);
        telSound.play();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [playPhoneSound]);

  useEffect(() => {
    if (pressed === "r") {
      if (livingRoomDoorTouch && !livingRoomDoorOpened) {
        setLivingRoomDoorOpened(true);
        setLivingroomDoorTouch(false);
      } else if (kitchenDoorTouch && !kitchenDoorOpened) {
        setKitchenDoorOpened(true);
        setKitchenDoorTouch(false);
      } else if (bathroomDoorTouch && !bathroomDoorOpened) {
        setBathroomDoorOpened(true);
        setBathroomDoorTouch(false);
      } else if (room1DoorTouch && !room1DoorOpened) {
        setRoom1DoorOpened(true);
        setRoom1DoorTouch(false);
      } else if (room2DoorTouch && !room2DoorOpened) {
        setRoom2DoorOpened(true);
        setRoom2DoorTouch(false);
      } else if (room3DoorTouch && !room3DoorOpened) {
        setRoom3DoorOpened(true);
        setRoom3DoorTouch(false);
      } else if (bathroom2DoorTouch && !bathroom2DoorOpened) {
        setBathroom2DoorOpened(true);
        setBathroom2DoorTouch(false);
      }
      setinteractionTxtPosition([-5, -4, 6.2]);
      setinteractionTxtBackgroundPosition([-5, -4, 11.4]);
    }
  }, [pressed]);

  return (
    <>
      <Door
        doorRef={livingRoomDoorRef}
        isOpen={livingRoomDoorOpened}
        targetRotation={Math.PI / 2}
        position={[-5.83, -2.6, 6.4]}
      />
      <Door
        doorRef={kitchenDoorRef}
        isOpen={kitchenDoorOpened}
        targetRotation={Math.PI / 2}
        position={[-5.83, -2.6, 11.4]}
      />
      <Door
        doorRef={bathroomDoorRef}
        isOpen={bathroomDoorOpened}
        targetRotation={-Math.PI / 2}
        position={[9.17, -2.6, 6.4]}
      />
      <Door
        doorRef={bathroom2DoorRef}
        isOpen={bathroom2DoorOpened}
        targetRotation={-Math.PI / 2}
        position={[-5.83, 2.35, 6.4]}
      />
      <Door
        doorRef={room1DoorRef}
        isOpen={room1DoorOpened}
        targetRotation={Math.PI / 2}
        position={[9.17, 2.35, 11.4]}
      />
      <Door
        doorRef={room2DoorRef}
        isOpen={room2DoorOpened}
        targetRotation={-Math.PI / 2}
        position={[9.17, 2.35, 6.4]}
      />
      <Door
        doorRef={room3DoorRef}
        isOpen={room3DoorOpened}
        targetRotation={Math.PI / 2}
        position={[-5.83, 2.35, 11.4]}
      />
      <Lights />
      <Physics gravity={gravity}>
        <KeyboardControls map={gameControls}>
          <Ecctrl
            position={[0, 0, 0]}
            autoBalance={false}
            maxVelLimit={speed}
            capsuleRadius={0.35}
            floatHeight={0}
            capsuleHalfHeight={0.91}
            friction={0.1}
            dragDampingC={0.5}
            camMaxDis={-5}
            camInitDis={-4}
            camCollision={false}
            name="alex"
            animated
          >
            <EcctrlAnimation characterURL={alexURL} animationSet={animationSet}>
              <Alex position={[0, -1.25, 0]} scale={1.65} />
            </EcctrlAnimation>
          </Ecctrl>
        </KeyboardControls>
        <RigidBody
          type="fixed"
          onCollisionEnter={({ manifold, target, other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === "alex") {
                setTelephone(true);
                setinteractionTxtPosition([-6.8, 0.6, 0.9]);
                setinteractionTxtBackgroundPosition([-6.801, 0.6, 0.9]);
                setinteractionTxt("Tecla R para contestar");
                setinteractionTxtRotation(Math.PI / 2);
              }
            }
          }}
          onCollisionExit={({ manifold, target, other }) => {
            setTelephone(false);
            setinteractionTxtPosition([-5, -4, 6.2]);
            setinteractionTxtBackgroundPosition([-5, -4, 6.2]);
            setinteractionTxtRotation(-Math.PI);
          }}
        >
          <Phone scale={0.01} position={[-6.8, -0.8, 0.8]} rotation-y={0} />
        </RigidBody>
        {!decisions.hasFlashlight && (
          <>
            <RigidBody
              type="fixed"
              colliders="cuboid"
              onCollisionEnter={({ manifold, target, other }) => {
                if (other.rigidBodyObject) {
                  if (other.rigidBodyObject.name === "alex") {
                    setFlashlight(true);
                    setinteractionTxtPosition([6.8, 0.6, 0.8]);
                    setinteractionTxtBackgroundPosition([6.81, 0.6, 0.9]);
                    setinteractionTxt("Presiona R para recoger");
                    setinteractionTxtRotation(-Math.PI / 2);
                  }
                }
              }}
              onCollisionExit={({ manifold, target, other }) => {
                setFlashlight(false);
                setinteractionTxtPosition([-5, -4, 6.2]);
                setinteractionTxtBackgroundPosition([-5, -4, 6.2]);
              }}
            >
              <CuboidCollider
                position={[6.8, -0.75, 0.8]}
                args={[0.5, 1.1, 0.5]}
              />
            </RigidBody>
            <Flashlight
              position={[6.8, -0.75, 0.8]}
              scale={0.65}
              rotation-y={1}
            />
          </>
        )}
        {!decisions.hasKey && (
          <RigidBody
            type="fixed"
            colliders="cuboid"
            // onCollisionEnter={({ manifold, target, other }) => {
            //   if (other.rigidBodyObject) {
            //     if (other.rigidBodyObject.name === 'alex' && !key) {
            //       setKey(true);
            //       setinteractionTxtPosition([-3.5, 0.6, -2.6]);
            //       setinteractionTxtBackgroundPosition([-3.5, 0.6, -2.601]);
            //       setinteractionTxt('Presiona R para recoger');
            //       setinteractionTxtRotation(0);
            //     }
            //   }
            // }}
            // onCollisionExit={({ manifold, target, other }) => {
            //   setKey(false);
            //   setinteractionTxtPosition([-5, -4, 6.2]);
            //   setinteractionTxtBackgroundPosition([-5, -4, 6.2]);
            // }}
          >
            <Key scale={0.5} position={[-3.5, -0.7, -2.9]} />
          </RigidBody>
        )}
        <RigidBody
          type="fixed"
          colliders="cuboid"
          onCollisionEnter={({ other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === "alex") {
                setSpeed(14);
              }
            }
          }}
          onCollisionExit={() => {
            setSpeed(8);
          }}
        >
          <mesh
            rotation={[Math.PI / 2, Math.PI / 4.6, 0]}
            position={[1.2, -0.5, 10.4]}
          >
            <planeGeometry attach="geometry" args={[8.5, 2.4]} />
            <meshBasicMaterial attach="material" color="white" opacity={0.7} />
          </mesh>
        </RigidBody>

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

        <LivingRoom scale={2} position-y={-3} />
        {!livingRoomDoorOpened && (
          <RigidBody
            type="fixed"
            onCollisionEnter={({ other }) => {
              if (other.rigidBodyObject) {
                if (other.rigidBodyObject.name === "alex") {
                  setinteractionTxtPosition([-5, 1, 6.2]);
                  setinteractionTxtBackgroundPosition([-5, 1, 6.201]);
                  setinteractionTxt("Presiona R para abrir");
                  setLivingroomDoorTouch(true);
                  setinteractionTxtRotation(-Math.PI);
                }
              }
            }}
            onCollisionExit={() => {
              setinteractionTxtPosition([-5, -4, 6.2]);
              setinteractionTxtBackgroundPosition([-5, -4, 6.2]);
              setLivingroomDoorTouch(false);
            }}
          >
            <CuboidCollider position={[-5, 0.125, 6.3]} args={[1, 1.1, 0.05]} />
          </RigidBody>
        )}
        {livingRoomDoorOpened && (
          <RigidBody type="fixed">
            {" "}
            <CuboidCollider
              position={[-5.7, 0.125, 7.2]}
              args={[0.05, 1.1, 1]}
            />{" "}
          </RigidBody>
        )}
        <RigidBody type="fixed">
          {" "}
          <CuboidCollider
            onCollisionEnter={({ other }) => {
              if (other.rigidBodyObject) {
                if (other.rigidBodyObject.name === "alex") {
                  setinteractionTxtPosition([-7.1, 1, 9]);
                  setinteractionTxtBackgroundPosition([-7.11, 1, 9]);
                  setinteractionTxtRotation(Math.PI / 2);
                  if (decisions.hasBackpack) {
                    setinteractionTxt("Presiona R para abrir");
                    setDoor(true);
                  } else {
                    setinteractionTxt("Necesito mi mochila");
                    setDoor(false);
                  }
                }
              }
            }}
            onCollisionExit={() => {
              setinteractionTxtPosition([-5, -4, 11.4]);
              setinteractionTxtBackgroundPosition([-5, -4, 11.4]);
              setDoor(false);
            }}
            position={[-7.2, 0.125, 9]}
            args={[0.05, 1.1, 1]}
          />{" "}
        </RigidBody>
        {!kitchenDoorOpened && (
          <RigidBody
            type="fixed"
            onCollisionEnter={({ other }) => {
              if (other.rigidBodyObject) {
                if (other.rigidBodyObject.name === "alex") {
                  setinteractionTxtPosition([-5, 1, 11.2]);
                  setinteractionTxtBackgroundPosition([-5, 1, 11.201]);
                  setinteractionTxt("Presiona R para abrir");
                  setKitchenDoorTouch(true);
                  setinteractionTxtRotation(-Math.PI);
                }
              }
            }}
            onCollisionExit={() => {
              setinteractionTxtPosition([-5, -4, 11.4]);
              setinteractionTxtBackgroundPosition([-5, -4, 11.4]);
              setKitchenDoorTouch(false);
            }}
          >
            <CuboidCollider
              position={[-5, 0.125, 11.4]}
              args={[1, 1.1, 0.05]}
            />
          </RigidBody>
        )}
        {kitchenDoorOpened && (
          <RigidBody type="fixed">
            {" "}
            <CuboidCollider
              position={[-5.7, 0.125, 12.4]}
              args={[0.05, 1.1, 1]}
            />{" "}
          </RigidBody>
        )}
        {!bathroomDoorOpened && (
          <RigidBody
            type="fixed"
            onCollisionEnter={({ other }) => {
              if (other.rigidBodyObject) {
                if (other.rigidBodyObject.name === "alex") {
                  setinteractionTxtPosition([10, 1, 7]);
                  setinteractionTxtBackgroundPosition([10, 1, 6.99]);
                  setinteractionTxt("Presiona R para abrir");
                  setinteractionTxtRotation(0);
                  setBathroomDoorTouch(true);
                }
              }
            }}
            onCollisionExit={() => {
              setinteractionTxtPosition([-5, -4, 11.4]);
              setinteractionTxtBackgroundPosition([-5, -4, 11.4]);
              setBathroomDoorTouch(false);
            }}
          >
            <CuboidCollider position={[10, 0.125, 6.5]} args={[1, 1.1, 0.05]} />
          </RigidBody>
        )}
        {bathroomDoorOpened && (
          <RigidBody type="fixed">
            {" "}
            <CuboidCollider
              position={[9.2, 0.125, 5.4]}
              args={[0.05, 1.1, 0.8]}
            />{" "}
          </RigidBody>
        )}
        {!bathroom2DoorOpened && (
          <RigidBody
            type="fixed"
            onCollisionEnter={({ other }) => {
              if (other.rigidBodyObject) {
                if (other.rigidBodyObject.name === "alex") {
                  setinteractionTxtPosition([-5, 5.8, 6.8]);
                  setinteractionTxtBackgroundPosition([-5, 5.8, 6.79]);
                  setinteractionTxt("Presiona R para abrir");
                  setinteractionTxtRotation(0);
                  setBathroom2DoorTouch(true);
                }
              }
            }}
            onCollisionExit={() => {
              setinteractionTxtPosition([-5, -4, 11.4]);
              setinteractionTxtBackgroundPosition([-5, -4, 11.4]);
              setBathroom2DoorTouch(false);
            }}
          >
            <CuboidCollider position={[-5, 5, 6.6]} args={[1, 1.1, 0.05]} />
          </RigidBody>
        )}
        {bathroom2DoorOpened && (
          <RigidBody type="fixed">
            {" "}
            <CuboidCollider
              position={[-5.7, 5, 5.7]}
              args={[0.05, 1.1, 1]}
            />{" "}
          </RigidBody>
        )}
        {!room1DoorOpened && (
          <RigidBody
            type="fixed"
            onCollisionEnter={({ other }) => {
              if (other.rigidBodyObject) {
                if (other.rigidBodyObject.name === "alex") {
                  setinteractionTxtPosition([10, 5.8, 11]);
                  setinteractionTxtBackgroundPosition([10, 5.8, 11.01]);
                  setinteractionTxt("Presiona R para abrir");
                  setinteractionTxtRotation(-Math.PI);
                  setRoom1DoorTouch(true);
                }
              }
            }}
            onCollisionExit={() => {
              setinteractionTxtPosition([-5, -4, 11.4]);
              setinteractionTxtBackgroundPosition([-5, -4, 11.4]);
              setRoom1DoorTouch(false);
            }}
          >
            <CuboidCollider position={[10, 5, 11.3]} args={[1, 1.1, 0.05]} />
          </RigidBody>
        )}
        {room1DoorOpened && (
          <RigidBody type="fixed">
            {" "}
            <CuboidCollider
              position={[9.2, 5, 11.4]}
              args={[0.05, 1.1, 1]}
            />{" "}
          </RigidBody>
        )}
        {!room2DoorOpened && (
          <RigidBody
            type="fixed"
            onCollisionEnter={({ other }) => {
              if (other.rigidBodyObject) {
                if (other.rigidBodyObject.name === "alex") {
                  setinteractionTxtPosition([10, 5.8, 7]);
                  setinteractionTxtBackgroundPosition([10, 5.8, 6.99]);
                  setinteractionTxt("Presiona R para abrir");
                  setinteractionTxtRotation(0);
                  setRoom2DoorTouch(true);
                }
              }
            }}
            onCollisionExit={() => {
              setinteractionTxtPosition([-5, -4, 11.4]);
              setinteractionTxtBackgroundPosition([-5, -4, 11.4]);
              setRoom2DoorTouch(false);
            }}
          >
            <CuboidCollider position={[10, 5, 6.6]} args={[1, 1.1, 0.05]} />
          </RigidBody>
        )}
        {room2DoorOpened && (
          <RigidBody type="fixed">
            {" "}
            <CuboidCollider
              position={[9.2, 5, 5.4]}
              args={[0.05, 1.1, 1]}
            />{" "}
          </RigidBody>
        )}
        {!room3DoorOpened && (
          <RigidBody
            type="fixed"
            onCollisionEnter={({ other }) => {
              if (other.rigidBodyObject) {
                if (other.rigidBodyObject.name === "alex") {
                  setinteractionTxtPosition([-5, 5.8, 11]);
                  setinteractionTxtBackgroundPosition([-5, 5.8, 11.01]);
                  setinteractionTxt("Presiona R para abrir");
                  setinteractionTxtRotation(-Math.PI);
                  setRoom3DoorTouch(true);
                }
              }
            }}
            onCollisionExit={() => {
              setinteractionTxtPosition([-5, -4, 11.4]);
              setinteractionTxtBackgroundPosition([-5, -4, 11.4]);
              setRoom3DoorTouch(false);
            }}
          >
            <CuboidCollider position={[-5, 5, 11.4]} args={[1, 1.1, 0.05]} />
          </RigidBody>
        )}
        {room3DoorOpened && (
          <RigidBody type="fixed">
            {" "}
            <CuboidCollider
              position={[-5.7, 5, 12.4]}
              args={[0.05, 1.1, 1]}
            />{" "}
          </RigidBody>
        )}
        {!decisions.hasBackpack && (
          <>
            <RigidBody
              type="fixed"
              colliders="cuboid"
              onCollisionEnter={({ other }) => {
                if (other.rigidBodyObject) {
                  if (other.rigidBodyObject.name === "alex") {
                    setinteractionTxtPosition([0.5, 1, 5.6]);
                    setinteractionTxtBackgroundPosition([0.5, 1, 5.601]);
                    setinteractionTxt("Presiona R para recoger");
                    setBackpack(true);
                    setinteractionTxtRotation(-Math.PI);
                  }
                }
              }}
              onCollisionExit={() => {
                setinteractionTxtPosition([-5, -4, 6.2]);
                setinteractionTxtBackgroundPosition([-5, -4, 6.2]);
                setBackpack(false);
              }}
            >
              <CuboidCollider
                position={[0.5, -1.2, 5.6]}
                args={[0.6, 1.5, 0.5]}
              />
            </RigidBody>
            <Backpack
              scale={0.9}
              position={[0.5, -1.2, 5.6]}
              rotation-y={1 + Math.PI}
            />
            <RigidBody type="fixed">
              <mesh position={[2, 0, 9.2]}>
                <planeGeometry attach="geometry" args={[6, 6]} />
                <meshStandardMaterial
                  attach="material"
                  transparent
                  visible={false}
                />
              </mesh>
            </RigidBody>
            <RigidBody type="fixed">
              <mesh position={[5, 0, 9.8]} rotation-y={Math.PI / 2}>
                <planeGeometry attach="geometry" args={[1.5, 2]} />
                <meshStandardMaterial
                  attach="material"
                  transparent
                  visible={false}
                />
              </mesh>
            </RigidBody>
          </>
        )}
      </Physics>
    </>
  );
};

export default withLoading(Sala, 2500);
