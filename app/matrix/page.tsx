import MatrixRain from "@/components/matrix-rain"
import MatrixHeader from "@/components/matrix-header"
import MatrixHero from "@/components/matrix-hero"
import MatrixFeatures from "@/components/matrix-features"
import MatrixServices from "@/components/matrix-services"
import MatrixTerminal from "@/components/matrix-terminal"
import MatrixProjects from "@/components/matrix-projects"
import MatrixContact from "@/components/matrix-contact"

export default function MatrixPage() {
  return (
    <main className="min-h-screen bg-black text-[#00ff41] font-mono relative overflow-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <MatrixHeader />
          <MatrixHero />
          <MatrixFeatures />
          <MatrixServices />
          <MatrixTerminal />
          <MatrixProjects />
          <MatrixContact />

          <footer className="mt-24 border-t border-[#333] pt-8 text-center">
            <div className="text-sm text-[#666]">
              <p>&copy; {new Date().getFullYear()} AI-LINER Acceleratie. Alle rechten voorbehouden.</p>
              <p className="mt-2 text-[#00ff41]">AI-systemen die je business versnellen</p>
            </div>
            <div className="mt-4 flex justify-center gap-6">
              {["./github", "./twitter", "./linkedin"].map((social) => (
                <a key={social} href="#" className="text-[#00ff41] hover:text-[#ff0080] transition-colors">
                  {social}
                </a>
              ))}
            </div>
            <div className="mb-6">
              <div className="text-xl font-bold text-[#00ff41] mb-2">Klaar voor de volgende stap?</div>
              <div className="text-[#ff0080] mb-4">Complete transformatie = gegarandeerd succes</div>
              <a href="/fusion" className="inline-block bg-[#00ff41] text-black font-bold px-6 py-2 rounded hover:bg-[#ff0080] hover:text-black transition-colors duration-300">
                Ontdek Fusion
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}
