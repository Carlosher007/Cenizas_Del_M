import { Suspense, useEffect } from "react";
import { setPlaceInGame } from "../../../api/game";
import { useGameStore } from "../../../store/game";
import Sala from "./Parts/Sala";
import Calle from "./Places/Calle";

const Scene1 = () => {
  const [place] = useGameStore((state) => [state.place]);

  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}
        {place === "Sala" && <Sala />}
        {place === "Calle" && <Calle />}
      {/* </Suspense> */}
    </>
  );
};

export default Scene1;
