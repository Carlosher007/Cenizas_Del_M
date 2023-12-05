import {
  CameraControls,
  Dodecahedron,
  Environment,
  Grid,
  MeshDistortMaterial,
  RenderTexture,
} from '@react-three/drei';
import withLoading from '../../../../../components/design/WithLoading';
import { useThree } from '@react-three/fiber';
import { useAtom } from 'jotai';
import { useControls } from 'leva';
import { useEffect, useRef } from 'react';
import { useGameStore } from '../../../../../store/game';
import { slideAtom } from './Overlay';
import { Scene } from './Scene';

export const scenes = [
  {
    path: 'assets/models/scene2/game/medical.glb',
    mainColor: '#f9c0ff',
    name: 'Suministro Medico',
    description:
      'Contiene suministros médicos especializados, desde analgésicos hasta herramientas quirúrgicas básicas.',
  },
  {
    path: 'assets/models/scene2/game/food.glb',
    mainColor: '#c0ffe1',
    name: 'Paquete de Alimentos de Supervivencia:',
    description:
      'Un conjunto  compacto de alimentos no perecederos, como barras energéticas, alimentos liofilizados y tabletas de purificación de agua.',
  },
  {
    path: 'assets/models/scene2/game/tools.glb',
    mainColor: '#ffdec0',
    name: 'Herramienta Multifunción',
    description:
      'Una herramienta versátil que incluye cuchillas, destornilladores y otras funciones útiles para diversas situaciones.',
  },
  {
    path: 'assets/models/scene2/game/power.glb',
    mainColor: '#fdcae1',
    name: 'Dispositivo de Energía Portátil:',
    description:
      'Un dispositivo compacto que puede cargar dispositivos electrónicos y proporcionar energía en situaciones de emergencia.',
  },

  {
    path: 'assets/models/scene2/game/walkie.glb',
    mainColor: '#badfda',
    name: 'Comunicador de Banda Ancha:',
    description:
      'Un dispositivo de  comunicación avanzado que puede conectarse con otros dispositivos en el búnker y recibir transmisiones externas',
  },
];

const CameraHandler = ({ slideDistance }) => {
  const viewport = useThree((state) => state.viewport);
  const cameraControls = useRef();
  const [slide] = useAtom(slideAtom);
  const lastSlide = useRef(0);

  const { dollyDistance } = useControls({
    dollyDistance: {
      value: 10,
      min: 0,
      max: 50,
    },
  });

  const moveToSlide = async () => {
    await cameraControls.current.setLookAt(
      lastSlide.current * (viewport.width + slideDistance),
      3,
      dollyDistance,
      lastSlide.current * (viewport.width + slideDistance),
      0,
      0,
      true
    );
    await cameraControls.current.setLookAt(
      (slide + 1) * (viewport.width + slideDistance),
      1,
      dollyDistance,
      slide * (viewport.width + slideDistance),
      0,
      0,
      true
    );

    await cameraControls.current.setLookAt(
      slide * (viewport.width + slideDistance),
      0,
      5,
      slide * (viewport.width + slideDistance),
      0,
      0,
      true
    );
  };

  useEffect(() => {
    // Used to reset the camera position when the viewport changes
    const resetTimeout = setTimeout(() => {
      cameraControls.current.setLookAt(
        slide * (viewport.width + slideDistance),
        0,
        5,
        slide * (viewport.width + slideDistance),
        0,
        0
      );
    }, 200);
    return () => clearTimeout(resetTimeout);
  }, [viewport]);

  useEffect(() => {
    if (lastSlide.current === slide) {
      return;
    }
    moveToSlide();
    lastSlide.current = slide;
  }, [slide]);
  return (
    <CameraControls
      ref={cameraControls}
      touches={{
        one: 0,
        two: 0,
        three: 0,
      }}
      mouseButtons={{
        left: 0,
        middle: 0,
        right: 0,
      }}
    />
  );
};

const ChooseObjects = () => {
  const { setActionsGame, resetBacklog } = useGameStore.getState();
  useEffect(() => {
    setActionsGame('showBacklog', true);
    setActionsGame('showOverlay', true);
  }, []);
  const viewport = useThree((state) => state.viewport);
  const { slideDistance } = useControls({
    slideDistance: {
      value: 1,
      min: 0,
      max: 10,
    },
  });
  return (
    <>
      <ambientLight intensity={0.2} />
      <Environment preset={'city'} />
      <CameraHandler slideDistance={slideDistance} />
      {/* MAIN WORLD */}

      <Grid
        position-y={-viewport.height / 2}
        sectionSize={1}
        sectionColor={'purple'}
        sectionThickness={1}
        cellSize={0.5}
        cellColor={'#6f6f6f'}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={120}
        fadeStrength={5}
      />
      {scenes.map((scene, index) => (
        <mesh
          key={index}
          position={[index * (viewport.width + slideDistance), 0, 0]}
        >
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial toneMapped={false}>
            <RenderTexture attach="map">
              <Scene {...scene} />
            </RenderTexture>
          </meshBasicMaterial>
        </mesh>
      ))}
    </>
  );
};

export default withLoading(ChooseObjects, 8000)
