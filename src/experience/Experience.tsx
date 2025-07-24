import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Models } from "./models/Models";
import { Suspense } from "react";
import { Loader } from "./loader/Loader";

export const Experience = () => {
  return (
    <>
      <Leva collapsed />
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5, 4, -6],
        }}
        className="r3f"
      >
        <Suspense fallback={<Loader />}>
          <Models />
        </Suspense>
      </Canvas>
    </>
  );
};
