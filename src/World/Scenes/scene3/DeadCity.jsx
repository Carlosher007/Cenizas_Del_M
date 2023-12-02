import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function DeadCity(props) {
  const { nodes, materials } = useGLTF(
    "/assets/models/scene3/dead_city_lower.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.Model001_Material092_7}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_100.geometry}
            material={materials.Model001_Material092_92}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_101.geometry}
            material={materials.Model001_Material092_93}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_102.geometry}
            material={materials.Model001_Material092_94}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_103.geometry}
            material={materials.Model001_Material092_95}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_104.geometry}
            material={materials.Model001_Material092_96}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_105.geometry}
            material={materials.Model001_Material092_97}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.Model001_Material092_8}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.Model001_Material092_9}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.Model001_Material092_10}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.Model001_Material092_11}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.Model001_Material092_12}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.Model001_Material092_13}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.Model001_Material092_14}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.Model001_Material092_15}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19.geometry}
            material={materials.Model001_Material092_16}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Model001_Material092}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials.Model001_Material092_17}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials.Model001_Material092_18}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials.Model001_Material092_19}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23.geometry}
            material={materials.Model001_Material092_20}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials.Model001_Material092_21}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_25.geometry}
            material={materials.Model001_Material092_22}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.Model001_Material092_23}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_27.geometry}
            material={materials.Model001_Material092_24}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials.Model001_Material092_25}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_29.geometry}
            material={materials.Model001_Material092_26}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Model001_Material092_0}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.Model001_Material092_27}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_31.geometry}
            material={materials.Model001_Material092_28}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials.Model001_Material092_29}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_33.geometry}
            material={materials.Model001_Material092_30}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34.geometry}
            material={materials.Model001_Material092_31}
          />
        </RigidBody>

        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_35.geometry}
            material={materials.Model001_Material092_32}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36.geometry}
            material={materials.Model001_Material092_33}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_37.geometry}
            material={materials.Model001_Material092_34}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38.geometry}
            material={materials.Model001_Material092_35}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_39.geometry}
            material={materials.Model001_Material092_36}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Model001_Material092_1}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_40.geometry}
            material={materials.Model001_Material092_37}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_41.geometry}
            material={materials.Model001_Material092_38}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_42.geometry}
            material={materials.Model001_Material092_39}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_43.geometry}
            material={materials.Model001_Material092_40}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_44.geometry}
            material={materials.Model001_Material092_41}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_45.geometry}
            material={materials.Model001_Material092_42}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_46.geometry}
            material={materials.Model001_Material092_43}
          />
        </RigidBody>

        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_47.geometry}
            material={materials.Model001_Material092_44}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_48.geometry}
            material={materials.Model001_Material092_45}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49.geometry}
            material={materials.Model001_Material092_46}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Model001_Material092_2}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_50.geometry}
            material={materials.Model001_Material092_47}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_51.geometry}
            material={materials.Model001_Material092_48}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_52.geometry}
            material={materials.Model001_Material092_49}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53.geometry}
            material={materials.Model001_Material092_50}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_54.geometry}
            material={materials.Model001_Material092_51}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_55.geometry}
            material={materials.Model001_Material092_52}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_56.geometry}
            material={materials.Model001_Material092_53}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_57.geometry}
            material={materials.Model001_Material092_54}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_58.geometry}
            material={materials.Model001_Material092_55}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_59.geometry}
            material={materials.Model001_Material092_56}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Model001_Material092_3}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_60.geometry}
            material={materials.Model001_Material092_57}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_61.geometry}
            material={materials.Merged_materials}
          />
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_62.geometry}
            material={materials.Model001_Material092_58}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_63.geometry}
            material={materials.Model001_Material092_59}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_64.geometry}
            material={materials.Model001_Material092_60}
          />
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_65.geometry}
            material={materials.Model001_Material092_61}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_66.geometry}
            material={materials.Model001_Material092_62}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_67.geometry}
            material={materials.Model001_Material092_63}
          />
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_68.geometry}
            material={materials.Model001_Material092_64}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_69.geometry}
            material={materials.Model001_Material092_65}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.Model001_Material092_4}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_70.geometry}
            material={materials.Model001_Material092_66}
          />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_71.geometry}
            material={materials.Model001_Material092_67}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_72.geometry}
            material={materials.Model001_Material092_68}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_73.geometry}
            material={materials.Model001_Material092_69}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_74.geometry}
            material={materials.Model001_Material092_70}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_75.geometry}
            material={materials.Model001_Material092_71}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_76.geometry}
            material={materials.Model001_Material092_72}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_77.geometry}
            material={materials.Model001_Material092_73}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_78.geometry}
            material={materials.Model001_Material092_73}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_79.geometry}
            material={materials.Model001_Material092_73}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.Model001_Material092_5}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_80.geometry}
            material={materials.Model001_Material092_74}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_81.geometry}
            material={materials.Model001_Material092_75}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_82.geometry}
            material={materials.Model001_Material092_76}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_83.geometry}
            material={materials.Model001_Material092_76}
          />
        </RigidBody>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_84.geometry}
          material={materials.Model001_Material092_76}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_85.geometry}
          material={materials.Model001_Material092_77}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_86.geometry}
          material={materials.Model001_Material092_78}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_87.geometry}
          material={materials.Model001_Material092_79}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_88.geometry}
          material={materials.Model001_Material092_80}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_89.geometry}
          material={materials.Model001_Material092_81}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Model001_Material092_6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_90.geometry}
          material={materials.Model001_Material092_82}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_91.geometry}
          material={materials.Model001_Material092_83}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_92.geometry}
          material={materials.Model001_Material092_84}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_93.geometry}
          material={materials.Model001_Material092_85}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_94.geometry}
          material={materials.Model001_Material092_86}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_95.geometry}
          material={materials.Model001_Material092_87}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_96.geometry}
          material={materials.Model001_Material092_88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_97.geometry}
          material={materials.Model001_Material092_89}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_98.geometry}
          material={materials.Model001_Material092_90}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_99.geometry}
          material={materials.Model001_Material092_91}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/scene3/dead_city_lower.glb");
