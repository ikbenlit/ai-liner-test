import { Mail, MessageSquare, Send } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-16 border-t border-[#333]" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#F5B041] mb-4">./contact</h2>
        <p className="text-[#999] max-w-2xl mx-auto">
          Get in touch to discuss how AI-LINER can transform your business
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="border border-[#333] bg-[#1a1a1a] p-6">
          <h3 className="text-xl font-bold mb-6 text-[#2E9BDA] flex items-center gap-2">
            <MessageSquare size={20} />
            <span>Send us a message</span>
          </h3>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-[#999] mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-[#0a0a0a] border border-[#333] p-2 text-[#2E9BDA] focus:border-[#2E9BDA] outline-none transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-[#999] mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-[#0a0a0a] border border-[#333] p-2 text-[#2E9BDA] focus:border-[#2E9BDA] outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-[#999] mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-[#0a0a0a] border border-[#333] p-2 text-[#2E9BDA] focus:border-[#2E9BDA] outline-none transition-colors"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="ascii-btn border-2 border-[#2E9BDA] text-[#2E9BDA] px-6 py-2 hover:bg-[#2E9BDA] hover:text-black transition-colors duration-300 flex items-center gap-2"
            >
              <Send size={16} />
              <span>./send_message</span>
            </button>
          </form>
        </div>

        <div className="border border-[#333] bg-[#1a1a1a] p-6">
          <h3 className="text-xl font-bold mb-6 text-[#2E9BDA] flex items-center gap-2">
            <Mail size={20} />
            <span>Connect with us</span>
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-[#F5B041] mb-2">Email</h4>
              <p className="text-[#2E9BDA]">contact@ai-liner.tech</p>
            </div>

            <div>
              <h4 className="text-[#F5B041] mb-2">Location</h4>
              <p className="text-[#999]">Tech District, Innovation Avenue 42</p>
              <p className="text-[#999]">Digital City, 10101</p>
            </div>

            <div>
              <h4 className="text-[#F5B041] mb-2">Social</h4>
              <div className="flex gap-4">
                {["./github", "./twitter", "./linkedin"].map((social) => (
                  <a key={social} href="#" className="text-[#2E9BDA] hover:text-[#F5B041] transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#333]">
              <div className="ascii-art text-xs leading-none whitespace-pre text-[#2E9BDA]">
                <pre>{`
   ╔══════════════════════╗
   ║ ██  AI-LINER TECH    ║
   ║ ██  Building the     ║
   ║     future with AI   ║
   ╚══════════════════════╝
                `}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
