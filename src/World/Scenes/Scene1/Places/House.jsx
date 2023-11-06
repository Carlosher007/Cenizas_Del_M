import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import React from 'react'

export function House (props) {
  const { nodes, materials } = useGLTF('/assets/models/toriels_kitchen_deltarune.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.667}>
        <group position={[3.303, 0.107, 0]} scale={0.01}>
          <RigidBody colliders='trimesh' type='fixed'>
            <mesh
              geometry={nodes.Kitchen_0.geometry}
              material={materials.wallpapper}
            />
          </RigidBody>
          <mesh
            geometry={nodes.Kitchen_1.geometry}
            material={materials.carpet_kitchen}
          />
          <RigidBody colliders='trimesh' type='fixed'>
            <mesh
              geometry={nodes.Kitchen_2.geometry}
              material={materials.ceramics}
            />
          </RigidBody>
          <RigidBody colliders='trimesh' type='fixed'>
            <mesh
              geometry={nodes.Kitchen_3.geometry}
              material={materials.Kitchen_Misc}
            />
          </RigidBody>
          <RigidBody colliders='trimesh' type='fixed'>
            <mesh
              geometry={nodes.Kitchen_4.geometry}
              material={materials.Fridge}
            />
          </RigidBody>
          <mesh
            geometry={nodes.Kitchen_5.geometry}
            material={materials['09_-_Default']}
          />
          <RigidBody colliders='trimesh' type='fixed'>
            <mesh
              geometry={nodes.Kitchen_6.geometry}
              material={materials.Wallpapper_dark}
            />
          </RigidBody>
          <mesh
            geometry={nodes.Kitchen_7.geometry}
            material={materials['05_-_Default']}
          />
          <RigidBody colliders='trimesh' type='fixed'>
            <mesh
              geometry={nodes.Kitchen_8.geometry}
              material={materials.Living_Room_Misc}
            />
          </RigidBody>
          <RigidBody colliders='trimesh' type='fixed'>
            <mesh
              geometry={nodes.Kitchen_9.geometry}
              material={materials.Table}
            />
          </RigidBody>
          <RigidBody colliders='trimesh' type='fixed'>
            <mesh
              geometry={nodes.Kitchen_10.geometry}
              material={materials.Chairs}
            />
          </RigidBody>
          <mesh
            geometry={nodes.Kitchen_11.geometry}
            material={materials.material}
          />
          <mesh
            geometry={nodes.Kitchen_12.geometry}
            material={materials['Material.001']}
          />
        </group>
        <group position={[3.303, 0.107, 0]} scale={0.01}>

          <mesh
            geometry={nodes.Kitchen002_0.geometry}
            material={materials.Kitchen_Misc}
          />

          <mesh
            geometry={nodes.Kitchen002_1.geometry}
            material={materials.Living_Room_Misc}
          />
          <RigidBody colliders='trimesh' type='fixed'>
            <mesh
              geometry={nodes.Kitchen002_2.geometry}
              material={materials.Chairs}
            />
          </RigidBody>
          <mesh
            geometry={nodes.Kitchen002_3.geometry}
            material={materials.material}
          />
        </group>
        <mesh
          geometry={nodes.Kitchen001_0.geometry}
          material={materials.TH_carpet2}
          position={[3.303, 0.107, 0]}
          scale={0.01}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/toriels_kitchen_deltarune.glb')