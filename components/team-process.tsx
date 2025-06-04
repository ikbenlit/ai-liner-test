"use client"

import TypewriterTerminal from "./typewriter-terminal"

const elmerLines = [
  "> Analyseren merkidentiteit... ✅ PROFESSIONEEL",
  "> Bouwen digitale aanwezigheid... ✅ CONVERTEERT",
  "> Creëren marketing fundament... ✅ OVERTUIGT",
  "> Status: FUNDAMENT SOLIDE ✅",
]

const colinLines = [
  "> Implementeren AI chatbots... ✅ 24/7 ACTIEF",
  "> Automatiseren processen... ✅ 6 UUR → 6 MIN",
  "> Optimaliseren workflows... ✅ 340% ROI",
  "> Status: ACCELERATIE LIVE ✅",
]

const fusionResultLines = [
  "> FUSION RESULTAAT: MARKTLEIDER IN 4 WEKEN",
]

export default function FusionTerminals() {
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-[#F5B041]">DUAL</span>.<span className="text-[#ff0080]">TERMINAL</span>_DEMO
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666]">Fundament × Acceleratie = Exponentiële groei</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Elmer's Foundation Terminal */}
        <TypewriterTerminal
          lines={elmerLines}
          headerText="elmer@foundation:~$"
          className="border-[#2E9BDA] bg-[#0a0a0a]/90 shadow-[0_0_30px_rgba(46,155,218,0.3)]"
          typingSpeed={38}
          linePause={900}
          theme="fundament"
        />

        {/* Colin's Acceleratie Terminal */}
        <TypewriterTerminal
          lines={colinLines}
          headerText="colin@acceleratie:~$"
          className="border-[#00ff41] bg-black/90 shadow-[0_0_30px_rgba(0,255,65,0.3)]"
          typingSpeed={38}
          linePause={900}
          theme="matrix"
        />
      </div>

      {/* Fusion Resultaat */}
      <div className="mt-8 max-w-2xl mx-auto">
        <TypewriterTerminal
          lines={fusionResultLines}
          headerText="fusion@ai-liner:~$"
          className="border-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] bg-[#0a0a0a]/90 shadow-[0_0_30px_rgba(46,155,218,0.2)]"
          typingSpeed={40}
          linePause={1200}
          theme="fundament"
        />
      </div>
    </section>
  )
}
