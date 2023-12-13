import City from "./City"
import StealthMinigame from "./Parts/StealthMinigame";
import { useGameStore } from '../../../store/game';

const Scene3 = () => {
  const [place] = useGameStore((state) => [state.place]);

  return (
    <>
      {/* {'calle' === place && <City/>}
      {'minijuego' == place && <StealthMinigame/>} */}
      <City/>
    </>
  )
}

export default Scene3;
