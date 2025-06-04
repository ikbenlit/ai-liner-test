import { ArrowRight, Zap } from "lucide-react"

export default function FusionHero() {
  return (
    <section className="py-16 md:py-24 relative" id="home">
      <div className="text-center mb-12">
        <div className="inline-block border-2 border-[#2E9BDA] px-4 py-1 text-sm mb-6 bg-black/50">
          <span className="text-[#F5B041]">v3.0.0</span> | <span className="text-[#00ff41]">FUSION</span>.
          <span className="text-[#ff0080]">PROTOCOL</span>_ACTIVE
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-8 relative">
          <span className="relative z-10 bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] bg-clip-text text-transparent">
            AI-LINER FUSION
          </span>
          <div className="absolute inset-0 text-[#F5B041] opacity-30 animate-glitch-1 blur-sm">AI-LINER FUSION</div>
          <div className="absolute inset-0 text-[#00bfff] opacity-30 animate-glitch-2 blur-sm">AI-LINER FUSION</div>
        </h1>

        <p className="text-xl md:text-3xl mb-4 font-bold">
          <span className="text-[#F5B041]">RETRO</span> <span className="text-[#00ff41]">MEETS</span>{" "}
          <span className="text-[#ff0080]">MATRIX</span>
        </p>
        <p className="text-lg text-[#00bfff] mb-12 max-w-3xl mx-auto">
          Where classic terminal aesthetics merge with cyberpunk consciousness •
          <span className="text-[#2E9BDA]"> Dual reality protocols active</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
        <button className="fusion-btn border-2 border-[#2E9BDA] text-[#2E9BDA] px-8 py-4 hover:bg-[#2E9BDA] hover:text-black transition-colors duration-300 relative overflow-hidden group text-lg">
          <span className="relative z-10 flex items-center gap-3">
            <Zap size={20} />
            ./initialize_fusion
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E9BDA]/20 via-[#00ff41]/20 to-[#ff0080]/20 -translate-x-full group-hover:animate-fusion-sweep"></div>
        </button>

        <button className="fusion-btn border-2 border-[#00ff41] text-[#00ff41] px-8 py-4 hover:bg-[#00ff41] hover:text-black transition-colors duration-300 relative overflow-hidden group text-lg">
          <span className="relative z-10">./enter_matrix</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff41]/20 via-[#ff0080]/20 to-[#2E9BDA]/20 -translate-x-full group-hover:animate-fusion-sweep"></div>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Classic Terminal */}
        <div className="border border-[#2E9BDA] bg-[#0a0a0a]/80 rounded overflow-hidden shadow-[0_0_30px_rgba(46,155,218,0.3)]">
          <div className="bg-[#1a1a1a] p-3 border-b border-[#2E9BDA] flex justify-between items-center">
            <span className="text-[#F5B041] text-sm">user@ai-liner:~$</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#E74C3C]"></div>
              <div className="w-3 h-3 rounded-full bg-[#F5B041]"></div>
              <div className="w-3 h-3 rounded-full bg-[#2E9BDA]"></div>
            </div>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="mb-2">
              {">"} Initializing <span className="text-[#F5B041]">CLASSIC</span> protocol...
            </div>
            <div className="mb-2">{">"} Loading retro-future modules...</div>
            <div className="mb-2">
              {">"} Status: <span className="text-[#2E9BDA]">READY</span>
            </div>
            <div className="flex items-center">
              {">"} Classic terminal aesthetic active
              <span className="inline-block w-2 h-5 bg-[#F5B041] ml-2 animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Matrix Terminal */}
        <div className="border border-[#00ff41] bg-black/80 rounded overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.3)]">
          <div className="bg-[#0a0a0a] p-3 border-b border-[#00ff41] flex justify-between items-center">
            <span className="text-[#00ff41] text-sm">neo@matrix:~$</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff0080] animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-[#00bfff] animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-[#00ff41] animate-pulse"></div>
            </div>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="mb-2">
              {">"} Accessing <span className="text-[#ff0080]">MATRIX</span> mainframe...
            </div>
            <div className="mb-2">{">"} Reality simulation loading...</div>
            <div className="mb-2">
              {">"} Status: <span className="text-[#00ff41]">CONNECTED</span>
            </div>
            <div className="flex items-center">
              {">"} Welcome to the real world
              <span className="inline-block w-2 h-5 bg-[#00ff41] ml-2 animate-pulse shadow-[0_0_10px_rgba(0,255,65,0.8)]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
