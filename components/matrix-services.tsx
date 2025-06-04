import { Bot, Database, LineChart, Network } from "lucide-react"

const services = [
  {
    icon: <Bot className="w-12 h-12" />,
    title: "AI Consciousness",
    description: "Create digital beings with advanced neural pathways and decision-making capabilities.",
    color: "text-[#00ff41]",
    progress: 95,
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Data Mining",
    description: "Extract valuable insights from the vast digital underground networks.",
    color: "text-[#ff0080]",
    progress: 87,
  },
  {
    icon: <LineChart className="w-12 h-12" />,
    title: "Reality Analytics",
    description: "Analyze patterns across multiple dimensional data streams and timelines.",
    color: "text-[#00bfff]",
    progress: 92,
  },
  {
    icon: <Network className="w-12 h-12" />,
    title: "Network Integration",
    description: "Seamlessly connect to the global neural network infrastructure.",
    color: "text-[#00ff41]",
    progress: 78,
  },
]

export default function MatrixServices() {
  return (
    <section className="py-16 border-t border-[#333]" id="services">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#ff0080] mb-4 relative">
          ./services
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">Digital solutions for the next evolution of consciousness</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-[#333] bg-[#0a0a0a] p-8 relative group hover:border-[#00ff41] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff0080] via-[#00ff41] to-[#00bfff] animate-matrix-scan"></div>

            <div className={`mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
              {service.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-[#00bfff] group-hover:text-[#ff0080] transition-colors">
              {service.title}
            </h3>

            <p className="text-[#666] mb-6 group-hover:text-[#999] transition-colors">{service.description}</p>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#00ff41]">Completion Rate</span>
                <span className="text-[#ff0080]">{service.progress}%</span>
              </div>
              <div className="w-full bg-black h-2 border border-[#333]">
                <div
                  className="h-full bg-gradient-to-r from-[#00ff41] to-[#ff0080] shadow-[0_0_10px_rgba(0,255,65,0.5)]"
                  style={{ width: `${service.progress}%` }}
                ></div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center text-[#00ff41] hover:text-[#ff0080] transition-colors group-hover:translate-x-2 transform duration-300"
            >
              ./access_protocol <span className="ml-2">{"→"}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
