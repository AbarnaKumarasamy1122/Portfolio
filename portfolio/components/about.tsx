"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Award, MapPin, Calendar } from "lucide-react"
import { useTheme } from "./theme-provider"

const skills = [
  { name: "React.js", icon: "⚛️", category: "Frontend", priority: 2 },
  { name: "Next.js", icon: "▲", category: "Frontend", priority: 1 },
  { name: "TypeScript", icon: "📘", category: "Frontend", priority: 3 },
  { name: "Tailwind CSS", icon: "💨", category: "Frontend", priority: 14 },
  { name: "Bootstrap", icon: "🅱️", category: "Frontend", priority: 13 },
  { name: "Node.js", icon: "🟢", category: "Backend", priority: 4 },
  { name: "Express.js", icon: "🚀", category: "Backend", priority: 11 },
  { name: "Java", icon: "☕", category: "Backend", priority: 5 },
  { name: "Python", icon: "🐍", category: "Backend", priority: 6 },
  { name: "PHP", icon: "🐘", category: "Backend", priority: 7 },
  { name: "Django", icon: "🎯", category: "Backend", priority: 8 },
  { name: "C", icon: "🔧", category: "Programming", priority: 12 },
  { name: "PostgreSQL", icon: "🐘", category: "Database", priority: 15 },
  { name: "Flutter", icon: "🦋", category: "Mobile", priority: 9 },
  { name: "Kotlin", icon: "🤖", category: "Mobile", priority: 10 },
]

// Sort skills by priority
const sortedSkills = skills.sort((a, b) => a.priority - b.priority)

export default function About() {
  const [activeTab, setActiveTab] = useState("skills")
  const { themeClasses, isDarkMode } = useTheme()

  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/Image1.png"
                alt="Abarna Kumarasamy"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className={`${themeClasses.card} backdrop-blur-md rounded-2xl p-6 border`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className={`${themeClasses.text} font-medium`}>Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className={`text-5xl font-bold ${themeClasses.text} mb-6`}>About Me</h2>
              <p className={`${themeClasses.textSecondary} text-lg leading-relaxed mb-8`}>
                I'm <span className="text-purple-400 font-semibold">Abarna Kumarasamy</span>, a passionate third-year
                Computer Science undergraduate at{" "}
                <span className="text-pink-400 font-semibold">Uva Wellassa University, Sri Lanka</span>. I specialize in
                full-stack development with expertise in MERN, Java, React.js, Next.js, TypeScript, Flutter, PHP, and Django.
              </p>
              <p className={`${themeClasses.textSecondary} text-lg leading-relaxed`}>
                I'm actively seeking part-time opportunities to apply my skills, gain experience, and contribute to
                impactful software development projects that make a difference.
              </p>
            </div>

            {/* Enhanced Tabs */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                {["skills", "experience", "education"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? `bg-gradient-to-r ${themeClasses.accent} text-white`
                        : `${themeClasses.textSecondary} hover:text-purple-400 hover:bg-purple-500/10 border ${isDarkMode ? "border-white/10" : "border-gray-200"}`
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`${themeClasses.card} backdrop-blur-sm border rounded-2xl p-8`}
                >
                  {activeTab === "skills" && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {sortedSkills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className={`${themeClasses.card} ${themeClasses.cardHover} backdrop-blur-sm border rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 group`}
                          >
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            <h4 className={`${themeClasses.text} font-semibold text-sm mb-1`}>{skill.name}</h4>
                            <p className={`${themeClasses.textMuted} text-xs`}>{skill.category}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Skills Categories */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
                        {["Frontend", "Backend", "Database", "Mobile", "Programming"].map((category) => (
                          <div
                            key={category}
                            className={`${themeClasses.card} backdrop-blur-sm border rounded-xl p-4 text-center`}
                          >
                            <h5 className={`${themeClasses.text} font-semibold text-sm mb-2`}>{category}</h5>
                            <div className="flex flex-wrap justify-center gap-1">
                              {skills
                                .filter((skill) => skill.category === category)
                                .slice(0, 3)
                                .map((skill, idx) => (
                                  <span key={idx} className="text-lg">
                                    {skill.icon}
                                  </span>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "experience" && (
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${themeClasses.accent} rounded-full flex items-center justify-center`}
                        >
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className={`${themeClasses.text} font-semibold text-lg`}>Full Stack Developer</h4>
                          <p className="text-purple-400 font-medium">2022 - Present</p>
                          <p className={`${themeClasses.textMuted} mt-2`}>
                            Developing comprehensive web and mobile applications using modern technologies and
                            frameworks.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "education" && (
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className={`${themeClasses.text} font-semibold text-lg`}>
                            BSc(Hons) Computer Science & Technology
                          </h4>
                          <p className="text-cyan-400 font-medium">2022 - Present</p>
                          <p className={`${themeClasses.textMuted} mt-2`}>Uva Wellassa University, Sri Lanka</p>
                          <div className="flex items-center mt-3 space-x-4">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4 text-purple-400" />
                              <span className={`${themeClasses.textMuted} text-sm`}>Jaffna, Sri Lanka</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4 text-pink-400" />
                              <span className={`${themeClasses.textMuted} text-sm`}>3rd Year</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
