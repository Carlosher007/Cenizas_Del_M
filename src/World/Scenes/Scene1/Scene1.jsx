import { useGameStore } from "../../../store/game";
import Sala from "./Parts/Sala";
import Calle from "./Places/Calle";

const Scene1 = () => {
  const [place] = useGameStore((state) => [state.place]);

  return (
    <>
        {place === "Sala" && <Sala />}
        {place === "Calle" && <Calle />}
    </>
  );
};

export default Scene1;
