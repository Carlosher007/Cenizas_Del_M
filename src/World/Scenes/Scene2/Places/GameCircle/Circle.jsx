import { useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useCircleGameStore } from '../../../../../store/circle-game';

const CircleGame = ({ scale }) => {
  const [parts, coloredParts] = useCircleGameStore((state) => [
    state.parts,
    state.coloredParts,
  ]);

  const torusMeshes = [];

  const dirColored = 'assets/textures/circleGame/coloredCircle/';
  const dirNormal = 'assets/textures/circleGame/normalCircle/';

  const mapC = useLoader(TextureLoader, dirColored + 'mapTiles.jpg');
  const aoMapC = useLoader(TextureLoader, dirColored + 'aoMapTiles.jpg');
  const roughnessMapC = useLoader(
    TextureLoader,
    dirColored + 'roughnessTiles.jpg'
  );
  const normalMapC = useLoader(TextureLoader, dirColored + 'normalTiles.jpg');
  const heightMapC = useLoader(TextureLoader, dirColored + 'heightTiles.jpg');

  const mapN = useLoader(TextureLoader, dirNormal + 'mapTiles.jpg');
  const aoMapN = useLoader(TextureLoader, dirNormal + 'aoMapTiles.jpg');
  const roughnessMapN = useLoader(
    TextureLoader,
    dirNormal + 'roughnessTiles.jpg'
  );
  const normalMapN = useLoader(TextureLoader, dirNormal + 'normalTiles.png');
  const heightMapN = useLoader(TextureLoader, dirNormal + 'heightTiles.jpg');

  for (let i = 0; i < parts; i++) {
    const torusColor = coloredParts.includes(i) ? 0xff0000 : 0xffff00;
    torusMeshes.push(
      <mesh
        key={i}
        position={[0, 0, 0]}
        rotation={[0, 0, i * ((2 * Math.PI) / parts)]}
        scale={[scale, scale, scale]}
      >
        <torusGeometry args={[10, 3, 16, 100, (2 * Math.PI) / parts]} />
        <meshStandardMaterial
          // color={torusColor}
          map={coloredParts.includes(i) ? mapC : mapN}
          aoMap={coloredParts.includes(i) ? aoMapC : aoMapN}
          roughnessMap={
            coloredParts.includes(i) ? roughnessMapC : roughnessMapN
          }
          normalMap={coloredParts.includes(i) ? normalMapC : normalMapN}
          displacementMap={coloredParts.includes(i) ? heightMapC : heightMapN}
          displacementScale={0.01}
        />
      </mesh>
    );
  }

  return <>{torusMeshes}</>;
};

export default CircleGame;
