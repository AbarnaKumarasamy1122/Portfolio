"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useTheme } from "./theme-provider"

const portfolio = [
  {
    title: "Inventory Management System",
    description:
      "Full-stack web application for inventory fulfillment and distribution with real-time tracking and analytics.",
    image: "./Inventory Management.jpeg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/AbarnaKumarasamy1122/Project-1.git",
  },
  {
    title: "Fitness Tracker App",
    description: "Mobile application for fitness tracking with personalized workout plans and progress monitoring.",
    image: "./Fitness Tracker.jpeg",
    tags: ["Flutter", "Dart", "Firebase", "Material Design"],
    link: "https://github.com/AbarnaKumarasamy1122/Healtho_Gym_Fitness_App.git",
  },
  {
    title: "TaskNet Management",
    description: "Intelligent task management system with advanced scheduling and team collaboration features.",
    image: "./Tasknet.jpeg",
    tags: ["React", "Django", "MariaDB", "Tailwind"],
    link: "https://github.com/AbarnaKumarasamy1122/Tasknet.git",
  },
  {
    title: "Healthcare System",
    description: "Comprehensive doctor appointment and patient management system with automated workflows.",
    image: "./Healthcare.jpeg",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    link: "https://github.com/AbarnaKumarasamy1122/Hospital_Appointment_Booking_System.git",
  },
  {
    title: "Tourism Platform",
    description: "Complete tourism management solution with booking system and destination management.",
    image: "./Tourism.jpeg",
    tags: ["PHP", "HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/AbarnaKumarasamy1122/Tourism_Management.git",
  },
  {
    title: "UI/UX Showcase",
    description: "Collection of modern interface designs focusing on user experience and accessibility.",
    image: "ui-ux.jpg",
    tags: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    link: "#",
  },
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

export default function Portfolio() {
  const { themeClasses } = useTheme()

  return (
    <section id="portfolio" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`text-5xl font-bold ${themeClasses.text} mb-6`}>Featured Work</h2>
          <p className={`${themeClasses.textSecondary} text-xl max-w-3xl mx-auto leading-relaxed`}>
            Explore my recent projects showcasing expertise in web development, mobile applications, and user experience
            design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolio.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-3xl ${themeClasses.card} ${themeClasses.cardHover} backdrop-blur-sm border transition-all duration-500 transform hover:scale-105`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-purple-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  className={`text-xl font-bold ${themeClasses.text} mb-3 group-hover:text-purple-400 transition-colors`}
                >
                  {project.title}
                </h3>
                <p className={`${themeClasses.textSecondary} text-sm leading-relaxed`}>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent font-semibold rounded-full transition-all duration-300 backdrop-blur-sm transform hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}
