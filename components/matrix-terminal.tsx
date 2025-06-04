"use client"

import TypewriterTerminal from "./typewriter-terminal"

const terminalLines = [
  "> Analyseren huidige bedrijfsprocessen...",
  "> Detecteren repetitieve taken... ✅ 23 PROCESSEN GEVONDEN",
  "> Berekenen tijdwinst potentieel... ✅ 4.2 UUR/DAG",
  "> Scannen integratie mogelijkheden... ✅ 8 SYSTEMEN COMPATIBEL",
  "> Schatten ROI implementatie... ✅ 290% IN 6 MAANDEN",
  "> ACCELERATIE POTENTIEEL: HOOG",
  "> AANBEVELING: Start met klantservice automatisering",
  "> Type './start_acceleratie_traject' voor roadmap",
]

export default function MatrixTerminal() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#ff0080] mb-4">
            LIVE.BUSINESS_ANALYSE
            <span className="text-[#00ff41] animate-pulse">{">"}</span>
          </h2>
        </div>

        <TypewriterTerminal
          lines={terminalLines}
          headerText="gebruiker@ai-liner:~$"
          className="border-[#00ff41] shadow-[0_0_30px_rgba(0,255,65,0.3)]"
          typingSpeed={45}
          linePause={1200}
          theme="matrix"
        />

        <div className="mt-8 text-center">
          <button
            className="matrix-btn border-2 border-[#ff0080] text-[#ff0080] px-6 py-3 hover:bg-[#ff0080] hover:text-white transition-colors duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">./nieuwe_analyse</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff0080]/20 to-transparent -translate-x-full group-hover:animate-matrix-sweep"></div>
          </button>
        </div>
      </div>
    </section>
  )
}
