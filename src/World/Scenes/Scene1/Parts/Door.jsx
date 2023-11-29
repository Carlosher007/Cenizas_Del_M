import React, { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Howl } from 'howler'

const Door = ({ doorRef, isOpen, targetRotation, position }) => {
  const { nodes, materials } = useGLTF(
    'assets/models/scene1/livingroom/LivingRoom.glb'
  )
  const [oneTimeRun, setOneTimeRun] = React.useState(true)
  useFrame(() => {
    if (isOpen && doorRef.current && oneTimeRun) {
      const doorSound = new Howl({
        src: ['assets/sounds/door.wav']
      })
      doorSound.currentTime = 0
      doorSound.volume(0.3)
      doorSound.play() 
      const duration = 500
      const frames = 60
      const initialRotation = doorRef.current.rotation.y

      const rotationIncrement = ((initialRotation + targetRotation) - initialRotation) / frames
      let currentRotation = initialRotation
      let currentFrame = 0

      const animate = () => {
        currentRotation += rotationIncrement
        doorRef.current.rotation.y = currentRotation

        currentFrame++

        if (currentFrame < frames) {
          setTimeout(animate, duration / frames)
        }
      }

      animate()
      setOneTimeRun(false)
    }
  })

  return (
    <mesh
      ref={doorRef}
      scale={1.94}
      castShadow
      receiveShadow
      geometry={nodes.Door_05.geometry}
      material={materials.LowPolyInterior_MAIN}
      position={position}
      rotation={[Math.PI, 0, Math.PI]}
    />
  )
}

export default Door
