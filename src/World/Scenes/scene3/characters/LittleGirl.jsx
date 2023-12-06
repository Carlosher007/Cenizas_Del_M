import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function LittleGirl(props) {
  const little_girl = useRef();
  const { nodes, materials, animations } = useGLTF(
    "assets/models/scene3/character_kid/little-girl-animated.glb"
  );
  const { actions } = useAnimations(animations, little_girl);
  // console.log("animations", actions);

  useEffect(() => {
    const action = actions["crying"];
    action.play();
  }, []);

  return (
    <group ref={little_girl} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Mesh_0001"
            geometry={nodes.Mesh_0001.geometry}
            material={materials["mat_0-Mei_head_d.jpg.002"]}
            skeleton={nodes.Mesh_0001.skeleton}
          />
          <skinnedMesh
            name="Mesh_3001"
            geometry={nodes.Mesh_3001.geometry}
            material={materials["mat_3-Mei_hair_d.jpg.002"]}
            skeleton={nodes.Mesh_3001.skeleton}
          />
          <skinnedMesh
            name="Mesh_4001"
            geometry={nodes.Mesh_4001.geometry}
            material={materials["mat_4-Mei_eyes_d.jpg.002"]}
            skeleton={nodes.Mesh_4001.skeleton}
          />
          <skinnedMesh
            name="Mesh_5001"
            geometry={nodes.Mesh_5001.geometry}
            material={materials["mat_5-Mei_arms_d.jpg.002"]}
            skeleton={nodes.Mesh_5001.skeleton}
          />
          <skinnedMesh
            name="Mesh_6001"
            geometry={nodes.Mesh_6001.geometry}
            material={materials["mat_6-Mei_body_d.jpg.002"]}
            skeleton={nodes.Mesh_6001.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
        <group name="Node_7" position={[0, 1.274, 2.257]} />
        <group name="Armature001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_1} />
        </group>
        <group name="Node_7001" position={[0, 1.274, 2.257]} />
        <group name="Armature002" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_2} />
        </group>
        <group name="Node_7002" position={[0, 1.274, 2.257]} />
        <group name="Armature003" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_3} />
        </group>
        <group name="Node_7003" position={[0, 1.274, 2.257]} />
        <group name="Armature004" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_4} />
        </group>
        <group name="Node_7004" position={[0, 1.274, 2.257]} />
        <mesh
          name="Mesh_3002"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3002.geometry}
          material={materials["mat_3-Mei_hair_d.jpg.007"]}
          position={[0, 225.731, -127.38]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          name="Mesh_0002"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0002.geometry}
          material={materials["mat_0-Mei_head_d.jpg.007"]}
          position={[0, 225.731, -127.38]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          name="Mesh_6002"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6002.geometry}
          material={materials["mat_6-Mei_body_d.jpg.007"]}
          position={[0, 225.731, -127.38]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          name="Mesh_4002"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4002.geometry}
          material={materials["mat_4-Mei_eyes_d.jpg.007"]}
          position={[0, 225.731, -127.38]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          name="Mesh_5002"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5002.geometry}
          material={materials["mat_5-Mei_arms_d.jpg.007"]}
          position={[0, 225.731, -127.38]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <group name="Node_7005" position={[0, 1.274, 2.257]} />
        <group name="Armature005" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_5} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("assets/models/scene3/character_kid/little-girl-animated.glb");


