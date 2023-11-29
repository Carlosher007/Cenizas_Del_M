import { Sky, Sparkles, Stars } from '@react-three/drei';

const EnvironmentGame = () => {
  return (
    <>
      <Stars radius={80} depth={100} count={7000} factor={3} saturation={0} />
      <Sky
        sunPosition={[0, 0, -1]} // Coloca el sol debajo del horizonte
        inclination={0.2} // Ajusta la inclinación para simular el atardecer
        azimuth={180} // Ajusta el ángulo azimutal para cambiar la dirección de la luz
        mieCoefficient={2} // Ajusta la dispersión atmosférica
        elevation={5} // Ajusta la elevación del sol
        mieDirectionalG={0.09} // Ajusta la luminosidad del sol
        rayleigh={6} // Ajusta la dispersión de Rayleigh
        turbidity={8} // Ajusta la claridad del cielo]
        exposure={0.1}
      />
      <Sparkles
        count={100}
        size={10}
        fade={true}
        speed={1}
        scale={6}
        position={[0,0,-3]}
      />
    </>
  );
};

export default EnvironmentGame;
