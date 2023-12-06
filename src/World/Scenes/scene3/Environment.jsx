import { Cloud, Sky, Stars } from "@react-three/drei";

const Environments = () => {
  return (
    <>
      <Stars count={5000} />
      <Cloud
        opacity={0.5}
        speed={0.4} // Rotation speed
        width={50} // Width of the full cloud
        depth={5} // Z-dir depth
        segments={20} // Number of particles
        position-y={20}
      />
      <Sky
        distance={450000} // Increase the distance to make the scene appear larger
        sunPosition={[0, -100, 0]} // Place the sun below the scene
        inclination={0} // Adjust the inclination to 0 to simulate night
        azimuth={0} // Set the azimuthal angle to 0 for a specific orientation
        rayleigh={0}
        turbidity={0} // Increase the turbidity to give a more ethereal look
        mieCoefficient={0.005}
        mieDirectionalG={0.8} // Increase the brightness for the northern lights
        exposure={0.5}
        backgroundColor={"#000022"} // Set the background color to a dark blue
      />
    </>
  );
};

export default Environments;
