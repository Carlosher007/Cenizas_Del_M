import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function OldMan(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/models/scene3/old_man/old-man-animated.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="Wolf3D_Avatar"
            geometry={nodes.Wolf3D_Avatar.geometry}
            material={materials.Wolf3D_Avatar}
            skeleton={nodes.Wolf3D_Avatar.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
        <group name="Armature001">
          <primitive object={nodes.Hips_1} />
        </group>
        <group name="Armature002">
          <primitive object={nodes.Hips_2} />
        </group>
        <group name="Armature003">
          <primitive object={nodes.Hips_3} />
        </group>
        <group name="Armature004">
          <primitive object={nodes.Hips_4} />
        </group>
        <group name="Armature005">
          <primitive object={nodes.Hips_5} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/scene3/old_man/old-man-animated.glb");


