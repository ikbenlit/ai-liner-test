import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Lokale Dakdekker - Zwolle",
    description: "Professionele website + branding transformatie resulteerde in 300% meer leads binnen 3 maanden.",
    progress: 100,
    quote: "Klanten nemen me nu serieus voordat ik ook maar iets zeg",
    color: "from-[#2E9BDA] to-[#F5B041]",
  },
  {
    title: "Verfenfabrikant - Apeldoorn",
    description: "Internationale website + productcatalogus opende deuren naar 12 nieuwe landen.",
    progress: 85,
    quote: "Onze online uitstraling opende deuren die jarenlang dicht waren",
    color: "from-[#F5B041] to-[#E74C3C]",
  },
  {
    title: "Makelaar - Utrecht",
    description: "Premium branding + marketing materialen leidden tot 40% hogere commissies.",
    progress: 90,
    quote: "Ik word nu benaderd door high-end klanten",
    color: "from-[#E74C3C] to-[#2E9BDA]",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-16 border-t border-[#333]" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#F5B041] mb-4">./fundament_succesverhalen</h2>
        <p className="text-[#999] max-w-2xl mx-auto">
          Echte resultaten van bedrijven die kozen voor een solide fundament
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-[#333] bg-[#1a1a1a] p-6 relative group hover:border-[#2E9BDA] transition-colors duration-300"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2 text-[#F5B041]">{project.title}</h3>
              <p className="text-[#999] mb-4">{project.description}</p>
              <div className="relative h-2 bg-[#333] rounded overflow-hidden mb-4">
                <div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${project.color}`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-[#666] italic mb-4">"{project.quote}"</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-[#2E9BDA] hover:text-[#F5B041] transition-colors text-sm"
            >
              ./bekijk_case_study <ArrowRight size={12} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
