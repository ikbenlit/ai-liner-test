import { User, Palette, Brain, Zap } from "lucide-react"

const profiles = [
  {
    icon: <Palette className="w-10 h-10" />,
    title: "Foundation Architect - Elmer Harkema",
    specialties: [
      "Logo & Huisstijl Ontwerp",
      "Website Development",
      "Marketing Materialen",
      "Brand Positioning",
      "Print & Digital Design",
      "Beurstand Design",
    ],
    description:
      "Met 15+ jaar ervaring in design en branding begrijp ik dat elk AI-project begint met een solide fundament. Klanten moeten je serieus nemen voordat ze je AI ontmoeten.",
    quote: "De mooiste AI ter wereld faalt als je website eruitziet als uit 1995.",
    colors: { primary: "text-[#2E9BDA]", secondary: "text-[#F5B041]" },
    glow: "shadow-[0_0_20px_rgba(46,155,218,0.3)]",
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: "AI Acceleration Specialist - Colin Lit",
    specialties: [
      "AI Chatbot Development",
      "Process Automation",
      "Knowledge Management",
      "Data Analytics",
      "API Integrations",
      "System Optimization",
    ],
    description:
      "Als AI-consultant en developer help ik bedrijven hun repetitieve taken automatiseren. Van 6 uur naar 6 minuten - dat is wat AI kan bereiken met de juiste implementatie.",
    quote: "AI zonder business focus is duur speelgoed. AI met focus is een geldmachine.",
    colors: { primary: "text-[#00ff41]", secondary: "text-[#ff0080]" },
    glow: "shadow-[0_0_20px_rgba(0,255,65,0.3)]",
  },
]

export default function TeamProfiles() {
  return (
    <section className="py-16 border-t border-[#333]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 relative">
          <span className="text-[#2E9BDA]">ONS</span> <span className="text-[#F5B041]">TEAM</span>
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Twee specialisten, één missie: jouw business naar het volgende level tillen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className={`border border-[#333] bg-[#0a0a0a]/80 p-8 relative overflow-hidden group hover:border-[#2E9BDA] transition-all duration-300 ${profile.glow}`}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] animate-fusion-scan"></div>

            <div className={`mb-6 ${profile.colors.primary} group-hover:scale-110 transition-transform duration-300`}>
              {profile.icon}
            </div>

            <h3
              className={`text-2xl font-bold mb-3 ${profile.colors.secondary} group-hover:${profile.colors.primary} transition-colors`}
            >
              {profile.title}
            </h3>

            <ul className="mb-4 text-[#00bfff] text-sm font-mono grid gap-1 list-disc list-inside">
              {profile.specialties.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>

            <p className="text-[#999] italic mb-2">{profile.description}</p>
            <blockquote className="text-[#ff0080] font-semibold border-l-4 border-[#2E9BDA] pl-4 mb-2">“{profile.quote}”</blockquote>
          </div>
        ))}
      </div>
    </section>
  )
}
