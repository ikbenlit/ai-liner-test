const projects = [
  {
    title: "Verfenfabrikant - Apeldoorn",
    description: "AI-chatbot voor technische vragen in 12 talen. Van 6 uur/dag naar 6 minuten per vraag.",
    status: "LIVE",
    progress: 95,
    progressColor: "from-[#00ff41] to-[#00ff41]",
    statusColor: "text-[#00ff41]",
    roi: "340% in eerste maand",
    quote: "Duitse klanten krijgen binnen 30 seconden antwoord, ook om 3 uur 's nachts",
  },
  {
    title: "Dakdekker - Zwolle",
    description: "AI-offerte generator via WhatsApp foto's. Van 4 uur naar 10 minuten per offerte.",
    status: "SCALING",
    progress: 87,
    progressColor: "from-[#ff0080] to-[#00ff41]",
    statusColor: "text-[#ff0080]",
    roi: "8x meer business in zelfde tijd",
    quote: "Klant stuurt foto, 10 minuten later heeft hij een offerte. Concurrenten zijn nog aan het rekenen",
  },
  {
    title: "Makelaar - Utrecht",
    description: "AI lead-kwalificatie systeem. Van 20 naar 3 échte leads per dag.",
    status: "OPTIMIZING",
    progress: 92,
    progressColor: "from-[#00bfff] to-[#ff0080]",
    statusColor: "text-[#00bfff]",
    roi: "Van 1 op 20 deals naar 2 op 3 deals",
    quote: "Mijn AI analyseert gedrag en urgentie. Ik bel alleen nog hete prospects",
  },
  {
    title: "Eventplanner - Amsterdam",
    description: "Automatische coördinatie en communicatie. 60% minder administratie, 40% meer events.",
    status: "EXPANDING",
    progress: 78,
    progressColor: "from-[#ff0080] to-[#00bfff]",
    statusColor: "text-[#ff0080]",
    roi: "Van 2 naar 3,5 events per maand",
    quote: "Mijn AI houdt leveranciers op de hoogte en plant meetings. Ik focus op mooie momenten creëren",
  },
]

export default function MatrixProjects() {
  return (
    <section className="py-16 border-t border-[#333]" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#ff0080] mb-4 relative">
          ./live_acceleraties
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Echte resultaten van bedrijven die versnellen met AI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-[#333] bg-[#0a0a0a] p-6 hover:border-[#00ff41] transition-all duration-300 relative overflow-hidden group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff0080] via-[#00ff41] to-[#00bfff] animate-matrix-scan"></div>

            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#00bfff] group-hover:text-[#ff0080] transition-colors">
                {project.title}
              </h3>
              <span className={`text-xs px-2 py-1 border rounded ${project.statusColor} border-current`}>
                {project.status}
              </span>
            </div>

            <p className="text-[#666] mb-4 group-hover:text-[#999] transition-colors">{project.description}</p>
            
            <div className="text-sm text-[#00ff41] mb-4">
              ROI: {project.roi}
            </div>

            <div className="text-xs text-[#666] italic mb-6">
              "{project.quote}"
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#00ff41]">Implementatie</span>
                <span className="text-[#ff0080]">{project.progress}%</span>
              </div>
              <div className="w-full bg-black h-3 border border-[#333] overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${project.progressColor} shadow-[0_0_15px_rgba(0,255,65,0.5)] transition-all duration-1000`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <a href="#" className="inline-flex items-center text-[#00ff41] hover:text-[#ff0080] transition-colors">
                ./bekijk_casestudy <span className="ml-2">{"→"}</span>
              </a>
              <div className="text-xs text-[#333] group-hover:text-[#00ff41] transition-colors">
                {"["}ID: {String(index + 1).padStart(3, "0")}
                {"]"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
