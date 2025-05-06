"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
}

export default function TypewriterEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [lineNumber, setLineNumber] = useState(1)

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Typing effect
  useEffect(() => {
    const word = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setCurrentText(word.substring(0, currentText.length + 1))

          // If word is complete, start deleting after delay
          if (currentText.length === word.length) {
            setTimeout(() => {
              setIsDeleting(true)
            }, delayBetweenWords)
          }
        } else {
          // Deleting
          setCurrentText(word.substring(0, currentText.length - 1))

          // If deletion is complete, move to next word
          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
            setLineNumber((prev) => prev + 1)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords])

  return (
    <div className="font-mono text-lg md:text-2xl bg-[#1e1e1e] rounded-md overflow-hidden border border-gray-700 shadow-xl">
      {/* IDE header */}
      <div className="flex items-center justify-between bg-[#252526] px-4 py-2 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-xs">{`developer-role.ts`}</div>
        <div></div>
      </div>

      {/* Code editor content */}
      <div className="p-4 font-mono text-white">
        <div className="flex">
          {/* Line numbers */}
          <div className="text-gray-500 mr-4 select-none text-right w-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={`${i + 1 === lineNumber ? "text-gray-300" : ""}`}>
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code content */}
          <div className="flex-1">
            <div className="text-gray-400">{`// Developer role definition`}</div>
            <div className="flex items-center">
              <span className="text-[#569cd6]">const</span>
              <span className="text-white mx-2">role</span>
              <span className="text-[#d4d4d4]">=</span>
              <span className="text-[#ce9178] mx-2">&quot;{currentText}&quot;</span>
              <span className={`w-2 h-5 bg-white ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"}`}></span>
              <span className="text-[#d4d4d4]">;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
