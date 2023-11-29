const Lights = () => {
  const globalIntensity = 75
  
  return (
    <>
      <ambientLight intensity={0.1} />

      <pointLight
        position={[-6, 0, -1]}
        intensity={globalIntensity}
        distance={12}
        color={0xd0a676}
      />

      <pointLight
        position={[2, 0, -1]}
        intensity={globalIntensity}
        distance={12}
        color={0xd0a676}
      />

      <pointLight
        position={[2, 0, -12]}
        intensity={globalIntensity}
        distance={12}
        color={0xd0a676}
      />

      <pointLight
        position={[2, 0, 12]}
        intensity={globalIntensity}
        distance={12}
        color={0xd0a676}
      />

      <pointLight
        position={[17, 0, 12]}
        intensity={globalIntensity}
        distance={12}
        color={0xd0a676}
      />

      <pointLight
        position={[17, 0, -12]}
        intensity={globalIntensity}
        distance={12}
        color={0xd0a676}
      />

      <pointLight
        position={[32, 0, 12]}
        intensity={globalIntensity}
        distance={12}
        color={0xd0a676}
      />

      <pointLight
        position={[32, 0, -12]}
        intensity={globalIntensity}
        distance={12}
        color={0xd0a676}
      />

      <pointLight
        position={[52, 0, 12]}
        intensity={globalIntensity}
        distance={12}
        color={0xd0a676}
      />

      <pointLight
        position={[52, 0, -12]}
        intensity={globalIntensity}
        distance={12}
        color={0xd0a676}
      />

      <pointLight
        position={[2, -5.3, -12]}
        intensity={globalIntensity*1.2}
        distance={14}
        color={0xd0a676}
      />

      <pointLight
        position={[2, -5.3, 12]}
        intensity={globalIntensity*1.2}
        distance={14}
        color={0xd0a676}
      />

      <pointLight
        position={[17, -5.3, 12]}
        intensity={globalIntensity*1.2}
        distance={14}
        color={0xd0a676}
      />

      <pointLight
        position={[17, -5.3, -12]}
        intensity={globalIntensity*1.2}
        distance={14}
        color={0xd0a676}
      />

      <pointLight
        position={[32, -5.3, 12]}
        intensity={globalIntensity*1.2}
        distance={14}
        color={0xd0a676}
      />

      <pointLight
        position={[32, -5.3, -12]}
        intensity={globalIntensity*1.2}
        distance={14}
        color={0xd0a676}
      />

      <pointLight
        position={[55, -5.3, -1]}
        intensity={globalIntensity*1.2}
        distance={14}
        color={0xd0a676}
      />

      <pointLight
        position={[46, -5.3, -1]}
        intensity={globalIntensity*1.2}
        distance={14}
        color={0xd0a676}
      />

      <pointLight
        position={[42, -5.3, 12]}
        intensity={globalIntensity*1.2}
        distance={14}
        color={0xd0a676}
      />

      <pointLight
        position={[42, -5.3, -12]}
        intensity={globalIntensity*1.2}
        distance={14}
        color={0xd0a676}
      />

      <pointLight
        position={[-4, -5.3, -1]}
        intensity={globalIntensity}
        distance={12}
        color={0xd0a676}
      />
    </>
  );
};

export default Lights;
