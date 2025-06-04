import { Terminal } from "lucide-react"

export default function MatrixHeader() {
  return (
    <header className="flex flex-col mb-16 border-b border-[#00ff41] pb-4">
      <div className="pt-2 pb-1">
        <span className="font-mono text-xs bg-black/60 px-2 py-1 rounded border border-[#00ff41] text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] via-[#ff0080] to-[#00bfff] select-none">
          ./acceleratie
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="font-mono text-xs leading-none whitespace-pre text-[#00ff41]">
            <div>{"█████╗ ██╗"}</div>
            <div>{"██╔══██╗██║"}</div>
            <div>{"███████║██║"}</div>
            <div>{"██╔══██║██║"}</div>
            <div>{"██║  ██║██║"}</div>
            <div>{"╚═╝  ╚═╝╚═╝"}</div>
          </div>
          <div>
            <div className="text-xl font-bold tracking-wider text-[#00ff41]">AI-LINER</div>
            <div className="text-xs text-[#ff0080]">ACCELERATIE</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-8">
          {[
            { name: "./fundament", href: "/" },
            { name: "./acceleratie", href: "/matrix" },
            { name: "./transformatie", href: "/fusion" },
            { name: "./diensten", href: "#services" },
            { name: "./projecten", href: "#projects" },
            { name: "./over-ons", href: "/over-ons" },
            { name: "./contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#00ff41] hover:text-[#ff0080] transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff0080] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <button className="matrix-btn border-2 border-[#00ff41] text-[#00ff41] px-4 py-2 hover:bg-[#00ff41] hover:text-black transition-colors duration-300 flex items-center gap-2 relative overflow-hidden group">
          <Terminal size={16} />
          <span className="relative z-10">./start</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff41]/20 to-transparent -translate-x-full group-hover:animate-matrix-sweep"></div>
        </button>
      </div>
    </header>
  )
}
