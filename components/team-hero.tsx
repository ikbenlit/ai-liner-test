"use client"
import { ArrowRight, Zap } from "lucide-react"
import { useState, useEffect } from "react"
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

export default function TeamHero() {
  const [showColin, setShowColin] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowColin(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 relative" id="home">
      <div className="text-center mb-12">
        <div className="inline-block border-2 border-[#2E9BDA] px-4 py-1 text-sm mb-6 bg-black/50">
          <span className="text-[#F5B041]">TEAM</span> | <span className="text-[#00ff41]">ELMER</span> <span className="text-[#ff0080]">×</span> <span className="text-[#2E9BDA]">COLIN</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-8 relative">
          <span className="relative z-10 bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] bg-clip-text text-transparent">
            ONTMOET HET AI-LINER TEAM
          </span>
          <div className="absolute inset-0 text-[#F5B041] opacity-30 animate-glitch-1 blur-sm">ONTMOET HET AI-LINER TEAM</div>
          <div className="absolute inset-0 text-[#00bfff] opacity-30 animate-glitch-2 blur-sm">ONTMOET HET AI-LINER TEAM</div>
        </h1>

        <p className="text-xl md:text-3xl mb-4 font-bold">
          <span className="text-[#F5B041]">ELMER</span> <span className="text-[#00ff41]">×</span> <span className="text-[#ff0080]">COLIN</span> = <span className="text-[#2E9BDA]">COMPLETE TRANSFORMATIE</span>
        </p>
        <p className="text-lg text-[#00bfff] mb-12 max-w-3xl mx-auto">
          Twee specialisten, één missie: jouw business naar het volgende level tillen.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
        <button className="fusion-btn border-2 border-[#2E9BDA] text-[#2E9BDA] px-8 py-4 hover:bg-[#2E9BDA] hover:text-black transition-colors duration-300 relative overflow-hidden group text-lg">
          <span className="relative z-10 flex items-center gap-3">
            <Zap size={20} />
            ./bekijk_werkwijze
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E9BDA]/20 via-[#00ff41]/20 to-[#ff0080]/20 -translate-x-full group-hover:animate-fusion-sweep"></div>
        </button>

        <button className="fusion-btn border-2 border-[#00ff41] text-[#00ff41] px-8 py-4 hover:bg-[#00ff41] hover:text-black transition-colors duration-300 relative overflow-hidden group text-lg">
          <span className="relative z-10">./plan_intake_gesprek</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff41]/20 via-[#ff0080]/20 to-[#2E9BDA]/20 -translate-x-full group-hover:animate-fusion-sweep"></div>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Elmer Terminal */}
        <TypewriterTerminal
          lines={elmerLines}
          headerText="elmer@foundation:~$"
          className="border-[#2E9BDA] bg-[#0a0a0a]/80 rounded overflow-hidden shadow-[0_0_30px_rgba(46,155,218,0.3)]"
          typingSpeed={38}
          linePause={900}
          theme="fundament"
        />

        {/* Colin Terminal */}
        {showColin ? (
          <TypewriterTerminal
            lines={colinLines}
            headerText="colin@acceleratie:~$"
            className="border-[#00ff41] bg-black/80 rounded overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.3)]"
            typingSpeed={38}
            linePause={900}
            theme="matrix"
          />
        ) : (
          <div className="border border-[#00ff41] bg-black/80 rounded overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.3)] min-h-[200px]" />
        )}
      </div>
    </section>
  )
}
