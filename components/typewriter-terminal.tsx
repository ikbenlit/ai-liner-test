"use client"

import { useEffect, useState } from "react"

interface TypewriterTerminalProps {
  lines: string[]
  headerText?: string
  className?: string
  typingSpeed?: number
  linePause?: number
  theme?: "matrix" | "fundament"
}

export default function TypewriterTerminal({
  lines,
  headerText = "gebruiker@ai-liner:~$",
  className = "",
  typingSpeed = 35,
  linePause = 700,
  theme = "fundament",
}: TypewriterTerminalProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentTypingLine, setCurrentTypingLine] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  // Thema kleuren
  const themeColors = {
    matrix: {
      border: "border-[#00ff41]",
      text: "text-[#00ff41]",
      headerBg: "bg-[#0a0a0a]",
      bodyBg: "bg-black",
      cursor: "bg-[#00ff41]",
      cursorShadow: "shadow-[0_0_10px_rgba(0,255,65,0.8)]",
    },
    fundament: {
      border: "border-[#2E9BDA]",
      text: "text-[#F5B041]",
      headerBg: "bg-[#1a1a1a]",
      bodyBg: "bg-[#0a0a0a]",
      cursor: "bg-[#F5B041]",
      cursorShadow: "shadow-[0_0_10px_rgba(245,176,65,0.8)]",
    },
  }

  const colors = themeColors[theme]

  useEffect(() => {
    // Reset alles wanneer de component mount of lines veranderen
    setCurrentLineIndex(0)
    setCurrentCharIndex(0)
    setDisplayedLines([])
    setCurrentTypingLine("")
    setIsTypingComplete(false)
  }, [lines])

  useEffect(() => {
    if (isTypingComplete) return
    if (currentLineIndex >= lines.length) {
      setIsTypingComplete(true)
      return
    }

    const currentFullLine = lines[currentLineIndex]
    
    if (currentCharIndex < currentFullLine.length) {
      // Type karakter voor karakter
      const typingTimer = setTimeout(() => {
        setCurrentTypingLine(currentFullLine.slice(0, currentCharIndex + 1))
        setCurrentCharIndex(prev => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(typingTimer)
    } else {
      // Ga naar volgende regel
      const nextLineTimer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, currentFullLine])
        setCurrentLineIndex(prev => prev + 1)
        setCurrentCharIndex(0)
        setCurrentTypingLine("")
      }, linePause)

      return () => clearTimeout(nextLineTimer)
    }
  }, [currentLineIndex, currentCharIndex, isTypingComplete, lines, typingSpeed, linePause])

  return (
    <div className={`terminal-window border ${colors.border} ${colors.bodyBg} rounded overflow-hidden ${className}`}>
      <div className={`terminal-header ${colors.headerBg} p-2 border-b ${colors.border} text-sm ${colors.text}`}>
        {headerText}
      </div>
      <div className={`terminal-body p-4 font-mono text-sm min-h-[200px] ${colors.text}`}>
        {displayedLines.map((line, index) => (
          <div key={index} className="mb-2">
            {line}
          </div>
        ))}
        {currentTypingLine && (
          <div className="mb-2">
            {currentTypingLine}
            <span className={`inline-block w-2 h-5 ${colors.cursor} ml-1 animate-blink ${colors.cursorShadow}`}></span>
          </div>
        )}
      </div>
    </div>
  )
} 