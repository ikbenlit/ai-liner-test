import { Palette, Globe2, Presentation, Settings2 } from "lucide-react"

const services = [
  {
    icon: <Palette className="w-10 h-10" />,
    title: "Merk & Identiteit Ontwerp",
    description: "Logo ontwerp en huisstijl ontwikkeling, merk positionering en messaging, visuele identiteit systemen.",
    color: "text-[#2E9BDA]",
  },
  {
    icon: <Globe2 className="w-10 h-10" />,
    title: "Website & Digitale Aanwezigheid",
    description: "Professionele websites die converteren, SEO-geoptimaliseerde content, social media setup en strategie.",
    color: "text-[#F5B041]",
  },
  {
    icon: <Presentation className="w-10 h-10" />,
    title: "Marketing Materialen",
    description: "Brochures, catalogi en presentaties, beursmaterialen en displays, print en digitale marketing assets.",
    color: "text-[#E74C3C]",
  },
  {
    icon: <Settings2 className="w-10 h-10" />,
    title: "Bedrijfsproces Ontwerp",
    description: "Workflow optimalisatie, documentatie en handleidingen, team training en implementatie.",
    color: "text-[#2E9BDA]",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 border-t border-[#333]" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#F5B041] mb-4">./fundament_diensten</h2>
        <p className="text-[#999] max-w-2xl mx-auto">
          Professionele diensten voor een onwrikbaar bedrijfsfundament
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-[#333] bg-[#1a1a1a] p-8 relative group hover:border-[#2E9BDA] transition-colors duration-300"
          >
            <div className={`mb-6 ${service.color}`}>{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-[#F5B041] group-hover:text-[#F5B041]">{service.title}</h3>
            <p className="text-[#999] mb-6">{service.description}</p>
            <a href="#" className="inline-flex items-center text-[#2E9BDA] hover:text-[#F5B041] transition-colors">
              ./meer_informatie <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
