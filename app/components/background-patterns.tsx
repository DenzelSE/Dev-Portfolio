"use client"

import { motion } from "framer-motion"

interface BackgroundPatternProps {
  variant: "circuit" | "dots" | "grid" | "wave" | "hexagon"
  className?: string
}

export default function BackgroundPattern({ variant, className = "" }: BackgroundPatternProps) {
  // Circuit board pattern
  if (variant === "circuit") {
    return (
      <div className={`absolute inset-0 z-0 opacity-[0.03] pointer-events-none ${className}`}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 0h100v100H0z" fill="none" />
              <path
                d="M30 10v20m0 0h20m-20 0v20m0 0h-20m20 0v20m0 0h20M70 10v20m0 0h20m-20 0v20m0 0h-20m20 0v20m0 0h20M10 30h20m0 0v20m0 0h20m0 0v20M50 30h20m0 0v20m0 0h20m0 0v20"
                stroke="#3b82f6"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="30" cy="30" r="3" fill="#3b82f6" />
              <circle cx="70" cy="30" r="3" fill="#3b82f6" />
              <circle cx="30" cy="70" r="3" fill="#3b82f6" />
              <circle cx="70" cy="70" r="3" fill="#3b82f6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
    )
  }

  // Dots pattern
  if (variant === "dots") {
    return (
      <div className={`absolute inset-0 z-0 opacity-[0.03] pointer-events-none ${className}`}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="#3b82f6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
    )
  }

  // Grid pattern
  if (variant === "grid") {
    return (
      <div className={`absolute inset-0 z-0 opacity-[0.03] pointer-events-none ${className}`}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0h40v40H0z" fill="none" />
              <path d="M0 0v40M40 0v40M0 0h40M0 40h40" stroke="#3b82f6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    )
  }

  // Wave pattern
  if (variant === "wave") {
    return (
      <div className={`absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden ${className}`}>
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <path
            fill="#3b82f6"
            fillOpacity="0.3"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path
            fill="#3b82f6"
            fillOpacity="0.2"
            d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </motion.svg>
      </div>
    )
  }

  // Hexagon pattern
  if (variant === "hexagon") {
    return (
      <div className={`absolute inset-0 z-0 opacity-[0.03] pointer-events-none ${className}`}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons"
              width="50"
              height="43.4"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2) rotate(0)"
            >
              <path d="M25 17.3L0 0v34.6l25 17.3 25-17.3V0z" fill="none" stroke="#3b82f6" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
    )
  }

  return null
}
