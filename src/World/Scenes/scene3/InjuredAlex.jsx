import { useEffect, useState } from "react";
import Lights from "../Scene1/Lights";
import { ShotAlex } from "./characters/ShotAlex";
import withLoading from "../../../components/design/WithLoading";
import { useGameStore } from "../../../store/game";
import { useCharactersElementsStore } from "../../../store/characters";
import { getSceneScript } from "../../../utils/script";

const InjuredAlex = () => {
  const { backlog, setDialogue, getDialogueLength, dialogue, resetDialogue } =
    useGameStore.getState();
  const [dialoguesFinished, setDialoguesFinished] = useState(false);
  const { setAnimation } = useCharactersElementsStore.getState();

  const keepAlive = () => {
    if (backlog.some((element) => element === "medical")) {
      setAnimation("happy-idle");
    } else {
      setAnimation("dying");
    }
  };

  useEffect(() => {
    if (dialoguesFinished) {
      keepAlive();
    }
  }, [dialoguesFinished]);

  useEffect(() => {
    const showD = () => {
      setTimeout(() => {
        const script = getSceneScript(3, [], "lostMiniGame", []);
        setDialogue({ script: script });
        console.log("", getDialogueLength() )
      }, 2500);
      if (getDialogueLength() === 0) {
        setDialoguesFinished(true);
      }
    };
    showD();
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const script = getSceneScript(3, [], 'lostMiniGame', []);
  //     setDialogue({ script: script });
  //     // Asume que 'script' es un array y que se acaban los diálogos cuando no hay más elementos en el array
  //     if (dialogue.length === 0) {
  //       setDialoguesFinished(true);
  //     }
  //   }, 2500);
  // }, []);

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
