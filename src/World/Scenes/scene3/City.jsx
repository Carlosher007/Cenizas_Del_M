import { useEffect, useState } from "react";
import { setPlaceInGame } from "../../../api/game";
import { DeadCity } from "./DeadCity";
import Lights from "../Scene1/Lights";
import { KeyboardControls } from "@react-three/drei";
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
      const script = getSceneScript(3, [], 'helpToSomeone', []);
      setDialogue({script:script});

    }, 2500);
  }, [])


  const {
    setActionsGame,
  } = useGameStore.getState();

  useEffect(()=> {
    setActionsGame("showBacklog", true);
  }, [])

  return (
    <>
      <Lights />
      <Environments />
      <Physics colliders={false} gravity={gravity} debug>
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
              <Alex position={[0, -1.25, 0]} scale={1.65} />
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
        <OldMan position={[70, -3.5, -24]} scale={1.65} rotation-y={-Math.PI/2}/>
        <LittleGirl position={[70, -3.6, -31]} scale={0.75} rotation-y={-Math.PI/2}/>
        <DeadCity position-y={-3.5} scale={1.5}/>


        {/**Colliders */}
        <RigidBody
          
          onCollisionEnter={({ other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === 'alex') {
                console.log('hola')
              }
            }
          }}
          onCollisionExit={() => {
       
          }}
        >
          <CuboidCollider position={[5, 0, -20]} args={[1.1, 1.5, 0.025]} />
        </RigidBody>

      </Physics>
    </>
  );
};

export default withLoading(City,2500);