import { useEffect } from "react";
import Gif from "../../../components/design/FondoGif";
import withLoading from "../../../components/design/WithLoading";
import { getSceneScript } from "../../../utils/script";
import { useGameStore } from "../../../store/game";

const GrupoHostil = () => {
  const { setDialogue } = useGameStore.getState();  
  useEffect(() => {
    setTimeout(() => {
      const script = getSceneScript(3, [], "IntroHostilGroup", []);
      setDialogue({ script: script });
    }, 2500);
  }, []);
  return (
    <Gif url="assets/models/scene3/background/people-guns.gif" width={"100%"} />
  );
};

export default withLoading(GrupoHostil, 2500);