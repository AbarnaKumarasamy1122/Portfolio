"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { isDarkMode, toggleTheme, themeClasses } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? `${themeClasses.nav} backdrop-blur-xl border-b ${themeClasses.navBorder}` : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="group cursor-pointer">
            <h1
              className={`text-3xl md:text-4xl font-bold ${themeClasses.gradient} group-hover:scale-105 transition-transform duration-300`}
            >
              K.Abarna
            </h1>
            <p
              className={`text-xs ${themeClasses.textMuted} group-hover:text-purple-400 transition-colors duration-300`}
            >
              Full Stack Developer
            </p>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${themeClasses.text} hover:text-purple-400 transition-all duration-300 group text-base font-semibold hover:scale-110 transform`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${themeClasses.text} hover:bg-purple-500/10 transition-colors`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className={`px-8 py-3 bg-gradient-to-r ${themeClasses.accent} hover:opacity-90 text-white text-base font-bold rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-purple-500/25`}
            >
              <a href="#contact">Let's Talk</a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${themeClasses.text} hover:bg-purple-500/10 transition-colors`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`${themeClasses.text} p-2 hover:bg-purple-500/10 rounded-lg transition-colors`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className={`${themeClasses.card} backdrop-blur-xl rounded-2xl border p-6 space-y-4`}>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block ${themeClasses.text} hover:text-purple-400 transition-colors duration-300 text-lg font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
