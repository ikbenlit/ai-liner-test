import TeamHeader from "@/components/team-header"
import TeamHero from "@/components/team-hero"
import TeamProfiles from "@/components/team-profiles"
import TeamSynergy from "@/components/team-synergy"
import TeamProcess from "@/components/team-process"
import TeamCases from "@/components/team-cases"
import TeamContact from "@/components/team-contact"
import MatrixRain from "@/components/matrix-rain"

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-black to-[#0a0a0a] text-[#2E9BDA] font-mono relative overflow-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <TeamHeader />
          <TeamHero />
          <TeamProfiles />
          <TeamSynergy />
          <TeamProcess />
          <TeamCases />
          <TeamContact />

          <footer className="mt-24 border-t border-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] pt-8 text-center">
            <div className="text-sm text-[#666]">
              <p>&copy; {new Date().getFullYear()} AI-LINER Fusion Division. All rights reserved.</p>
              <p className="mt-2">
                <span className="text-[#2E9BDA]">Building AI solutions</span>{" "}
                <span className="text-[#00ff41]">with retro-future style</span>{" "}
                <span className="text-[#ff0080]">in terminal reality</span>
              </p>
            </div>
            <div className="mt-4 flex justify-center gap-6">
              {["./github", "./twitter", "./linkedin"].map((social) => (
                <a key={social} href="#" className="text-[#2E9BDA] hover:text-[#00ff41] transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
} 