import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Packages from './components/Packages'
import WhyChooseUs from './components/WhyChooseUs'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import About from './components/About'
import Founder from './components/Founder'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-dark flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center"
        >
          <div className="inline-block">
            <div className="w-12 h-12 border-3 border-blue border-t-purple rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-sm text-gray-400">Loading ChangeIt Labs...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-dark"
    >
      <Hero />
      <Problem />
      <Solution />
      <Packages />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <About />
      <Founder />
      <ContactSection />
      <Footer />
    </motion.div>
  )
}

export default App
