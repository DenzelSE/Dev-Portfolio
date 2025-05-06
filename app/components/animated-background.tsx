"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedBackgroundProps {
  variant?: "grid" | "gradient" | "code" | "blueprint"
  className?: string
  children?: React.ReactNode
}

export default function AnimatedBackground({
  variant = "gradient",
  className = "",
  children,
}: AnimatedBackgroundProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (variant === "grid") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[#0a1020] opacity-90 z-0"></div>
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div className="relative z-10">{children}</div>
      </div>
    )
  }

  if (variant === "blueprint") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[#0a1020] opacity-90 z-0"></div>
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(#4299e1 1px, transparent 1px),
              linear-gradient(to right, #4299e1 1px, transparent 1px),
              linear-gradient(rgba(66, 153, 225, 0.3) 0.5px, transparent 0.5px),
              linear-gradient(to right, rgba(66, 153, 225, 0.3) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
          }}
        ></div>
        <div className="relative z-10">{children}</div>
      </div>
    )
  }

  if (variant === "code") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[#0a1020] opacity-95 z-0"></div>
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 40 L45 30 L60 40 L60 60 L45 70 L30 60 Z' stroke='%233b82f6' fill='none' strokeWidth='1'/%3E%3Cpath d='M10 20 L20 10 L30 20 L30 30 L20 40 L10 30 Z' stroke='%233b82f6' fill='none' strokeWidth='0.5'/%3E%3Cpath d='M70 80 L80 70 L90 80 L90 90 L80 100 L70 90 Z' stroke='%233b82f6' fill='none' strokeWidth='0.5'/%3E%3Cpath d='M70 20 L80 10 L90 20 L90 30 L80 40 L70 30 Z' stroke='%233b82f6' fill='none' strokeWidth='0.5'/%3E%3Cpath d='M10 80 L20 70 L30 80 L30 90 L20 100 L10 90 Z' stroke='%233b82f6' fill='none' strokeWidth='0.5'/%3E%3Cpath d='M30 10 L70 10 M10 30 L10 70 M90 30 L90 70 M30 90 L70 90' stroke='%233b82f6' strokeWidth='0.5' strokeDasharray='5,5' fill='none'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="relative z-10">{children}</div>
      </div>
    )
  }

  // Default gradient background
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 50%),
                      radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 50%)`,
        }}
        animate={{
          background: [
            `radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 50%),
             radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 50%)`,
            `radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 50%),
             radial-gradient(circle at 60% 60%, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 50%)`,
            `radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 50%),
             radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 50%)`,
            `radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 50%),
             radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 50%)`,
          ],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
