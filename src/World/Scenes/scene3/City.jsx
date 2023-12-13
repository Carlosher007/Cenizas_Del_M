import { useEffect, useState } from "react";
import { setPlaceInGame } from "../../../api/game";
import { DeadCity } from "./DeadCity";
import Lights from "../Scene1/Lights";
import { KeyboardControls, Text} from "@react-three/drei";
import { keyboardControls } from "../../../hooks/useControls";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { Alex } from "../../Characters/Alex";
import { Physics, CuboidCollider, RigidBody} from "@react-three/rapier";
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
  const [decisions, backlog, dialogue] = useGameStore((state) => [
    state.decisions,
    state.backlog,
    state.dialogue
  ]);

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
    removetoBacklog,
    getDialogueLength,
    resetDialogue,
    setChoice,
    setPlace
  } = useGameStore.getState();

  const [speed, setSpeed] = useState(8);

  const [gravity, setGravity] = useState([0, -1, 0]);

  useEffect(() => {
    setTimeout(() => {
      setGravity([0, -10, 0]);
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      resetDialogue()
      const introScript = getSceneScript(3, [], "introduction", []); 
      setDialogue({script:introScript});

    }, 2500);
  }, [])


  const {
    setActionsGame,
  } = useGameStore.getState();

  useEffect(()=> {
    setActionsGame("showBacklog", true);
  }, [])
  
  const [interactionTxtPosition, setinteractionTxtPosition] = useState([
    0, 0,0 
  ]);

  const [interactionTxt, setinteractionTxt] = useState("Presiona R para abrir");

  const [interactionTxtRotation, setinteractionTxtRotation] = useState(
    -Math.PI
  );

  const [
    interactionTxtBackgroundPosition,
    setinteractionTxtBackgroundPosition,
  ] = useState(0, 0, 0);

  const [closeNeedHelp, setCloseNeedHelp] = useState(false)

  const [pressed, setPressed] = useState("none");
  const [lastPressed, setLastPressed] = useState("none");
  const [listenersAdded, setListenersAdded] = useState(false);
  const [wPressed, setWPressed] = useState(false);
  const [aPressed, setAPressed] = useState(false);
  const [sPressed, setSPressed] = useState(false);
  const [dPressed, setDPressed] = useState(false);



  useState(() =>{

    console.log('dsdasderz<xs')
  }, [pressed])

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


  useEffect(()=>{
    if (pressed === "r" && closeNeedHelp) {
      
      setChoice([]);

      const helpManKnowsSophia = () => {
        const scriptHelpedMan = getSceneScript(3, decisions, "helpToOldMen", backlog);    

        setDialogue({script: scriptHelpedMan})

      }

      const notHelpedOldMan = () => {
        const scriptNotHelped = getSceneScript(3, decisions, "helpToNoBody", []);  

        setDialogue({script: scriptNotHelped})
      }

      const helpKid = () => {
        const scriptHelpedKid = getSceneScript(3, [], "helpToChild", []);    
        console.log(scriptHelpedKid)
        //setDialogue({script: scriptHelpedKid})
        setDialogue(scriptHelpedKid)
        resetDialogue()
        console.log(dialogue)
      }


      const sendToMinigame = () => {
        //setPlace("minijuego")
        console.log('hey')
      }


      const script = getSceneScript(3, decisions, "helpToSomeone", []); 
      setChoice({
        content: [
          // Knows about Sophia
          decisions.knowsAboutSofia && { text: 'Ayudar al anciano', effect: helpManKnowsSophia },
          decisions.knowsAboutSofia && { text: 'No ayudar al anciano', effect: notHelpedOldMan },
          //Doesn't know
          !decisions.knowsAboutSofia && { text: 'Ayudar a la Niña', effect: helpKid },
          !decisions.knowsAboutSofia && { text: 'Ayudar al Anciano', effect: sendToMinigame },
        ].filter(Boolean),
        nameChoice: 'choiceKidOldMan',
      });
      setDialogue({script: script});

      
    }
  }, [pressed, closeNeedHelp])



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
            capsuleRadius={0.35}
            floatHeight={0}
            capsuleHalfHeight={0.91}
            friction={0.2}
            name="alex"
            animated
          >
            <EcctrlAnimation characterURL={alexURL} animationSet={animationSet}>
              <Alex position={[0, -1.25, 0]} scale={1.65}/>
            </EcctrlAnimation>
          </Ecctrl>
        </KeyboardControls>
        <SurvivorM3 position={[-4, -3.5, -45.7]} scale={1.8} rotation-y={Math.PI/2}/>
        <SuvivorW4 position={[30, -3.45, -80]} scale={1.6} rotation-y={-Math.PI/2}/>
        <SurvivorW7 position={[-1, -3.2, 43]}  scale={1.6} rotation-y={Math.PI/2}/>
        <SurvivorM8 position={[30, -3.5, 17]} scale={1.65} rotation-y={-Math.PI}/>

        <SurvivorM1 position={[70, -3.2, -17]} scale={1.65} rotation-y={-Math.PI/2}/>
        <SurvivorW2 position={[58, -2.9, -41]} scale={1.6} rotation-y={-Math.PI/2}/>
        <SurvivorM5 position={[78, -3.2, -40]} scale={1.65} rotation-y={-Math.PI/2}/>
        <SurvivorW6 position={[40, -3.2, -14]} scale={1.6} rotation-y={-Math.PI/8}/>
        <OldMan position={[70, -3.6, -31]} scale={1.65} rotation-y={-Math.PI/2}/>

        {
          !decisions.knowsAboutSofia 
          &&
          <LittleGirl position={[70, -3.5, -24]} scale={0.75} rotation-y={-Math.PI/2}/>
        }
        
        <DeadCity position-y={-3.5} scale={1.5} />


        {/**Colliders */}
        <RigidBody type="fixed"
          
          onCollisionEnter={({ other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === 'alex') {
                setinteractionTxt('Presiona R para interactuar')
                setinteractionTxtPosition([70, 0.5, -28])
                setinteractionTxtRotation(-Math.PI/2)
                setinteractionTxtBackgroundPosition([70, 0.5, -28])
                setCloseNeedHelp(true)
              }
            }
          }}
          onCollisionExit={() => {
            setinteractionTxtPosition([-5, -4, 6.2])
            setinteractionTxtBackgroundPosition([-5, -4, 6.2])
            setCloseNeedHelp(false)
          }}
        >
          <CuboidCollider position={[70, -4, -28]} args={[3, 3, 5]} />
        </RigidBody>
        <RigidBody
          onCollisionEnter={({ other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === 'alex') {
                console.log('Tocó el otro')
              }
            }
          }}
          onCollisionExit={() => {
       
          }}
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

export default withLoading(City,2500);