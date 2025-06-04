import { Terminal } from "lucide-react"
import AsciiLogo from "@/components/ascii-logo"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import TerminalDemo from "@/components/terminal-demo"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#2E9BDA] font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="pt-2 pb-1">
          <span className="font-mono text-xs bg-black/60 px-2 py-1 rounded border border-[#2E9BDA] text-transparent bg-clip-text bg-gradient-to-r from-[#2E9BDA] via-[#F5B041] to-[#E74C3C] select-none">
            ./fundament
          </span>
        </div>
        <header className="flex justify-between items-center mb-16 border-b border-[#2E9BDA] pb-4">
          <div className="flex items-center gap-2">
            <AsciiLogo />
            <span className="text-xl font-bold tracking-wider">AI-LINER</span>
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
              item.href.startsWith("/") ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#2E9BDA] hover:text-[#F5B041] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#2E9BDA] hover:text-[#F5B041] transition-colors duration-300"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>
          <button className="ascii-btn border-2 border-[#2E9BDA] text-[#2E9BDA] px-4 py-2 hover:bg-[#2E9BDA] hover:text-black transition-colors duration-300 flex items-center gap-2">
            <Terminal size={16} />
            <span>./login</span>
          </button>
        </header>

        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <TerminalDemo />
        <ProjectsSection />
        <ContactSection />

        <footer className="mt-24 border-t border-[#333] pt-8 text-center">
          <div className="mb-6">
            <div className="text-xl font-bold text-[#2E9BDA] mb-2">Klaar voor complete transformatie?</div>
            <div className="text-[#00ff41] mb-4">Foundation + Acceleratie samen = 10x resultaat</div>
            <a href="/fusion" className="inline-block bg-[#2E9BDA] text-black font-bold px-6 py-2 rounded hover:bg-[#00ff41] hover:text-black transition-colors duration-300">
              Ontdek Fusion
            </a>
          </div>
          <div className="text-sm text-[#999]">
            <p>&copy; {new Date().getFullYear()} AI-LINER ASCII Tech. All rights reserved.</p>
            <p className="mt-2">Building AI solutions with retro-future style</p>
          </div>
          <div className="mt-4 flex justify-center gap-6">
            {["./github", "./twitter", "./linkedin"].map((social) => (
              <a key={social} href="#" className="text-[#2E9BDA] hover:text-[#F5B041] transition-colors">
                {social}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  )
}
