"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import AnimatedBackground from "./animated-background"
import BackgroundPattern from "./background-patterns"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}

export default function Projects() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment processing.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop interface, and team communication features.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered content generation tool that helps users create blog posts, marketing copy, and social media content.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Python", "OpenAI", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="relative py-20 bg-[#0c1424] overflow-hidden">
      <AnimatedBackground variant="blueprint" />
      <BackgroundPattern variant="grid" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out some of my recent work. These projects showcase my skills and experience in building modern web
              applications.
            </p>
          </motion.div>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } bg-[#131c31]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-900/30 hover:border-blue-500/30 transition-all duration-300`}
              >
                <div className="md:w-1/2 relative overflow-hidden group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="flex gap-4">
                      <Button size="sm" className="bg-white text-blue-900 hover:bg-gray-200">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>

                  {/* Tech pattern overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1424]/80 to-transparent opacity-40 pointer-events-none"></div>
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627,0.61 L59.39,5.373 L53.627,11.137 L58.39,15.9 L54.627,19.663 L58.39,23.427 L53.627,28.19 L58.39,32.953 L54.627,36.716 L58.39,40.479 L53.627,45.243 L58.39,50.006 L54.627,53.769 L58.39,57.532 L54.627,61.295 L50.006,56.674 L45.243,61.437 L40.479,56.674 L36.716,61.437 L32.953,56.674 L28.19,61.437 L23.427,56.674 L19.663,61.437 L15.9,56.674 L11.137,61.437 L5.373,55.674 L0.61,60.437 L0,59.827 L0,54.627 L5.373,49.254 L0.61,44.49 L5.373,39.727 L0.61,34.964 L5.373,30.201 L0.61,25.437 L5.373,20.674 L0.61,15.911 L5.373,11.147 L0.61,6.384 L5.373,1.621 L5.983,1.011 L10.746,5.774 L15.509,1.011 L20.272,5.774 L25.036,1.011 L29.799,5.774 L34.562,1.011 L39.325,5.774 L44.089,1.011 L48.852,5.774 L53.615,1.011 L54.627,0 L54.627,0.61 Z' fill='%233b82f6' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
                      backgroundSize: "60px 60px",
                    }}
                  ></div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-blue-900/30 text-blue-400 py-1 px-3 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:text-blue-400 flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:text-blue-400 flex items-center"
                    >
                      <Github className="h-4 w-4 mr-1" /> View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
