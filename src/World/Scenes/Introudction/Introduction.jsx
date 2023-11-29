import { Html, useTexture } from "@react-three/drei";
import React from "react";
import ContainerTextIntroduction from "../../../components/design/ContainerTextIntroduction";
import { getSceneScript } from "../../../utils/script";
import withLoading from "../../../components/design/WithLoading";

const Introduction = () => {
  const texture = useTexture("/assets/images/backgrounds/introduction_bg.jpg");
  const script = getSceneScript(0, [], "");

  return (
    <>
      <group>
        <mesh scale={17}>
          <planeGeometry args={[1, 1, 1]} />
          <meshBasicMaterial map={texture} />
        </mesh>

        <Html center position={[-2.5, 0, 0]}>
          <ContainerTextIntroduction content={script} />
        </Html>
      </group>
    </>
  );
};

export default withLoading(Introduction,2500);
