import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="home">
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
          <div className="inline-block border-2 border-[#2E9BDA] px-4 py-1 text-sm mb-4">
            <span className="text-[#F5B041]">v1.0.0</span> | SYSTEM.BOOT_COMPLETE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glitch-text relative">
            <span className="relative z-10">AI-LINER ASCII TECH</span>
            <span
              className="absolute top-0 left-0 text-[#F5B041] opacity-70 z-0"
              style={{ clipPath: "inset(0 0 0 0)", transform: "translate(-5px, 5px)" }}
            >
              AI-LINER ASCII TECH
            </span>
            <span
              className="absolute top-0 left-0 text-[#E74C3C] opacity-70 z-0"
              style={{ clipPath: "inset(0 0 0 0)", transform: "translate(5px, -5px)" }}
            >
              AI-LINER ASCII TECH
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#F5B041] mb-8">Building AI solutions with retro-future style</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <button className="ascii-btn border-2 border-[#2E9BDA] text-[#2E9BDA] px-6 py-3 hover:bg-[#2E9BDA] hover:text-black transition-colors duration-300 relative overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
              ./start_project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
          </button>

          <button className="ascii-btn border-2 border-[#F5B041] text-[#F5B041] px-6 py-3 hover:bg-[#F5B041] hover:text-black transition-colors duration-300 relative overflow-hidden group">
            <span className="relative z-10">./view_demo</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
          </button>
        </div>

        <div className="terminal-window border border-[#2E9BDA] bg-[#0a0a0a] rounded overflow-hidden shadow-[0_0_15px_rgba(46,155,218,0.2)] max-w-3xl mx-auto">
          <div className="terminal-header bg-[#1a1a1a] p-2 border-b border-[#2E9BDA] text-sm text-[#F5B041]">
            user@ai-liner:~$
          </div>
          <div className="terminal-body p-4 font-mono text-sm">
            <div className="mb-2">
              {"> Initializing"} <span className="text-[#F5B041]">AI-LINER</span> systems...
            </div>
            <div className="mb-2">{"> Loading neural networks..."}</div>
            <div className="mb-2">{"> Connecting to data sources..."}</div>
            <div className="mb-2">
              {"> Status:"} <span className="text-[#2E9BDA]">READY</span>
            </div>
            <div className="flex items-center">
              {"> Welcome to AI-LINER. How can I assist you today?"}
              <span className="inline-block w-2 h-5 bg-[#F5B041] ml-1 animate-blink"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
