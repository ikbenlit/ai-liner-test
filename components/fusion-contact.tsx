import { MessageSquare, Send, Zap } from "lucide-react"

export default function FusionContact() {
  return (
    <section className="py-16 border-t border-[#333]" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 relative">
          ./establish_fusion_link
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Ready to bridge realities? Connect with our fusion protocol specialists
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="border border-[#333] bg-[#0a0a0a]/80 p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <h3 className="text-xl font-bold mb-6 text-[#2E9BDA] flex items-center gap-2">
            <MessageSquare size={20} />
            <span>Send fusion request</span>
          </h3>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-[#666] mb-1">
                Agent Designation
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-black border border-[#333] p-3 text-[#2E9BDA] focus:border-[#00ff41] outline-none transition-colors font-mono shadow-[inset_0_0_10px_rgba(46,155,218,0.1)]"
                placeholder="Enter your designation"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-[#666] mb-1">
                Secure Channel
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-black border border-[#333] p-3 text-[#2E9BDA] focus:border-[#00ff41] outline-none transition-colors font-mono shadow-[inset_0_0_10px_rgba(46,155,218,0.1)]"
                placeholder="your.email@fusion.net"
              />
            </div>

            <div>
              <label htmlFor="reality" className="block text-sm text-[#666] mb-1">
                Preferred Reality
              </label>
              <select className="w-full bg-black border border-[#333] p-3 text-[#2E9BDA] focus:border-[#00ff41] outline-none transition-colors font-mono">
                <option value="fusion">Fusion Protocol</option>
                <option value="classic">Classic Terminal</option>
                <option value="matrix">Matrix Reality</option>
                <option value="bridge">Reality Bridge</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-[#666] mb-1">
                Fusion Request
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-black border border-[#333] p-3 text-[#2E9BDA] focus:border-[#00ff41] outline-none transition-colors font-mono shadow-[inset_0_0_10px_rgba(46,155,218,0.1)]"
                placeholder="Describe your fusion requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="fusion-btn border-2 border-[#2E9BDA] text-[#2E9BDA] px-6 py-3 hover:bg-[#2E9BDA] hover:text-black transition-colors duration-300 flex items-center gap-2 relative overflow-hidden group"
            >
              <Send size={16} />
              <span className="relative z-10">./initiate_fusion</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2E9BDA]/20 via-[#00ff41]/20 to-[#ff0080]/20 -translate-x-full group-hover:animate-fusion-sweep"></div>
            </button>
          </form>
        </div>

        <div className="border border-[#333] bg-[#0a0a0a]/80 p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <h3 className="text-xl font-bold mb-6 text-[#00ff41] flex items-center gap-2">
            <Zap size={20} />
            <span>Fusion coordinates</span>
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-[#F5B041] mb-2 font-bold">Primary Channel</h4>
              <p className="text-[#2E9BDA] font-mono">fusion@ai-liner.net</p>
            </div>

            <div>
              <h4 className="text-[#ff0080] mb-2 font-bold">Reality Coordinates</h4>
              <p className="text-[#666]">Fusion Bridge Station</p>
              <p className="text-[#666]">Reality Layer 42</p>
              <p className="text-[#666]">Between Worlds</p>
            </div>

            <div>
              <h4 className="text-[#00bfff] mb-2 font-bold">Network Protocols</h4>
              <div className="flex gap-4">
                {["./github", "./twitter", "./linkedin"].map((social) => (
                  <a key={social} href="#" className="text-[#2E9BDA] hover:text-[#00ff41] transition-colors font-mono">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#333]">
              <div className="font-mono text-xs leading-none whitespace-pre">
                <pre className="text-[#2E9BDA]">
                  {`
╔══════════════════════════╗
║ `}
                  <span className="text-[#F5B041]">{"██"}</span>
                  <span className="text-[#00ff41]">{"██"}</span>
                  {`  FUSION DIVISION    ║
║ `}
                  <span className="text-[#E74C3C]">{"██"}</span>
                  <span className="text-[#ff0080]">{"██"}</span>
                  {`  Bridging realities ║
║     Where worlds meet   ║
╚══════════════════════════╝
                `}
                </pre>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0a0a0a] via-black to-[#0a0a0a] border border-[#333] p-4">
              <div className="text-[#F5B041] text-sm mb-2">{"[FUSION STATUS]"}</div>
              <div className="text-[#666] text-xs">
                <span className="text-[#2E9BDA]">Classic:</span> ONLINE •{" "}
                <span className="text-[#00ff41]">Matrix:</span> CONNECTED •{" "}
                <span className="text-[#ff0080]">Bridge:</span> ACTIVE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
