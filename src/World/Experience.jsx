import { Canvas } from '@react-three/fiber'
import { useGameStore } from '../store/game'
import ShowDialogues from './Dialogues/ShowDialogues'
import Introduction from './Scenes/Introudction/Introduction'
import Scene1 from './Scenes/Scene1/Scene1'
import { cameraSettings } from './camera/cameraSetting'
import Scene2 from './Scenes/Scene2/Scene2'

const Experience = () => {
  const [scene] = useGameStore((state) => [state.scene])

  return (
    <>
      <Canvas
        onPointerDown={(e) => {
          e.target.requestPointerLock()
        }}
        shadows
        className='z-0'
        camera={cameraSettings}
      >
        <Scene2 />
        {/* {scene === 1 && <Scene1 />}
        {scene === 0 && <Introduction />} */}
      </Canvas>
      <ShowDialogues className='z-50' />
    </>
  )
}

export default Experience
