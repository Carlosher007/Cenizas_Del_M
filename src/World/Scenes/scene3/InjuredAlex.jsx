import { useEffect, useState } from "react";
import Lights from "../Scene1/Lights";
import { ShotAlex } from "./characters/ShotAlex";
import withLoading from "../../../components/design/WithLoading";
import { useGameStore } from "../../../store/game";
import { useCharactersElementsStore } from "../../../store/characters";

const InjuredAlex = () => {
  const { backlog } = useGameStore.getState();
  const [animation, setAnimation] = useCharactersElementsStore.getState()

  const keepAlive = () => {
    if (backlog.some(element => element === 'medical')) {
      setAnimation('happy-idle');
    } else {
      setAnimation('dying');
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = 'red';
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  return (
    <>
      <Lights />
      <ShotAlex position={[0, -1.5, 0]} scale={2}/>
    </>
  );
};

export default  withLoading(InjuredAlex,2500);
