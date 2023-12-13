import { useEffect } from "react";
import Gif from "../../../components/design/FondoGif";
import withLoading from "../../../components/design/WithLoading";
import { getSceneScript } from "../../../utils/script";
import { useGameStore } from "../../../store/game";

const Fin = () => {
  const { setDialogue } = useGameStore.getState();  
  useEffect(() => {
    setTimeout(() => {
      const script = getSceneScript(3, [], "comeToNewBunker", []);
      setDialogue({ script: script });
    }, 2500);
  }, []);
  return (
    <Gif url="assets/models/scene3/background/couple2.gif" width={"100%"} />
  );
};

export default withLoading(Fin, 2500);
