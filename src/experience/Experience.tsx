import { Canvas, useThree } from "@react-three/fiber";
import { Leva } from "leva";
import { Models } from "./models/Models";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ExperienceProps {
  experienceState: { value: number };
}

function CameraAnimator({ phase }: { phase: number }) {
  const { camera } = useThree();
  const camRef = useRef(camera);

  useGSAP(
    () => {
      const pos = getCameraTargetByPhase(phase);

      gsap.to(camRef.current.position, {
        x: pos[0],
        y: pos[1],
        z: pos[2],
        duration: 1.2,
        ease: "power2.inOut",
      });
    },
    { dependencies: [phase] }
  );

  return null;
}

// Define la posición de cámara para cada fase
function getCameraTargetByPhase(phase: number): [number, number, number] {
  switch (phase) {
    case 0:
      return [2.5, 4, -6];
    case 1:
      return [0, 3, -4];
    case 2:
      return [-3, 2, -5];
    case 3:
      return [1, 5, -3];
    case 4:
      return [0, 2, -7];
    default:
      return [2.5, 4, -6];
  }
}

export const Experience = ({ experienceState }: ExperienceProps) => {
  return (
    <>
      <Leva collapsed />
      <Canvas
        shadows
        camera={{
          fov: 75,
          near: 0.1,
          far: 200,
          position: [10, 10, 10], // Posición inicial
        }}
        className="r3f"
      >
          <Models />
        <CameraAnimator phase={experienceState.value} />
        <Perf minimal position="bottom-left hidden" />
      </Canvas>
    </>
  );
};
