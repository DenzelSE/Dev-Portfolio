"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0c1424] py-12 border-t border-blue-900/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-blue-500">Dev</span>
                <span className="text-white">Portfolio</span>
              </span>
            </Link>
            <p className="text-gray-400 mt-2">Building exceptional digital experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-white font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 bg-[#131c31] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-900/50 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 bg-[#131c31] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-900/50 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:contact@example.com"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 bg-[#131c31] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-900/50 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900/30 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {currentYear} Alex Morgan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
