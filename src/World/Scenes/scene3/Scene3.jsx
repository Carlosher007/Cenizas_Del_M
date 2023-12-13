import City from "./City"
import StealthMinigame from "./Parts/StealthMinigame";
import { useGameStore } from '../../../store/game';
import Fin from "./Fin";
import InjuredAlex from "./InjuredAlex";
import GrupoHostil from "./GrupoHostil";
import Survivors from "./Survivors";

const Scene3 = () => {
  const [place] = useGameStore((state) => [state.place]);

  return (
    <>
      {'calle' === place && <City/>}
      {'minigame' == place && <StealthMinigame/>}
      {'fin' == place && <Fin/>}
      {'shotAlex' == place && <InjuredAlex/>}
      {'grupoH' == place && <GrupoHostil/>}
      {'survivors' == place && <Survivors/>}
    </>
  )
}

export default Scene3;
