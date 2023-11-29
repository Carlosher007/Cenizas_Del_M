import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Suspense, useState } from 'react';
import { useGameStore } from '../store/game';
import ShowDialogues from './Dialogues/ShowDialogues';
import Introduction from './Scenes/Introudction/Introduction';
import Scene1 from './Scenes/Scene1/Scene1';
import { Overlay } from './Scenes/Scene2/Places/ChooseObjects/Overlay';
import { cameraSettings } from './camera/cameraSetting';
import Scene2 from './Scenes/Scene2/Scene2';

const Experience = () => {
  const [scene, actionsGame] = useGameStore((state) => [
    state.scene,
    state.actionsGame,
  ]);
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
        {scene === 2 && <Scene2/> }
      </Canvas>
      <ShowDialogues className="z-50" />
      {actionsGame.showOverlay && (
        <>
          <Leva hidden className="z-50" />
          <Overlay className="z-50" />
        </>
      )}
    </>
  );
};

export default Experience;