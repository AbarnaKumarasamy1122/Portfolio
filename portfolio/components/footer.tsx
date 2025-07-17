"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook, ArrowUp, Heart } from "lucide-react"
import { useTheme } from "./theme-provider"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]

const services = [
  { name: "Web Development", href: "#services" },
  { name: "Mobile Apps", href: "#services" },
  { name: "UI/UX Design", href: "#services" },
  { name: "Full Stack Solutions", href: "#services" },
]

const socialLinks = [
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    href: "https://facebook.com/abarna.kumarasamy.1",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/abarnakumarasamy/",
    color: "hover:text-pink-400",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/abarna-kumarasamy1122/",
    color: "hover:text-blue-500",
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/AbarnaKumarasamy1122",
    color: "hover:text-gray-400",
  },
]

export default function Footer() {
  const { themeClasses, isDarkMode } = useTheme()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      className={`relative ${isDarkMode ? "bg-black/60" : "bg-gray-900"} backdrop-blur-sm border-t ${themeClasses.navBorder}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3
                  className={`text-3xl font-bold ${themeClasses.gradient} mb-2 hover:scale-105 transition-transform duration-300 cursor-pointer`}
                >
                  K.Abarna
                </h3>
                <p className={`${themeClasses.textSecondary} text-lg font-medium`}>Full Stack Developer</p>
                <p className={`${themeClasses.textMuted} mt-3 leading-relaxed`}>
                  Crafting digital experiences with passion and precision. Specializing in modern web technologies and
                  innovative solutions.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <Mail className={`w-5 h-5 ${themeClasses.textMuted} group-hover:text-purple-400 transition-colors`} />
                  <a
                    href="mailto:Abarnasamy1122@gmail.com"
                    className={`${themeClasses.textMuted} hover:text-purple-400 transition-colors text-sm`}
                  >
                    Abarnasamy1122@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone
                    className={`w-5 h-5 ${themeClasses.textMuted} group-hover:text-purple-400 transition-colors`}
                  />
                  <a
                    href="tel:+94769404718"
                    className={`${themeClasses.textMuted} hover:text-purple-400 transition-colors text-sm`}
                  >
                    +94 76 940 4718
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <MapPin
                    className={`w-5 h-5 ${themeClasses.textMuted} group-hover:text-purple-400 transition-colors`}
                  />
                  <span className={`${themeClasses.textMuted} text-sm`}>Jaffna, Sri Lanka</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className={`text-xl font-bold ${themeClasses.text} mb-6`}>Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`${themeClasses.textMuted} hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block text-sm font-medium`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className={`text-xl font-bold ${themeClasses.text} mb-6`}>Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className={`${themeClasses.textMuted} hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block text-sm font-medium`}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className={`text-xl font-bold ${themeClasses.text} mb-6`}>Connect With Me</h4>

              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 ${themeClasses.card} border rounded-xl ${themeClasses.textMuted} ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="space-y-4">
                <p className={`${themeClasses.textMuted} text-sm`}>Stay updated with my latest projects and insights</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`flex-1 px-4 py-3 ${themeClasses.input} rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm backdrop-blur-sm`}
                  />
                  <button
                    className={`px-6 py-3 bg-gradient-to-r ${themeClasses.accent} text-white rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 font-semibold text-sm`}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${themeClasses.navBorder} py-8`}>
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <p className={`${themeClasses.textMuted} text-sm`}>© 2024 K.Abarna. All rights reserved</p>
              </div>

              <div className="flex items-center space-x-6">
                <a href="#" className={`${themeClasses.textMuted} hover:text-purple-400 transition-colors text-sm`}>
                  Privacy Policy
                </a>
                <a href="#" className={`${themeClasses.textMuted} hover:text-purple-400 transition-colors text-sm`}>
                  Terms of Service
                </a>
                <button
                  onClick={scrollToTop}
                  className={`p-2 ${themeClasses.card} border rounded-lg ${themeClasses.textMuted} hover:text-purple-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm`}
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
