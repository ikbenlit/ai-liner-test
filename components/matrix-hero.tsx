import { ArrowRight, Zap } from "lucide-react"
import TypewriterTerminal from "./typewriter-terminal"

const heroTerminalLines = [
  "> Initialiseren ACCELERATIE protocol...",
  "> Laden AI-modules voor bedrijfsprocessen...",
  "> Verbinden met kennisdatabases...",
  "> Status: ACCELERATIE GEREED voor implementatie",
  "> Configureren automatisering systemen...",
  "> Klaar voor implementatie. Type ./start_acceleratie voor roadmap",
]

export default function MatrixHero() {
  return (
    <section className="py-16 md:py-24 relative" id="home">
      <div className="text-center mb-12">
        <div className="inline-block border-2 border-[#00ff41] px-4 py-1 text-sm mb-6 bg-black/50">
          <span className="text-[#ff0080]">v2.0.0</span> | ACCELERATIE.SYSTEMEN_ONLINE
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-8 relative">
          <span className="relative z-10 text-[#00ff41] glitch-text" data-text="AI-LINER ACCELERATIE">
            AI-LINER ACCELERATIE
          </span>
          <div className="absolute inset-0 text-[#ff0080] opacity-70 animate-glitch-1">AI-LINER ACCELERATIE</div>
          <div className="absolute inset-0 text-[#00bfff] opacity-70 animate-glitch-2">AI-LINER ACCELERATIE</div>
        </h1>

        <p className="text-xl md:text-3xl text-[#ff0080] mb-4 font-bold">SNEL • SLIM • SCHAALBAAR</p>
        <p className="text-lg text-[#00bfff] mb-12 max-w-3xl mx-auto">
          Je fundament staat. Nu gaan we gas geven • Waar AI je business versnelt
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
        <button className="matrix-btn border-2 border-[#00ff41] text-[#00ff41] px-8 py-4 hover:bg-[#00ff41] hover:text-black transition-colors duration-300 relative overflow-hidden group text-lg">
          <span className="relative z-10 flex items-center gap-3">
            <Zap size={20} />
            ./start_acceleratie
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff41]/20 to-transparent -translate-x-full group-hover:animate-matrix-sweep"></div>
        </button>

        <button className="matrix-btn border-2 border-[#ff0080] text-[#ff0080] px-8 py-4 hover:bg-[#ff0080] hover:text-white transition-colors duration-300 relative overflow-hidden group text-lg">
          <span className="relative z-10">./bekijk_cases</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff0080]/20 to-transparent -translate-x-full group-hover:animate-matrix-sweep"></div>
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <TypewriterTerminal
          lines={heroTerminalLines}
          headerText="gebruiker@ai-liner:~$"
          className="border-[#00ff41] shadow-[0_0_30px_rgba(0,255,65,0.3)]"
          typingSpeed={45}
          linePause={800}
          theme="matrix"
        />
      </div>
    </section>
  )
}
