"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
  themeClasses: {
    bg: string
    text: string
    textSecondary: string
    textMuted: string
    card: string
    cardHover: string
    nav: string
    navBorder: string
    input: string
    section: string
    accent: string
    gradient: string
  }
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) {
      setIsDarkMode(saved === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem("theme", newMode ? "dark" : "light")
  }

  const themeClasses = {
    bg: isDarkMode
      ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100",
    text: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    card: isDarkMode ? "bg-white/5 border-white/10" : "bg-white/80 border-gray-200",
    cardHover: isDarkMode ? "hover:bg-white/10 hover:border-purple-500/50" : "hover:bg-white hover:border-purple-300",
    nav: isDarkMode ? "bg-black/80" : "bg-white/80",
    navBorder: isDarkMode ? "border-white/10" : "border-gray-200",
    input: isDarkMode
      ? "bg-white/10 border-white/20 text-white placeholder:text-gray-400"
      : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500",
    section: isDarkMode ? "bg-black/20" : "bg-white/50",
    accent: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent",
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeClasses }}>
      <div className={`${themeClasses.bg} transition-all duration-500`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
