import { ArrowRight } from "lucide-react"
import TypewriterTerminal from "./typewriter-terminal"

const heroTerminalLines = [
  "> Initialiseren FUNDAMENT protocol...",
  "> Scannen bedrijfsinfrastructuur...",
  "> Analyseren merk geloofwaardigheid...",
  "> Controleren marktpositie...",
  "> Status: FUNDAMENT KLAAR voor AI-acceleratie",
  "> Volgende stap: ./verbinden_met_acceleratie",
]

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="fundament">
      {/* ASCII background pattern */}
      <div className="absolute inset-0 opacity-5 text-[#2E9BDA] text-xs leading-none whitespace-pre overflow-hidden pointer-events-none">
        {Array(30)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="overflow-hidden">
              {Array(120)
                .fill(0)
                .map((_, j) => (
                  <span key={j}>
                    {["█", "▓", "▒", "░", "|", "/", "\\", "_", "-", "+", "*", "="][Math.floor(Math.random() * 12)]}
                  </span>
                ))}
            </div>
          ))}
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block border-2 border-[#E74C3C] px-4 py-1 text-sm mb-4">
            <span className="text-[#F5B041]">v1.0.0</span> | FUNDAMENT.INITIALISATIE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glitch-text relative">
            <span className="relative z-10">AI-LINER FUNDAMENT</span>
            {/*
            <span
              className="absolute top-0 left-0 text-[#F5B041] opacity-70 z-0"
              style={{ clipPath: "inset(0 0 0 0)", transform: "translate(-5px, 5px)" }}
            >
              AI-LINER FUNDAMENT
            </span>

            <span
              className="absolute top-0 left-0 text-[#E74C3C] opacity-70 z-0"
              style={{ clipPath: "inset(0 0 0 0)", transform: "translate(5px, -5px)" }}
            >
              AI-LINER FUNDAMENT
            </span>
                        */}
          </h1>
          <p className="text-xl md:text-2xl text-[#F5B041] mb-8">SOLIDE • BETROUWBAAR • ESSENTIEEL</p>
          <p className="text-lg text-[#999] mb-8">Voordat je accelereert, heb je een fundament nodig dat houdt</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <button className="ascii-btn border-2 border-[#E74C3C] text-[#E74C3C] px-6 py-3 hover:bg-[#2E9BDA] hover:text-black transition-colors duration-300 relative overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
              ./start_fundament_check <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
          </button>

          <button className="ascii-btn border-2 border-[#F5B041] text-[#F5B041] px-6 py-3 hover:bg-[#F5B041] hover:text-black transition-colors duration-300 relative overflow-hidden group">
            <span className="relative z-10">./bekijk_portfolio</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
          </button>
        </div>

        <TypewriterTerminal
          lines={heroTerminalLines}
          className="max-w-3xl mx-auto"
          typingSpeed={45}
          linePause={800}
        />
      </div>
    </section>
  )
}
