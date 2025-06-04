import Link from "next/link"
import AsciiLogo from "./ascii-logo"

const FusionHeader = () => {
  return (
    <header className="relative z-20 border-b-2 border-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] bg-[#0a0a0a]/95 backdrop-blur-md shadow-[0_0_30px_rgba(46,155,218,0.15)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-2 pb-1">
          <span className="font-mono text-xs bg-black/60 px-2 py-1 rounded border border-[#2E9BDA] text-transparent bg-clip-text bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] select-none">
            ./complete_transformatie
          </span>
        </div>
        <div className="flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center gap-4">
            <AsciiLogo />
            <span className="text-2xl md:text-3xl font-bold font-mono bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] bg-clip-text text-transparent tracking-wider select-none">
              AI-LINER 
            </span>
          </div>
          <nav className="hidden md:flex gap-8 font-mono text-base">
            {[
              { name: "./fundament", href: "/" },
              { name: "./acceleratie", href: "/matrix" },
              { name: "./transformatie", href: "/fusion" },
              { name: "./diensten", href: "#services" },
              { name: "./projecten", href: "#projects" },
              { name: "./over-ons", href: "/over-ons" },
              { name: "./contact", href: "#contact" },
            ].map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-1 bg-clip-text text-transparent bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] hover:from-[#00ff41] hover:to-[#2E9BDA] transition-colors duration-300"
                >
                  <span className="font-bold">{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative group px-1 bg-clip-text text-transparent bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] hover:from-[#00ff41] hover:to-[#2E9BDA] transition-colors duration-300"
                >
                  <span className="font-bold">{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            ))}
          </nav>
          <button className="md:hidden text-[#2E9BDA] focus:outline-none font-mono border border-[#2E9BDA] px-3 py-1 rounded bg-black/60 hover:bg-[#2E9BDA] hover:text-black transition-colors">
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}

export default FusionHeader
