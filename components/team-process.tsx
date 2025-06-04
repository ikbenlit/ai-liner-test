"use client"

import { useEffect, useState } from "react"
import TypewriterTerminal from "./typewriter-terminal"

const elmerPhases = [
  [
    "> Intake sessie met klant... ✅",
    "> Business analyse uitvoeren... ✅",
    "> Foundation scan uitvoeren... ✅",
    "> Roadmap opstellen... ✅",
  ],
  [
    "> Logo & huisstijl ontwerpen... ✅",
    "> Website ontwikkeling... ✅",
    "> Marketing materialen creëren... ✅",
    "> Professionele uitstraling opbouwen... ✅",
  ],
  [
    "> Support bij AI implementatie... ✅",
    "> Feedback op integratie... ✅",
  ],
  [
    "> Team training & knowledge transfer... ✅",
    "> Go-live support... ✅",
    "> Continue optimalisatie... ✅",
  ],
]

const colinPhases = [
  [
    "> Intake sessie met klant... ✅",
    "> Acceleratie potentieel analyse... ✅",
    "> Roadmap & planning... ✅",
  ],
  [
    "> AI requirements verzamelen... ✅",
    "> Integratievoorstel maken... ✅",
  ],
  [
    "> AI chatbots ontwikkelen... ✅",
    "> Processen automatiseren... ✅",
    "> Systeem integraties & testing... ✅",
    "> Performance optimalisatie... ✅",
  ],
  [
    "> Foundation + Acceleratie integreren... ✅",
    "> Team training & kennisoverdracht... ✅",
    "> Monitoring & uitbreiding... ✅",
  ],
]

const phaseTitles = [
  "FASE 1: DISCOVERY",
  "FASE 2: FOUNDATION",
  "FASE 3: ACCELERATION",
  "FASE 4: FUSION & OPTIMIZATION"
]

export default function TeamProcess() {
  const [phase, setPhase] = useState(0)
  const [elmerDone, setElmerDone] = useState(false)
  const [colinDone, setColinDone] = useState(false)
  const [elmerStart, setElmerStart] = useState(false)

  // Colin start direct, Elmer met vertraging (bijv. 1.5s)
  useEffect(() => {
    const timer = setTimeout(() => setElmerStart(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Als beide klaar zijn met hun fase, ga naar volgende fase
  useEffect(() => {
    if (elmerDone && colinDone && phase < elmerPhases.length - 1) {
      const timer = setTimeout(() => {
        setPhase((p) => p + 1)
        setElmerDone(false)
        setColinDone(false)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [elmerDone, colinDone, phase])

  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-[#2E9BDA]">WERKWIJZE</span>.<span className="text-[#ff0080]">PROCESS</span>
          <span className="text-[#00ff41] animate-pulse">{" >"}</span>
        </h2>
        <p className="text-[#666]">Onze 4-fasen aanpak: Foundation × Acceleratie = Succesvolle transformatie</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Elmer's Terminal */}
        <TypewriterTerminal
          key={"elmer-" + phase + elmerStart}
          lines={elmerStart ? [phaseTitles[phase], ...elmerPhases[phase]] : []}
          headerText="elmer@foundation:~$"
          className="border-[#2E9BDA] bg-[#0a0a0a]/90 shadow-[0_0_30px_rgba(46,155,218,0.3)]"
          typingSpeed={38}
          linePause={900}
          theme="fundament"
          // callback als klaar
          onTypingComplete={() => setElmerDone(true)}
        />

        {/* Colin's Terminal */}
        <TypewriterTerminal
          key={"colin-" + phase}
          lines={[phaseTitles[phase], ...colinPhases[phase]]}
          headerText="colin@acceleratie:~$"
          className="border-[#00ff41] bg-black/90 shadow-[0_0_30px_rgba(0,255,65,0.3)]"
          typingSpeed={38}
          linePause={900}
          theme="matrix"
          onTypingComplete={() => setColinDone(true)}
        />
      </div>
    </section>
  )
}
