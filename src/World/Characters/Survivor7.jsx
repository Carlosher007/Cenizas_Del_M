import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Survivor7(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/models/character/Survivor7.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.S7_talking.play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature002">
          <skinnedMesh
            name="EyeLeft002"
            geometry={nodes.EyeLeft002.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft002.skeleton}
            morphTargetDictionary={nodes.EyeLeft002.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft002.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight002"
            geometry={nodes.EyeRight002.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight002.skeleton}
            morphTargetDictionary={nodes.EyeRight002.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight002.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Beard002"
            geometry={nodes.Wolf3D_Beard002.geometry}
            material={materials.Wolf3D_Beard}
            skeleton={nodes.Wolf3D_Beard002.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Beard002.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Beard002.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body002"
            geometry={nodes.Wolf3D_Body002.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body002.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair002"
            geometry={nodes.Wolf3D_Hair002.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair002.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head002"
            geometry={nodes.Wolf3D_Head002.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head002.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head002.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head002.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom002"
            geometry={nodes.Wolf3D_Outfit_Bottom002.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom002.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear002"
            geometry={nodes.Wolf3D_Outfit_Footwear002.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear002.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top002"
            geometry={nodes.Wolf3D_Outfit_Top002.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top002.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth002"
            geometry={nodes.Wolf3D_Teeth002.geometry}
            material={materials["Wolf3D_Teeth.002"]}
            skeleton={nodes.Wolf3D_Teeth002.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth002.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth002.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/character/Survivor7.glb");