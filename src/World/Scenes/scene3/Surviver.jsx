import { useEffect } from "react";
import Gif from "../../../components/design/FondoGif";
import withLoading from "../../../components/design/WithLoading";
import { getSceneScript } from "../../../utils/script";
import { useGameStore } from "../../../store/game";

const Survivers = () => {
  const { setDialogue, decisions } = useGameStore.getState();  
  useEffect(() => {
    setTimeout(() => {
      const script = getSceneScript(3, decisions, "effectHelpToOldMen", []);
      setDialogue({ script: script });
    }, 2500);
  }, []);
  return (
    <Gif url="assets/models/scene3/background/survivers.jpg" width={"100%"} />
  );
};

export default withLoading(Survivers, 2500);