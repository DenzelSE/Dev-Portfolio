"use client"

import { useState, useEffect } from "react"
import CodeEditorFrame from "./code-editor-frame"

interface EnhancedTypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
}

export default function EnhancedTypewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
}: EnhancedTypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [lineNumber, setLineNumber] = useState(1)

  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  
  useEffect(() => {
    const word = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          
          setCurrentText(word.substring(0, currentText.length + 1))

          
          if (currentText.length === word.length) {
            setTimeout(() => {
              setIsDeleting(true)
            }, delayBetweenWords)
          }
        } else {
          setCurrentText(word.substring(0, currentText.length - 1))

          
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
    <CodeEditorFrame title="developer-role.ts">
      <div className="flex">
        
        <div className="text-gray-500 mr-4 select-none text-right w-8">
          <div>1</div>
          <div className={lineNumber === 2 ? "text-gray-300" : ""}>2</div>
          <div className={lineNumber === 3 ? "text-gray-300" : ""}>3</div>
          <div className={lineNumber === 4 ? "text-gray-300" : ""}>4</div>
          <div className={lineNumber === 5 ? "text-gray-300" : ""}>5</div>
        </div>

       
        <div className="flex-1">
          <div className="text-gray-400">{`// Developer specialization`}</div>
          <div className="flex flex-wrap items-center">
            <span className="text-[#569cd6]">{`const`}</span>
            <span className="text-white mx-2">{`developer`}</span>
            <span className="text-[#d4d4d4]">=</span>
            <span className="text-[#d4d4d4] mx-2">{"{"}</span>
          </div>
          <div className="flex flex-wrap items-center ml-4">
            <span className="text-[#9cdcfe]">{`name`}</span>
            <span className="text-[#d4d4d4]">{`:`}</span>
            <span className="text-[#ce9178] mx-2">&quot;{`Denzel Selokela`}&quot;</span>
            <span className="text-[#d4d4d4]">{`,`}</span>
          </div>
          <div className="flex flex-wrap items-center ml-4">
            <span className="text-[#9cdcfe]">role</span>
            <span className="text-[#d4d4d4]">{`:`}</span>
            <span className="text-[#ce9178] mx-2">&quot;{currentText}&quot;</span>
            <span className={`w-2 h-5 bg-white ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"}`}></span>
          </div>
          <div className="text-[#d4d4d4]">{"}"}</div>
        </div>
      </div>
    </CodeEditorFrame>
  )
}
