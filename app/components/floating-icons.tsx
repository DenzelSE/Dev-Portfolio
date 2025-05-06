"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, FileCode, Github, Globe, Layout, Layers, Server, Terminal, Zap } from "lucide-react"
import type { JSX } from "react"

interface FloatingIconsProps {
  count?: number
  className?: string
}

export default function FloatingIcons({ count = 15, className = "" }: FloatingIconsProps) {
  const [icons, setIcons] = useState<JSX.Element[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const iconComponents = [
      <Code key="code" size={24} />,
      <Database key="database" size={24} />,
      <FileCode key="filecode" size={24} />,
      <Github key="github" size={24} />,
      <Globe key="globe" size={24} />,
      <Layout key="layout" size={24} />,
      <Layers key="layers" size={24} />,
      <Server key="server" size={24} />,
      <Terminal key="terminal" size={24} />,
      <Zap key="zap" size={24} />,
    ]

    const generatedIcons = Array.from({ length: count }).map((_, i) => {
      const Icon = iconComponents[Math.floor(Math.random() * iconComponents.length)]
      console.log(_, i)
      return Icon
    })

    setIcons(generatedIcons)
  }, [count])

  if (!mounted) return null

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {icons.map((icon, index) => {
        // Random positions
        const top = `${Math.random() * 100}%`
        const left = `${Math.random() * 100}%`
        // Random sizes
        const size = Math.random() * 0.5 + 0.5 // Between 0.5 and 1
        // Random durations
        const duration = Math.random() * 20 + 10 // Between 10 and 30 seconds
        // Random delay
        const delay = Math.random() * 5 // Between 0 and 5 seconds
        // Random opacity
        const opacity = Math.random() * 0.2 + 0.05 // Between 0.05 and 0.25

        return (
          <motion.div
            key={index}
            className="absolute text-blue-500"
            style={{
              top,
              left,
              opacity,
              scale: size,
            }}
            animate={{
              y: [0, -20, 0, 20, 0],
              x: [0, 20, 0, -20, 0],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {icon}
          </motion.div>
        )
      })}
    </div>
  )
}
