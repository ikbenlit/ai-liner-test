import { Brain, Code, Shield, Cpu, Database, Zap } from "lucide-react"

const features = [
  {
    icon: <Brain className="w-10 h-10" />,
    title: "AI Chatbots",
    description: "24/7 klantenservice die nooit slaapt, technische vragen in seconden beantwoordt.",
    color: "text-[#00ff41]",
    glow: "shadow-[0_0_20px_rgba(0,255,65,0.3)]",
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: "Slimme Automatisering",
    description: "Van 4 uur naar 10 minuten per proces, fouten elimineren, snelheid maximaliseren.",
    color: "text-[#ff0080]",
    glow: "shadow-[0_0_20px_rgba(255,0,128,0.3)]",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Kennisbanken",
    description: "Al je expertise digitaal beschikbaar, instant toegang tot bedrijfsinformatie.",
    color: "text-[#00bfff]",
    glow: "shadow-[0_0_20px_rgba(0,191,255,0.3)]",
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: "Proces Optimalisatie",
    description: "Workflows die zichzelf verbeteren, real-time analyse van bedrijfsprocessen.",
    color: "text-[#00ff41]",
    glow: "shadow-[0_0_20px_rgba(0,255,65,0.3)]",
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Integratie Systemen",
    description: "Naadloze koppeling met bestaande tools, één systeem voor alle data.",
    color: "text-[#ff0080]",
    glow: "shadow-[0_0_20px_rgba(255,0,128,0.3)]",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Schaal Acceleratie",
    description: "Van lokaal naar internationaal in weken, systemen die meegroeien met je succes.",
    color: "text-[#00bfff]",
    glow: "shadow-[0_0_20px_rgba(0,191,255,0.3)]",
  },
]

export default function MatrixFeatures() {
  return (
    <section className="py-16 border-t border-[#333]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#ff0080] mb-4 relative">
          ACCELERATIE.KRACHTEN
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          AI-technologie die je bedrijfsprocessen radicaal versnelt
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`border border-[#333] bg-[#0a0a0a] p-6 relative overflow-hidden group hover:border-[#00ff41] transition-all duration-300 ${feature.glow}`}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff0080] via-[#00ff41] to-[#00bfff] animate-matrix-scan"></div>

            <div className={`mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold mb-3 text-[#00bfff] group-hover:text-[#ff0080] transition-colors">
              {feature.title}
            </h3>

            <p className="text-[#666] group-hover:text-[#999] transition-colors">{feature.description}</p>

            <div className="absolute bottom-2 right-2 text-xs text-[#333] group-hover:text-[#00ff41] transition-colors">
              {"["}ACTIEF{"]"}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
