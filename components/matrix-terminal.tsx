"use client"

import { useState, useEffect } from "react"

export default function MatrixTerminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const terminalLines = [
    "> Accessing MATRIX mainframe...",
    "> Bypassing security protocols...",
    "> Downloading consciousness.exe...",
    "> Initializing neural interface...",
    "> Establishing quantum entanglement...",
    "> Reality buffer overflow detected",
    "> Switching to alternate timeline...",
    "> Connection established. Welcome to the real world.",
  ]

  useEffect(() => {
    if (currentLine < terminalLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1)
      }, 1200)
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
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#ff0080] mb-4">
            LIVE.MATRIX_FEED
            <span className="text-[#00ff41] animate-pulse">{">"}</span>
          </h2>
        </div>

        <div className="border border-[#00ff41] bg-black rounded overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.3)]">
          <div className="bg-[#0a0a0a] p-3 border-b border-[#00ff41] flex justify-between items-center">
            <span className="text-[#00ff41] text-sm">morpheus@nebuchadnezzar:~$</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff0080] animate-pulse shadow-[0_0_10px_rgba(255,0,128,0.8)]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00bfff] animate-pulse shadow-[0_0_10px_rgba(0,191,255,0.8)]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00ff41] animate-pulse shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>
            </div>
          </div>

          <div className="p-6 font-mono text-sm min-h-[350px] bg-gradient-to-b from-black to-[#001100]">
            {terminalLines.slice(0, currentLine + 1).map((line, index) => (
              <div key={index} className="mb-3 flex items-center">
                <span className={index === currentLine ? "text-[#ff0080]" : "text-[#00ff41]"}>{line}</span>
                {index === currentLine && showCursor && (
                  <span className="inline-block w-3 h-5 bg-[#00ff41] ml-2 animate-pulse shadow-[0_0_10px_rgba(0,255,65,0.8)]"></span>
                )}
              </div>
            ))}

            {currentLine >= terminalLines.length - 1 && (
              <div className="mt-6 p-4 border border-[#ff0080] bg-[#001100] shadow-[0_0_20px_rgba(255,0,128,0.2)]">
                <div className="text-[#ff0080] mb-2">{"[SYSTEM ALERT]"}</div>
                <div className="text-[#00ff41]">
                  Matrix protocol active. Reality simulation running at 99.7% efficiency.
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setCurrentLine(0)}
            className="matrix-btn border-2 border-[#ff0080] text-[#ff0080] px-6 py-3 hover:bg-[#ff0080] hover:text-white transition-colors duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">./restart_simulation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff0080]/20 to-transparent -translate-x-full group-hover:animate-matrix-sweep"></div>
          </button>
        </div>
      </div>
    </section>
  )
}
