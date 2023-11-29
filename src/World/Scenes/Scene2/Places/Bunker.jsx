import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bunker(props) {
  const { nodes, materials } = useGLTF("/assets/models/scene2/bunker/bunker.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.033, -1.957, -0.568]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <group position={[202.547, -0.001, -159.561]}>
          <group
            position={[186.03, 920.502, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[280.865, -0.001, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_med_lab_mut_box_012_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, -0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-299.164, 920.502, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[280.865, -0.002, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_med_lab_mut_box_013_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, -0.002, 0]}
              />
            </group>
          </group>
          <group
            position={[-784.357, 920.502, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[280.864, -0.001, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_med_lab_mut_box_014_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, -0.002, 0]}
              />
            </group>
          </group>
          <group
            position={[-784.357, -948.527, -139.996]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[280.864, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_med_lab_mut_box_015_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, -0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-299.164, -948.527, -139.996]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[280.864, 0.002, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_med_lab_mut_box_016_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[186.029, -948.527, -139.996]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[280.864, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_med_lab_mut_box_017_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-1400.274, 649.758, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_312_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[-1000.274, 1249.758, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_313_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.001, 0]}
            />
          </group>
          <group position={[397.212, 1247.727, -139.995]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_314_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.002, 0, 0]}
            />
          </group>
          <group position={[1397.212, 647.73, -139.994]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_315_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[1395.175, -649.76, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_316_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0.002, 0]}
            />
          </group>
          <group
            position={[395.177, -1249.76, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_317_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.002, 0]}
            />
          </group>
          <group
            position={[-1002.309, -1247.728, -139.996]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_318_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.002, 0, 0]}
            />
          </group>
          <group
            position={[-1402.308, -647.729, -139.996]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_319_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0.001, 0, 0]}
            />
          </group>
          <group
            position={[-1185.927, 829.418, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_02_200_305_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[580.829, -829.42, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_02_200_307_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0.001, 0]}
            />
          </group>
          <group
            position={[-1181.968, -833.38, -139.997]}
            rotation={[0, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_02_200_308_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.002, 0, 0]}
            />
          </group>
          <group
            position={[1468.674, -169.088, -139.995]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[147.541, 0.003, 0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_sml_door_01_200_204_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, 0.002, 0]}
              />
            </group>
          </group>
          <group position={[-801.01, 1321.222, -139.995]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_330_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0.001, 0, 0]}
            />
          </group>
          <group position={[-401.01, 1321.222, -139.995]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_331_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0.001, 0, 0]}
            />
          </group>
          <group position={[795.917, 721.225, -139.994]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_333_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[258.891, 0, 0]}
            />
          </group>
          <group position={[1198.985, 721.225, -139.995]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_334_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[1468.674, 451.539, -139.994]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[258.892, 0.003, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_sml_wall_01_200_335_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, 0.002, 0]}
              />
            </group>
          </group>
          <group
            position={[1198.983, -721.221, -139.997]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_337_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[258.892, 0, 0]}
            />
          </group>
          <group
            position={[795.917, -721.221, -139.997]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_338_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0, 0]}
            />
          </group>
          <group
            position={[468.671, -1048.465, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[258.892, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_sml_wall_01_200_339_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group position={[195.917, 1321.222, -139.995]}>
            <group position={[258.891, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_sml_wall_01_200_341_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[-0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[195.917, -1321.222, -139.997]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_342_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[-204.083, -1321.221, -139.997]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_343_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.002, 0, 0]}
            />
          </group>
          <group
            position={[-604.083, -1321.222, -139.997]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_344_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[-1073.77, -1051.536, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[258.892, -0.002, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_sml_wall_01_200_345_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, 0.001, 0]}
              />
            </group>
          </group>
          <group position={[-600.624, 1333.725, -139.996]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_337_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.002, 0, 0]}
            />
          </group>
          <group
            position={[1481.178, 248.078, -139.994]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_338_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0.001, 0]}
            />
          </group>
          <group position={[-200.619, 1333.727, -139.995]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_339_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0.001, 0, 0]}
            />
          </group>
          <group
            position={[1481.175, -251.926, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_340_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0.001, 0]}
            />
          </group>
          <group position={[999.377, 733.73, -139.995]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_341_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[995.526, -733.727, -139.997]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_342_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0.001, 0, 0]}
            />
          </group>
          <group
            position={[-4.474, -1333.727, -139.997]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_343_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[-404.474, -1333.726, -139.997]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_344_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[-804.474, -1333.727, -139.997]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_345_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0, 0]}
            />
          </group>
          <group
            position={[-1486.275, 451.923, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_346_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[-1486.274, -448.078, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_347_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[-1486.275, 251.923, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_348_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[-1486.274, -248.078, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_349_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0.001, -0.001, 0]}
            />
          </group>
          <group
            position={[-1486.274, -48.078, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_350_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[-1486.275, 51.923, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_351_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[1397.455, 250.001, -159.997]}
            rotation={[0, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box697_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[186.03, 920.502, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[280.865, -0.001, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass011_glass_0.geometry}
                material={materials.glass}
                position={[0, -0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-299.164, 920.502, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[280.865, -0.002, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass012_glass_0.geometry}
                material={materials.glass}
                position={[0, -0.002, 0]}
              />
            </group>
          </group>
          <group
            position={[-784.357, 920.502, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[280.864, -0.001, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass013_glass_0.geometry}
                material={materials.glass}
                position={[0, -0.002, 0]}
              />
            </group>
          </group>
          <group
            position={[-784.357, -948.527, -139.996]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[280.864, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass014_glass_0.geometry}
                material={materials.glass}
                position={[0, -0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-299.164, -948.527, -139.996]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[280.864, 0.002, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass015_glass_0.geometry}
                material={materials.glass}
                position={[0, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[186.029, -948.527, -139.996]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[280.864, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass016_glass_0.geometry}
                material={materials.glass}
                position={[0, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[1468.674, -138.408, -139.995]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[147.541, 0.003, 0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object007_base_mat_0.geometry}
                material={materials["base_mat.001"]}
                position={[0, 0.002, 0]}
              />
            </group>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_corner_02_200_306_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[576.874, 833.38, -139.995]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_01_200_329_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[-1073.771, 1051.532, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_01_200_332_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[-1.014, 1321.222, -139.995]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_01_200_336_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[1468.671, -451.535, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_01_200_340_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[468.674, 1048.467, -139.995]}
            rotation={[0, 0, -Math.PI / 2]}
          />
        </group>
        <group position={[0, 0.001, 139.997]}>
          <group
            position={[-96.615, -948.527, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[280.865, 0.002, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.back_wall_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[388.579, -948.527, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.back_wall001_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[280.865, 0, 0]}
            />
          </group>
          <group
            position={[388.579, 920.502, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[280.864, -0.001, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_med_lab_mut_box_003_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, -0.002, 0]}
              />
            </group>
          </group>
          <group
            position={[-96.615, 920.502, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[280.864, -0.002, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_med_lab_mut_box_006_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, -0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-581.81, 920.501, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[280.864, -0.001, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_med_lab_mut_box_008_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, -0.002, 0]}
              />
            </group>
          </group>
          <group
            position={[-581.81, -948.526, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[280.865, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_med_lab_mut_box_009_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, -0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-96.615, -948.527, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[280.865, 0.002, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_med_lab_mut_box_04_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[388.579, -948.527, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_med_lab_mut_box_05_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[280.865, 0, 0]}
            />
          </group>
          <group
            position={[-1197.727, 649.758, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_302_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0.001, 0]}
            />
          </group>
          <group
            position={[-797.728, 1249.758, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_303_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.001, 0]}
            />
          </group>
          <group position={[599.761, 1247.727, -139.996]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_304_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.002, 0, 0]}
            />
          </group>
          <group position={[1599.761, 647.729, -139.995]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_305_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.002, 0, 0]}
            />
          </group>
          <group
            position={[1597.722, -649.761, -139.998]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_306_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0.002, 0]}
            />
          </group>
          <group
            position={[597.725, -1249.76, -139.998]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_307_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[-799.762, -1247.727, -139.998]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_308_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.002, 0, 0]}
            />
          </group>
          <group
            position={[-1199.76, -647.73, -139.997]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_309_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0.002, 0, 0]}
            />
          </group>
          <group
            position={[-1599.761, -247.729, -139.996]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_310_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[-1597.727, 249.758, -139.996]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_01_200_311_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.002, 0]}
            />
          </group>
          <group
            position={[-983.379, 829.417, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_02_200_301_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0.001, 0]}
            />
          </group>
          <group
            position={[783.376, -829.42, -139.998]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_02_200_303_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0.001, 0]}
            />
          </group>
          <group
            position={[-979.42, -833.38, -139.998]}
            rotation={[0, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_corner_02_200_304_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0.001, 0, 0]}
            />
          </group>
          <group
            position={[1671.222, -169.087, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[147.541, 0.002, 0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_sml_door_01_200_201_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, 0.002, 0]}
              />
            </group>
          </group>
          <group
            position={[-1671.222, 169.083, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_door_01_200_203_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[147.541, 0.002, 0.001]}
            />
          </group>
          <group
            position={[-1271.227, 316.62, -139.998]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_door_02_200_701_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, -0.001, 0]}
            />
          </group>
          <group position={[-598.465, 1321.222, -139.996]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_307_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.002, 0, 0]}
            />
          </group>
          <group position={[201.535, 1321.222, -139.996]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_309_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0.001, 0, 0]}
            />
          </group>
          <group position={[998.465, 721.224, -139.996]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_311_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[258.892, 0, 0]}
            />
          </group>
          <group position={[1401.533, 721.224, -139.996]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_312_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[1671.222, 451.539, -139.995]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[258.892, 0.002, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_sml_wall_01_200_315_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, 0.002, 0]}
              />
            </group>
          </group>
          <group
            position={[1671.219, -451.535, -139.999]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_316_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0.001, 0]}
            />
          </group>
          <group
            position={[1401.532, -721.222, -139.998]}
            rotation={[0, 0, Math.PI]}
          >
            <group position={[258.892, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_sml_wall_01_200_317_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[-0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[998.464, -721.222, -139.998]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_318_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[671.221, -1048.465, -139.998]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[258.891, -0.001, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_sml_wall_01_200_320_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, -0.001, 0]}
              />
            </group>
          </group>
          <group position={[398.465, 1321.222, -139.997]}>
            <group position={[258.891, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bld_sml_wall_01_200_324_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[-0.002, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[398.464, -1321.221, -139.998]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_325_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[-871.222, -1051.536, -139.998]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_01_200_328_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[258.892, -0.002, 0]}
            />
          </group>
          <group position={[-398.076, 1333.725, -139.997]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_308_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[1683.727, 248.078, -139.996]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_310_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0.001, 0]}
            />
          </group>
          <group
            position={[1683.724, -251.926, -139.998]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_317_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0.002, 0]}
            />
          </group>
          <group position={[1201.926, 733.73, -139.996]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_320_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.002, 0, 0]}
            />
          </group>
          <group
            position={[198.073, -1333.727, -139.998]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_322_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0.001, 0]}
            />
          </group>
          <group
            position={[-601.927, -1333.727, -139.998]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_326_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[-1283.727, -448.078, -139.998]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_334_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0.001, 0]}
            />
          </group>
          <group position={[-1398.075, 333.725, -139.996]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bld_sml_wall_02_200_336_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group
            position={[-96.615, -948.527, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[280.865, 0.002, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass_glass_0.geometry}
                material={materials.glass}
                position={[0, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[388.579, 920.502, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[280.864, -0.001, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass004_glass_0.geometry}
                material={materials.glass}
                position={[0, -0.002, 0]}
              />
            </group>
          </group>
          <group
            position={[-96.615, 920.502, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[280.864, -0.002, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass005_glass_0.geometry}
                material={materials.glass}
                position={[0, -0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-581.81, 920.501, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[280.864, -0.001, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass007_glass_0.geometry}
                material={materials.glass}
                position={[0, -0.002, 0]}
              />
            </group>
          </group>
          <group
            position={[-581.81, -948.526, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[280.865, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass008_glass_0.geometry}
                material={materials.glass}
                position={[0, -0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[388.579, -948.527, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.glass010_glass_0.geometry}
              material={materials.glass}
              position={[280.865, 0, 0]}
            />
          </group>
          <group
            position={[276.668, -1017.626, -140.436]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.glass_bed_base_mat_0.geometry}
              material={materials.base_mat}
              position={[0, 0, 0]}
            />
          </group>
          <group
            position={[-200.877, -1017.626, -140.436]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.glass_bed001_base_mat_0.geometry}
              material={materials.base_mat}
              position={[0, 0, 0]}
            />
          </group>
          <group
            position={[-682.556, -1017.626, -140.436]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.glass_bed002_base_mat_0.geometry}
              material={materials.base_mat}
              position={[0, 0, 0]}
            />
          </group>
          <group
            position={[-468.134, 1007.515, -140.436]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.glass_bed003_base_mat_0.geometry}
              material={materials.base_mat}
              position={[0, 0.002, 0]}
            />
          </group>
          <group
            position={[9.412, 1007.515, -140.436]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.glass_bed004_base_mat_0.geometry}
              material={materials.base_mat}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[1671.222, -138.409, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[147.541, 0.002, 0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object001_base_mat_0.geometry}
                material={materials["base_mat.001"]}
                position={[0.001, 0.002, 0]}
              />
            </group>
          </group>
          <group
            position={[276.668, -1017.626, -140.436]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.props_med_lab_mut_box_01_120x107_base_mat_0.geometry
              }
              material={materials.base_mat}
              position={[0, 0, 0]}
            />
          </group>
          <group
            position={[-200.877, -1017.626, -140.436]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.props_med_lab_mut_box_01_120x108_base_mat_0.geometry
              }
              material={materials.base_mat}
              position={[0, 0, 0]}
            />
          </group>
          <group
            position={[-682.556, -1017.626, -140.436]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.props_med_lab_mut_box_01_120x109_base_mat_0.geometry
              }
              material={materials.base_mat}
              position={[0, 0, 0]}
            />
          </group>
          <group
            position={[-468.134, 1007.515, -140.436]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.props_med_lab_mut_box_01_120x110_base_mat_0.geometry
              }
              material={materials.base_mat}
              position={[0, 0.002, 0]}
            />
          </group>
          <group
            position={[9.412, 1007.515, -140.436]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.props_med_lab_mut_box_01_120x111_base_mat_0.geometry
              }
              material={materials.base_mat}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[388.579, -948.527, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.props_sml_door_01_open_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[280.865, 0, 0]}
            />
          </group>
          <group
            position={[-20.334, -1094.126, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[8.452, 34.116, 120]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.props_sml_info_table_003_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[-502.014, -1094.126, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <group position={[8.452, 34.116, 120]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.props_sml_info_table_004_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[-171.13, 1084.016, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.props_sml_info_table_005_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[8.452, 34.115, 120]}
            />
          </group>
          <group
            position={[310.549, 1084.016, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[8.452, 34.113, 120]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.props_sml_info_table_006_base_mat_0.geometry}
                material={materials["Material.002"]}
                position={[0, -0.003, 0]}
              />
            </group>
          </group>
          <group
            position={[-648.676, 1084.016, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.props_sml_info_table_007_base_mat_0.geometry}
              material={materials["Material.001"]}
              position={[8.452, 34.115, 120]}
            />
          </group>
          <group
            position={[457.211, -1094.126, -139.997]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.props_sml_info_table_02_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[8.452, 34.115, 120]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_corner_02_200_302_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[779.421, 833.38, -139.996]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_01_200_303_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[-871.223, 1051.532, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_01_200_308_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[-198.465, 1321.222, -139.996]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_01_200_323_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[671.221, 1048.467, -139.996]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_01_200_326_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[-1.535, -1321.221, -139.998]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_01_200_327_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[-401.536, -1321.222, -139.998]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_02_200_312_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[1.926, 1333.727, -139.996]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_02_200_321_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[1198.073, -733.727, -139.998]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_02_200_324_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[-201.926, -1333.726, -139.998]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_02_200_333_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[-1283.727, 451.923, -139.997]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bld_sml_wall_02_200_335_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[-1401.927, -333.729, -139.996]}
            rotation={[0, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box628_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[-1399.996, -250, -155.44]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.glass_bed005_base_mat_0.geometry}
            material={materials.base_mat}
            position={[491.092, 1007.515, -140.436]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes.props_med_lab_mut_box_01_120x112_base_mat_0.geometry
            }
            material={materials.base_mat}
            position={[491.092, 1007.515, -140.436]}
            rotation={[0, 0, Math.PI / 2]}
          />
        </group>
      </group>
      <group
        position={[-18.205, -2.458, -0.568]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bld_sml_wall_door_10__base_mat_0.geometry}
          material={materials["Material.002"]}
          position={[0, 0.001, 0]}
        />
      </group>
      <group
        position={[3.034, -1.957, -4.321]}
        rotation={[-1.222, 0, -Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail092_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, 0.001, 0]}
        />
      </group>
      <group
        position={[1.703, -1.957, -4.321]}
        rotation={[-1.222, 0, -Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail093_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, 0.002, 0]}
        />
      </group>
      <group
        position={[0.373, -1.957, -4.321]}
        rotation={[-1.222, 0, -Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail094_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, 0.001, 0]}
        />
      </group>
      <group
        position={[-2.289, -1.957, -4.321]}
        rotation={[-1.222, 0, -Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail096_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, 0.002, 0]}
        />
      </group>
      <group
        position={[-3.62, -1.957, -4.321]}
        rotation={[-1.222, 0, -Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail097_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, -0.002, 0]}
        />
      </group>
      <group
        position={[-6.282, -1.957, -4.321]}
        rotation={[-1.222, 0, -Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail099_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, 0.001, 0]}
        />
      </group>
      <group
        position={[-7.625, -1.957, 3.159]}
        rotation={[-1.92, 0, Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail100_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, 0.001, 0]}
        />
      </group>
      <group
        position={[-4.943, -1.957, 3.159]}
        rotation={[-1.92, 0, Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail102_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, 0.002, 0]}
        />
      </group>
      <group
        position={[-3.602, -1.957, 3.159]}
        rotation={[-1.92, 0, Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail103_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, 0.002, 0]}
        />
      </group>
      <group
        position={[0.42, -1.957, 3.159]}
        rotation={[-1.92, 0, Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail106_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, 0.001, 0]}
        />
      </group>
      <group
        position={[1.761, -1.957, 3.159]}
        rotation={[-1.92, 0, Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail107_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, -0.001, 0]}
        />
      </group>
      <group
        position={[-9.206, -1.957, 1.45]}
        rotation={[-Math.PI / 2, Math.PI / 9, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail109_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[-0.001, 0, 0]}
        />
      </group>
      <group
        position={[12.385, -1.972, 0.593]}
        rotation={[-1.222, 0, -Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail110_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, 0.003, 0]}
        />
      </group>
      <group
        position={[10.79, -1.971, -3.54]}
        rotation={[-Math.PI / 2, Math.PI / 9, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail111_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[-0.003, 0, -0.001]}
        />
      </group>
      <group
        position={[15.042, -1.973, 0.594]}
        rotation={[-1.222, 0, -Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail113_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, 0.001, 0]}
        />
      </group>
      <group
        position={[16.363, -1.973, 0.594]}
        rotation={[-1.222, 0, -Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail114_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, 0.001, 0]}
        />
      </group>
      <group
        position={[13.694, -1.971, -1.824]}
        rotation={[-1.92, 0, Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail116_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, -0.001, 0]}
        />
      </group>
      <group
        position={[15.033, -1.971, -1.824]}
        rotation={[-1.92, 0, Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.handrail117_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[0, 0.001, 0]}
        />
      </group>
      <group
        position={[-18.205, -2.458, -0.568]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object022_base_mat_0.geometry}
          material={materials["base_mat.001"]}
          position={[0, 0.001, 0]}
        />
      </group>
      <group
        position={[0.484, -4.966, 5.294]}
        rotation={[-Math.PI / 2, 0, 1.478]}
        scale={0.01}
      >
        <group position={[82.699, 11.465, 32.618]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.props_med_garbage_003_base_mat_0.geometry}
            material={materials["Material.001"]}
            position={[-0.001, 0.001, 0]}
          />
        </group>
      </group>
      <group
        position={[3.912, -4.966, 4.569]}
        rotation={[-Math.PI / 2, 0, -2.304]}
        scale={0.01}
      >
        <group position={[82.701, 11.464, 32.618]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.props_med_garbage_004_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[0.001, 0, 0]}
          />
        </group>
      </group>
      <group
        position={[-0.843, -1.961, 5.011]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <group position={[82.699, 11.464, 32.618]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.props_med_garbage_01_base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[-0.002, 0, 0]}
          />
        </group>
      </group>
      <group
        position={[5.036, 0.722, -0.569]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.props_med_lift_base_mat_0.geometry}
          material={materials.Material}
          position={[-0.002, 0, 0]}
        />
      </group>
      <group
        position={[5.036, -5.055, -0.569]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.props_med_lift_floor_1_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[-0.002, 0, 0]}
        />
      </group>
      <group
        position={[5.036, -2.059, -0.569]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.props_med_lift_floor_2_base_mat_0.geometry}
          material={materials["Material.003"]}
          position={[-0.002, 0, 0]}
        />
      </group>
      <group
        position={[13.329, -4.994, 4.187]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <group position={[-15.8, 0, 200.463]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.props_med_stairs_01_base_mat_0.geometry}
            material={materials["Material.003"]}
            position={[-0.002, 0, 0]}
          />
        </group>
      </group>
      <group
        position={[-6.648, -4.977, -0.41]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <group position={[-17.908, 122.014, 200.108]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.props_med_stairs_03_base_mat_0.geometry}
            material={materials["Material.003"]}
            position={[-0.002, 0, 0]}
          />
        </group>
      </group>
      <group
        position={[-17.288, -1.985, -0.583]}
        rotation={[-Math.PI / 2, Math.PI / 6, Math.PI]}
        scale={0.01}
      >
        <group position={[-130.677, 95.371, 142.109]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.props_med_stairs_04__base_mat_0.geometry}
            material={materials["Material.002"]}
            position={[0.003, 0, -0.001]}
          />
        </group>
      </group>
      <group
        position={[3.713, -1.222, -4.445]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.props_sml_info_table_008_base_mat_0.geometry}
          material={materials["Material.001"]}
          position={[0, 0, -73.454]}
        />
      </group>
      <group
        position={[3.713, -1.222, 3.328]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.01}
      >
        <group position={[0, 0.001, -73.454]}>
          <group position={[0, 0.001, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.props_sml_info_table_010_base_mat_0.geometry}
              material={materials["Material.002"]}
              position={[0, 0.002, 0]}
            />
          </group>
        </group>
      </group>
      <group
        position={[1.454, -0.907, 6.932]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.derjatel_monitora001_base_mat_0.geometry}
            material={materials["Material.001"]}
            position={[-0.002, 0, 0]}
          />
        </group>
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.nakladka001_base_mat_0.geometry}
            material={materials["base_mat.001"]}
            position={[-0.002, 0, 0]}
          />
        </group>
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ramka_monitora001_base_mat_0.geometry}
            material={materials["Material.004"]}
            position={[-0.002, 0, 0]}
          />
        </group>
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stoika001_base_mat_0.geometry}
            material={materials["Material.003"]}
            position={[-0.002, 0, 0]}
          />
        </group>
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stoika_004_base_mat_0.geometry}
            material={materials["base_mat.001"]}
            position={[-0.002, 0, 0]}
          />
        </group>
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stoika_005_base_mat_0.geometry}
            material={materials["base_mat.001"]}
            position={[-0.002, 0, 0]}
          />
        </group>
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stoika_006_base_mat_0.geometry}
            material={materials["base_mat.001"]}
            position={[-0.002, 0, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass_033_glass_0.geometry}
          material={materials.glass}
          position={[-0.106, 20.601, 63.709]}
          rotation={[-0.349, 0, Math.PI]}
        />
      </group>
      <group
        position={[1.519, -0.907, -8.032]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      >
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.derjatel_monitora002_base_mat_0.geometry}
            material={materials["Material.001"]}
            position={[0.001, 0, 0]}
          />
        </group>
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.nakladka002_base_mat_0.geometry}
            material={materials["base_mat.001"]}
            position={[0.001, 0, 0]}
          />
        </group>
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ramka_monitora002_base_mat_0.geometry}
            material={materials["Material.004"]}
            position={[0.001, 0, 0]}
          />
        </group>
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stoika002_base_mat_0.geometry}
            material={materials["Material.003"]}
            position={[0.001, 0, 0]}
          />
        </group>
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stoika_007_base_mat_0.geometry}
            material={materials["base_mat.001"]}
            position={[0.001, 0, 0]}
          />
        </group>
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stoika_008_base_mat_0.geometry}
            material={materials["base_mat.001"]}
            position={[0.001, 0, 0]}
          />
        </group>
        <group position={[5.359, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stoika_009_base_mat_0.geometry}
            material={materials["base_mat.001"]}
            position={[0.001, 0, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass_034_glass_0.geometry}
          material={materials.glass}
          position={[-0.107, 20.601, 63.709]}
          rotation={[-0.349, 0, Math.PI]}
        />
      </group>
      <group
        position={[-3.297, -0.907, -8.032]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      >
        <group position={[5.362, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.derjatel_monitora003_base_mat_0.geometry}
            material={materials["Material.001"]}
            position={[-0.001, 0, 0]}
          />
        </group>
        <group position={[5.362, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.nakladka003_base_mat_0.geometry}
            material={materials["base_mat.001"]}
            position={[-0.001, 0, 0]}
          />
        </group>
        <group position={[5.362, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ramka_monitora003_base_mat_0.geometry}
            material={materials["Material.004"]}
            position={[-0.001, 0, 0]}
          />
        </group>
        <group position={[5.362, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stoika003_base_mat_0.geometry}
            material={materials["Material.003"]}
            position={[-0.001, 0, 0]}
          />
        </group>
        <group position={[5.362, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stoika_010_base_mat_0.geometry}
            material={materials["base_mat.001"]}
            position={[-0.001, 0, 0]}
          />
        </group>
        <group position={[5.362, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stoika_011_base_mat_0.geometry}
            material={materials["base_mat.001"]}
            position={[-0.001, 0, 0]}
          />
        </group>
        <group position={[5.362, -0.166, -105.026]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stoika_012_base_mat_0.geometry}
            material={materials["base_mat.001"]}
            position={[-0.001, 0, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass_035_glass_0.geometry}
          material={materials.glass}
          position={[-0.104, 20.601, 63.709]}
          rotation={[-0.349, 0, Math.PI]}
        />
      </group>
      <group
        position={[7.411, -1.222, -2.2]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <group position={[-0.002, 0, -73.454]}>
          <group position={[-0.002, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.props_sml_info_table_03_base_mat_0001.geometry}
              material={materials["Material.003"]}
              position={[-0.001, 0, 0]}
            />
          </group>
        </group>
      </group>
      <group
        position={[-3.449, -0.907, 6.932]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.derjatel_monitora_base_mat_0001.geometry}
          material={materials["Material.001"]}
          position={[5.358, -0.166, -105.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass_32_glass_0.geometry}
          material={materials.glass}
          position={[-0.107, 20.601, 63.709]}
          rotation={[-0.349, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nakladka_base_mat_0001.geometry}
          material={materials["base_mat.001"]}
          position={[5.358, -0.166, -105.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ramka_monitora_base_mat_0001.geometry}
          material={materials["Material.004"]}
          position={[5.358, -0.166, -105.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stoika_base_mat_0001.geometry}
          material={materials["Material.003"]}
          position={[5.358, -0.166, -105.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stoika_01_base_mat_0001.geometry}
          material={materials["base_mat.001"]}
          position={[5.358, -0.166, -105.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stoika_02_base_mat_0001.geometry}
          material={materials["base_mat.001"]}
          position={[5.358, -0.166, -105.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stoika_03_base_mat_0001.geometry}
          material={materials["base_mat.001"]}
          position={[5.358, -0.166, -105.026]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handrail095_base_mat_0.geometry}
        material={materials["Material.003"]}
        position={[-0.958, -1.957, -4.321]}
        rotation={[-1.222, 0, -Math.PI / 2]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handrail098_base_mat_0.geometry}
        material={materials["Material.003"]}
        position={[-4.951, -1.957, -4.321]}
        rotation={[-1.222, 0, -Math.PI / 2]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handrail101_base_mat_0.geometry}
        material={materials["Material.003"]}
        position={[-6.284, -1.957, 3.159]}
        rotation={[-1.92, 0, Math.PI / 2]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handrail108_base_mat_0.geometry}
        material={materials["Material.003"]}
        position={[-7.617, -1.957, -4.318]}
        rotation={[-1.222, 0, -Math.PI / 2]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handrail112_base_mat_0.geometry}
        material={materials["Material.003"]}
        position={[13.713, -1.973, 0.594]}
        rotation={[-1.222, 0, -Math.PI / 2]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handrail115_base_mat_0.geometry}
        material={materials["Material.003"]}
        position={[12.365, -1.971, -1.824]}
        rotation={[-1.92, 0, Math.PI / 2]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/scene2/bunker/bunker.glb");