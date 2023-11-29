import { Html } from '@react-three/drei';
import { useGameStore } from '../../../../../store/game';

const Bunker = () => {
  const { setPlace } = useGameStore.getState();

  const handleGameClick = () => {
    setPlace('game');
  };

  const handleChooseObjectsClick = () => {
    setPlace('chooseObjects');
  };

  return (
    <Html>
      <button onClick={handleGameClick}>Set Place to 'game'</button>
      <button onClick={handleChooseObjectsClick}>Set Place to 'chooseObjects'</button>
    </Html>
  );
};

export default Bunker;
