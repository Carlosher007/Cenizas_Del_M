import  ChooseObjects  from './Places/ChooseObjects/ChooseObjects';
import  GameCircle  from './Places/GameCircle/GameCircle';
import  Bunker  from './Places/Bunker/Bunker';
import { useGameStore } from '../../../store/game';
import Underground from './Parts/Underground'
import { useEffect } from 'react';

const Scene2 = () => {
  const [place] = useGameStore((state) => [state.place]);
  const {setPlace} = useGameStore.getState();

  return (
    <>
      {place === 'game' && <GameCircle/> }
      {place === 'chooseObjects' && <ChooseObjects />}
      {place === 'bunker' && <Underground/> }
    </>
  );
};

export default Scene2;