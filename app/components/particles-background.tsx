"use client"

import { useCallback } from "react"
import Particles from "react-particles"
import type { Container, Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

interface ParticlesBackgroundProps {
  className?: string
  variant?: "default" | "connect" | "matrix"
}

export default function ParticlesBackground({ className = "", variant = "default" }: ParticlesBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container)
  }, [])

  const getOptions = () => {
    if (variant === "connect") {
      return {
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#3b82f6",
          },
          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none" as const,
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }
    } else if (variant === "matrix") {
      return {
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#4CAF50", "#00bcd4", "#3b82f6"],
            animation: {
              enable: true,
              speed: 20,
              sync: false,
            },
          },
          shape: {
            type: "char",
            options: {
              char: {
                value: ["0", "1", "</>", "{}", "[]", "=", "*", "const", "let", "var", "function", "=>"],
              },
            },
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 12,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "bottom" as const,
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        background: {
          color: "transparent",
        },
        detectRetina: true,
      }
    } else {
      // Default particles
      return {
        fpsLimit: 120,
        particles: {
          color: {
            value: "#4285F4",
          },
          links: {
            color: "#4285F4",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none" as const,
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }
    }
  }

  return (
    <Particles
      className={`${className} absolute inset-0 -z-10`}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    />
  )
}
