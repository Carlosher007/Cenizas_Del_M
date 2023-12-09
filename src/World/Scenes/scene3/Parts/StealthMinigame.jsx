import Environment from "../Places/StealthGame/Environment"
import { Html } from '@react-three/drei'

const StealthMinigame = () => {
    return <Html position={[-1,1.25,0]}>
        <Environment/>
    </Html>
}

export default StealthMinigame