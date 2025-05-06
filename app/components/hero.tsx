"use client"

import { motion } from "framer-motion"
import Image from 'next/image';
import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ParticlesBackground from "./particles-background"
import EnhancedTypewriter from "./enhenced-typewriter"
import AnimatedCodeBackground from "./animated-code-background"
import BackgroundPattern from "./background-patterns"

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-2 overflow-hidden">
      {/* Particle background */}
      <ParticlesBackground variant="connect" />

      {/* Animated code snippets background */}
      <AnimatedCodeBackground />

      {/* Circuit pattern */}
      <BackgroundPattern variant="circuit" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1020]/80 via-transparent to-[#0a1020]/80 z-0"></div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-4"
          >
            <span className="text-yellow-400 mr-2">👋</span>
            <span className="text-blue-500">Hello, I&apos;m</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Denzel Selokela
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <EnhancedTypewriter
              words={["Frontend Developer", "Backend Developer", "Full Stack Developer", "Web3 Developer"]}
              typingSpeed={80}
              deletingSpeed={40}
              delayBetweenWords={2000}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 mb-8 max-w-lg font-serif"
          >
            <span className="text-xl font-medium leading-relaxed relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-100 to-blue-500 animate-pulse">
              Building robust and scalable applications with modern technologies. Passionate about clean code and innovative solutions. Making an impact and growth in the industry.
              </span>
              <span className="absolute inset-0 blur-sm bg-gradient-to-r from-blue-400/20 via-blue-100/20 to-blue-500/20 animate-pulse"></span>
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button className="bg-blue-600 hover:bg-blue-700">
              View My Work <span className="ml-2">→</span>
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500/10">
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500/10 flex items-center gap-2"
              asChild
            >
              <a href="/alex-morgan-cv.pdf" download>
                <Download size={16} />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 mt-8"
          >
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-white hover:bg-blue-500/20"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-white hover:bg-blue-500/20"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:contact@example.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-white hover:bg-blue-500/20"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[500px] overflow-hidden">
            <div className="absolute inset-0 backdrop-blur-3xl "></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <div className="w-[80%] h-[80%] rounded-full overflow-hidden border-4 border-blue-500/30"> */}
                <Image
                  src="/Denzel_Hero_bgremoved.png"
                  alt="Code editor with programming text"
                  className="w-full h-full object-cover"
                />
              {/* </div> */}
            </div>

            {/* Animated rings */}
            <motion.div
              className="absolute inset-0 rounded-full border border-blue-500/20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-blue-500/10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            />

            {/* Additional animated rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-500/5"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-500/5"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
            />
          </div>

          {/* Floating code elements */}
          <motion.div
            className="absolute -top-10 -right-10 text-blue-500/30 text-xs font-mono"
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            &lt;/&gt;
          </motion.div>
          <motion.div
            className="absolute bottom-10 -left-5 text-blue-500/30 text-xs font-mono"
            animate={{
              y: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          >
            {`{code}`}
          </motion.div>
          <motion.div
            className="absolute top-20 -left-10 text-blue-500/30 text-xs font-mono"
            animate={{
              y: [0, 5, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
          >
            &lt;div&gt;
          </motion.div>

          {/* Additional floating elements */}
          <motion.div
            className="absolute -bottom-5 right-10 text-blue-500/30 text-xs font-mono"
            animate={{
              y: [0, -8, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.7 }}
          >
            const [state, setState] = useState()
          </motion.div>
          <motion.div
            className="absolute top-1/2 -right-20 text-blue-500/30 text-xs font-mono hidden md:block"
            animate={{
              x: [0, 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.2 }}
          >
            import React from &apos;react&apos;
          </motion.div>
        </motion.div>
      </div>

      {/* Animated dots */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-blue-500/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-500/30 rounded-full animate-pulse animation-delay-2000"></div>

      {/* Additional animated elements */}
      <motion.div
        className="absolute bottom-40 right-1/4 w-5 h-5 bg-blue-500/10 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-6 h-6 bg-blue-500/10 rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.05, 0.2, 0.05],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
      />
    </section>
  )
}
