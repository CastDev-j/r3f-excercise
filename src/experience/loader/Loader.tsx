import { Html, useProgress } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Loader = () => {
  const { progress } = useProgress();
  const container = useRef(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(barRef.current, {
        width: `${progress}%`,
        duration: 0.4,
        ease: "power2.out",
      });
    },
    { dependencies: [progress], scope: container }
  );

  return (
    <Html center>
      <div ref={container} className="w-64 flex flex-col items-center">
        {/* Texto "Cargando" */}
        <div className="mb-3 text-sm font-semibold animate-pulse select-none">
          Cargando...
        </div>

        {/* Barra con contorno blanco interno */}
        <div className="w-full h-4 bg-transparent rounded-full border-2 border-neutral-950 p-[2px] box-content">
          <div className="w-full h-full bg-white rounded-full overflow-hidden">
            <div
              ref={barRef}
              className="h-full bg-black rounded-full"
              style={{ width: "0%" }}
            />
          </div>
        </div>

        {/* Porcentaje */}
        <div ref={textRef} className="mt-2 text-white text-xs font-medium">
          0%
        </div>
      </div>
    </Html>
  );
};
