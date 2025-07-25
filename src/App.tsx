import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Experience } from "./experience/Experience";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { Loader } from "@react-three/drei";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const container = useRef<HTMLDivElement>(null);
  const [experienceState, setExperienceState] = useState({ value: 0 });

  useEffect(() => {
    console.log("Fase:", experienceState.value);
  }, [experienceState]);

  useGSAP(
    () => {
      // Crear un trigger por cada sección
      for (let i = 0; i < 5; i++) {
        ScrollTrigger.create({
          trigger: `.section-${i}`,
          start: "top center",
          end: "bottom center",
          markers: false,
          onEnter: () => setExperienceState({ value: i }),
          onEnterBack: () => setExperienceState({ value: i }),
        });
      }
    },
    { scope: container }
  );

  return (
    <>
      <div ref={container} className="relative min-h-[500vh] text-neutral-950">
        {/* Fondo 3D fijo */}
        <div className="fixed inset-0 -z-10 w-screen h-screen">
          <Experience experienceState={experienceState} />
        </div>

        {/* Contenido Scrollable */}
        <header className="p-4 border-b bg-white bg-opacity-70 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold cursor-pointer">
              Modelo + Scroll
            </h1>
          </div>
        </header>

        <main className="space-y-[20vh] px-6 py-12 bg-neutral-50/30">
          {[...Array(5)].map((_, i) => (
            <section
              key={i}
              className={`section-${i} max-w-3xl mx-auto min-h-[80vh]`}
            >
              <h2 className="text-3xl font-bold mb-4">Sección {i + 1}</h2>
              <p className="text-lg text-neutral-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique, justo at imperdiet tincidunt, sapien justo placerat
                quam, in tempus metus justo in leo. Vestibulum sit amet finibus
                neque.
              </p>
            </section>
          ))}
        </main>

        <footer className="p-4 text-center text-sm border-t bg-white bg-opacity-70 backdrop-blur-sm">
          © {new Date().getFullYear()} Innovaciones Ferroviarias
        </footer>
      </div>

      <Loader/>
    </>
  );
}

export default App;
