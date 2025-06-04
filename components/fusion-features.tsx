import { Brain, Code, Shield, Zap, Database, Network } from "lucide-react"

const features = [
  {
    icon: <Brain className="w-10 h-10" />,
    title: "Dual Consciousness",
    description: "Classic AI meets digital consciousness in perfect harmony.",
    colors: { primary: "text-[#2E9BDA]", secondary: "text-[#00ff41]" },
    glow: "shadow-[0_0_20px_rgba(46,155,218,0.3)]",
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: "Fusion Protocols",
    description: "Retro-future coding standards merged with Matrix algorithms.",
    colors: { primary: "text-[#F5B041]", secondary: "text-[#ff0080]" },
    glow: "shadow-[0_0_20px_rgba(245,176,65,0.3)]",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Hybrid Security",
    description: "Enterprise-grade protection with cyberpunk defense systems.",
    colors: { primary: "text-[#E74C3C]", secondary: "text-[#00bfff]" },
    glow: "shadow-[0_0_20px_rgba(231,76,60,0.3)]",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Reality Bridge",
    description: "Seamless transition between terminal and matrix realities.",
    colors: { primary: "text-[#00ff41]", secondary: "text-[#2E9BDA]" },
    glow: "shadow-[0_0_20px_rgba(0,255,65,0.3)]",
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Dual Data Streams",
    description: "Process information across both classic and matrix protocols.",
    colors: { primary: "text-[#ff0080]", secondary: "text-[#F5B041]" },
    glow: "shadow-[0_0_20px_rgba(255,0,128,0.3)]",
  },
  {
    icon: <Network className="w-10 h-10" />,
    title: "Fusion Network",
    description: "Connected infrastructure spanning multiple reality layers.",
    colors: { primary: "text-[#00bfff]", secondary: "text-[#E74C3C]" },
    glow: "shadow-[0_0_20px_rgba(0,191,255,0.3)]",
  },
]

export default function FusionFeatures() {
  return (
    <section className="py-16 border-t border-[#333]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 relative">
          <span className="text-[#F5B041]">FUSION</span>.<span className="text-[#ff0080]">CAPABILITIES</span>
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Advanced AI technologies bridging retro-future and cyberpunk realities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`border border-[#333] bg-[#0a0a0a]/80 p-6 relative overflow-hidden group hover:border-[#2E9BDA] transition-all duration-300 ${feature.glow}`}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] animate-fusion-scan"></div>

            <div className={`mb-6 ${feature.colors.primary} group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>

            <h3
              className={`text-xl font-bold mb-3 ${feature.colors.secondary} group-hover:${feature.colors.primary} transition-colors`}
            >
              {feature.title}
            </h3>

            <p className="text-[#666] group-hover:text-[#999] transition-colors">{feature.description}</p>

            <div className="absolute bottom-2 right-2 text-xs text-[#333] group-hover:text-[#00ff41] transition-colors">
              {"["}FUSION{"]"}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
