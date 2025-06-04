export default function ContactSection() {
  return (
    <section className="py-16 border-t border-[#333]" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#F5B041] mb-4">./plan_fundament_assessment</h2>
          <p className="text-[#999] max-w-2xl mx-auto">
            Klaar om je bedrijfsfundament te versterken? Laat een bericht achter en ontvang je Fundament Score.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-[#333] bg-[#1a1a1a] p-6">
            <h3 className="text-xl font-bold mb-4 text-[#F5B041]">Krijg Je Fundament Score</h3>
            <p className="text-[#999] mb-6">
              Na een korte analyse ontvang je:
            </p>
            <ul className="space-y-3 text-[#999] mb-6">
              <li className="flex items-center">
                <span className="text-[#2E9BDA] mr-2">▸</span>
                Volledige fundament diagnose
              </li>
              <li className="flex items-center">
                <span className="text-[#2E9BDA] mr-2">▸</span>
                Concrete verbeterpunten
              </li>
              <li className="flex items-center">
                <span className="text-[#2E9BDA] mr-2">▸</span>
                Geschatte implementatietijd
              </li>
              <li className="flex items-center">
                <span className="text-[#2E9BDA] mr-2">▸</span>
                Persoonlijk adviesgesprek
              </li>
            </ul>
          </div>

          <div className="border border-[#333] bg-[#1a1a1a] p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#F5B041] mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#0a0a0a] border border-[#333] p-2 text-white focus:border-[#2E9BDA] focus:outline-none transition-colors"
                  placeholder="Jouw naam"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-[#F5B041] mb-2">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-[#0a0a0a] border border-[#333] p-2 text-white focus:border-[#2E9BDA] focus:outline-none transition-colors"
                  placeholder="Jouw bedrijf"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#F5B041] mb-2">
                  E-mailadres
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#0a0a0a] border border-[#333] p-2 text-white focus:border-[#2E9BDA] focus:outline-none transition-colors"
                  placeholder="jouw@email.nl"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#F5B041] mb-2">
                  Bericht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-[#0a0a0a] border border-[#333] p-2 text-white focus:border-[#2E9BDA] focus:outline-none transition-colors"
                  placeholder="Vertel ons over je huidige fundament uitdagingen..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full ascii-btn border-2 border-[#2E9BDA] text-[#2E9BDA] px-6 py-3 hover:bg-[#2E9BDA] hover:text-black transition-colors duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">./verstuur_aanvraag</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
