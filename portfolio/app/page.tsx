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
      <div className="min-h-screen overflow-x-hidden px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
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
