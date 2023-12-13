import { useEffect, useState } from "react";
import { setPlaceInGame } from "../../../api/game";
import { DeadCity } from "./DeadCity";
import Lights from "../Scene1/Lights";
import { KeyboardControls, Text } from "@react-three/drei";
import { keyboardControls } from "../../../hooks/useControls";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { Alex } from "../../Characters/Alex";
import { Physics, CuboidCollider, RigidBody } from "@react-three/rapier";
import { OldMan } from "./characters/OldMan";
import { LittleGirl } from "./characters/LittleGirl";
import Environments from "./Environment";
import withLoading from "../../../components/design/WithLoading";
import { SuvivorW4 } from "./characters/SurvivorW4";
import { SurvivorM8 } from "./characters/SurvivorM8";
import { SurvivorM3 } from "./characters/SurvivorM3";
import { SurvivorW7 } from "./characters/SurvivorW7";
import { SurvivorM1 } from "./characters/SurvivorM1";
import { SurvivorW2 } from "./characters/SurvivorW2";
import { SurvivorW6 } from "./characters/SurvivorW6";
import { SurvivorM5 } from "./characters/SurvivorM5";
import { useGameStore } from "../../../store/game";
import { getSceneScript } from "../../../utils/script";

const City = () => {
  const [decisions, backlog, actionsGame] = useGameStore((state) => [
    state.decisions,
    state.backlog,
    state.actionsGame,
  ]);
  const [load, setLoad] = useState(false);
  const [place] = useGameStore((state) => [state.place]);
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

  const {
    setDialogue,
    setDecision,
    getDecisions,
    addToBacklog,
    removeFromBacklog,
    getDialogueLength,
    resetDialogue,
    setChoice,
    setScene,
    setPlace,
  } = useGameStore.getState();

  const [speed, setSpeed] = useState(8);

  const [gravity, setGravity] = useState([0, -1, 0]);

  useEffect(() => {
    setTimeout(() => {
      setGravity([0, -10, 0]);
    }, 5000);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     resetDialogue()
  //     const introScript = getSceneScript(3, [], "introduction", []);
  //     setDialogue({script:introScript});

  //   }, 2500);
  // }, [])

  const { setActionsGame } = useGameStore.getState();

  useEffect(() => {
    setActionsGame("showBacklog", true);
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

  const [closeNeedHelp, setCloseNeedHelp] = useState(false);

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
    if (pressed === "r" && closeNeedHelp) {
      // const helpManKnowsSophia = () => {
      //   const scriptHelpedMan = getSceneScript(3, decisions, "helpToOldMen", backlog);

      //   setDialogue({script: scriptHelpedMan})

      // }

      // const notHelpedOldMan = () => {
      //   const scriptNotHelped = getSceneScript(3, decisions, "helpToNoBody", []);

      //   setDialogue({script: scriptNotHelped})
      // }

      const goToDelicuentsGroup = () => {
        setPlace("grupoH");
        window.location.reload();
      };

      const helpKid = () => {
        setTimeout(() => {
          const scriptHelpedKid = getSceneScript(3, [], "helpToChild", []);
          setDialogue({ script: scriptHelpedKid, action: goToDelicuentsGroup });
        }, 500);
      };

      const helpOldMan = () => {
        setTimeout(() => {
          const scriptHelpedMan = getSceneScript(
            3,
            decisions,
            "helpToOldMen",
            backlog
          );

          if (backlog.includes('medical')) {
            removeFromBacklog('medical')
          } else if (!decisions.knowsAboutSofia) {
            setDecision('isOldMenDead', true)
          }

          setDialogue({
            script: scriptHelpedMan,
            action: decisions.knowsAboutSofia
              ? goToDelicuentsGroup
              : () => {
                  setPlace("survivors");
                  window.location.reload();
                },
          });
        }, 500);
      };

      const helpNobody = () => {
        setTimeout(() => {
          const scriptHelpedMan = getSceneScript(3, [], "helpToNoBody", []);
          setDialogue({ script: scriptHelpedMan, action: goToDelicuentsGroup });
        }, 500);
      };

      const script = getSceneScript(3, decisions, "helpToSomeone", []);
      setChoice({
        content: [
          // Knows about Sophia
          decisions.knowsAboutSofia && {
            text: "Ayudar al anciano",
            effect: helpOldMan,
          },
          decisions.knowsAboutSofia && {
            text: "No ayudar al anciano",
            effect: helpNobody,
          },
          //Doesn't know
          !decisions.knowsAboutSofia && {
            text: "Ayudar a la Niña",
            effect: helpKid,
          },
          !decisions.knowsAboutSofia && {
            text: "Ayudar al Anciano",
            effect: helpOldMan,
          },
        ].filter(Boolean),
        nameChoice: "choiceKidOldMan",
      });
      setDialogue({ script: script });
    }
  }, [pressed, closeNeedHelp]);

  useEffect(() => {
    if (!actionsGame.showD1S2) {
      const script = getSceneScript(3, decisions, "introduction", backlog);
      const action = () => {
        setActionsGame("showD1S3", true);
      };
      setDialogue({ script, action });
    }
  }, []);

  // useEffect(() => {
  //   if (pressed === 'r' && closeNeedHelp) {
  //     console.log('hola')
  //   }
  // }, [pressed, closeNeedHelp])

  return (
    <>
      <Lights />
      <Environments />
      <Physics colliders={false} gravity={gravity}>
        <KeyboardControls map={keyboardControls}>
          <Ecctrl
            position={[0, 0, 0]}
            autoBalance={false}
            maxVelLimit={speed}
            capsuleRadius={0.45}
            floatHeight={0.1}
            capsuleHalfHeight={0.91}
            friction={0.1}
            name="alex"
            animated
          >
            <EcctrlAnimation characterURL={alexURL} animationSet={animationSet}>
              <Alex position={[0, -1.25, 0]} scale={1.65} />
            </EcctrlAnimation>
          </Ecctrl>
        </KeyboardControls>
        <SurvivorM3
          position={[-4, -3.5, -45.7]}
          scale={1.8}
          rotation-y={Math.PI / 2}
        />
        <CuboidCollider position={[-4,-2,-45.7]} args={[0.5,1.2,0.5]} />
        <SuvivorW4
          position={[30, -3.45, -80]}
          scale={1.6}
          rotation-y={-Math.PI / 2}
        />
        <CuboidCollider position={[30,-2,-80]} args={[0.5,1.2,0.5]} />
        <SurvivorW7
          position={[-1, -3.2, 43]}
          scale={1.6}
          rotation-y={Math.PI / 2}
        />
        <CuboidCollider position={[-1,-2,43]} args={[0.5,1.2,0.5]} />
        <SurvivorM8
          position={[30, -3.5, 17]}
          scale={1.65}
          rotation-y={-Math.PI}
        />
        <CuboidCollider position={[30,-2,16.5]} args={[0.5,1.2,0.5]} />
        <SurvivorM1
          position={[70, -3.2, -17]}
          scale={1.65}
          rotation-y={-Math.PI / 2}
        />
        <SurvivorW2
          position={[58, -2.9, -41]}
          scale={1.6}
          rotation-y={-Math.PI / 2}
        />
        <CuboidCollider position={[58,-3,-41]} args={[1.3,1.2,0.5]} />
        <SurvivorM5
          position={[78, -3.2, -40]}
          scale={1.65}
          rotation-y={-Math.PI / 2}
        />
        <CuboidCollider position={[78,-2,-40]} args={[0.5,1.2,0.5]} />
        <SurvivorW6
          position={[40, -3.2, -14]}
          scale={1.6}
          rotation-y={-Math.PI / 8}
        />
        <CuboidCollider position={[40,-2,-14]} args={[0.5,1.2,0.5]} />
        <OldMan
          position={[70, -3.6, -31]}
          scale={1.65}
          rotation-y={-Math.PI / 2}
        />

        {!decisions.knowsAboutSofia && (
          <LittleGirl
            position={[70, -3.5, -24]}
            scale={0.75}
            rotation-y={-Math.PI / 2}
          />
        )}

        <DeadCity position-y={-3.5} scale={1.5} />

        {/**Colliders */}
        <RigidBody
          type="fixed"
          onCollisionEnter={({ other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === "alex") {
                setinteractionTxt("Presiona R para interactuar");
                setinteractionTxtPosition([70, 0.5, -28]);
                setinteractionTxtRotation(-Math.PI / 2);
                setinteractionTxtBackgroundPosition([70, 0.5, -28]);
                setCloseNeedHelp(true);
              }
            }
          }}
          onCollisionExit={() => {
            setinteractionTxtPosition([-5, -4, 6.2]);
            setinteractionTxtBackgroundPosition([-5, -4, 6.2]);
            setCloseNeedHelp(false);
          }}
        >
          <CuboidCollider position={[70, -4, -28]} args={[3, 3, 5]} />
        </RigidBody>
        <RigidBody
          onCollisionEnter={({ other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === "alex") {
                console.log("Tocó el otro");
              }
            }
          }}
          onCollisionExit={() => {}}
        >
          <CuboidCollider position={[15, 0.5, -80]} args={[10, 5.5, 0.01]} />
        </RigidBody>

        {/* FLOATING TEXT */}

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
      </Physics>
    </>
  );
};

export default withLoading(City, 2500);
