"use client"

import type { ReactNode } from "react"

interface CodeEditorFrameProps {
  title?: string
  children: ReactNode
  className?: string
}

export default function CodeEditorFrame({ title = "code.tsx", children, className = "" }: CodeEditorFrameProps) {
  return (
    <div
      className={`
        font-mono bg-[#0f172a]/80 backdrop-blur-sm rounded-md overflow-hidden 
        border border-blue-900/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] 
        transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]
        hover:border-blue-800/40 ${className}
      `}
    >
      {/* IDE header */}
      <div className="flex items-center justify-between bg-[#0c1424]/90 backdrop-blur-sm px-4 py-2 border-b border-blue-900/30">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-blue-400 text-xs font-medium">{title}</div>
        <div></div>
      </div>

      {/* Code editor content */}
      <div className="p-4 font-mono text-white">{children}</div>
    </div>
  )
}
