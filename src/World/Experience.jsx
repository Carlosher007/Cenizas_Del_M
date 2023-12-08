import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Suspense, useEffect, useState } from 'react';
import { useGameStore } from '../store/game';
import ShowDialogues from './Dialogues/ShowDialogues';
import Introduction from './Scenes/Introudction/Introduction';
import Scene1 from './Scenes/Scene1/Scene1';
import { Overlay } from './Scenes/Scene2/Places/ChooseObjects/Overlay';
import { cameraSettings } from './camera/cameraSetting';
import Scene2 from './Scenes/Scene2/Scene2';
import { SecondTransition } from '../components/design/SecondTransition';

const Experience = () => {
  const [scene, actionsGame,isLoading] = useGameStore((state) => [
    state.scene,
    state.actionsGame,
    state.isLoading
  ]);
  const {setPlace,setScene} = useGameStore.getState();

  const [requestPointerLock, setRequestPointerLock] = useState(true);
  return (
    <>
      <Canvas
        className="z-0"
        onPointerDown={(e) => {
          if (requestPointerLock) {
            e.target.requestPointerLock();
          }
        }}
        shadows
        camera={cameraSettings}
      >
        {scene === 0 && <Introduction />}
        {scene === 1 && <Scene1 />}
        {scene === 2 && <Scene2 />}
        {scene === 3 && <Html>Scene 3</Html>}
      </Canvas>
      <ShowDialogues className="z-50" />
      {actionsGame.showOverlay && !isLoading && (
        <>
          <Leva hidden className="z-50" />
          <Overlay className="z-50" />
        </>
      )}
      {actionsGame.showAnimation && <SecondTransition />}
    </>
  );
};

export default Experience;