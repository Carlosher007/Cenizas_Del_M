import {
  AccumulativeShadows,
  Environment,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
  Sphere,
  useGLTF,
} from '@react-three/drei';

import * as THREE from 'three';

import React, { useEffect } from 'react';
import { DEG2RAD } from 'three/src/math/MathUtils';

export const Scene = ({ mainColor, path, ...props }) => {
  const { nodes, materials, scene } = useGLTF(path);
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);
  const ratioScale = Math.min(1.2, Math.max(0.5, window.innerWidth / 1920));
  return (
    <>
      <color attach="background" args={['#ffffff']} />
      <group {...props} dispose={null}>
        <PerspectiveCamera makeDefault position={[3, 3, 8]} near={0.5} />
         <OrbitControls
          autoRotate
          enablePan={false}
          maxPolarAngle={DEG2RAD * 75}
          minDistance={6}
          maxDistance={10}
          autoRotateSpeed={5}
          enableZoom={false}
        /> 
        <primitive object={scene} position={[0,1,0]} scale={ratioScale} />
        <ambientLight intensity={0.1} color="pink" />
        <AccumulativeShadows
          frames={100}
          alphaTest={0.9}
          scale={30}
          position={[0, -0.005, 0]}
          color="pink"
          opacity={0.8}
        >
          <RandomizedLight
            amount={4}
            radius={9}
            intensity={0.8}
            ambient={0.25}
            position={[10, 5, 15]}
          />
          <RandomizedLight
            amount={4}
            radius={5}
            intensity={0.5}
            position={[-5, 5, 15]}
            bias={0.001}
          />
        </AccumulativeShadows>
        <Environment blur={0.8} background>
          <Sphere scale={15}>
            <meshBasicMaterial color={mainColor} side={THREE.BackSide} />
          </Sphere>
        </Environment>
      </group>
    </>
  );
};

useGLTF.preload('/models/cybertruck_scene.glb');
useGLTF.preload('/models/model3_scene.glb');
useGLTF.preload('/models/semi_scene.glb');
