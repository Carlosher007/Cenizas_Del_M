import Gif from "../../../components/design/FondoGif";
import withLoading from "../../../components/design/WithLoading";
import { useStealthGameStore } from "../../../store/stealth-game";

const Fin = () => {  
    // const [win] = useStealthGameStore((state) => [state.win]);  
    return (
        <Gif url="assets/models/scene3/background/couple2.gif" width={'100%'}/>
    )
}    

export default withLoading(Fin,2500);