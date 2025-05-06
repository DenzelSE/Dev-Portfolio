"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CodeRain from "./code-rain"
import AnimatedBackground from "./animated-background"
import BackgroundPattern from "./background-patterns"

interface Skill {
  name: string
  percentage: number
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skills: Skill[] = [
    { name: "JavaScript / TypeScript", percentage: 90 },
    { name: "React / Next.js", percentage: 85 },
    { name: "Java / SpringBoot", percentage: 80 },
    { name: "Docker", percentage: 80 },
    { name: "Python", percentage: 80 },
  ]

  const techStack = ["JavaScript", "TypeScript", "NEXTjs", "Java", "SpringBoot", "Python", "Tailwind", "Git", "Solidity"]

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Matrix-like code rain effect */}
      <CodeRain />

      {/* Tech pattern background */}
      <AnimatedBackground variant="code" />

      {/* Dots pattern */}
      <BackgroundPattern variant="dots" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I&apos;ve spent years refining my skills in web development, focusing on technologies that enable me to
              build robust, scalable, and user-friendly applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants} custom={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-blue-500 font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-700/50 backdrop-blur-sm rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-[#131c31]/80 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-blue-900/30 transition-colors border border-blue-900/20 hover:border-blue-500/30"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <span className="text-white text-sm">{tech}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 p-6 bg-[#131c31]/80 backdrop-blur-sm rounded-xl border border-blue-900/30 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">Want to see my skills in action?</h3>
                <p className="text-gray-400 mb-6">
                  Check out my projects below to see how I apply these technologies to create amazing digital
                  experiences.
                </p>
                <a
                  href="#projects"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
