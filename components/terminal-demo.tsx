"use client"

import TypewriterTerminal from "./typewriter-terminal"

const demoTerminalLines = [
  "> Uitvoeren Fundament Diagnose...",
  "> Controleren merk consistentie... ❌ INCONSISTENT",
  "> Analyseren website prestaties... ⚠️ VERBETERING NODIG",
  "> Evalueren marketing materialen... ❌ VEROUDERD",
  "> Beoordelen klantjourney... ⚠️ GEFRAGMENTEERD",
  "> ",
  "> FUNDAMENT SCORE: 3/10",
  "> AANBEVELING: Start met merkidentiteit overhaul",
  "> GESCHATTE FUNDAMENT TIJD: 2-4 weken",
  "> ",
  "> Type './krijg_fundament_offerte' om te beginnen",
]

export default function TerminalDemo() {
  return (
    <section className="py-16">
      <TypewriterTerminal
        lines={demoTerminalLines}
        headerText="gebruiker@ai-liner:~$ ./start_fundament_check"
        className="max-w-3xl mx-auto"
        typingSpeed={35}
        linePause={700}
      />
    </section>
  )
}
