import Game from "../Places/StealthGame/Game"
import { Html } from '@react-three/drei'

const StealthMinigame = () => {
    return <Html position={[-1,1.25,0]}>
        <Game/>
    </Html>
}

export default StealthMinigame