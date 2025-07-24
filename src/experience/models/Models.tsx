import { Center, Environment, OrbitControls, useGLTF } from "@react-three/drei";

export const Models = () => {
  const { scene } = useGLTF("/models/train.glb");

  

  return (
    <>
      <Center>
        <primitive object={scene} />
      </Center>

      <Environment preset="city" environmentIntensity={1.5} />

      <OrbitControls makeDefault />
    </>
  );
};
