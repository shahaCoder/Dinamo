'use client'

import Navbar from "../navbar"
import { useState, useEffect } from "react"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarWidth, setSidebarWidth] = useState(350)
  const [isResizing, setIsResizing] = useState(false)

  const startResizing = () => setIsResizing(true)
  const stopResizing = () => setIsResizing(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return
    const newWidth = Math.min(Math.max(e.clientX, 150), 500)
    setSidebarWidth(newWidth)
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", stopResizing)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", stopResizing)
    }
  }, [isResizing])

  return (
    <div className="flex relative h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className="bg-slate-800 h-full relative"
        style={{ width: sidebarWidth }}
      >
        <Navbar />
        <div
          onMouseDown={startResizing}
          className="absolute top-0 right-0 w-1 h-full cursor-ew-resize bg-slate-600"
        />
      </aside>

      {/* Main */}
      <main className="flex-1 p-4 bg-slate-900 overflow-y-auto h-full">
        {children}
      </main>
    </div>
  )
}
