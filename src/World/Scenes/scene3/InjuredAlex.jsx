import { useEffect, useState } from "react";
import Lights from "../Scene1/Lights";
import { ShotAlex } from "./characters/ShotAlex";
import withLoading from "../../../components/design/WithLoading";
import { useGameStore } from "../../../store/game";
import { useCharactersElementsStore } from "../../../store/characters";
import { getSceneScript } from "../../../utils/script";

const InjuredAlex = () => {
  const { backlog, setDialogue, setPlace, removeFromBacklog} =
    useGameStore.getState();
  const { setAnimation } = useCharactersElementsStore.getState();

  useEffect(() => {
    const action = () => {
      if (backlog.some((element) => element === "medical")) {
        window.location.reload()
        removeFromBacklog('medical')
        setAnimation("happy-idle");
        setPlace('fin')
      } else {
        setAnimation("dying");
      }
    }
    setTimeout(() => {
      const script = getSceneScript(3, [], "lostMiniGame", backlog);
      setDialogue({ script: script, action });
    }, 2500);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "#490001";
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  return (
    <>
      <Lights />
      <ShotAlex position={[0, -1.5, 0]} scale={2} />
    </>
  );
};

export default withLoading(InjuredAlex, 2500);
