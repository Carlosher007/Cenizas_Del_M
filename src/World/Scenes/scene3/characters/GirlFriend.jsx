import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function GirlFriend(props) {
  const girlfriend = useRef();
  const { nodes, materials, animations } = useGLTF("assets/models/scene3/character_girlfriend/animated-girlfriend.glb");
  const { actions } = useAnimations(animations, girlfriend);
  return (
    <group ref={girlfriend} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001">
          <skinnedMesh
            name="EyeLeft001"
            geometry={nodes.EyeLeft001.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft001.skeleton}
            morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight001"
            geometry={nodes.EyeRight001.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight001.skeleton}
            morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body001"
            geometry={nodes.Wolf3D_Body001.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair001"
            geometry={nodes.Wolf3D_Hair001.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head001"
            geometry={nodes.Wolf3D_Head001.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom001"
            geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear001"
            geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top001"
            geometry={nodes.Wolf3D_Outfit_Top001.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth001"
            geometry={nodes.Wolf3D_Teeth001.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
        <group name="Armature">
          <primitive object={nodes.Hips_1} />
        </group>
        <group name="Armature002">
          <primitive object={nodes.Hips_2} />
        </group>
        <group name="Armature003">
          <primitive object={nodes.Hips_3} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("assets/models/scene3/character_girlfriend/animated-girlfriend.glb");