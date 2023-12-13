import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Suspense, useEffect, useState } from 'react';
import { SecondTransition } from '../components/design/SecondTransition';
import Test from '../components/design/Test';
import Test2 from '../components/design/Test2';
import { useGameStore } from '../store/game';
import ShowDialogues from './Dialogues/ShowDialogues';
import Introduction from './Scenes/Introudction/Introduction';
import Fin from './Scenes/Scene1/Places/Fin';
import Scene1 from './Scenes/Scene1/Scene1';
import { Overlay } from './Scenes/Scene2/Places/ChooseObjects/Overlay';
import Scene2 from './Scenes/Scene2/Scene2';
import { cameraSettings } from './camera/cameraSetting';
import Scene3 from './Scenes/scene3/Scene3'

const Experience = () => {
  const [scene, actionsGame, isLoading] = useGameStore((state) => [
    state.scene,
    state.actionsGame,
    state.isLoading,
  ]);
  const { setPlace, setScene } = useGameStore.getState();

  // useEffect(() => {
  //   setScene(9);
  // }, []);

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
        {/* {scene === 0 && <Introduction />}
        {scene === 1 && <Scene1 />}
        {scene === 2 && <Scene2 />}
        {scene === 3 && <Scene3/>}
        {scene === 99 && <Test />}
        {scene === 999 && <Fin />}
        {scene === 9 && <Test2 />} */}
        <Scene3/>
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
