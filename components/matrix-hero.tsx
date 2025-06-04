import { ArrowRight, Zap } from "lucide-react"

export default function MatrixHero() {
  return (
    <section className="py-16 md:py-24 relative" id="home">
      <div className="text-center mb-12">
        <div className="inline-block border-2 border-[#00ff41] px-4 py-1 text-sm mb-6 bg-black/50">
          <span className="text-[#ff0080]">v2.0.0</span> | MATRIX.PROTOCOL_ACTIVE
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-8 relative">
          <span className="relative z-10 text-[#00ff41] glitch-text" data-text="AI-LINER MATRIX">
            AI-LINER MATRIX
          </span>
          <div className="absolute inset-0 text-[#ff0080] opacity-70 animate-glitch-1">AI-LINER MATRIX</div>
          <div className="absolute inset-0 text-[#00bfff] opacity-70 animate-glitch-2">AI-LINER MATRIX</div>
        </h1>

        <p className="text-xl md:text-3xl text-[#ff0080] mb-4 font-bold">ENTER THE DIGITAL REALM</p>
        <p className="text-lg text-[#00bfff] mb-12 max-w-3xl mx-auto">
          Building AI solutions in terminal style • Where code meets consciousness
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
        <button className="matrix-btn border-2 border-[#00ff41] text-[#00ff41] px-8 py-4 hover:bg-[#00ff41] hover:text-black transition-colors duration-300 relative overflow-hidden group text-lg">
          <span className="relative z-10 flex items-center gap-3">
            <Zap size={20} />
            ./jack_in
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff41]/20 to-transparent -translate-x-full group-hover:animate-matrix-sweep"></div>
        </button>

        <button className="matrix-btn border-2 border-[#ff0080] text-[#ff0080] px-8 py-4 hover:bg-[#ff0080] hover:text-white transition-colors duration-300 relative overflow-hidden group text-lg">
          <span className="relative z-10">./view_matrix</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff0080]/20 to-transparent -translate-x-full group-hover:animate-matrix-sweep"></div>
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="border border-[#00ff41] bg-black/80 rounded overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.3)]">
          <div className="bg-[#0a0a0a] p-3 border-b border-[#00ff41] flex justify-between items-center">
            <span className="text-[#00ff41] text-sm">neo@matrix:~$</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff0080] shadow-[0_0_10px_rgba(255,0,128,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00bfff] shadow-[0_0_10px_rgba(0,191,255,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.5)]"></div>
            </div>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="mb-2">
              {">"} Initializing <span className="text-[#ff0080]">MATRIX</span> protocol...
            </div>
            <div className="mb-2">{">"} Loading neural pathways...</div>
            <div className="mb-2">{">"} Establishing quantum connections...</div>
            <div className="mb-2">
              {">"} Status: <span className="text-[#00ff41] font-bold">CONNECTED</span>
            </div>
            <div className="mb-2">{">"} Reality.exe has stopped working</div>
            <div className="flex items-center">
              {">"} Welcome to the Matrix, Neo. Follow the white rabbit...
              <span className="inline-block w-2 h-5 bg-[#00ff41] ml-2 animate-pulse shadow-[0_0_10px_rgba(0,255,65,0.8)]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
