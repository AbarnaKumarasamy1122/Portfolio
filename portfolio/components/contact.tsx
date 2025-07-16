"use client"

import type React from "react"
import axios from "axios"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, Download, Facebook, Instagram, Linkedin, Github } from "lucide-react"
import { useTheme } from "./theme-provider"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const { themeClasses } = useTheme()

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/contact/`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.status === 200) {
      setSubmitMessage("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } else {
      setSubmitMessage("Something went wrong. Please try again.")
    }
  } catch (error: any) {
    console.error("Contact form error:", error)
    if (error.response?.data?.error) {
      setSubmitMessage(error.response.data.error)
    } else {
      setSubmitMessage("Server error. Please try again later.")
    }
  }

  setIsSubmitting(false)
  setTimeout(() => setSubmitMessage(""), 5000)
}

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com/abarna.kumarasamy.1",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/abarnakumarasamy/",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/abarna-kumarasamy1122/",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/AbarnaKumarasamy1122",
      color: "from-gray-700 to-gray-800",
    },
  ]

  return (
    <section id="contact" className={`py-32 ${themeClasses.section} backdrop-blur-sm`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`text-5xl font-bold ${themeClasses.text} mb-6`}>Let's Work Together</h2>
          <p className={`${themeClasses.textSecondary} text-xl max-w-3xl mx-auto leading-relaxed`}>
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className={`${themeClasses.card} backdrop-blur-sm border rounded-3xl p-8`}>
              <h3 className={`text-2xl font-bold ${themeClasses.text} mb-8`}>Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-r ${themeClasses.accent} p-4 rounded-2xl`}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`${themeClasses.text} font-semibold text-lg`}>Email</h4>
                    <p className={themeClasses.textSecondary}>Abarnasamy1122@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-2xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`${themeClasses.text} font-semibold text-lg`}>Phone</h4>
                    <p className={themeClasses.textSecondary}>076 940 4718</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className={`${themeClasses.text} font-semibold text-lg mb-6`}>Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-gradient-to-r ${social.color} text-white rounded-2xl hover:opacity-80 transition-all duration-300 transform hover:scale-110`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <a href="./KAbarna_Resume.pdf" 
              download
                className={`mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r ${themeClasses.accent} hover:opacity-90 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105`}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`${themeClasses.card} backdrop-blur-sm border rounded-3xl p-8`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={`w-full px-6 py-4 ${themeClasses.input} rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm`}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={`w-full px-6 py-4 ${themeClasses.input} rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm`}
                  />
                </div>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className={`w-full px-6 py-4 ${themeClasses.input} rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm`}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-gradient-to-r ${themeClasses.accent} hover:opacity-90 text-white font-semibold rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
              <AnimatePresence>
                {submitMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-6 text-center font-medium ${
                      submitMessage.includes("success") ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {submitMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
