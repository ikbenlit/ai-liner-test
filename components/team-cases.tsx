const cases = [
  {
    title: "Verffabrikant Transformatie (4 weken)",
    before: [
      "6 uur/dag aan support, gemiste kansen, beperkte internationale orders",
    ],
    after: [
      "Orders uit 15 landen, 340% ROI, 90% minder support tijd",
    ],
    foundation: "Nieuwe huisstijl en logo, B2B website met productcatalogus, internationale uitstraling",
    acceleration: "12-talige AI technische support, automatische offerte generator, CRM integratie en lead scoring",
    timeline: "4 weken",
    roi: 340,
    quote: "Onze AI verkoopt nu beter dan onze beste vertegenwoordiger.",
    progressGradient: "from-[#2E9BDA] via-[#00ff41] to-[#ff0080]",
  },
  {
    title: "Dakdekker Schaalvergroting (6 weken)",
    before: [
      "Lokaal actief, handmatige offertes, beperkte groei",
    ],
    after: [
      "Van lokaal naar 3 provincies, 400% meer leads, wachtlijst van 3 maanden",
    ],
    foundation: "Premium rebranding voor groei, professionele website met portfolio, marketing materialen voor expansion",
    acceleration: "WhatsApp offerte AI via foto's, automatische planning en scheduling, customer journey automation",
    timeline: "6 weken",
    roi: 400,
    quote: "We zijn van buurtbedrijf naar marktleider gegaan in 2 maanden.",
    progressGradient: "from-[#F5B041] via-[#ff0080] to-[#00bfff]",
  },
]

export default function TeamCases() {
  return (
    <section className="py-16 border-t border-[#333]" id="team-cases">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 relative">
          ./team_cases
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Gezamenlijke transformatie cases met meetbaar resultaat
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cases.map((c, index) => (
          <div
            key={index}
            className="border border-[#333] bg-[#0a0a0a]/80 p-8 hover:border-[#2E9BDA] transition-all duration-300 relative overflow-hidden group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] animate-fusion-scan"></div>

            <h3 className="text-2xl font-bold text-[#2E9BDA] group-hover:text-[#00ff41] transition-colors mb-2">
              {c.title}
            </h3>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <div className="text-xs text-[#ff0080] font-bold mb-1">VOOR</div>
                <ul className="text-[#666] text-sm list-disc list-inside">
                  {c.before.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="flex-1">
                <div className="text-xs text-[#00ff41] font-bold mb-1">NA</div>
                <ul className="text-[#00ff41] text-sm list-disc list-inside">
                  {c.after.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>

            <div className="mb-2">
              <span className="text-[#2E9BDA] font-bold">Foundation:</span> {c.foundation}
            </div>
            <div className="mb-2">
              <span className="text-[#00ff41] font-bold">Acceleratie:</span> {c.acceleration}
            </div>
            <div className="mb-2">
              <span className="text-[#ff0080] font-bold">Tijdlijn:</span> {c.timeline}
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#2E9BDA]">ROI</span>
                <span className="text-[#ff0080]">{c.roi}%</span>
              </div>
              <div className="w-full bg-black h-3 border border-[#333] overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${c.progressGradient} shadow-[0_0_15px_rgba(46,155,218,0.5)] transition-all duration-1000`}
                  style={{ width: `${Math.min(c.roi, 100)}%` }}
                ></div>
              </div>
            </div>

            <blockquote className="italic text-[#999] border-l-4 border-[#00ff41] pl-4 mb-2">
              “{c.quote}”
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  )
}
