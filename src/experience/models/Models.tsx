import { Center, OrbitControls, useGLTF } from "@react-three/drei";

export const Models = () => {
  const { scene } = useGLTF("/models/train.glb");

  return (
    <>
      <Center>
        <primitive object={scene} />
      </Center>

      <ambientLight intensity={3} />

      <OrbitControls makeDefault />
    </>
  );
};