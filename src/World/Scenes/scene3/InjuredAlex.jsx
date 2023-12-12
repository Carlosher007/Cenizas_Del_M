import Lights from "../Scene1/Lights";
import { FallenAlex } from "./characters/FallenAlex";

const InjuredAlex = () => {
  return (
    <>
      <Lights />
      <FallenAlex position={[0, -1, 0]} scale={2.3}/>
    </>
  );
};

export default InjuredAlex;
