"use client"

import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import Portfolio from "@/components/portfolio"
import Services from "@/components/services"
import Stats from "@/components/stats"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Navigation />
        <Hero />
        <Stats />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
