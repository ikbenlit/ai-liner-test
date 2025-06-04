import { Bot, Database, LineChart, Network } from "lucide-react"

const services = [
  {
    icon: <Bot className="w-12 h-12" />,
    title: "Hybrid AI Systems",
    description: "Classic AI architecture enhanced with matrix consciousness protocols.",
    primaryColor: "text-[#2E9BDA]",
    secondaryColor: "text-[#00ff41]",
    progress: 94,
    progressGradient: "from-[#2E9BDA] via-[#00ff41] to-[#ff0080]",
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Reality Data Mining",
    description: "Extract insights from both physical and digital reality streams.",
    primaryColor: "text-[#F5B041]",
    secondaryColor: "text-[#ff0080]",
    progress: 89,
    progressGradient: "from-[#F5B041] via-[#ff0080] to-[#00bfff]",
  },
  {
    icon: <LineChart className="w-12 h-12" />,
    title: "Fusion Analytics",
    description: "Comprehensive analysis across multiple dimensional data layers.",
    primaryColor: "text-[#E74C3C]",
    secondaryColor: "text-[#00bfff]",
    progress: 91,
    progressGradient: "from-[#E74C3C] via-[#00bfff] to-[#00ff41]",
  },
  {
    icon: <Network className="w-12 h-12" />,
    title: "Bridge Integration",
    description: "Seamless connection between classic systems and matrix networks.",
    primaryColor: "text-[#00ff41]",
    secondaryColor: "text-[#2E9BDA]",
    progress: 86,
    progressGradient: "from-[#00ff41] via-[#2E9BDA] to-[#F5B041]",
  },
]

export default function FusionServices() {
  return (
    <section className="py-16 border-t border-[#333]" id="services">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 relative">
          ./fusion_services
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Bridging the gap between retro-future tech and cyberpunk consciousness
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-[#333] bg-[#0a0a0a]/80 p-8 relative group hover:border-[#2E9BDA] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] animate-fusion-scan"></div>

            <div className={`mb-6 ${service.primaryColor} group-hover:scale-110 transition-transform duration-300`}>
              {service.icon}
            </div>

            <h3
              className={`text-2xl font-bold mb-4 ${service.secondaryColor} group-hover:${service.primaryColor} transition-colors`}
            >
              {service.title}
            </h3>

            <p className="text-[#666] mb-6 group-hover:text-[#999] transition-colors">{service.description}</p>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#2E9BDA]">Fusion Rate</span>
                <span className="text-[#ff0080]">{service.progress}%</span>
              </div>
              <div className="w-full bg-black h-3 border border-[#333] overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${service.progressGradient} shadow-[0_0_15px_rgba(46,155,218,0.5)] transition-all duration-1000`}
                  style={{ width: `${service.progress}%` }}
                ></div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center text-[#2E9BDA] hover:text-[#00ff41] transition-colors group-hover:translate-x-2 transform duration-300"
            >
              ./access_fusion <span className="ml-2">{"→"}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
