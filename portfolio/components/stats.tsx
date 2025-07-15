"use client"

import { motion } from "framer-motion"
import { Code, Users, Coffee, Trophy } from "lucide-react"
import { useTheme } from "./theme-provider"

const stats = [
  { icon: <Code className="w-8 h-8" />, number: "15+", label: "Projects Completed" },
  { icon: <Users className="w-8 h-8" />, number: "3+", label: "Years Experience" },
  { icon: <Coffee className="w-8 h-8" />, number: "500+", label: "Cups of Coffee" },
  { icon: <Trophy className="w-8 h-8" />, number: "10+", label: "Technologies Mastered" },
]

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Stats() {
  const { themeClasses } = useTheme()

  return (
    <section className={`py-20 ${themeClasses.section} backdrop-blur-sm`}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center group">
              <div className="text-purple-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className={`text-3xl md:text-4xl font-bold ${themeClasses.text} mb-2`}>{stat.number}</div>
              <div className={`${themeClasses.textMuted} text-sm font-medium`}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
