import { useEffect, useState } from "react";
import { setPlaceInGame } from "../../../api/game";
import { useGameStore } from "../../../store/game";
import { DeadCity } from "./DeadCity";
import Lights from "../Scene1/Lights";
import { KeyboardControls } from "@react-three/drei";
import { keyboardControls } from "../../../hooks/useControls";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { Alex } from "../../Characters/Alex";
import { Physics } from "@react-three/rapier";
import { OldMan } from "./characters/OldMan";
import { LittleGirl } from "./characters/LittleGirl";
import Environments from "./Environment";

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
  const [speed, setSpeed] = useState(8);

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
      <Physics colliders={false} debug>
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
        <OldMan position={[70, -2.1, -24]} scale={1.65} rotation-y={-Math.PI/2}/>
        <LittleGirl position={[70, -2.1, -31]} scale={0.9} rotation-y={-Math.PI/2}/>
        <DeadCity position-y={-2} scale={1.5}/>
      </Physics>
    </>
  );
};

export default City;