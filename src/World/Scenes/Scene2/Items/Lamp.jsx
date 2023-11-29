import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Lamp(props) {
  const { nodes, materials } = useGLTF("/assets/models/scene2/bunker/lamp.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["LDS2_Material_#25_0"].geometry}
        material={materials.Material_25}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.394}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/scene2/bunker/lamp.glb");