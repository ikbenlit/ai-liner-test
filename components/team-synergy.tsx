import { Rocket, Building2, Globe2, Settings } from "lucide-react"

const packages = [
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "STARTER FUSION",
    price: "€15.000",
    duration: "4 weken",
    features: [
      "Elmer: Logo, website, basic branding",
      "Colin: 1 AI chatbot + proces automatisering",
      "Professionele uitstraling + eerste AI-wins"
    ],
    primaryColor: "text-[#2E9BDA]",
    secondaryColor: "text-[#00ff41]",
    progress: 85,
    progressGradient: "from-[#2E9BDA] via-[#00ff41] to-[#ff0080]",
  },
  {
    icon: <Building2 className="w-12 h-12" />,
    title: "BUSINESS FUSION",
    price: "€35.000",
    duration: "6 weken",
    features: [
      "Elmer: Complete rebranding + marketing suite",
      "Colin: 3 AI systemen + volledige proces optimalisatie",
      "Market leader positioning + 300% efficiency"
    ],
    primaryColor: "text-[#F5B041]",
    secondaryColor: "text-[#ff0080]",
    progress: 92,
    progressGradient: "from-[#F5B041] via-[#ff0080] to-[#00bfff]",
  },
  {
    icon: <Globe2 className="w-12 h-12" />,
    title: "ENTERPRISE FUSION",
    price: "€75.000",
    duration: "8 weken",
    features: [
      "Elmer: Internationale branding + omnichannel presence",
      "Colin: AI ecosysteem + predictive analytics",
      "Internationale expansie ready + competitive advantage"
    ],
    primaryColor: "text-[#E74C3C]",
    secondaryColor: "text-[#00bfff]",
    progress: 96,
    progressGradient: "from-[#E74C3C] via-[#00bfff] to-[#00ff41]",
  },
  {
    icon: <Settings className="w-12 h-12" />,
    title: "CUSTOM FUSION",
    price: "Op maat",
    duration: "Timeline varies",
    features: [
      "Volledig maatwerk voor unique challenges",
      "Unlimited scope binnen budget",
      "Dedicated team voor jouw transformatie"
    ],
    primaryColor: "text-[#00ff41]",
    secondaryColor: "text-[#2E9BDA]",
    progress: 88,
    progressGradient: "from-[#00ff41] via-[#2E9BDA] to-[#F5B041]",
  },
]

export default function FusionServices() {
  return (
    <section className="py-16 border-t border-[#333]" id="services">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 relative">
          ./complete_transformatie_pakketten
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Premium oplossingen voor bedrijven die klaar zijn voor exponentiële groei
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border border-[#333] bg-[#0a0a0a]/80 p-8 relative group hover:border-[#2E9BDA] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] animate-fusion-scan"></div>

            <div className={`mb-6 ${pkg.primaryColor} group-hover:scale-110 transition-transform duration-300`}>
              {pkg.icon}
            </div>

            <h3
              className={`text-2xl font-bold mb-2 ${pkg.secondaryColor} group-hover:${pkg.primaryColor} transition-colors`}
            >
              {pkg.title}
            </h3>

            <div className="mb-4">
              <span className="text-3xl font-bold text-[#2E9BDA]">{pkg.price}</span>
              <span className="text-[#666] ml-2">/ {pkg.duration}</span>
            </div>

            <ul className="text-[#666] mb-6 space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start group-hover:text-[#999] transition-colors">
                  <span className="text-[#00ff41] mr-2">→</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#2E9BDA]">ROI Potentieel</span>
                <span className="text-[#ff0080]">{pkg.progress}%</span>
              </div>
              <div className="w-full bg-black h-3 border border-[#333] overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${pkg.progressGradient} shadow-[0_0_15px_rgba(46,155,218,0.5)] transition-all duration-1000`}
                  style={{ width: `${pkg.progress}%` }}
                ></div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center text-[#2E9BDA] hover:text-[#00ff41] transition-colors group-hover:translate-x-2 transform duration-300"
            >
              ./bereken_jouw_roi <span className="ml-2">{"→"}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
