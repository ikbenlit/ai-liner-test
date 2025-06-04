import { MessageSquare, Send, Zap } from "lucide-react"

export default function MatrixContact() {
  return (
    <section className="py-16 border-t border-[#333]" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#ff0080] mb-4 relative">
          ./establish_connection
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">Ready to take the red pill? Contact us to enter the Matrix</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="border border-[#333] bg-[#0a0a0a] p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <h3 className="text-xl font-bold mb-6 text-[#00ff41] flex items-center gap-2">
            <MessageSquare size={20} />
            <span>Send transmission</span>
          </h3>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-[#666] mb-1">
                Agent Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-black border border-[#333] p-3 text-[#00ff41] focus:border-[#00ff41] outline-none transition-colors font-mono shadow-[inset_0_0_10px_rgba(0,255,65,0.1)]"
                placeholder="Enter your codename"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-[#666] mb-1">
                Secure Channel
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-black border border-[#333] p-3 text-[#00ff41] focus:border-[#00ff41] outline-none transition-colors font-mono shadow-[inset_0_0_10px_rgba(0,255,65,0.1)]"
                placeholder="your.email@matrix.net"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-[#666] mb-1">
                Encrypted Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-black border border-[#333] p-3 text-[#00ff41] focus:border-[#00ff41] outline-none transition-colors font-mono shadow-[inset_0_0_10px_rgba(0,255,65,0.1)]"
                placeholder="What do you need from the Matrix?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="matrix-btn border-2 border-[#00ff41] text-[#00ff41] px-6 py-3 hover:bg-[#00ff41] hover:text-black transition-colors duration-300 flex items-center gap-2 relative overflow-hidden group"
            >
              <Send size={16} />
              <span className="relative z-10">./transmit_data</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff41]/20 to-transparent -translate-x-full group-hover:animate-matrix-sweep"></div>
            </button>
          </form>
        </div>

        <div className="border border-[#333] bg-[#0a0a0a] p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <h3 className="text-xl font-bold mb-6 text-[#00ff41] flex items-center gap-2">
            <Zap size={20} />
            <span>Direct neural link</span>
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-[#ff0080] mb-2 font-bold">Secure Channel</h4>
              <p className="text-[#00ff41] font-mono">contact@matrix.ai-liner.net</p>
            </div>

            <div>
              <h4 className="text-[#ff0080] mb-2 font-bold">Physical Location</h4>
              <p className="text-[#666]">Nebuchadnezzar Ship</p>
              <p className="text-[#666]">Sector 7G, Level 101</p>
              <p className="text-[#666]">The Real World</p>
            </div>

            <div>
              <h4 className="text-[#ff0080] mb-2 font-bold">Network Protocols</h4>
              <div className="flex gap-4">
                {["./github", "./twitter", "./linkedin"].map((social) => (
                  <a key={social} href="#" className="text-[#00ff41] hover:text-[#ff0080] transition-colors font-mono">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#333]">
              <div className="font-mono text-xs leading-none whitespace-pre text-[#00ff41]">
                <pre className="text-[#00ff41]">{`
╔══════════════════════════╗
║ ██  MATRIX DIVISION      ║
║ ██  Reality is optional  ║
║     Choose your pill     ║
╚══════════════════════════╝
                `}</pre>
              </div>
            </div>

            <div className="bg-black border border-[#ff0080] p-4 shadow-[0_0_15px_rgba(255,0,128,0.2)]">
              <div className="text-[#ff0080] text-sm mb-2">{"[WARNING]"}</div>
              <div className="text-[#666] text-xs">
                This connection is monitored by Agent Smith. Proceed with caution.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
