import React from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function LivingRoom(props) {
  const { nodes, materials } = useGLTF(
    "assets/models/scene1/livingroom/LivingRoom.glb"
  );
  return (
    <group {...props} dispose={null}>
      <directionalLight
        intensity={3.142}
        decay={2}
        color="#fff5e0"
        position={[0, 16.8, 0]}
        rotation={[-1.75, -0.562, -1.898]}
      />
      <group position={[0, -0.1, 0]}>
      <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.BarChair_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.741, 0.173, 10.143]}
          rotation={[0, -1.498, 0]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.RangeHood.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.14, 1.682, 10.495]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Oven.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.14, 0.212, 10.365]}
          rotation={[Math.PI, 0, Math.PI]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.KitchenCorner_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.635, 0.212, 10.117]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.KitchenTabletop2_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.015, 0.215, 10.413]}
          rotation={[Math.PI, 0, Math.PI]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.KitchenTabletop2_07.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.873, 0.215, 10.384]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.KitchenTabletop2_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.9, 0.215, 8.414]}
          rotation={[0, -Math.PI / 2, 0]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.KitchenTabletop2_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.9, 0.215, 9.525]}
          rotation={[0, -Math.PI / 2, 0]}
        /></RigidBody>
        <RigidBody colliders="hull" type="fixed">
        <mesh
          
          
          geometry={nodes.Bar_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.25, 0.212, 9.808]}
          rotation={[Math.PI, 0, Math.PI]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Refrigerator.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.789, 0.212, 7.456]}
          rotation={[0, -Math.PI / 2, 0]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["BarChair_02_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.617, 0.173, 10.201]}
          rotation={[Math.PI, -0.02, Math.PI]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.KitchenChair_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.377, 0.212, 7.502]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.KitchenTable_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.417, 0.184, 8.376]}
          rotation={[0, -Math.PI / 2, 0]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.KitchenTabletop2_06.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.972, 1.625, 8.646]}
          rotation={[0, -Math.PI / 2, 0]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.KitchenTabletop2_04.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.972, 1.625, 8.25]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["KitchenTabletop2_04_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.774, 1.625, 10.473]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["KitchenChair_02_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.377, 0.212, 9.304]}
          rotation={[Math.PI, 0, Math.PI]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["KitchenChair_02_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.911, 0.212, 8.632]}
          rotation={[0, -Math.PI / 2, 0]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["KitchenChair_02_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.911, 0.212, 8.074]}
          rotation={[0, -Math.PI / 2, 0]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["KitchenChair_02_(4)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.909, 0.212, 8.632]}
          rotation={[0, Math.PI / 2, 0]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["KitchenChair_02_(5)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.909, 0.212, 8.074]}
          rotation={[0, Math.PI / 2, 0]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes["SwitchLight_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.683, 1.107, 5.829]}
        />
        <mesh
          
          
          geometry={nodes["SwitchLight_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.811, 1.107, 3.317]}
        />
        <mesh
          
          
          geometry={nodes["SwitchLight_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.678, 1.098, 3.326]}
        />
        <mesh
          
          
          geometry={nodes["Socket_02_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.169, 1.233, 8.334]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Catpet_04.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.223, 0.223, 4.509]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.539}
        />
        <mesh
          
          
          geometry={nodes.Hook_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.671, 1.997, 5.367]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Socket_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.187, 1.233, 10.169]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.RoomFurniture_03.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[-3.477, 0.209, 5.363]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </RigidBody>
        <mesh
          
          
          geometry={nodes.SmartHome.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.679, 1.666, 3.628]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.SwitchLight.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.786, 1.107, 5.823]}
        />
        <mesh
          
          
          geometry={nodes.Curtains_15.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.58, 1.68, 7.003]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Curtains_15_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.58, 1.68, 9.505]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Curtains_15_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.578, 1.695, 1.996]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Curtains_15_(4)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.586, 1.695, -0.495]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Plate_05.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.441, 0.978, 5.34]}
        />
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.Flower_07.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[-3.432, 0.212, 3.554]}
          />
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.Flower_07_1.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[3.402, 0.233, -1.428]}
            rotation={[0, -0.238, 0]}
          />
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes["Flower_03_(1)"].geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[-3.421, 0.212, -1.415]}
            rotation={[0, 0.918, 0]}
          />
        </RigidBody>
        <mesh
          
          
          geometry={nodes.Pillow_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.994, 0.851, 2.714]}
          rotation={[-1.348, -0.093, -0.428]}
        />
        <mesh
          
          
          geometry={nodes.Socket_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.973, 1.069, -1.672]}
        />
        <mesh
          
          
          geometry={nodes["PhotoFrame_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.222, 1.931, -1.587]}
          rotation={[0, -1.564, 0]}
        />
        <mesh
          
          
          geometry={nodes["Candle_01_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.495, 1.162, 0.266]}
        />
        <mesh
          
          
          geometry={nodes["Candle_02_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.479, 1.168, 1.407]}
        />
        <mesh
          
          
          geometry={nodes.Clock_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.666, 2.115, 0.803]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.TV_Shelf.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.629, 2.13, -1.564]}
        />
        <mesh
          
          
          geometry={nodes.TV_Remote.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.763, 0.679, 1.604]}
        />
        <mesh
          
          
          geometry={nodes.TV.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.555, 0.979, -1.42]}
        />
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.RoomFurniture_05.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[1.546, 0.212, -1.509]}
          />
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.RoomTable_01.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[1.513, 0.212, 1.673]}
          />
        </RigidBody>
        <mesh
          
          
          geometry={nodes.Picture_04.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.795, 1.797, 10.669]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.Picture_06.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.276, 2.02, 10.669]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Trash_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.023, 0.644, 6.839]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Trash_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.017, 0.212, 6.88]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes["Plate_01_(4)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.396, 1.342, 10.071]}
          scale={0.88}
        />
        <mesh
          
          
          geometry={nodes.Donut_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.407, 1.345, 10.082]}
          scale={0.864}
        />
        <mesh
          
          
          geometry={nodes.CoffeeCup.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.279, 1.339, 9.902]}
          scale={0.611}
        />
        <mesh
          
          
          geometry={nodes["Flower_06_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.356, 1.339, 10.55]}
          rotation={[0, 0.329, 0]}
          scale={0.688}
        />
        <mesh
          
          
          geometry={nodes["PhotoFrame_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.129, 1.339, 10.52]}
          rotation={[Math.PI, -0.364, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.Socket_02_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.679, 0.648, 7.735]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.AirCondition.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.616, 2.359, 8.237]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.705, 0.78, 0.705]}
        />
        <mesh
          
          
          geometry={nodes.Catpet_04_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.438, 0.21, 8.498]}
          rotation={[Math.PI, -1.54, Math.PI]}
          scale={1.823}
        />
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.Bed_Table_01.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[-1.296, 0.212, 3.526]}
          />
        </RigidBody>
        <mesh
          
          
          geometry={nodes.Mirror_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.308, 1.641, 3.33]}
        />
        <mesh
          
          
          geometry={nodes.Candle_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.034, 1.183, 5.965]}
        />
        <mesh
          
          
          geometry={nodes.Mirror_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.609, 1.873, 5.817]}
          scale={1.01}
        />
        <mesh
          
          
          geometry={nodes.Flower_06.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.623, 1.183, 5.942]}
          scale={0.547}
        />
        <mesh
          
          
          geometry={nodes.Flower_05.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.686, 2.222, 7.424]}
          scale={0.486}
        />
        <mesh
          
          
          geometry={nodes["Fork_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.808, 1.01, 9.533]}
          rotation={[Math.PI, -1.023, Math.PI]}
          scale={0.363}
        />
        <mesh
          
          
          geometry={nodes.Spoon.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.832, 0.95, 9.355]}
          scale={0.687}
        />
        <mesh
          
          
          geometry={nodes["Fork_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.614, 1.061, 8.49]}
          rotation={[0, -1.521, 0]}
          scale={0.646}
        />
        <mesh
          
          
          geometry={nodes.Cup_06.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.583, 1.053, 8.861]}
          rotation={[Math.PI, -0.697, Math.PI]}
          scale={0.633}
        />
        <mesh
          
          
          geometry={nodes.Cake.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.66, 1.06, 8.676]}
          rotation={[0, -0.717, 0]}
          scale={0.602}
        />
        <mesh
          
          
          geometry={nodes["Plate_01_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.649, 1.057, 8.667]}
          scale={0.78}
        />
        <mesh
          
          
          geometry={nodes.Fork.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.161, 1.067, 7.867]}
          rotation={[0, 1.566, 0]}
          scale={0.739}
        />
        <mesh
          
          
          geometry={nodes["Apple_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.439, 1.137, 8.425]}
          rotation={[-0.304, 0, 0]}
          scale={0.432}
        />
        <mesh
          
          
          geometry={nodes["Orange_(5)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.478, 1.113, 8.306]}
          rotation={[0, 0, -0.501]}
          scale={0.51}
        />
        <mesh
          
          
          geometry={nodes.Pear.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.385, 1.091, 8.348]}
          rotation={[0.711, 0, 0]}
          scale={0.692}
        />
        <mesh
          
          
          geometry={nodes.Apple.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.457, 1.044, 8.391]}
          scale={0.578}
        />
        <mesh
          
          
          geometry={nodes.Sandwich.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.193, 1.061, 8.054]}
          rotation={[0, 0.955, 0]}
          scale={0.728}
        />
        <mesh
          
          
          geometry={nodes["Plate_01_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.19, 1.057, 8.059]}
        />
        <mesh
          
          
          geometry={nodes.Cup_04.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.333, 1.055, 7.86]}
          rotation={[0, 0.608, 0]}
          scale={0.715}
        />
        <mesh
          
          
          geometry={nodes.Pumpkin.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.926, 2.22, 10.469]}
          scale={0.539}
        />
        <mesh
          
          
          geometry={nodes.Egg.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.3, 1.118, 10.502]}
          scale={0.433}
        />
        <mesh
          
          
          geometry={nodes.Pan_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.297, 1.114, 10.485]}
          rotation={[Math.PI, -0.969, Math.PI]}
          scale={0.488}
        />
        <mesh
          
          
          geometry={nodes.Pan_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.987, 1.114, 10.483]}
          scale={0.519}
        />
        <mesh
          
          
          geometry={nodes.Orange.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.976, 1.106, 8.905]}
          rotation={[-0.36, 0.392, -0.226]}
          scale={0.451}
        />
        <mesh
          
          
          geometry={nodes.Plate_05_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.945, 1.092, 8.87]}
          scale={0.794}
        />
        <mesh
          
          
          geometry={nodes.Cup_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.695, 1.092, 8.141]}
          rotation={[Math.PI, -1.017, Math.PI]}
          scale={0.683}
        />
        <mesh
          
          
          geometry={nodes.Knife_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.862, 1.002, 9.462]}
          rotation={[-2.977, -0.558, 2.91]}
          scale={0.466}
        />
        <mesh
          
          
          geometry={nodes.Plate_04.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.945, 1.121, 9.675]}
          rotation={[2.531, 0.723, 0.434]}
        />
        <mesh
          
          
          geometry={nodes.Plate_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.925, 0.951, 9.617]}
          rotation={[0, 0, -0.009]}
          scale={0.774}
        />
        <mesh
          
          
          geometry={nodes.Plate_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.945, 0.947, 9.334]}
          scale={0.494}
        />
        <mesh
          
          
          geometry={nodes.Steak_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.965, 1.132, 10.293]}
          rotation={[-Math.PI, 0.803, -Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.Knife_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.992, 1.265, 10.233]}
          rotation={[-2.705, 0, Math.PI / 2]}
        />
        <mesh
          
          
          geometry={nodes.KitchenDesk.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.027, 1.098, 10.291]}
          scale={0.866}
        />
        <mesh
          
          
          geometry={nodes.Bottle.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.543, 1.083, 10.611]}
          scale={0.922}
        />
        <mesh
          
          
          geometry={nodes.Pot_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.944, 2.22, 8.288]}
          rotation={[0, 0.754, 0]}
        />
        <mesh
          
          
          geometry={nodes.Pot_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.935, 2.22, 8.05]}
          rotation={[0, -1.512, 0]}
        />
        <mesh
          
          
          geometry={nodes.Magnet_for_knifes.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.158, 1.348, 8.74]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.747}
        />
        <mesh
          
          
          geometry={nodes.Knife_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.994, 1.09, 8.571]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.834}
        />
        <mesh
          
          
          geometry={nodes.Microvawe.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.886, 1.093, 10.493]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.Kettle.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.901, 1.088, 8.036]}
          rotation={[-Math.PI, 1.108, -Math.PI]}
          scale={0.826}
        />
        <mesh
          
          
          geometry={nodes.Plate_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.439, 1.049, 8.373]}
          scale={0.93}
        />
        <mesh
          
          
          geometry={nodes.Catpet_05.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.193, 1.053, 8.054]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Box.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.524, 0.343, 8.059]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.746}
        />
        <mesh
          
          
          geometry={nodes.Book_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.571, 0.343, 8.438]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.815}
        />
        <mesh
          
          
          geometry={nodes.Book_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.556, 0.343, 8.484]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.82}
        />
        <mesh
          
          
          geometry={nodes.NoteBook_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.219, 1.344, 8.933]}
          rotation={[0, 1.126, 0]}
        />
        <mesh
          
          
          geometry={nodes.Candle_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.341, 1.335, 10.39]}
        />
        <mesh
          
          
          geometry={nodes.Candle_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.22, 1.327, 10.393]}
        />
        <mesh
          
          
          geometry={nodes["Flower_01_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.02, 1.093, 9.099]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.RoomFurniture_06.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.608, 0.212, 6.044]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Darts.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.067, 1.792, 5.829]}
        />
        <mesh
          
          
          geometry={nodes.Plate_06.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.53, 1.307, 8.119]}
          scale={0.682}
        />
        <mesh
          
          
          geometry={nodes.Book_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.561, 0.664, 8.065]}
          rotation={[-0.246, 1.535, 0.129]}
          scale={0.78}
        />
        <mesh
          
          
          geometry={nodes.NoteBook_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.544, 0.993, 8.081]}
          rotation={[-Math.PI, 0.153, -Math.PI]}
          scale={0.838}
        />
        <mesh
          
          
          geometry={nodes.Book_04.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.55, 0.667, 7.989]}
          rotation={[0.223, 1.533, -0.222]}
        />
        <mesh
          
          
          geometry={nodes.KubikRubik.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.481, 0.992, 8.462]}
          rotation={[0, -0.434, 0]}
        />
        <mesh
          
          
          geometry={nodes.PhotoFrame.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.528, 1.308, 8.38]}
          rotation={[-Math.PI, 1.29, -Math.PI]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.RoomFurniture_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.551, 0.212, 8.237]}
          rotation={[0, Math.PI / 2, 0]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Clock_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.252, 2.103, 10.669]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.Fireplace_01.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[3.537, 0.212, 0.807]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Flower_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.386, 0.205, 10.313]}
          rotation={[0, -0.659, 0]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Flower_04.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.518, 0.193, 5.99]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Curtains_13.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.097, 2.03, 9.506]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Curtains_11.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.107, 1.953, 0.732]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Curtains_13_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.996, 2.03, 10.596]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes["Book_03_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.556, 0.343, 8.393]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.82}
        />
        <mesh
          
          
          geometry={nodes["Catpet_05_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.193, 1.053, 8.67]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Catpet_05_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.665, 1.053, 8.054]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Catpet_05_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.665, 1.053, 8.67]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Pot_02_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.932, 2.22, 8.495]}
          rotation={[-Math.PI, 1.439, -Math.PI]}
          scale={0.806}
        />
        <mesh
          
          
          geometry={nodes["Plate_01_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.949, 0.96, 9.453]}
          rotation={[0.194, 0.024, 0.121]}
          scale={0.494}
        />
        <mesh
          
          
          geometry={nodes["Orange_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.94, 1.103, 8.821]}
          rotation={[0.297, -0.017, -0.056]}
          scale={0.451}
        />
        <mesh
          
          
          geometry={nodes["Orange_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.876, 1.13, 8.887]}
          rotation={[-0.615, -0.524, -0.321]}
          scale={0.451}
        />
        <mesh
          
          
          geometry={nodes["Orange_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.94, 1.134, 8.919]}
          rotation={[-2.558, 0.379, 2.471]}
          scale={0.451}
        />
        <mesh
          
          
          geometry={nodes["Orange_(4)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.998, 1.131, 8.835]}
          rotation={[0.28, -0.584, 0.174]}
          scale={0.451}
        />
        <mesh
          
          
          geometry={nodes["Pear_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.506, 1.129, 8.367]}
          rotation={[0.123, -0.781, -0.046]}
          scale={0.617}
        />
        <mesh
          
          
          geometry={nodes["Apple_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.396, 1.141, 8.333]}
          rotation={[-0.304, 0, 0]}
          scale={0.432}
        />
        <mesh
          
          
          geometry={nodes["Candle_02_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.196, 1.183, 5.965]}
        />
        <mesh
          
          
          geometry={nodes["Picture_06_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.235, 1.499, 10.669]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
        />
        <mesh
          
          
          geometry={nodes["PhotoFrame_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.444, 1.167, 1.09]}
          rotation={[Math.PI, -1.507, Math.PI]}
          scale={[1.523, 1, 1]}
        />
        <mesh
          
          
          geometry={nodes["PhotoFrame_(4)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.458, 1.164, 0.67]}
          rotation={[0, -1.52, 0]}
          scale={[1.553, 1.2, 1.2]}
        />
        <mesh
          
          
          geometry={nodes["Pillow_03_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.084, 0.87, 2.717]}
          rotation={[-1.394, 0.094, 0.476]}
        />
        <mesh
          
          
          geometry={nodes["Plate_06_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.492, 1.191, 0.737]}
          scale={0.682}
        />
        <mesh
          
          
          geometry={nodes["NoteBook_01_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.475, 1.192, 0.387]}
          rotation={[-Math.PI, 0.906, -Math.PI]}
          scale={0.838}
        />
        <mesh
          
          
          geometry={nodes["KubikRubik_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.467, 1.19, 0.996]}
          rotation={[0, -0.434, 0]}
        />
        <mesh
          
          
          geometry={nodes["PhotoFrame_(5)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.475, 1.19, 1.201]}
          rotation={[-Math.PI, 1.29, -Math.PI]}
        />
        <mesh
          
          
          geometry={nodes["Curtains_15_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.08, 1.669, 4.503]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Book_04_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.116, 0.902, -1.559]}
        />
        <mesh
          
          
          geometry={nodes.Book_03_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.411, 0.557, -1.519]}
          scale={[1, 0.943, 1]}
        />
        <mesh
          
          
          geometry={nodes.Book_02_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.245, 0.557, -1.51]}
        />
        <mesh
          
          
          geometry={nodes.Book_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.131, 0.557, -1.505]}
        />
        <mesh
          
          
          geometry={nodes["Box_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.02, 0.56, -1.478]}
        />
        <mesh
          
          
          geometry={nodes.Box_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.277, 0.247, -1.485]}
        />
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.Flower_04_1.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[5.899, 0.212, 3.57]}
          />
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.Flower_07_2.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[5.929, 0.212, 5.352]}
          />
        </RigidBody>
        <mesh
          
          
          geometry={nodes.Candle_03_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.531, 2.142, -1.467]}
        />
        <mesh
          
          
          geometry={nodes.Candle_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.546, 2.144, -1.462]}
        />
        <mesh
          
          
          geometry={nodes.Candle_02_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.658, 2.143, -1.442]}
        />
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.RoomFurniture_06_1.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[-3.451, 0.212, 0.74]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </RigidBody>
        <mesh
          
          
          geometry={nodes.NoteBook_02_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.262, 0.756, 2.87]}
          rotation={[-Math.PI, 0.289, -Math.PI]}
        />
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.RoomFurniture_04.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[0.258, 0.212, 2.91]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </RigidBody>
        <mesh
          
          
          geometry={nodes.Picture_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.23, 1.857, 3.169]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.Cupcake.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.209, 0.69, 1.519]}
          scale={0.633}
        />
        <mesh
          
          
          geometry={nodes.Pizza_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.307, 0.69, 1.536]}
          rotation={[0, -0.524, 0]}
          scale={0.722}
        />
        <mesh
          
          
          geometry={nodes.Plate_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.28, 0.679, 1.523]}
        />
        <mesh
          
          
          geometry={nodes.Toaster.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.524, 1.09, 10.519]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.Cup_06_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.549, 0.667, 1.387]}
          rotation={[0, -0.498, 0]}
          scale={0.691}
        />
        <mesh
          
          
          geometry={nodes.Catpet_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.517, 0.212, 1.687]}
          rotation={[0, 0.004, 0]}
        />
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.Library.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[-1.622, 0.203, -1.506]}
          />
        </RigidBody>
        <mesh
          
          
          geometry={nodes["Picture_01_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.545, 1.875, 3.162]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={1.07}
        />
        <mesh
          
          
          geometry={nodes["Picture_01_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.877, 1.857, 3.169]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.187, 0.557, -1.505]}
          scale={0.912}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.301, 0.557, -1.505]}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.354, 0.557, -1.505]}
          scale={[0.912, 1.081, 0.912]}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(4)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.103, 0.26, -1.505]}
          rotation={[0, 0, -1.573]}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(5)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.091, 0.311, -1.532]}
          rotation={[0, 0, -1.573]}
          scale={0.912}
        />
        <mesh
          
          
          geometry={nodes["Box_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.497, 2.267, -1.524]}
          rotation={[0, -0.116, 0]}
        />
        <mesh
          
          
          geometry={nodes["Book_03_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.119, 1.585, -1.536]}
          scale={[1, 0.943, 1]}
        />
        <mesh
          
          
          geometry={nodes["Book_03_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.036, 1.585, -1.536]}
          rotation={[0, 0, 0.188]}
          scale={[0.83, 0.783, 0.83]}
        />
        <mesh
          
          
          geometry={nodes["Book_03_(4)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.977, 1.585, -1.536]}
          rotation={[-0.013, 0.009, 0.234]}
          scale={[0.925, 0.872, 0.925]}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(6)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.96, 1.272, -1.682]}
          rotation={[-3.094, -1.525, 1.618]}
          scale={0.775}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(7)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.963, 1.312, -1.676]}
          rotation={[-3.094, -1.525, 1.618]}
          scale={0.707}
        />
        <mesh
          
          
          geometry={nodes["Book_04_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.865, 0.925, -1.539]}
          rotation={[-Math.PI, -0.095, Math.PI / 2]}
        />
        <mesh
          
          
          geometry={nodes["Book_03_(5)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.208, 1.582, -1.536]}
          rotation={[-3.129, 0, -2.907]}
          scale={[0.83, 0.783, 0.83]}
        />
        <mesh
          
          
          geometry={nodes["Book_03_(6)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.119, 1.585, -1.536]}
          rotation={[-3.129, 0, -Math.PI]}
          scale={[0.925, 0.872, 0.925]}
        />
        <mesh
          
          
          geometry={nodes["Book_04_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.588, 1.605, -1.601]}
          rotation={[-Math.PI, -1.522, Math.PI / 2]}
          scale={0.722}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(8)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.549, 1.642, -1.588]}
          rotation={[-3.136, -1.202, 1.577]}
          scale={0.707}
        />
        <mesh
          
          
          geometry={nodes["Book_03_(7)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.127, 1.933, -1.519]}
          scale={[1, 0.943, 1]}
        />
        <mesh
          
          
          geometry={nodes["Book_02_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.951, 1.933, -1.51]}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(9)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.846, 1.933, -1.505]}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(10)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.899, 1.933, -1.505]}
          scale={0.912}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(11)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.011, 1.933, -1.505]}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(12)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.071, 1.933, -1.505]}
          scale={[0.912, 1.081, 0.912]}
        />
        <mesh
          
          
          geometry={nodes["Book_03_(8)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.281, 0.902, -1.519]}
          scale={[1, 0.943, 1]}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(13)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.17, 0.902, -1.523]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(14)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.227, 0.902, -1.505]}
          scale={[0.912, 1.081, 0.912]}
        />
        <mesh
          
          
          geometry={nodes["Book_04_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.332, 0.902, -1.53]}
        />
        <mesh
          
          
          geometry={nodes["Book_04_(4)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.429, 0.902, -1.53]}
          rotation={[0, 0, -0.201]}
          scale={[0.69, 1.077, 1]}
        />
        <mesh
          
          
          geometry={nodes["Book_02_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.284, 1.243, -1.51]}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(15)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.178, 1.243, -1.505]}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(16)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.23, 1.243, -1.505]}
          scale={0.912}
        />
        <mesh
          
          
          geometry={nodes["Book_02_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.118, 1.243, -1.51]}
        />
        <mesh
          
          
          geometry={nodes["Book_04_(5)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.64, 0.922, -1.606]}
          rotation={[-Math.PI, -1.522, Math.PI / 2]}
          scale={0.722}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(17)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.601, 0.965, -1.575]}
          rotation={[-3.136, -1.202, 1.577]}
          scale={0.707}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Shower_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.31, 0.206, -1.077]}
          rotation={[Math.PI, 0, Math.PI]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.NoteBook_02_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.805, 1.588, -1.507]}
          scale={0.78}
        />
        <mesh
          
          
          geometry={nodes.NoteBook_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.252, 1.935, -1.514]}
          scale={0.768}
        />
        <mesh
          
          
          geometry={nodes.NoteBook_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.588, 1.254, -1.504]}
          rotation={[0, 0.046, 0]}
          scale={0.839}
        />
        <mesh
          
          
          geometry={nodes["Slippers_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.299, 0.235, -0.931]}
          rotation={[Math.PI, -1.389, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes["Radiator_02_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.09, 1.844, 2.662]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Picture_02_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.778, 1.559, 5.677]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={0.559}
        />
        <mesh
          
          
          geometry={nodes["Box_(1)_1"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.42, 0.214, 5.207]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.764}
        />
        <mesh
          
          
          geometry={nodes.Picture_04_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.325, 1.802, 3.324]}
        />
        <mesh
          
          
          geometry={nodes["Picture_08_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.732, 1.537, 3.324]}
        />
        <mesh
          
          
          geometry={nodes["Picture_07_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.037, 1.993, 3.324]}
        />
        <mesh
          
          
          geometry={nodes["Picture_05_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.411, 2.047, 3.324]}
        />
        <mesh
          
          
          geometry={nodes.Book_02_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.569, 0.623, 5.249]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          
          
          geometry={nodes.Box_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.441, 0.219, 5.503]}
        />
        <mesh
          
          
          geometry={nodes.Flower_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.3, 0.621, 3.499]}
          scale={0.287}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Flower_03_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.757, 0.212, 6.132]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Picture_08.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.849, 1.785, 5.822]}
        />
        <mesh
          
          
          geometry={nodes.Picture_07.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.334, 1.506, 5.822]}
        />
        <mesh
          
          
          geometry={nodes.Picture_05.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.178, 1.965, 5.822]}
        />
        <mesh
          
          
          geometry={nodes.Picture_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.238, 1.796, 5.677]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.Picture_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.699, 2.047, 5.677]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.559}
        />
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.Flower_04_2.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[2.798, 0.212, 5.401]}
          />
        </RigidBody>
        <mesh
          
          
          geometry={nodes["Towel_02_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.032, 1.881, 2.677]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Trash_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.03, 0.212, 2.96]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.SoapBottle_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.972, 1.078, 1.376]}
          rotation={[-Math.PI, 1.561, -Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.Towel_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.567, 1.769, -1.536]}
          scale={[1, 0.822, 1]}
        />
        <mesh
          
          
          geometry={nodes.Towel_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.55, 2.029, -1.518]}
        />
        <mesh
          
          
          geometry={nodes.Slippers.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.335, 0.235, -1.273]}
          rotation={[Math.PI, -1.389, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.ShowerCarpet_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.333, 0.212, -1.087]}
          scale={0.822}
        />
        <mesh
          
          
          geometry={nodes.Radiator_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.558, 1.414, -1.621]}
        />
        <mesh
          
          
          geometry={nodes.ShowerMirror_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.853, 1.339, 1.793]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.ShowerTable_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.095, 0.212, 1.803]}
          rotation={[0, Math.PI / 2, 0]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Washer_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.934, 0.212, 2.66]}
          rotation={[0, -Math.PI / 2, 0]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Toilet_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.173, 0.212, -0.246]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.ShowerPart_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.272, 1.259, -0.471]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.ToiletPaper.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.653, 1.026, -0.338]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Toilet_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.251, 0.212, 0.104]}
          rotation={[0, Math.PI / 2, 0]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.WallFloor2_17.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.258, 0.1, -0.404]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.442, 1, 1]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Lamp_04.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.828, 1.773, 1.005]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Picture_05_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.672, 1.883, 0.733]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.SwitchLight_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.814, 1.048, 3.174]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes["Lamp_07_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.529, 1.936, 3.176]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes.Lamp_01.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[3.44, 0.212, 2.991]}
          />
        </RigidBody>
        <RigidBody colliders="hull" type="fixed">
          <mesh
            
            
            geometry={nodes.Sofa_05.geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[1.537, 0.212, 3.09]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </RigidBody>
      </group>
      <group position={[0, -2.09, 0]}>
      <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["Bed_Table_01_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.6, 4.712, -1.471]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Bed_Table_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.882, 4.712, -1.475]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Bed1_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.734, 4.712, -0.44]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes["Picture_08_(1)_1"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.419, 5.982, -1.679]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["Lamp_03_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.922, 5.122, -1.537]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Lamp_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.581, 5.124, -1.481]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.TV_Remote_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.737, 5.124, -1.432]}
        />
        <mesh
          
          
          geometry={nodes.Book_03_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.143, 5.783, -0.164]}
          rotation={[0, -0.416, -Math.PI / 2]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Flower_02_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.281, 5.742, 0.927]}
          scale={0.454}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Flower_04_3.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.893, 4.712, -1.412]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Flower_07_3.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.906, 4.712, 2.809]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Flower_03_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.463, 4.712, 2.919]}
          rotation={[0, -0.796, 0]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Mirror_02_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.074, 5.838, 2.148]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Clock_04.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.081, 6.633, 0.399]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Socket_02_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.524, 4.989, 2.152]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.TV_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.68, 5.685, 2.979]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.77}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.RoomFurniture_07.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.267, 4.695, 0.363]}
          rotation={[0, Math.PI / 2, 0]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Catpet_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.71, 4.712, 1.217]}
          scale={0.822}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.RoomFurniture_08.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.307, 4.712, -1.026]}
          rotation={[0, Math.PI / 2, 0]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.RoomFurniture_06_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.678, 4.712, 2.95]}
          rotation={[Math.PI, 0, Math.PI]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.PhotoFrame_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.759, 5.128, -1.454]}
          rotation={[0, 0.065, 0]}
          scale={0.736}
        />
        <mesh
          
          
          geometry={nodes.Picture_08_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.98, 6, -1.679]}
        />
        <mesh
          
          
          geometry={nodes.Picture_07_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.037, 6.436, -1.679]}
        />
        <mesh
          
          
          geometry={nodes.Picture_05_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.429, 6.487, -1.679]}
        />
        <mesh
          
          
          geometry={nodes.SwitchLight_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.341, 5.549, 3.177]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.Curtains_11_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.613, 6.399, 1.995]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Curtains_10.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.606, 6.191, -0.498]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Curtains_05.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.577, 6.147, 7.029]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Curtains_14.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.077, 6.143, 7.004]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Curtains_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.092, 6.175, 4.49]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Lamp_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.296, 4.704, 1.45]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes["Curtains_14_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.077, 6.143, 9.504]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Curtains_01_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.642, 6.167, 4.495]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Curtains_05_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.562, 6.156, 9.501]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["Lamp_01_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.556, 4.712, 6.064]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Lamp_06.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.507, 5.498, 7.808]}
          rotation={[0, 1.262, 0]}
        />
        <mesh
          
          
          geometry={nodes.Picture_04_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.377, 6.348, 5.858]}
        />
        <mesh
          
          
          geometry={nodes.Clock_03_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.322, 6.648, 8.305]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Flower_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.493, 5.506, 8.801]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Flower_07_4.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.938, 4.712, 6.056]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.SwitchLight_3.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.3, 5.489, 5.826]}
        />
        <RigidBody colliders="hull" type="fixed">
        <mesh
          
          
          geometry={nodes.Sofa_07.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.985, 4.712, 5.914]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.PC_Mouse.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.845, 5.514, 7.843]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.PC_Screen.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.476, 5.506, 8.305]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.PC_Keyboard.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.904, 5.512, 8.291]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.PC_Carpet.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.851, 5.51, 7.839]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.NoteBook_01_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.922, 5.508, 8.908]}
          rotation={[0, 1.299, 0]}
          scale={0.859}
        />
        <mesh
          
          
          geometry={nodes.PhotoFrame_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.592, 5.506, 8.989]}
          rotation={[-Math.PI, 1.283, -Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.PC.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.529, 5.504, 7.576]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.OfficeChair_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.426, 4.712, 8.344]}
          rotation={[Math.PI, -0.91, Math.PI]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.OfficeTable_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.751, 4.712, 8.294]}
          rotation={[0, Math.PI / 2, 0]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Fireplace_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.927, 4.712, 10.555]}
          rotation={[Math.PI, 0, Math.PI]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Socket_02_3.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[4.199, 4.845, -1.688]}
        />
        <mesh
          
          
          geometry={nodes.Flower_05_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.898, 5.247, 5.342]}
          scale={0.808}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.RoomFurniture_04_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.917, 4.712, 5.335]}
          rotation={[0, -Math.PI / 2, 0]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Picture_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.58, 6.474, 3.324]}
        />
        <mesh
          
          
          geometry={nodes["Picture_01_(1)_1"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.948, 6.214, 3.324]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          
          
          geometry={nodes["Picture_01_(2)_1"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.479, 5.972, 3.324]}
          scale={0.659}
        />
        <mesh
          
          
          geometry={nodes["Picture_04_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.794, 6.154, 5.858]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          
          
          geometry={nodes["Picture_04_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.883, 6.627, 5.858]}
          scale={[0.935, 0.608, 0.608]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["Flower_07_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.928, 4.712, 10.452]}
          rotation={[Math.PI, -1.477, Math.PI]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Plate_07.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.008, 5.492, 8.141]}
          scale={0.78}
        />
        <mesh
          
          
          geometry={nodes.Book_04_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.016, 5.166, 8.02]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.899}
        />
        <mesh
          
          
          geometry={nodes.Book_03_3.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.025, 5.494, 8.52]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.779, 1.004, 0.779]}
        />
        <mesh
          
          
          geometry={nodes["Candle_03_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.058, 5.806, 8.468]}
        />
        <mesh
          
          
          geometry={nodes.Book_01_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.916, 5.186, 8.434]}
          rotation={[0, 0.042, -Math.PI / 2]}
          scale={0.753}
        />
        <mesh
          
          
          geometry={nodes.Box_3.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.015, 4.839, 8.432]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.857}
        />
        <mesh
          
          
          geometry={nodes.Flower_02_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.063, 5.806, 8.279]}
          scale={0.612}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.RoomFurniture_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.046, 4.712, 8.27]}
          rotation={[0, -Math.PI / 2, 0]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Darts_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.192, 6.351, 5.834]}
          scale={0.94}
        />
        <mesh
          
          
          geometry={nodes.Catpet_04_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.983, 4.712, 7.371]}
          scale={0.765}
        />
        <mesh
          
          
          geometry={nodes.Candle_03_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.391, 5.666, 10.511]}
        />
        <mesh
          
          
          geometry={nodes.Candle_01_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.526, 5.666, 10.49]}
        />
        <mesh
          
          
          geometry={nodes.PhotoFrame_3.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.347, 5.669, 10.479]}
          rotation={[-Math.PI, 0.158, -Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.Picture_07_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.933, 6.186, 10.669]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.Picture_08_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.62, 6.632, 10.669]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes["PhotoFrame_(1)_1"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.559, 5.669, 10.459]}
          rotation={[Math.PI, -0.045, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes["Picture_08_(1)_2"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.165, 6.672, 10.669]}
          rotation={[Math.PI, 0, Math.PI / 2]}
        />
        <mesh
          
          
          geometry={nodes["Book_01_(1)_1"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.903, 5.224, 8.415]}
          rotation={[0, -0.099, -Math.PI / 2]}
          scale={0.644}
        />
        <mesh
          
          
          geometry={nodes["Candle_03_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.058, 5.806, 8.068]}
        />
        <mesh
          
          
          geometry={nodes["Book_03_(1)_1"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.025, 5.494, 8.46]}
          rotation={[0.064, Math.PI / 2, 0]}
          scale={[0.779, 1.004, 0.779]}
        />
        <mesh
          
          
          geometry={nodes["Book_03_(2)_1"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.025, 5.494, 8.417]}
          rotation={[0.064, Math.PI / 2, 0]}
          scale={[0.779, 1.004, 0.779]}
        />
        <mesh
          
          
          geometry={nodes["Book_03_(3)_1"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.042, 5.494, 8.375]}
          rotation={[0.064, -Math.PI / 2, 0]}
          scale={[0.779, 1.004, 0.779]}
        />
        <mesh
          
          
          geometry={nodes["Book_04_(1)_1"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.036, 5.166, 8.08]}
          rotation={[-0.048, Math.PI / 2, 0]}
          scale={0.899}
        />
        <mesh
          
          
          geometry={nodes["Box_(1)_2"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.019, 4.842, 8.128]}
          rotation={[0, -1.426, 0]}
          scale={[0.857, 1.079, 0.857]}
        />
        <mesh
          
          
          geometry={nodes.Socket_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.411, 4.949, 10.677]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.814}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Lamp_01_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.305, 4.712, 10.42]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Lamp_05.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.875, 5.423, 10.497]}
          rotation={[-Math.PI, 0.145, -Math.PI]}
          scale={0.748}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["Flower_04_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.395, 4.699, 6.072]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.RoomFurniture_06_3.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.888, 4.712, 10.446]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        </RigidBody>
        <mesh
          
          
          geometry={nodes["AirCondition_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.414, 6.794, 10.586]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.816}
        />
        <mesh
          
          
          geometry={nodes.AirCondition_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5.024, 6.75, -1.588]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["Trash_01_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.709, 4.712, 10.485]}
          scale={0.738}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.SwitchLight_4.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.803, 5.567, 5.819]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Lamp_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.232, 5.123, 6.043]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.OfficeChair_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.421, 4.712, 9.802]}
          rotation={[0, 0.346, 0]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Mirror_02_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.184, 5.961, 8.794]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.RoomFurniture_08_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.939, 4.712, 10.061]}
          rotation={[0, -Math.PI / 2, 0]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Catpet_03_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.388, 4.712, 7.287]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.684}
        />
        <mesh
          
          
          geometry={nodes.NoteBook_03_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.967, 5.43, 10.221]}
          rotation={[-Math.PI, 0.19, -Math.PI]}
          scale={0.648}
        />
        <mesh
          
          
          geometry={nodes.KubikRubik_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.024, 5.423, 10.481]}
          rotation={[0, -0.38, 0]}
        />
        <mesh
          
          
          geometry={nodes.PC_Keyboard_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.436, 5.427, 10.229]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.PC_Mouse_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.805, 5.43, 10.239]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.PC_Carpet_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.816, 5.426, 10.249]}
        />
        <mesh
          
          
          geometry={nodes.PC_Screen_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.4, 5.421, 10.554]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.PC_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.041, 4.712, 10.282]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.PC_Table.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.378, 4.712, 10.347]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Bed_Table_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.226, 4.712, 6.042]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Bed2_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0.57, 4.712, 6.817]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Clock_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.67, 6.515, 0.743]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Hook_02_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.328, 6.397, 3.165]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.Lamp_04_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.744, 6.317, 3.178]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes["Towel_03_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.232, 6.359, 2.627]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.726}
        />
        <mesh
          
          
          geometry={nodes.Radiator_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.175, 6.209, 2.611]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Towel_03_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.956, 6.587, -1.532]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Trash_01_2.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.693, 4.712, 3.05]}
          scale={0.871}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Radiator_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.952, 5.987, -1.621]}
        />
        <mesh
          
          
          geometry={nodes.Slippers_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.12, 4.733, 1.204]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.ShowerCarpet_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.132, 4.712, 1.121]}
        />
        <mesh
          
          
          geometry={nodes.Boat.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.436, 5.143, 0.733]}
        />
        <mesh
          
          
          geometry={nodes.ShowerPart_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.081, 5.505, 1.092]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Bath.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.466, 4.712, 1.051]}
          rotation={[0, -Math.PI / 2, 0]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Shower_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.674, 4.712, -1.193]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.ToiletPaper_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.423, 5.447, -0.989]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Toilet_02_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.548, 4.712, -1.477]}
        /></RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Toilet_01_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.859, 4.712, -1.249]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Toothbrush_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.442, 5.728, 3.028]}
          rotation={[1.409, -0.241, 2.544]}
        />
        <mesh
          
          
          geometry={nodes.Toothbrush_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.454, 5.742, 3.081]}
          rotation={[1.75, -0.259, Math.PI / 2]}
        />
        <mesh
          
          
          geometry={nodes.GlassToothbrush_02.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.471, 5.593, 3.043]}
        />
        <mesh
          
          
          geometry={nodes.ShowerCarpet_04.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.851, 4.699, 2.287]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.155}
        />
        <mesh
          
          
          geometry={nodes.SoapBottle_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.421, 5.579, 3.064]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes.ShowerMirror_02_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.983, 5.796, 3.169]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.ShowerTable_01.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.955, 4.712, 2.905]}
          rotation={[Math.PI, 0, Math.PI]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes.Rangehood.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.756, 6.797, -1.676]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Flower_04_4.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.371, 4.712, 5.406]}
        /></RigidBody>
        <mesh
          
          
          geometry={nodes["Slippers_(1)_1"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-1.143, 4.733, 0.999]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Lamp_04_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-0.275, 6.317, 3.178]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["Lamp_01_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.556, 4.712, 10.428]}
        /></RigidBody>
      </group>

      <mesh
        
        
        geometry={nodes.BG_1.geometry}
        material={materials.LowPolyInterior_BG}
        position={[1.25, -0.369, 4.37]}
        scale={[0.234, 1, 0.279]}
      />
      <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["WallFloor1_09_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0, 0, -1.75]}
        />
        <mesh
          
          
          geometry={nodes.WallFloor1_12.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.75, 0, 4.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.WallFloor1_09.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.5, 0, -1.75]}
        />
        <RigidBody colliders="cuboid" type="fixed">
          <mesh
            
            
            geometry={nodes["WallFloor1_09_(8)"].geometry}
            material={materials.LowPolyInterior_MAIN}
            position={[2.5, 0, -1.75]}
          />
        </RigidBody>
        <mesh
          
          
          geometry={nodes["WallFloor1_09_(9)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.25, 0, -1.125]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.5, 1, 1]}
        />
        <mesh
          
          
          geometry={nodes["WallFloor1_09_(10)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.25, 0, 2.625]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.5, 1, 1]}
        />
        <mesh
          
          
          geometry={nodes["WallFloor1_10_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.25, 0, 0.75]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["WallFloor1_09_(11)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5, 0, -1.75]}
        />
      </RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor1_09_(12)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[0, 0, 5.75]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["WallFloor1_09_(13)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0, 0, 10.75]}
        />
        <mesh
          
          
          geometry={nodes["WallFloor1_09_(14)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.5, 0, 10.75]}
        />
      </RigidBody>
      <mesh
        
        
        geometry={nodes.WallFloor1_11.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-3.75, 0, 7]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["WallFloor1_11_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.75, 0, 9.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        
        
        geometry={nodes.WallFloor1_12_1.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-2.5, 0, 5.75]}
      /></RigidBody>
      <mesh
        
        
        geometry={nodes.StairsPart_03.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-0.558, 0.11, 4.624]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Stairs_03.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-0.647, 0.11, 5.178]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor1_09_(23)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[2.5, 0, 5.75]}
      />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          
          
          geometry={nodes["WallFloor1_12_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.5, 0, 3.25]}
        />
      </RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["WallFloor1_09_(6)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.25, 0, 3.25]}
          scale={[2, 1, 1]}
        />
        <mesh
          
          
          geometry={nodes["WallFloor1_09_(7)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[3.75, 0, 0.75]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[2.017, 1, 1]}
        />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor1_12_(2)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[5, 0, 5.75]}
      /></RigidBody>
      <mesh
        
        
        geometry={nodes["WallFloor1_12_(3)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[5, 0, 3.25]}
      />
      <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["WallFloor1_11_(4)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.75, 0, -0.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["WallFloor1_11_(5)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-3.75, 0, 2]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Wall_10.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.25, 0, 9.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes.Wall_03.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.25, 0, 7]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Wall_10_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5, 0, 10.75]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          
          
          geometry={nodes["Wall_03_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.5, 0, 10.75]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </RigidBody>

      <mesh
        
        
        geometry={nodes["Door_05_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-3.75, 0.125, 4.93]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <RigidBody colliders="hull" type="fixed">
      <mesh
        
        
        geometry={nodes["Door_05_(4)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[4.57, 0.125, 5.75]}
        rotation={[Math.PI, Math.PI/2, Math.PI]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.WallFloor1_11_1.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[6.25, 0, 4.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </RigidBody>
      <mesh
        
        
        geometry={nodes.Corner_07.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-3.75, 0, -1.75]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes["Corner_07_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-3.75, 0, 10.75]}
      />
      <mesh
        
        
        geometry={nodes["Corner_07_(2)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[6.25, 0, -1.75]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        
        
        geometry={nodes["Corner_07_(3)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[6.25, 0, 10.75]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes["Floor_05_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5, 0, 2]}
        />
        <mesh
          
          
          geometry={nodes["Floor_05_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5, 0, -0.5]}
        />
        <mesh
          
          
          geometry={nodes["Floor_02_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0, 0, 7]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_01_(2)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.5, 0, 7]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_02_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5, 0, 9.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_01_(3)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.5, 0, 9.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_02_(4)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5, 0, 7]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_01_(4)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.5, 0, 7]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_02_(5)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0, 0, 4.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_01_(5)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.5, 0, 4.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_02_(6)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0, 0, 2]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_01_(6)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.5, 0, 2]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_02_(7)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[5, 0, 4.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_01_(7)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.5, 0, 4.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_01_(8)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.5, 0, 2]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_02_(8)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0, 0, -0.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_01_(9)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.5, 0, -0.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_01_(10)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[2.5, 0, -0.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_02_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[0, 0, 9.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          
          
          geometry={nodes["Floor_01_(1)"].geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[-2.5, 0, 9.5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["Floor_02_(9)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[0, 2.5, 7]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["Floor_01_(11)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-2.5, 2.5, 7]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
        <mesh
        
        
        geometry={nodes["Floor_02_(10)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[5, 2.5, 9.5]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      
      <mesh
        
        
        geometry={nodes["Floor_01_(12)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[2.5, 2.5, 9.5]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes["Floor_02_(11)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[5, 2.5, 7]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes["Floor_01_(13)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[2.5, 2.5, 7]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["Floor_02_(14)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[0, 2.5, 9.5]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["Floor_01_(16)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-2.5, 2.5, 9.5]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["Floor_28_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-0.625, 2.5, 2]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["Floor_08_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-2.5, 2.5, 2]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes.Floor_15.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[1.25, 2.5, 3.875]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes.Floor_16.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[3.125, 2.5, 5.125]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes.Floor_10.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[5, 2.5, 4.5]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["Floor_10_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-2.5, 2.5, 4.5]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["Floor_16_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[3.125, 2.5, 3.875]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["Floor_16_(2)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-0.625, 2.5, 3.875]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["Floor_10_(2)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[5, 2.5, 2]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes["Floor_10_(3)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[5, 2.5, -0.5]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes["Floor_10_(4)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[2.5, 2.5, 2]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes["Floor_10_(5)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[2.5, 2.5, -0.5]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes["Floor_16_(3)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[0.625, 2.5, -1.125]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes["Floor_16_(4)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[0.625, 2.5, 0.125]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes["Floor_16_(5)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[0.625, 2.5, 1.375]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes["Floor_16_(6)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[0.625, 2.5, 2.625]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes.Floor_28.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-0.625, 2.5, -0.5]}
      />
      <mesh
        
        
        geometry={nodes.Floor_08.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-2.5, 2.5, -0.5]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_17_(2)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[2.5, 2.5, -1.75]}
      />
      <mesh
        
        
        geometry={nodes["WallFloor2_17_(3)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[0, 2.5, -1.75]}
      />
      <mesh
        
        
        geometry={nodes["WallFloor2_17_(4)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-2.5, 2.5, -1.75]}
      /></RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        
        
        geometry={nodes.WallFloor2_20.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-2.5, 2.5, 5.75]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes.WallFloor2_19.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[6.25, 2.5, 4.5]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_17_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[5, 2.5, -1.75]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes.WallFloor2_21.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[6.25, 2.5, 0.75]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor1_09_(18)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[1.25, 2.51, 9.5]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes["WallFloor1_09_(21)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[1.25, 2.51, 7]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor1_09_(24)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[0, 2.51, -0.5]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes["WallFloor1_09_(25)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[0, 2.51, 2]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_19_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-3.75, 2.5, 4.5]}
        rotation={[0, Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_20_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-2.5, 2.5, 3.25]}
        rotation={[Math.PI, 0, Math.PI]}
      /></RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_20_(2)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[5, 2.5, 3.25]}
        rotation={[Math.PI, 0, Math.PI]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_17_(5)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-2.5, 2.5, 10.75]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        
        
        geometry={nodes["WallFloor2_17_(6)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[0, 2.5, 10.75]}
        rotation={[Math.PI, 0, Math.PI]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_17_(7)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[2.5, 2.5, 10.75]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        
        
        geometry={nodes["WallFloor2_17_(8)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[5, 2.5, 10.75]}
        rotation={[Math.PI, 0, Math.PI]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_18_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-3.75, 2.5, 2]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        
        
        geometry={nodes["WallFloor2_18_(2)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-3.75, 2.5, 7]}
        rotation={[0, Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_20_(3)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[5, 2.5, 5.75]}
        rotation={[Math.PI, 0, Math.PI]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_18_(3)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-3.75, 2.5, 9.5]}
        rotation={[0, Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_18_(4)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[6.25, 2.5, 9.5]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_18_(5)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[6.25, 2.5, 7]}
        rotation={[0, -Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_17_(1)_1"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[2.5, 2.5, 3.25]}
        rotation={[Math.PI, 0, Math.PI]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_17_(2)_1"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[0, 2.5, 5.75]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes.WallFloor2_23.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[2.5, 2.5, 5.75]}
        rotation={[Math.PI, 0, Math.PI]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes.WallFloor2_17_1.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[0, 2.5, 3.25]}
        rotation={[Math.PI, 0, Math.PI]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes.WallFloor2_18.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-3.75, 2.5, -0.5]}
        rotation={[0, Math.PI / 2, 0]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_17_(9)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[1.25, 2.51, 4.5]}
        rotation={[Math.PI, 0, Math.PI]}
      /></RigidBody>
      <RigidBody colliders="hull" type="fixed">
      <mesh
        
        
        geometry={nodes.WallFloor2_24.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-1.25, 2.51, 5.75]}
        rotation={[Math.PI, 0, Math.PI]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
      <mesh
        
        
        geometry={nodes["WallFloor2_17_(10)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-1.356, 2.51, -1.252]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.449, 1, 1]}
      /></RigidBody>
      <RigidBody colliders="cuboid" type="fixed">
        <mesh
          
          
          geometry={nodes.Floor_07.geometry}
          material={materials.LowPolyInterior_MAIN}
          position={[1.25, 5, 4.5]}
          scale={[4, 1, 5]}
        />
      </RigidBody>
      <mesh
        
        
        geometry={nodes["Light_04_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[1.22, 2.508, 9.14]}
      />
      <mesh
        
        
        geometry={nodes["Light_01_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[4.832, 2.509, 4.497]}
      />
      <mesh
        
        
        geometry={nodes["Light_01_(2)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[5.074, 2.507, 1.52]}
      />
      <mesh
        
        
        geometry={nodes["Light_05_(2)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-1.219, 2.507, 0.809]}
      />
      <mesh
        
        
        geometry={nodes.Light_01.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-2.436, 2.503, 4.497]}
      />
      <mesh
        
        
        geometry={nodes["Light_05_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[1.681, 2.507, 0.809]}
      />
      <mesh
        
        
        geometry={nodes.Light_04.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[1.22, 2.508, 9.968]}
      />
      <mesh
        
        
        geometry={nodes.Light_03.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[4.353, 2.501, 8.562]}
        scale={[1, 0.772, 1]}
      />
      <mesh
        
        
        geometry={nodes.Light_05.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-1.358, 2.504, 8.259]}
      />
      <mesh
        
        
        geometry={nodes.Light_05_1.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[3.38, 5.004, 8.21]}
      />
      <mesh
        
        
        geometry={nodes["Light_05_(1)_1"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-1.33, 5.005, 8.43]}
      />
      <mesh
        
        
        geometry={nodes["Light_05_(2)_1"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[3.902, 5.007, 0.96]}
      />
      <mesh
        
        
        geometry={nodes["Light_05_(3)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[1.57, 5.007, 0.96]}
      />
      <mesh
        
        
        geometry={nodes.Light_02.geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-1.878, 5.008, 1.932]}
      />
      <mesh
        
        
        geometry={nodes["Light_02_(1)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-1.878, 5.008, -0.303]}
      />
      <mesh
        
        
        geometry={nodes["Light_02_(2)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[-2.676, 5.006, 4.61]}
      />
      <mesh
        
        
        geometry={nodes["Light_02_(3)"].geometry}
        material={materials.LowPolyInterior_MAIN}
        position={[4.933, 5.012, 4.61]}
      />
    </group>
  );
}

useGLTF.preload("assets/models/scene1/livingroom/LivingRoom.glb");
