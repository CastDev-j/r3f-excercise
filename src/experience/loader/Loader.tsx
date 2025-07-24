import { Html, useProgress } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Loader = () => {
  const { progress, active, item, loaded, total, errors } = useProgress();
  const container = useRef(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(barRef.current, {
        width: `${progress}%`,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(textRef.current, {
        textContent: `${Math.round(progress)}%`,
        duration: 0.4,
        snap: { textContent: 1 },
      });

      if (detailsRef.current) {
        gsap.to(detailsRef.current, {
          opacity: active ? 1 : 0,
          duration: 0.3,
        });
      }
    },
    { dependencies: [progress, active], scope: container }
  );

  return (
    <Html center>
      <div ref={container} className="w-64 flex flex-col items-center">
        {/* Texto "Cargando" */}
        <div className="mb-3 text-sm font-semibold animate-pulse select-none">
          {active ? "Cargando..." : "Listo!"}
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
        <div ref={textRef} className="mt-2 text-black text-xs font-medium">
          0%
        </div>

        {/* Detalles adicionales */}
        <div
          ref={detailsRef}
          className="mt-4 text-center text-xs text-neutral-700 space-y-1 opacity-0 w-full"
        >
          {item && (
            <p className="truncate">
              Archivo: <span className="font-medium">{item}</span>
            </p>
          )}
          <p>
            Cargados: <span className="font-medium">{loaded}</span> de{" "}
            <span className="font-medium">{total}</span>
          </p>
          {errors.length > 0 && (
            <p className="text-red-500">
              Errores: <span className="font-medium">{errors}</span>
            </p>
          )}
        </div>
      </div>
    </Html>
  );
};
