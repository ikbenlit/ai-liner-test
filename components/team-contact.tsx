import { MessageSquare, Send, Calendar, Users, Mail, Phone } from "lucide-react"

export default function TeamContact() {
  return (
    <section className="py-16 border-t border-[#333]" id="team-contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 relative">
          ./plan_team_consultatie
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Neem contact op met Elmer & Colin voor een vrijblijvende team intake. Vul je gegevens in en we nemen snel contact op!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="border border-[#333] bg-[#0a0a0a]/80 p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <h3 className="text-xl font-bold mb-6 text-[#2E9BDA] flex items-center gap-2">
            <MessageSquare size={20} />
            <span>Team intake aanvragen</span>
          </h3>

          <form className="space-y-4">
            <div>
              <label htmlFor="bedrijf" className="block text-sm text-[#666] mb-1">
                Bedrijfsnaam
              </label>
              <input
                type="text"
                id="bedrijf"
                className="w-full bg-black border border-[#333] p-3 text-[#2E9BDA] focus:border-[#00ff41] outline-none transition-colors font-mono shadow-[inset_0_0_10px_rgba(46,155,218,0.1)]"
                placeholder="Jouw bedrijf"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-[#666] mb-1">
                Email adres
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-black border border-[#333] p-3 text-[#2E9BDA] focus:border-[#00ff41] outline-none transition-colors font-mono shadow-[inset_0_0_10px_rgba(46,155,218,0.1)]"
                placeholder="jouw@email.nl"
              />
            </div>

            <div>
              <label htmlFor="voorkeur" className="block text-sm text-[#666] mb-1 flex items-center gap-1">
                <Users size={14} /> Voorkeur contact
              </label>
              <select id="voorkeur" className="w-full bg-black border border-[#333] p-3 text-[#2E9BDA] focus:border-[#00ff41] outline-none transition-colors font-mono">
                <option value="email">Email</option>
                <option value="telefoon">Telefoon</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="video">Video call</option>
              </select>
            </div>

            <div>
              <label htmlFor="motivatie" className="block text-sm text-[#666] mb-1 flex items-center gap-1">
                Waarom wil je met ons team werken?
              </label>
              <textarea
                id="motivatie"
                rows={4}
                className="w-full bg-black border border-[#333] p-3 text-[#2E9BDA] focus:border-[#00ff41] outline-none transition-colors font-mono shadow-[inset_0_0_10px_rgba(46,155,218,0.1)]"
                placeholder="Beschrijf je uitdaging, ambitie of vraag..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="fusion-btn border-2 border-[#2E9BDA] text-[#2E9BDA] px-6 py-3 hover:bg-[#2E9BDA] hover:text-black transition-colors duration-300 flex items-center gap-2 relative overflow-hidden group"
            >
              <Send size={16} />
              <span className="relative z-10">Plan team intake</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2E9BDA]/20 via-[#00ff41]/20 to-[#ff0080]/20 -translate-x-full group-hover:animate-fusion-sweep"></div>
            </button>

            <div className="text-xs text-[#666] mt-2">
              We reageren binnen 4 uur op werkdagen. <span className="text-[#00ff41]">(Team WhatsApp groep beschikbaar)</span>
            </div>
          </form>
        </div>

        <div className="border border-[#333] bg-[#0a0a0a]/80 p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <h3 className="text-xl font-bold mb-6 text-[#00ff41] flex items-center gap-2">
            <Calendar size={20} />
            <span>Contact & beschikbaarheid</span>
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-[#F5B041] mb-2 font-bold">Elmer Harkema</h4>
              <p className="text-[#2E9BDA] font-mono flex items-center gap-2"><Mail size={14}/> elmer@ai-liner.net</p>
              <p className="text-[#666] text-sm flex items-center gap-2"><Phone size={14}/> Apeldoorn & omgeving</p>
            </div>
            <div>
              <h4 className="text-[#ff0080] mb-2 font-bold">Colin Lit</h4>
              <p className="text-[#00ff41] font-mono flex items-center gap-2"><Mail size={14}/> colin@ai-liner.net</p>
              <p className="text-[#666] text-sm flex items-center gap-2"><Phone size={14}/> Remote + on-site mogelijk</p>
            </div>
            <div>
              <h4 className="text-[#00bfff] mb-2 font-bold">Team</h4>
              <p className="text-[#00bfff] font-mono">WhatsApp groep voor snelle vragen</p>
              <p className="text-[#666] text-xs">Response tijd: &lt;4 uur tijdens werkdagen</p>
            </div>
            <div className="bg-gradient-to-r from-[#0a0a0a] via-black to-[#0a0a0a] border border-[#333] p-4 mt-6">
              <div className="text-[#F5B041] text-sm mb-2">{"[TEAM STATUS]"}</div>
              <div className="text-[#666] text-xs">
                <span className="text-[#2E9BDA]">Elmer:</span> Apeldoorn •{" "}
                <span className="text-[#00ff41]">Colin:</span> Remote •{" "}
                <span className="text-[#ff0080]">Team:</span> WhatsApp support
              </div>
            </div>
            <div className="mt-6 text-xs text-[#666] font-mono text-center">
              {`// AI-LINER TEAM //`}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
