import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function SurvivorM1(props) {
  const survivorM8 = useRef();
  const { nodes, materials, animations } = useGLTF("assets/models/scene3/sobrevivientes/animated-survivorM1.glb");
  const { actions } = useAnimations(animations, survivorM8);
//   console.log("animations", actions);

  useEffect(() => {
    const action = actions["walking-circle"];
    action.play();
  }, []);

  return (
    <group ref={survivorM8} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001">
          <skinnedMesh
            name="EyeLeft001"
            geometry={nodes.EyeLeft001.geometry}
            material={materials["Wolf3D_Eye.012"]}
            skeleton={nodes.EyeLeft001.skeleton}
            morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight001"
            geometry={nodes.EyeRight001.geometry}
            material={materials["Wolf3D_Eye.012"]}
            skeleton={nodes.EyeRight001.skeleton}
            morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Beard001"
            geometry={nodes.Wolf3D_Beard001.geometry}
            material={materials["Wolf3D_Beard.001"]}
            skeleton={nodes.Wolf3D_Beard001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Beard001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Beard001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body001"
            geometry={nodes.Wolf3D_Body001.geometry}
            material={materials["Wolf3D_Body.012"]}
            skeleton={nodes.Wolf3D_Body001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair001"
            geometry={nodes.Wolf3D_Hair001.geometry}
            material={materials["Wolf3D_Hair.012"]}
            skeleton={nodes.Wolf3D_Hair001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head001"
            geometry={nodes.Wolf3D_Head001.geometry}
            material={materials["Wolf3D_Skin.012"]}
            skeleton={nodes.Wolf3D_Head001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom001"
            geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
            material={materials["Wolf3D_Outfit_Bottom.012"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear001"
            geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
            material={materials["Wolf3D_Outfit_Footwear.012"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top001"
            geometry={nodes.Wolf3D_Outfit_Top001.geometry}
            material={materials["Wolf3D_Outfit_Top.012"]}
            skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth001"
            geometry={nodes.Wolf3D_Teeth001.geometry}
            material={materials["Wolf3D_Teeth.012"]}
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
      </group>
    </group>
  );
}

useGLTF.preload("assets/models/scene3/sobrevivientes/animated-survivorM1.glb");