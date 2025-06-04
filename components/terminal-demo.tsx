"use client"

import { useState, useEffect } from "react"

export default function TerminalDemo() {
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const terminalLines = [
    "> Initializing AI-LINER demo...",
    "> Loading neural network modules...",
    "> Connecting to data sources...",
    "> Processing sample data...",
    "> Generating insights...",
    "> Analysis complete. Results: 98.7% accuracy",
    "> Recommendation: Implement AI-LINER for optimal performance",
    "> Type './contact' to schedule a consultation",
  ]

  useEffect(() => {
    if (currentLine < terminalLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [currentLine, terminalLines.length])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="terminal-window border border-[#2E9BDA] bg-[#0a0a0a] rounded overflow-hidden shadow-[0_0_15px_rgba(46,155,218,0.2)]">
          <div className="terminal-header bg-[#1a1a1a] p-2 border-b border-[#2E9BDA] text-sm text-[#F5B041] flex justify-between">
            <span>demo@ai-liner:~$</span>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E74C3C]"></span>
              <span className="w-3 h-3 rounded-full bg-[#F5B041]"></span>
              <span className="w-3 h-3 rounded-full bg-[#2E9BDA]"></span>
            </div>
          </div>
          <div className="terminal-body p-4 font-mono text-sm min-h-[300px]">
            {terminalLines.slice(0, currentLine + 1).map((line, index) => (
              <div key={index} className="mb-2">
                {line}
                {index === currentLine && showCursor && (
                  <span className="inline-block w-2 h-5 bg-[#F5B041] ml-1"></span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="ascii-btn border-2 border-[#F5B041] text-[#F5B041] px-6 py-3 hover:bg-[#F5B041] hover:text-black transition-colors duration-300 relative overflow-hidden group">
            <span className="relative z-10">./run_demo_again</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
          </button>
        </div>
      </div>
    </section>
  )
}
