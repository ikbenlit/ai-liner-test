"use client"

import { useState, useEffect } from "react"

export default function FusionTerminals() {
  const [classicLine, setClassicLine] = useState(0)
  const [matrixLine, setMatrixLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const classicLines = [
    "> Initializing AI-LINER classic protocol...",
    "> Loading retro-future modules...",
    "> Establishing secure connections...",
    "> Status: READY for fusion",
  ]

  const matrixLines = [
    "> Accessing MATRIX mainframe...",
    "> Bypassing reality protocols...",
    "> Downloading consciousness.exe...",
    "> Status: CONNECTED to the source",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (classicLine < classicLines.length - 1) {
        setClassicLine((prev) => prev + 1)
      }
      if (matrixLine < matrixLines.length - 1) {
        setMatrixLine((prev) => prev + 1)
      }
    }, 1500)

    return () => clearInterval(timer)
  }, [classicLine, matrixLine, classicLines.length, matrixLines.length])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-[#F5B041]">DUAL</span>.<span className="text-[#ff0080]">TERMINAL</span>_FEED
          <span className="text-[#00ff41] animate-pulse">{">"}</span>
        </h2>
        <p className="text-[#666]">Real-time fusion of classic and matrix protocols</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Classic Terminal */}
        <div className="border border-[#2E9BDA] bg-[#0a0a0a]/90 rounded overflow-hidden shadow-[0_0_30px_rgba(46,155,218,0.3)]">
          <div className="bg-[#1a1a1a] p-3 border-b border-[#2E9BDA] flex justify-between items-center">
            <span className="text-[#F5B041] text-sm">classic@ai-liner:~$</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#E74C3C]"></div>
              <div className="w-3 h-3 rounded-full bg-[#F5B041]"></div>
              <div className="w-3 h-3 rounded-full bg-[#2E9BDA]"></div>
            </div>
          </div>
          <div className="p-6 font-mono text-sm min-h-[200px]">
            {classicLines.slice(0, classicLine + 1).map((line, index) => (
              <div key={index} className="mb-3">
                <span className="text-[#2E9BDA]">{line}</span>
                {index === classicLine && showCursor && (
                  <span className="inline-block w-2 h-5 bg-[#F5B041] ml-2 animate-pulse"></span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Matrix Terminal */}
        <div className="border border-[#00ff41] bg-black/90 rounded overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.3)]">
          <div className="bg-[#0a0a0a] p-3 border-b border-[#00ff41] flex justify-between items-center">
            <span className="text-[#00ff41] text-sm">matrix@fusion:~$</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff0080] animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-[#00bfff] animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-[#00ff41] animate-pulse"></div>
            </div>
          </div>
          <div className="p-6 font-mono text-sm min-h-[200px]">
            {matrixLines.slice(0, matrixLine + 1).map((line, index) => (
              <div key={index} className="mb-3">
                <span className="text-[#00ff41]">{line}</span>
                {index === matrixLine && showCursor && (
                  <span className="inline-block w-2 h-5 bg-[#ff0080] ml-2 animate-pulse shadow-[0_0_10px_rgba(255,0,128,0.8)]"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fusion Status */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="border border-gradient-to-r from-[#2E9BDA] via-[#00ff41] to-[#ff0080] bg-[#0a0a0a]/90 p-6 rounded shadow-[0_0_30px_rgba(46,155,218,0.2)]">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-[#2E9BDA]">FUSION</span> <span className="text-[#00ff41]">STATUS</span>
            </h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-[#F5B041] font-bold">CLASSIC</div>
                <div className="text-[#2E9BDA]">ONLINE</div>
              </div>
              <div className="text-center">
                <div className="text-[#ff0080] font-bold">BRIDGE</div>
                <div className="text-[#00ff41]">ACTIVE</div>
              </div>
              <div className="text-center">
                <div className="text-[#00bfff] font-bold">MATRIX</div>
                <div className="text-[#00ff41]">CONNECTED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
