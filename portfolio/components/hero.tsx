"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Code } from "lucide-react"
import { useTheme } from "./theme-provider"


export default function Hero() {
  const { themeClasses } = useTheme()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 rounded-full text-lg font-semibold backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              ✨ Full Stack Developer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-6xl md:text-5xl lg:text-5xl xl:text-5xl font-black ${themeClasses.text} mb-8 leading-tight`}
            >
              Hi, I'm{" "}
              <span
                className={`${themeClasses.gradient} hover:scale-105 inline-block transition-transform duration-300 cursor-pointer`}
              >
                Abarna
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`text-xl md:text-2xl lg:text-2xl ${themeClasses.textSecondary} mb-12 max-w-4xl mx-auto lg:mx-0 leading-relaxed`}
            >
              A passionate Computer Science undergraduate from{" "}
              <span className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors cursor-pointer">
                Sri Lanka
              </span>
              , specializing in{" "}
              <span className="text-purple-400 font-bold hover:text-purple-300 transition-colors cursor-pointer">
                MERN stack
              </span>
              ,{" "}
              <span className="text-pink-400 font-bold hover:text-pink-300 transition-colors cursor-pointer">Next.js</span>
              ,{" "}
              <span className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors cursor-pointer">
                Flutter
              </span>,{" "}
              <span className="text-blue-400 font-bold hover:text-yellow-300 transition-colors cursor-pointer">
                Django
              </span>,{" "}
              <span className="text-green-400 font-bold hover:text-yellow-300 transition-colors cursor-pointer">
                PHP
              </span>
              , and modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
            >
              <button
                className={`px-10 py-5 bg-gradient-to-r ${themeClasses.accent} hover:opacity-90 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50`}
              >
                <a href="#contact" className="flex items-center space-x-3">
                  <span>Get In Touch</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
              </button>
              <button className="px-10 py-5 border-3 border-purple-500 text-purple-400 hover:bg-purple-500/20 bg-transparent font-bold text-lg rounded-full transition-all duration-300 backdrop-blur-sm transform hover:scale-110 shadow-xl">
                <a href="#portfolio">View My Work</a>
              </button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-white/10 backdrop-blur-sm">
                <img
                  src="./Image.jpg"
                  alt="Abarna Kumarasamy - Full Stack Developer"
                  className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-700 rounded-full"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className={`${themeClasses.card} backdrop-blur-xl rounded-2xl p-6 border transform hover:scale-105 transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                        <span className={`${themeClasses.text} font-semibold`}>Available for opportunities</span>
                      </div>
                      <div className="text-purple-400">
                        <Code className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-xl animate-bounce">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute top-1/2 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl shadow-xl animate-bounce delay-500">
                <span className="text-2xl">🟢</span>
              </div>
              <div className="absolute -bottom-4 right-1/4 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl shadow-xl animate-bounce delay-1000">
                <span className="text-4xl">▲</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
          >
            <ChevronDown size={40} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
