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

  return (
    <>
      <Lights />
      <Physics debug>
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
              <Alex position={[0, -2, 0]} scale={1.65} />
            </EcctrlAnimation>
          </Ecctrl>
        </KeyboardControls>
        <DeadCity position-y={-3} />
      </Physics>
    </>
  );
};

export default City;