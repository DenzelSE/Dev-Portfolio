"use client"

import { useEffect, useRef } from "react"

interface AnimatedCodeBackgroundProps {
  className?: string
}

export default function AnimatedCodeBackground({ className = "" }: AnimatedCodeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Code snippets to display
    const codeSnippets = [
      "function App() {",
      "  return (",
      "    <div>",
      "      <h1>Hello World</h1>",
      "    </div>",
      "  )",
      "}",
      "export default App",
      "const [state, setState] = useState()",
      "useEffect(() => {",
      "  // Effect code",
      "}, [])",
      "import React from 'react'",
      "<motion.div animate={{ opacity: 1 }}>",
      "async function fetchData() {",
      "  const res = await fetch('/api')",
      "  return res.json()",
      "}",
      "const router = useRouter()",
      '<Image src={image || "/placeholder.svg"} alt={alt} />',
      "const { data } = useSWR('/api')",
    ]

    // Create floating code elements
    const codeElements: {
      x: number
      y: number
      text: string
      speed: number
      opacity: number
      size: number
    }[] = []

    for (let i = 0; i < 15; i++) {
      codeElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.07 + 0.03,
        size: Math.floor(Math.random() * 4) + 10,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      codeElements.forEach((element) => {
        ctx.font = `${element.size}px monospace`
        ctx.fillStyle = `rgba(59, 130, 246, ${element.opacity})`
        ctx.fillText(element.text, element.x, element.y)

        // Move the element
        element.y += element.speed

        // Reset if it goes off screen
        if (element.y > canvas.height) {
          element.y = -20
          element.x = Math.random() * canvas.width
          element.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        }
      })
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`} />
}
