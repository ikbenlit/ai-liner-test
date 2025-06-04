import { Smartphone, Globe, Megaphone, Cog } from "lucide-react"

const features = [
  {
    icon: <Smartphone className="w-8 h-8 text-[#2E9BDA]" />,
    title: "Merkidentiteit",
    description: "Logo's die vertrouwen wekken, huisstijlen die professioneel ogen, eerste indrukken die beklijven.",
  },
  {
    icon: <Globe className="w-8 h-8 text-[#F5B041]" />,
    title: "Digitale Aanwezigheid",
    description: "Websites die converteren, content die verkoopt, SEO die gevonden wordt.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-[#E74C3C]" />,
    title: "Marketing Fundament",
    description: "Catalogi die overtuigen, brochures die boeien, beursstands die opvallen.",
  },
  {
    icon: <Cog className="w-8 h-8 text-[#F5B041]" />,
    title: "Bedrijfsprocessen",
    description: "Workflows die werken, systemen die schalen, processen die blijven.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 border-t border-[#333]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#F5B041] mb-4">FUNDAMENT.PIJLERS</h2>
        <p className="text-[#999] max-w-2xl mx-auto">
          De essentiële bouwstenen voor een solide offline business fundament
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-[#333] bg-[#1a1a1a] p-6 relative overflow-hidden group hover:border-[#2E9BDA] transition-colors duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#E74C3C] via-[#2E9BDA] to-[#F5B041] animate-scanline"></div>
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-[#F5B041]">{feature.title}</h3>
            <p className="text-[#999]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
