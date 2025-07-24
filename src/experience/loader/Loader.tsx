import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Html, } from "@react-three/drei";

gsap.registerPlugin(useGSAP);

export const Loader = () => {

  return (
    <group position={[0, 0, 0]}>
      {/* Texto con porcentaje */}
      <Html position={[0, 1.2, 0]} center distanceFactor={8}>
        <div className="text-white text-sm font-semibold bg-black/60 px-2 py-1 rounded">
          Cargando...
        </div>
      </Html>
    </group>
  );
};
