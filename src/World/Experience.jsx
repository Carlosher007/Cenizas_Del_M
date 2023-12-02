import { Canvas } from '@react-three/fiber'
import { useGameStore } from '../store/game'
import ShowDialogues from './Dialogues/ShowDialogues'
import Introduction from './Scenes/Introudction/Introduction'
import Scene1 from './Scenes/Scene1/Scene1'
import { cameraSettings } from './camera/cameraSetting'
import { Html } from '@react-three/drei'
import Scene3 from './Scenes/scene3/Scene3'

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
        {scene === 2 && <Scene3 />}
        {/* {scene === 3 && <Scene3} */}
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