import { Experience } from "./experience/Experience";

function App() {

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950">
      {/* Header */}
      <header className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h1 
            className="text-2xl font-bold cursor-pointer"
          >
            Trenes del Futuro
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        {/* 3D Experience Section - Ocupa la mayor parte de la pantalla */}
        <div className="h-[80vh] border rounded-lg overflow-hidden">
          <Experience />
        </div>

        {/* Information Section - Siempre visible */}
        <div className="mt-6 p-4 space-y-4">
          <h2 className="text-xl font-bold">
            El Futuro del Transporte Ferroviario
          </h2>

          <p>
            Los trenes de última generación están revolucionando el transporte. 
            Con velocidades que superan los 600 km/h, combinan eficiencia energética, 
            confort y tecnología de punta.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Suspensión magnética para un viaje suave</li>
            <li>Autonomía energética mediante paneles solares</li>
            <li>Sistemas de seguridad IA que previenen accidentes</li>
            <li>Interiores modulares adaptables</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm border-t">
        © {new Date().getFullYear()} Innovaciones Ferroviarias
      </footer>
    </div>
  );
}

export default App;