import { Shield, Users, Lightbulb, TrendingUp } from "lucide-react"

const synergies = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Vertrouwen + Technologie",
    description: "Elmer zorgt dat klanten je serieus nemen. Colin zorgt dat je AI écht resultaat levert.",
    primaryColor: "text-[#2E9BDA]",
    secondaryColor: "text-[#00ff41]",
    progress: 98,
    progressGradient: "from-[#2E9BDA] via-[#00ff41] to-[#ff0080]",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Offline + Online",
    description: "Elmer bouwt je brand in de echte wereld. Colin versnelt je processen in de digitale wereld.",
    primaryColor: "text-[#F5B041]",
    secondaryColor: "text-[#ff0080]",
    progress: 95,
    progressGradient: "from-[#F5B041] via-[#ff0080] to-[#00bfff]",
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Creativiteit + Logica",
    description: "Elmer denkt in visuele impact en emotie. Colin denkt in efficiency en ROI.",
    primaryColor: "text-[#ff0080]",
    secondaryColor: "text-[#2E9BDA]",
    progress: 97,
    progressGradient: "from-[#ff0080] via-[#2E9BDA] to-[#00ff41]",
  },
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: "Foundation + Acceleration",
    description: "Zonder fundament valt je AI om. Zonder acceleratie blijf je achter.",
    primaryColor: "text-[#00ff41]",
    secondaryColor: "text-[#F5B041]",
    progress: 99,
    progressGradient: "from-[#00ff41] via-[#F5B041] to-[#2E9BDA]",
  },
]

export default function TeamSynergy() {
  return (
    <section className="py-16 border-t border-[#333]" id="team_synergy">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 relative">
          ./team_synergie
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Waarom de combinatie Elmer + Colin werkt: premium synergie voor maximale impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {synergies.map((syn, index) => (
          <div
            key={index}
            className="border border-[#333] bg-[#0a0a0a]/80 p-8 relative group hover:border-[#2E9BDA] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] animate-fusion-scan"></div>

            <div className={`mb-6 ${syn.primaryColor} group-hover:scale-110 transition-transform duration-300`}>
              {syn.icon}
            </div>

            <h3
              className={`text-2xl font-bold mb-2 ${syn.secondaryColor} group-hover:${syn.primaryColor} transition-colors`}
            >
              {syn.title}
            </h3>

            <p className="text-[#999] mb-6">{syn.description}</p>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#2E9BDA]">Synergie Sterkte</span>
                <span className="text-[#ff0080]">{syn.progress}%</span>
              </div>
              <div className="w-full bg-black h-3 border border-[#333] overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${syn.progressGradient} shadow-[0_0_15px_rgba(46,155,218,0.5)] transition-all duration-1000`}
                  style={{ width: `${syn.progress}%` }}
                ></div>
              </div>
            </div>

            <a
              href="#team-contact"
              className="inline-flex items-center text-[#2E9BDA] hover:text-[#00ff41] transition-colors group-hover:translate-x-2 transform duration-300"
            >
              ./samenwerken <span className="ml-2">{"→"}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
