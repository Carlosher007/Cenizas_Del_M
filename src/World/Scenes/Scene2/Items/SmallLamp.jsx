import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function SmallLamp(props) {
  const { nodes, materials } = useGLTF("/assets/models/scene2/bunker/small_lamp.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_01a001__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/scene2/bunker/small_lamp.glb");