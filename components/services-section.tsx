import { Bot, Database, LineChart, Cpu } from "lucide-react"

const services = [
  {
    icon: <Bot className="w-10 h-10" />,
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs, from chatbots to predictive analytics.",
    color: "text-[#2E9BDA]",
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Data Processing",
    description: "Transform raw data into actionable insights with our advanced processing techniques.",
    color: "text-[#F5B041]",
  },
  {
    icon: <LineChart className="w-10 h-10" />,
    title: "Analytics",
    description: "Comprehensive analytics solutions to help you understand and leverage your data.",
    color: "text-[#E74C3C]",
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: "System Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
    color: "text-[#2E9BDA]",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 border-t border-[#333]" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#F5B041] mb-4">./services</h2>
        <p className="text-[#999] max-w-2xl mx-auto">
          Comprehensive AI solutions with our signature retro-future aesthetic
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
              ./learn_more <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
