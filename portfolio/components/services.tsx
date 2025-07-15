"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Palette, ExternalLink, Star } from "lucide-react"
import { useTheme } from "./theme-provider"

const services = [
  {
    icon: <Code className="w-16 h-16" />,
    title: "Web Application Development",
    description:
      "Inventory fulfillment and distribution system that manages products from companies and distributes them to shop owners. Features include stock management, order tracking, analytics reporting, and route optimization for efficient delivery.",
    features: ["Full-Stack Development", "Real-time Analytics", "Scalable Architecture"],
    link: "https://github.com/AbarnaKumarasamy1122/Project-1.git",
  },
  {
    icon: <Smartphone className="w-16 h-16" />,
    title: "Mobile Application Development",
    description:
      "Healtho Gym Fitness App built with Flutter for cross-platform compatibility. Features exercise tracking, personalized workout plans, progress monitoring, and an intuitive interface for comprehensive fitness management.",
    features: ["Cross-Platform", "Fitness Tracking", "User Analytics"],
    link: "https://github.com/AbarnaKumarasamy1122/Healtho_Gym_Fitness_App.git",
  },
  {
    icon: <Code className="w-16 h-16" />,
    title: "Task Management System",
    description:
      "TaskNet - An intelligent task management web app with weekly/monthly views, smart reminders, and user profile management. Built with React.js, Django, Tailwind CSS, and MariaDB for optimal organization.",
    features: ["Smart Reminders", "Advanced Views", "Profile Management"],
    link: "https://github.com/AbarnaKumarasamy1122/Tasknet.git",
  },
  {
    icon: <Code className="w-16 h-16" />,
    title: "Healthcare Management",
    description:
      "Doctor Appointment System that revolutionizes healthcare appointment processes. Features user-friendly patient scheduling, automated reminders, and streamlined provider management for enhanced operational efficiency.",
    features: ["Appointment Scheduling", "Automated Reminders", "Provider Management"],
    link: "https://github.com/AbarnaKumarasamy1122/Hospital_Appointment_Booking_System.git",
  },
  {
    icon: <Code className="w-16 h-16" />,
    title: "Tourism Management",
    description:
      "Tourist Management System built with PHP, HTML, CSS, and JavaScript. Features tourist packages, destination listings, secure booking system, and comprehensive admin panel for content management.",
    features: ["Package Management", "Secure Booking", "Admin Panel"],
    link: "https://github.com/AbarnaKumarasamy1122/Tourism_Management.git",
  },
  {
    icon: <Palette className="w-16 h-16" />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces with focus on user experience, accessibility, and modern design principles.",
    features: ["User Research", "Wireframing", "Prototyping"],
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

export default function Services() {
  const { themeClasses } = useTheme()

  return (
    <section id="services" className={`py-32 ${themeClasses.section} backdrop-blur-sm`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`text-5xl font-bold ${themeClasses.text} mb-6`}>My Services</h2>
          <p className={`${themeClasses.textSecondary} text-xl max-w-3xl mx-auto leading-relaxed`}>
            I offer comprehensive development services from web applications to mobile apps and UI/UX design, delivering
            solutions that drive results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <div
                className={`${themeClasses.card} ${themeClasses.cardHover} backdrop-blur-sm border transition-all duration-500 h-full rounded-3xl p-8 transform hover:scale-105`}
              >
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3
                  className={`text-2xl font-bold ${themeClasses.text} mb-4 group-hover:text-purple-400 transition-colors`}
                >
                  {service.title}
                </h3>
                <p className={`${themeClasses.textSecondary} mb-6 leading-relaxed`}>{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className={`${themeClasses.textMuted} text-sm`}>{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
                >
                  Explore Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
