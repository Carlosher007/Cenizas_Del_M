/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 dead_city.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

export function DeadCity(props) {
  const { nodes, materials } = useGLTF('/assets/models/scene3/dead_city.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        
        //Andenes
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <CuboidCollider args={[1.625, 0.15, 27]} position={[0.26, 0.8, 10.2]} />
            <CuboidCollider args={[1.625, 0.15, 27]} position={[11.13, 0.8, 10.2]} />
            <CuboidCollider args={[9.3, 0.15, 1.625]} position={[-5, 0.8, -6.72]} />
            <CuboidCollider args={[20, 0.15, 1.625]} position={[23.5, 0.8, -6.72]} />
            <CuboidCollider args={[20.2, 0.15, 1.625]} position={[23.5, 0.8, -17.62]} />
            <CuboidCollider args={[1.625, 0.15, 25]} position={[11.13, 0.8, -35.2]} />
            <CuboidCollider args={[1.625, 0.15, 16]} position={[0.255, 0.8, -40.42]} />
            <CuboidCollider args={[5.3, 0.15, 1.625]} position={[-7.6, 0.8, -17.6]} />
        </mesh>
        //Calle
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <CuboidCollider args={[40, 0.01, 60]} position={[12, 0.75, -12]} />
        </mesh>
        //Paredes
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <CuboidCollider args={[60.625, 3.15, 0.03]} position={[0.26, 0.8, 26.9]} />
            <CuboidCollider args={[60.625, 3.15, 0.03]} position={[0.26, 0.8, -50.9]} />
            <CuboidCollider args={[60.625, 3.15, 0.03]} position={[-11.5, 0.8, -10.9]} rotation={[0,Math.PI/2,0]}/>
            <CuboidCollider args={[60.625, 3.15, 0.03]} position={[36.4, 0.8, -10.9]} rotation={[0,Math.PI/2,0]}/>
            <CuboidCollider args={[10.625, 3.15, 0.03]} position={[29.9, 0.8, -5.7]} />
            <CuboidCollider args={[10.625, 3.15, 0.03]} position={[29.9, 0.8, -18.7]} />
            <CuboidCollider args={[24, 3.15, 0.03]} position={[22.84, 0.8, -34.7]} rotation={[0,Math.PI/2,0]}/>
            <CuboidCollider args={[24, 3.15, 0.03]} position={[22.84, 0.8, 10.4]} rotation={[0,Math.PI/2,0]}/>
        </mesh>
          <mesh geometry={nodes.Object_10.geometry} material={materials.Model001_Material092_7} />
          <mesh geometry={nodes.Object_10001.geometry} material={materials.Model001_Material092_7} />
          <mesh geometry={nodes.Object_10002.geometry} material={materials.Model001_Material092_7} />
          <mesh geometry={nodes.Object_100.geometry} material={materials.Model001_Material092_92} position={[0, 0, 0.079]} />
          <mesh geometry={nodes.Object_100005.geometry} material={materials.Model001_Material092_92} position={[0, 0, 0.079]} />
          <mesh geometry={nodes.Object_100006.geometry} material={materials.Model001_Material092_92} position={[0, 0, 0.079]} />
          <mesh geometry={nodes.Object_101.geometry} material={materials.Model001_Material092_93} />
          <mesh geometry={nodes.Object_102.geometry} material={materials.Model001_Material092_94} position={[0, 0, 0.005]} />   
          <mesh geometry={nodes.Object_103003.geometry} material={materials.Model001_Material092_95} position={[0, 0, -0.004]} />
          <mesh geometry={nodes.Object_103004.geometry} material={materials.Model001_Material092_95} position={[0, 0, -0.004]} />
          <mesh geometry={nodes.Object_103005.geometry} material={materials.Model001_Material092_95} position={[0, 0, -0.004]} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.Model001_Material092_8} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.Model001_Material092_9} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.Model001_Material092_10} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.Model001_Material092_11} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.Model001_Material092_13} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.Model001_Material092_14} />
          <mesh geometry={nodes.Object_18001.geometry} material={materials.Model001_Material092_15} />
          <mesh geometry={nodes.Object_19.geometry} material={materials.Model001_Material092_16} />
          <mesh geometry={nodes.Object_2.geometry} material={materials.Model001_Material092} />
          <mesh geometry={nodes.Object_2001.geometry} material={materials.Model001_Material092} />
          <mesh geometry={nodes.Object_2002.geometry} material={materials.Model001_Material092} />
          <mesh geometry={nodes.Object_2003.geometry} material={materials.Model001_Material092} />
          <mesh geometry={nodes.Object_2004.geometry} material={materials.Model001_Material092} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.Model001_Material092_17} />
          <mesh geometry={nodes.Object_20002.geometry} material={materials.Model001_Material092_17} />
          <mesh geometry={nodes.Object_21.geometry} material={materials.Model001_Material092_18} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.Model001_Material092_19} />
          <mesh geometry={nodes.Object_23.geometry} material={materials.Model001_Material092_20} />
          <mesh geometry={nodes.Object_24.geometry} material={materials.Model001_Material092_21} />
          <mesh geometry={nodes.Object_25.geometry} material={materials.Model001_Material092_22} />
          <mesh geometry={nodes.Object_26.geometry} material={materials.Model001_Material092_23} />
          <mesh geometry={nodes.Object_27.geometry} material={materials.Model001_Material092_24} />
          <mesh geometry={nodes.Object_28.geometry} material={materials.Model001_Material092_25} />
          <mesh geometry={nodes.Object_30.geometry} material={materials.Model001_Material092_27} />
          <mesh geometry={nodes.Object_31.geometry} material={materials.Model001_Material092_28} />
          <mesh geometry={nodes.Object_32.geometry} material={materials.Model001_Material092_29} />
          <mesh geometry={nodes.Object_33.geometry} material={materials.Model001_Material092_30} />
          <mesh geometry={nodes.Object_34.geometry} material={materials.Model001_Material092_31} />
          <mesh geometry={nodes.Object_35.geometry} material={materials.Model001_Material092_32} />
          <mesh geometry={nodes.Object_36.geometry} material={materials.Model001_Material092_33} />
          <mesh geometry={nodes.Object_37.geometry} material={materials.Model001_Material092_34} />
          <mesh geometry={nodes.Object_38.geometry} material={materials.Model001_Material092_35} />
          <mesh geometry={nodes.Object_39.geometry} material={materials.Model001_Material092_36} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.Model001_Material092_1} />
          <mesh geometry={nodes.Object_40.geometry} material={materials.Model001_Material092_37} />
          <mesh geometry={nodes.Object_41.geometry} material={materials.Model001_Material092_38} />
          <mesh geometry={nodes.Object_42.geometry} material={materials.Model001_Material092_39} />
          <mesh geometry={nodes.Object_44.geometry} material={materials.Model001_Material092_41} />
          <mesh geometry={nodes.Object_46.geometry} material={materials.Model001_Material092_43} />
          <mesh geometry={nodes.Object_48.geometry} material={materials.Model001_Material092_45} position={[0, 0, 0.224]} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.Model001_Material092_2} />
          <mesh geometry={nodes.Object_50.geometry} material={materials.Model001_Material092_47} position={[0, 0, 0.177]} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.Model001_Material092_3} />
          <mesh geometry={nodes.Object_61.geometry} material={materials.Merged_materials} />
          <mesh geometry={nodes.Object_62.geometry} material={materials.Model001_Material092_58} position={[0, 0, 0.18]} />
          <mesh geometry={nodes.Object_63.geometry} material={materials.Model001_Material092_59} position={[0, 0, 3.829]} />
          <mesh geometry={nodes.Object_64.geometry} material={materials.Model001_Material092_60} position={[0, 0, 0.072]} />
          <mesh geometry={nodes.Object_65.geometry} material={materials.Model001_Material092_61} position={[0, 0, 0.176]} />
          <mesh geometry={nodes.Object_67.geometry} material={materials.Model001_Material092_63} position={[0, 0, 0.147]} />
          <mesh geometry={nodes.Object_67001.geometry} material={materials.Model001_Material092_63} position={[0, 0, 0.147]} />
          <mesh geometry={nodes.Object_67002.geometry} material={materials.Model001_Material092_63} position={[0, 0, 0.147]} />
          <mesh geometry={nodes.Object_67003.geometry} material={materials.Model001_Material092_63} position={[-8.741, -23.163, -0.093]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Object_67004.geometry} material={materials.Model001_Material092_63} position={[37.554, 8.708, 0.126]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Object_67005.geometry} material={materials.Model001_Material092_63} position={[-0.483, 29.818, -0.298]} />
          <mesh geometry={nodes.Object_67006.geometry} material={materials.Model001_Material092_63} position={[0, 0, -0.316]} />
          <mesh geometry={nodes.Object_67016.geometry} material={materials.Model001_Material092_63} position={[-3.449, 93.827, 0.163]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Object_68.geometry} material={materials.Model001_Material092_64} position={[0, 0, 0.18]} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.Model001_Material092_4} />
          <mesh geometry={nodes.Object_70.geometry} material={materials.Model001_Material092_66} position={[0, 0, 0.011]} />
          <mesh geometry={nodes.Object_71.geometry} material={materials.Model001_Material092_67} position={[0, 0, 0.163]} />
          <mesh geometry={nodes.Object_72.geometry} material={materials.Model001_Material092_68} />
          <mesh geometry={nodes.Object_75.geometry} material={materials.Model001_Material092_71} />
          <mesh geometry={nodes.Object_76.geometry} material={materials.Model001_Material092_72} />
          <mesh geometry={nodes.Object_76001.geometry} material={materials.Model001_Material092_72} />
          <mesh geometry={nodes.Object_77.geometry} material={materials.Model001_Material092_73} />
          <mesh geometry={nodes.Object_79.geometry} material={materials.Model001_Material092_73} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.Model001_Material092_5} />
          <mesh geometry={nodes.Object_80.geometry} material={materials.Model001_Material092_74} />
          <mesh geometry={nodes.Object_80001.geometry} material={materials.Model001_Material092_74} />
          <mesh geometry={nodes.Object_80002.geometry} material={materials.Model001_Material092_74} />
          <mesh geometry={nodes.Object_81.geometry} material={materials.Model001_Material092_75} />
          <mesh geometry={nodes.Object_81001.geometry} material={materials.Model001_Material092_75} />
          <mesh geometry={nodes.Object_81002.geometry} material={materials.Model001_Material092_75} />
          <mesh geometry={nodes.Object_81003.geometry} material={materials.Model001_Material092_75} />
          <mesh geometry={nodes.Object_81004.geometry} material={materials.Model001_Material092_75} />
          <mesh geometry={nodes.Object_81005.geometry} material={materials.Model001_Material092_75} />
          <mesh geometry={nodes.Object_81006.geometry} material={materials.Model001_Material092_75} />
          <mesh geometry={nodes.Object_81007.geometry} material={materials.Model001_Material092_75} />
          <mesh geometry={nodes.Object_81008.geometry} material={materials.Model001_Material092_75} />
          <mesh geometry={nodes.Object_81009.geometry} material={materials.Model001_Material092_75} />
          <mesh geometry={nodes.Object_81011.geometry} material={materials.Model001_Material092_75} position={[0.055, -10.998, 0.058]} />
          <mesh geometry={nodes.Object_81024.geometry} material={materials.Model001_Material092_75} />
          <mesh geometry={nodes.Object_82.geometry} material={materials.Model001_Material092_76} />
          <mesh geometry={nodes.Object_82002.geometry} material={materials.Model001_Material092_76} />
          <mesh geometry={nodes.Object_83.geometry} material={materials.Model001_Material092_76} />
          <mesh geometry={nodes.Object_83001.geometry} material={materials.Model001_Material092_76} position={[0.055, -10.998, 0.058]} />
          <mesh geometry={nodes.Object_85.geometry} material={materials.Model001_Material092_77} />
          <mesh geometry={nodes.Object_86.geometry} material={materials.Model001_Material092_78} />
          <mesh geometry={nodes.Object_87.geometry} material={materials.Model001_Material092_79} />
          <mesh geometry={nodes.Object_88.geometry} material={materials.Model001_Material092_80} />
          <mesh geometry={nodes.Object_89.geometry} material={materials.Model001_Material092_81} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.Model001_Material092_6} />
          <mesh geometry={nodes.Object_90001.geometry} material={materials.Model001_Material092_82} />
          <mesh geometry={nodes.Object_90002.geometry} material={materials.Model001_Material092_82} />
          <mesh geometry={nodes.Object_90003.geometry} material={materials.Model001_Material092_82} />
          <mesh geometry={nodes.Object_90004.geometry} material={materials.Model001_Material092_82} />
          <mesh geometry={nodes.Object_90005.geometry} material={materials.Model001_Material092_82} />
          <mesh geometry={nodes.Object_90006.geometry} material={materials.Model001_Material092_82} />
          <mesh geometry={nodes.Object_90007.geometry} material={materials.Model001_Material092_82} />
          <mesh geometry={nodes.Object_90008.geometry} material={materials.Model001_Material092_82} />
          <mesh geometry={nodes.Object_90009.geometry} material={materials.Model001_Material092_82} />
          <mesh geometry={nodes.Object_91.geometry} material={materials.Model001_Material092_83} />
          <mesh geometry={nodes.Object_94.geometry} material={materials.Model001_Material092_86} />
          <mesh geometry={nodes.Object_95.geometry} material={materials.Model001_Material092_87} />
          <mesh geometry={nodes.Object_97.geometry} material={materials.Model001_Material092_89} />
          <mesh geometry={nodes.Object_98.geometry} material={materials.Model001_Material092_90} />
          <mesh geometry={nodes.Object_99.geometry} material={materials.Model001_Material092_91} position={[0, 0, 0.125]} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_10003.geometry} material={materials['Model001_Material092_7.001']} />
          <mesh geometry={nodes.Object_10004.geometry} material={materials['Model001_Material092_7.001']} />
          <mesh geometry={nodes.Object_10005.geometry} material={materials['Model001_Material092_7.001']} />
          <mesh geometry={nodes.Object_100001.geometry} material={materials['Model001_Material092_92.001']} position={[0, 0, 0.079]} />
          <mesh geometry={nodes.Object_100002.geometry} material={materials['Model001_Material092_92.001']} position={[0, 0, 0.079]} />
          <mesh geometry={nodes.Object_100003.geometry} material={materials['Model001_Material092_92.001']} position={[0, 0, 0.079]} />
          <mesh geometry={nodes.Object_101001.geometry} material={materials['Model001_Material092_93.001']} />
          <mesh geometry={nodes.Object_102001.geometry} material={materials['Model001_Material092_94.001']} position={[0, 0, 0.005]} />
          <mesh geometry={nodes.Object_103001.geometry} material={materials['Model001_Material092_95.001']} position={[0, 0, -0.004]} />
          <mesh geometry={nodes.Object_11001.geometry} material={materials['Model001_Material092_8.001']} />
          <mesh geometry={nodes.Object_13001.geometry} material={materials['Model001_Material092_10.001']} />
          <mesh geometry={nodes.Object_14001.geometry} material={materials['Model001_Material092_11.001']} />
          <mesh geometry={nodes.Object_16001.geometry} material={materials['Model001_Material092_13.001']} />
          <mesh geometry={nodes.Object_17001.geometry} material={materials['Model001_Material092_14.001']} />
          <mesh geometry={nodes.Object_18003.geometry} material={materials['Model001_Material092_15.001']} />
          <mesh geometry={nodes.Object_19001.geometry} material={materials['Model001_Material092_16.001']} />
          <mesh geometry={nodes.Object_2005.geometry} material={materials['Model001_Material092.001']} />
          <mesh geometry={nodes.Object_2006.geometry} material={materials['Model001_Material092.001']} />
          <mesh geometry={nodes.Object_2007.geometry} material={materials['Model001_Material092.001']} />
          <mesh geometry={nodes.Object_2008.geometry} material={materials['Model001_Material092.001']} />
          <mesh geometry={nodes.Object_2009.geometry} material={materials['Model001_Material092.001']} />
          <mesh geometry={nodes.Object_20001.geometry} material={materials['Model001_Material092_17.001']} />
          <mesh geometry={nodes.Object_21001.geometry} material={materials['Model001_Material092_18.001']} />
          <mesh geometry={nodes.Object_22001.geometry} material={materials['Model001_Material092_19.001']} />
          <mesh geometry={nodes.Object_23001.geometry} material={materials['Model001_Material092_20.001']} />
          <mesh geometry={nodes.Object_24001.geometry} material={materials['Model001_Material092_21.001']} />
          <mesh geometry={nodes.Object_25001.geometry} material={materials['Model001_Material092_22.001']} />
          <mesh geometry={nodes.Object_26001.geometry} material={materials['Model001_Material092_23.001']} />
          <mesh geometry={nodes.Object_27001.geometry} material={materials['Model001_Material092_24.001']} />
          <mesh geometry={nodes.Object_28001.geometry} material={materials['Model001_Material092_25.001']} />
          <mesh geometry={nodes.Object_29001.geometry} material={materials['Model001_Material092_26.001']} />
          <mesh geometry={nodes.Object_3001.geometry} material={materials['Model001_Material092_0.001']} />
          <mesh geometry={nodes.Object_30001.geometry} material={materials['Model001_Material092_27.001']} />
          <mesh geometry={nodes.Object_31001.geometry} material={materials['Model001_Material092_28.001']} />
          <mesh geometry={nodes.Object_32001.geometry} material={materials['Model001_Material092_29.001']} />
          <mesh geometry={nodes.Object_33001.geometry} material={materials['Model001_Material092_30.001']} />
          <mesh geometry={nodes.Object_34001.geometry} material={materials['Model001_Material092_31.001']} />
          <mesh geometry={nodes.Object_34002.geometry} material={materials['Model001_Material092_31.001']} position={[0, 0, 0.077]} />
          <mesh geometry={nodes.Object_35001.geometry} material={materials['Model001_Material092_32.001']} />
          <mesh geometry={nodes.Object_36001.geometry} material={materials['Model001_Material092_33.001']} />
          <mesh geometry={nodes.Object_37001.geometry} material={materials['Model001_Material092_34.001']} />
          <mesh geometry={nodes.Object_38001.geometry} material={materials['Model001_Material092_35.001']} />
          <mesh geometry={nodes.Object_39001.geometry} material={materials['Model001_Material092_36.001']} />
          <mesh geometry={nodes.Object_4001.geometry} material={materials['Model001_Material092_1.001']} />
          <mesh geometry={nodes.Object_40001.geometry} material={materials['Model001_Material092_37.001']} />
          <mesh geometry={nodes.Object_41001.geometry} material={materials['Model001_Material092_38.001']} />
          <mesh geometry={nodes.Object_42001.geometry} material={materials['Model001_Material092_39.001']} />
          <mesh geometry={nodes.Object_44001.geometry} material={materials['Model001_Material092_41.001']} />
          <mesh geometry={nodes.Object_45001.geometry} material={materials['Model001_Material092_42.001']} />
          <mesh geometry={nodes.Object_46001.geometry} material={materials['Model001_Material092_43.001']} />
          <mesh geometry={nodes.Object_48001.geometry} material={materials['Model001_Material092_45.001']} position={[0, 0, 0.224]} />
          <mesh geometry={nodes.Object_5001.geometry} material={materials['Model001_Material092_2.001']} />
          <mesh geometry={nodes.Object_50001.geometry} material={materials['Model001_Material092_47.001']} position={[0, 0, 0.177]} />
          <mesh geometry={nodes.Object_6001.geometry} material={materials['Model001_Material092_3.001']} />
          <mesh geometry={nodes.Object_61001.geometry} material={materials['Merged_materials.001']} />
          <mesh geometry={nodes.Object_62001.geometry} material={materials['Model001_Material092_58.001']} position={[0, 0, 0.143]} />
          <mesh geometry={nodes.Object_63001.geometry} material={materials['Model001_Material092_59.001']} position={[0, 0, 3.829]} />
          <mesh geometry={nodes.Object_64001.geometry} material={materials['Model001_Material092_60.001']} position={[0, 0, 0.072]} />
          <mesh geometry={nodes.Object_65001.geometry} material={materials['Model001_Material092_61.001']} position={[0, 0, 0.176]} />
          <mesh geometry={nodes.Object_67007.geometry} material={materials['Model001_Material092_63.001']} position={[0, 0, 0.147]} />
          <mesh geometry={nodes.Object_67008.geometry} material={materials['Model001_Material092_63.001']} position={[0, 0, 0.147]} />
          <mesh geometry={nodes.Object_67009.geometry} material={materials['Model001_Material092_63.001']} position={[0, 0, 0.147]} />
          <mesh geometry={nodes.Object_67010.geometry} material={materials['Model001_Material092_63.001']} position={[-8.741, -23.163, -0.093]} rotation={[0, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Object_67011.geometry} material={materials['Model001_Material092_63.001']} position={[37.554, 8.708, 0.126]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Object_67012.geometry} material={materials['Model001_Material092_63.001']} position={[-0.483, 29.818, -0.298]} />
          <mesh geometry={nodes.Object_67013.geometry} material={materials['Model001_Material092_63.001']} position={[0, 0, -0.316]} />
          <mesh geometry={nodes.Object_67014.geometry} material={materials['Model001_Material092_63.001']} position={[17.036, -32.012, 0.238]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Object_67015.geometry} material={materials['Model001_Material092_63.001']} position={[20.735, -32.037, 0.238]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Object_68001.geometry} material={materials['Model001_Material092_64.001']} position={[0, 0, 0.18]} />
          <mesh geometry={nodes.Object_7001.geometry} material={materials['Model001_Material092_4.001']} />
          <mesh geometry={nodes.Object_70001.geometry} material={materials['Model001_Material092_66.001']} position={[0, 0, 0.011]} />
          <mesh geometry={nodes.Object_71001.geometry} material={materials['Model001_Material092_67.001']} position={[0, 0, 0.145]} />
          <mesh geometry={nodes.Object_72001.geometry} material={materials['Model001_Material092_68.001']} />
          <mesh geometry={nodes.Object_75001.geometry} material={materials['Model001_Material092_71.001']} />
          <mesh geometry={nodes.Object_76002.geometry} material={materials['Model001_Material092_72.001']} />
          <mesh geometry={nodes.Object_77001.geometry} material={materials['Model001_Material092_73.001']} />
          <mesh geometry={nodes.Object_78001.geometry} material={materials['Model001_Material092_73.001']} />
          <mesh geometry={nodes.Object_79001.geometry} material={materials['Model001_Material092_73.001']} />
          <mesh geometry={nodes.Object_8001.geometry} material={materials['Model001_Material092_5.001']} />
          <mesh geometry={nodes.Object_80003.geometry} material={materials['Model001_Material092_74.001']} />
          <mesh geometry={nodes.Object_80004.geometry} material={materials['Model001_Material092_74.001']} />
          <mesh geometry={nodes.Object_80005.geometry} material={materials['Model001_Material092_74.001']} />
          <mesh geometry={nodes.Object_81012.geometry} material={materials['Model001_Material092_75.001']} />
          <mesh geometry={nodes.Object_81013.geometry} material={materials['Model001_Material092_75.001']} />
          <mesh geometry={nodes.Object_81014.geometry} material={materials['Model001_Material092_75.001']} />
          <mesh geometry={nodes.Object_81015.geometry} material={materials['Model001_Material092_75.001']} />
          <mesh geometry={nodes.Object_81016.geometry} material={materials['Model001_Material092_75.001']} />
          <mesh geometry={nodes.Object_81017.geometry} material={materials['Model001_Material092_75.001']} />
          <mesh geometry={nodes.Object_81018.geometry} material={materials['Model001_Material092_75.001']} />
          <mesh geometry={nodes.Object_81019.geometry} material={materials['Model001_Material092_75.001']} />
          <mesh geometry={nodes.Object_81020.geometry} material={materials['Model001_Material092_75.001']} />
          <mesh geometry={nodes.Object_81021.geometry} material={materials['Model001_Material092_75.001']} />
          <mesh geometry={nodes.Object_81023.geometry} material={materials['Model001_Material092_75.001']} position={[0.055, -10.998, 0.058]} />
          <mesh geometry={nodes.Object_81025.geometry} material={materials['Model001_Material092_75.001']} />
          <mesh geometry={nodes.Object_82001.geometry} material={materials['Model001_Material092_76.001']} />
          <mesh geometry={nodes.Object_83002.geometry} material={materials['Model001_Material092_76.001']} />
          <mesh geometry={nodes.Object_83003.geometry} material={materials['Model001_Material092_76.001']} position={[0.055, -10.998, 0.058]} />
          <mesh geometry={nodes.Object_85001.geometry} material={materials['Model001_Material092_77.001']} />
          <mesh geometry={nodes.Object_86001.geometry} material={materials['Model001_Material092_78.001']} />
          <mesh geometry={nodes.Object_87001.geometry} material={materials['Model001_Material092_79.001']} />
          <mesh geometry={nodes.Object_88001.geometry} material={materials['Model001_Material092_80.001']} />
          <mesh geometry={nodes.Object_89001.geometry} material={materials['Model001_Material092_81.001']} />
          <mesh geometry={nodes.Object_9001.geometry} material={materials['Model001_Material092_6.001']} />
          <mesh geometry={nodes.Object_90011.geometry} material={materials['Model001_Material092_82.001']} />
          <mesh geometry={nodes.Object_90012.geometry} material={materials['Model001_Material092_82.001']} />
          <mesh geometry={nodes.Object_90013.geometry} material={materials['Model001_Material092_82.001']} />
          <mesh geometry={nodes.Object_90014.geometry} material={materials['Model001_Material092_82.001']} />
          <mesh geometry={nodes.Object_90015.geometry} material={materials['Model001_Material092_82.001']} />
          <mesh geometry={nodes.Object_90016.geometry} material={materials['Model001_Material092_82.001']} />
          <mesh geometry={nodes.Object_90017.geometry} material={materials['Model001_Material092_82.001']} />
          <mesh geometry={nodes.Object_90018.geometry} material={materials['Model001_Material092_82.001']} />
          <mesh geometry={nodes.Object_90019.geometry} material={materials['Model001_Material092_82.001']} />
          <mesh geometry={nodes.Object_91001.geometry} material={materials['Model001_Material092_83.001']} />
          <mesh geometry={nodes.Object_94001.geometry} material={materials['Model001_Material092_86.001']} />
          <mesh geometry={nodes.Object_95001.geometry} material={materials['Model001_Material092_87.001']} />
          <mesh geometry={nodes.Object_97001.geometry} material={materials['Model001_Material092_89.001']} />        
          <mesh geometry={nodes.Object_98001.geometry} material={materials['Model001_Material092_90.001']} />
          <mesh geometry={nodes.Object_99001.geometry} material={materials['Model001_Material092_91.001']} position={[0, 0, 0.125]} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/scene3/dead_city.glb')
