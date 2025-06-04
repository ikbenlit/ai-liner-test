const FusionHeader = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-[#2E9BDA]">
          Fusion
        </a>
        <nav className="hidden md:flex gap-8">
          {[
            { name: "./home", href: "/" },
            { name: "./matrix", href: "/matrix" },
            { name: "./fusion", href: "/fusion" },
            { name: "./services", href: "#services" },
            { name: "./contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#2E9BDA] hover:text-[#00ff41] transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2E9BDA] to-[#00ff41] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
        <button className="md:hidden text-[#2E9BDA] focus:outline-none">
          {/* Mobile Menu Icon (replace with your icon) */}
          Menu
        </button>
      </div>
    </header>
  )
}

export default FusionHeader
