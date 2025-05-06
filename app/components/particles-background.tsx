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
    console.log(variant)
    await loadSlim(engine)
  }, [variant])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container)
  }, [])

  return (
    <Particles
      className={`${className} absolute inset-0 -z-10`}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    />
  )
}
