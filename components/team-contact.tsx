import { MessageSquare, Send, Calendar, Euro, Target } from "lucide-react"

export default function FusionContact() {
  return (
    <section className="py-16 border-t border-[#333]" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 relative">
          ./plan_fusion_trajectory
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Plan je complete transformatie met een premium consultatie. Vul je wensen in en ontvang een persoonlijk voorstel van onze specialisten.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="border border-[#333] bg-[#0a0a0a]/80 p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <h3 className="text-xl font-bold mb-6 text-[#2E9BDA] flex items-center gap-2">
            <MessageSquare size={20} />
            <span>Premium consultatie aanvragen</span>
          </h3>

          <form className="space-y-4">
            <div>
              <label htmlFor="naam" className="block text-sm text-[#666] mb-1">
                Naam
              </label>
              <input
                type="text"
                id="naam"
                className="w-full bg-black border border-[#333] p-3 text-[#2E9BDA] focus:border-[#00ff41] outline-none transition-colors font-mono shadow-[inset_0_0_10px_rgba(46,155,218,0.1)]"
                placeholder="Jouw naam"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-[#666] mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-black border border-[#333] p-3 text-[#2E9BDA] focus:border-[#00ff41] outline-none transition-colors font-mono shadow-[inset_0_0_10px_rgba(46,155,218,0.1)]"
                placeholder="jouw@email.nl"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm text-[#666] mb-1 flex items-center gap-1">
                <Euro size={14} /> Indicatie budget
              </label>
              <select id="budget" className="w-full bg-black border border-[#333] p-3 text-[#2E9BDA] focus:border-[#00ff41] outline-none transition-colors font-mono">
                <option value="15k">€15.000 - Starter Fusion</option>
                <option value="35k">€35.000 - Business Fusion</option>
                <option value="75k">€75.000 - Enterprise Fusion</option>
                <option value="custom">Op maat / anders</option>
              </select>
            </div>

            <div>
              <label htmlFor="tijdlijn" className="block text-sm text-[#666] mb-1 flex items-center gap-1">
                <Calendar size={14} /> Gewenste tijdlijn
              </label>
              <select id="tijdlijn" className="w-full bg-black border border-[#333] p-3 text-[#2E9BDA] focus:border-[#00ff41] outline-none transition-colors font-mono">
                <option value="4w">4 weken</option>
                <option value="6w">6 weken</option>
                <option value="8w">8 weken</option>
                <option value="flex">Flexibel / in overleg</option>
              </select>
            </div>

            <div>
              <label htmlFor="doelen" className="block text-sm text-[#666] mb-1 flex items-center gap-1">
                <Target size={14} /> Specifieke doelen of uitdagingen
              </label>
              <textarea
                id="doelen"
                rows={4}
                className="w-full bg-black border border-[#333] p-3 text-[#2E9BDA] focus:border-[#00ff41] outline-none transition-colors font-mono shadow-[inset_0_0_10px_rgba(46,155,218,0.1)]"
                placeholder="Beschrijf je doelen, uitdagingen of wensen..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="fusion-btn border-2 border-[#2E9BDA] text-[#2E9BDA] px-6 py-3 hover:bg-[#2E9BDA] hover:text-black transition-colors duration-300 flex items-center gap-2 relative overflow-hidden group"
            >
              <Send size={16} />
              <span className="relative z-10">Plan je Complete Transformatie</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2E9BDA]/20 via-[#00ff41]/20 to-[#ff0080]/20 -translate-x-full group-hover:animate-fusion-sweep"></div>
            </button>

            <div className="text-xs text-[#666] mt-2">
              Na het verzenden nemen we binnen 24 uur contact op voor een premium intake call. <span className="text-[#00ff41]">(Kalender integratie volgt)</span>
            </div>
          </form>
        </div>

        <div className="border border-[#333] bg-[#0a0a0a]/80 p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <h3 className="text-xl font-bold mb-6 text-[#00ff41] flex items-center gap-2">
            <Calendar size={20} />
            <span>Consultatie & contact</span>
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-[#F5B041] mb-2 font-bold">Direct contact</h4>
              <p className="text-[#2E9BDA] font-mono">fusion@ai-liner.net</p>
            </div>

            <div>
              <h4 className="text-[#ff0080] mb-2 font-bold">Locatie</h4>
              <p className="text-[#666]">AI-LINER HQ, Nederland</p>
            </div>

            <div>
              <h4 className="text-[#00bfff] mb-2 font-bold">Netwerk</h4>
              <div className="flex gap-4">
                {['./github', './linkedin'].map((social) => (
                  <a key={social} href="#" className="text-[#2E9BDA] hover:text-[#00ff41] transition-colors font-mono">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0a0a0a] via-black to-[#0a0a0a] border border-[#333] p-4 mt-6">
              <div className="text-[#F5B041] text-sm mb-2">{"[PREMIUM STATUS]"}</div>
              <div className="text-[#666] text-xs">
                <span className="text-[#2E9BDA]">Consultatie:</span> Beschikbaar •{" "}
                <span className="text-[#00ff41]">Team:</span> Direct •{" "}
                <span className="text-[#ff0080]">Support:</span> 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
