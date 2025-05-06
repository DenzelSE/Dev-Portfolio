"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { User, Code, Briefcase, Download } from "lucide-react"
import AnimatedBackground from "./animated-background"
import FloatingIcons from "./floating-icons"
import BackgroundPattern from "./background-patterns"
import { Button } from "@/components/ui/button"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="relative py-20 bg-[#0c1424] overflow-hidden">
      <AnimatedBackground variant="gradient" />
      <FloatingIcons count={10} className="opacity-10" />
      <BackgroundPattern variant="hexagon" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto">
            A passionate developer with a keen eye for detail and a love for creating seamless digital experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6">
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
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-[#131c31]/80 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
              <User className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Who I Am</h3>
            <p className="text-gray-400 text-center">
              I&apos;m a full-stack developer based in San Francisco with 5+ years of experience building products for
              the web. I have a passion for creating intuitive, dynamic user experiences.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#131c31]/80 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Code className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">What I Do</h3>
            <p className="text-gray-400 text-center">
              I specialize in building modern web applications using React, Node.js, and TypeScript. I focus on creating
              clean, efficient, and scalable code that delivers exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#131c31]/80 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Briefcase className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">My Experience</h3>
            <p className="text-gray-400 text-center">
              I&apos;ve worked with startups and established companies alike, helping to build products from the ground
              up. My experience spans e-commerce, SaaS platforms, and enterprise applications.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
