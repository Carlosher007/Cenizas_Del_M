import City from "./City"
import StealthMinigame from "./Parts/StealthMinigame";
import { useGameStore } from '../../../store/game';
import Fin from "./Fin";
import { FallenAlex } from "./characters/FallenAlex";
import InjuredAlex from "./InjuredAlex";

const Scene3 = () => {
  const [place] = useGameStore((state) => [state.place]);

  return (
    <>
      {'calle' === place && <City/>}
      {'minijuego' == place && <StealthMinigame/>}
      {'fin' == place && <Fin/>}
      {'fallenA' == place && <InjuredAlex/>}
    </>
  )
}

export default Scene3;
