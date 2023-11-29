import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useKeyboard } from '../../../../../hooks/useKeyboard';
import { useCircleGameStore } from '../../../../../store/circle-game';
import { useGameStore } from '../../../../../store/game';
import { getSceneScript } from '../../../../../utils/script';

const LineGame = ({ size, lengthArray, velocity }) => {
  const dirColored = 'assets/textures/circleGame/coloredCircle/';

  const mapC = useLoader(TextureLoader, dirColored + 'mapTiles.jpg');
  const aoMapC = useLoader(TextureLoader, dirColored + 'aoMapTiles.jpg');
  const roughnessMapC = useLoader(
    TextureLoader,
    dirColored + 'roughnessTiles.jpg'
  );
  const normalMapC = useLoader(TextureLoader, dirColored + 'normalTiles.jpg');
  const heightMapC = useLoader(TextureLoader, dirColored + 'heightTiles.jpg');

  const [parts, coloredParts, lives, isPlaying] = useCircleGameStore(
    (state) => [state.parts, state.coloredParts, state.lives, state.isPlaying]
  );

  const [isSpin, setIsSpin] = useState(false);
  const { setDialogue } = useGameStore.getState();

  useEffect(() => {
    if (!isPlaying) {
      setIsSpin(false);
    }
    if (isPlaying) {
      setTimeout(() => {
        setIsSpin(true);
      }, 1000);
    }
  }, [isPlaying]);

  const keyPressed = useRef(false);

  const { setColoredParts, setLives, setIsPlaying } =
    useCircleGameStore.getState();

  const { continueKey } = useKeyboard();
  const { width, height, depth } = size;

  const lineGeometry = new THREE.BoxGeometry(width, height, depth);
  const lineMaterial = new THREE.MeshStandardMaterial({
    map: mapC,
    aoMap: aoMapC,
    roughnessMap: roughnessMapC,
    normalMap: normalMapC,
    displacementMap: heightMapC,
    displacementScale: 0.01,
    side: THREE.DoubleSide,
  });
  const line = new THREE.Mesh(lineGeometry, lineMaterial);

  const dir = new THREE.Vector3(1, 0, 0);
  const origin = new THREE.Vector3(0, 0, 0);
  const length = lengthArray;
  const color = 0x51473c;
  const arrow = new THREE.ArrowHelper(dir, origin, length, color);
  line.add(arrow);

  line.position.set(0, 0, 0);
  line.rotation.z = 0;

  const consultTouchedPart = (rotation) => {
    if (rotation >= 0 && rotation < Math.PI / 4) {
      return 0;
    } else if (rotation >= Math.PI / 4 && rotation < Math.PI / 2) {
      return 1;
    } else if (rotation >= Math.PI / 2 && rotation < (3 * Math.PI) / 4) {
      return 2;
    } else if (rotation >= (3 * Math.PI) / 4 && rotation < Math.PI) {
      return 3;
    } else if (rotation >= Math.PI && rotation < (5 * Math.PI) / 4) {
      return 4;
    } else if (rotation >= (5 * Math.PI) / 4 && rotation < (3 * Math.PI) / 2) {
      return 5;
    } else if (rotation >= (3 * Math.PI) / 2 && rotation < (7 * Math.PI) / 4) {
      return 6;
    } else if (rotation >= (7 * Math.PI) / 4 && rotation < 2 * Math.PI) {
      return 7;
    } else {
      return 0;
    }
  };

  const eliminatePart = (indexTouchedPart) => {
    if (coloredParts.includes(indexTouchedPart)) {
      const newColoredParts = coloredParts.filter(
        (part) => part !== indexTouchedPart
      );
      setColoredParts(newColoredParts);
    } else {
      setIsPlaying(false);
      const aux = lives - 1;
      setLives(aux);

      const showScript = () => {
        const auxiliary = { lives: aux };
        const script = getSceneScript(
          2,
          [],
          'scriptCircleGameLives',
          auxiliary
        );
        const action = () => {
          setIsPlaying(true);
        };
        setDialogue({ script, action });
      };
      if (aux !== 0) {
        showScript();
      }
    }
    setTimeout(() => {
      keyPressed.current = false;
    }, 500);
  };

  useFrame(({ clock }) => {
    if (isSpin) {
      line.rotation.z = clock.getElapsedTime() * velocity;
    }
  });

  useFrame(({ clock }) => {
    if (continueKey && !keyPressed.current && isSpin) {
      keyPressed.current = true;
      line.rotation.z = clock.getElapsedTime() * velocity;
      const rotationInTermsOfPi = line.rotation.z % (2 * Math.PI);
      const touchedPart = consultTouchedPart(rotationInTermsOfPi);
      eliminatePart(touchedPart);
    }
  });

  return <primitive object={line} />;
};

export default LineGame;
