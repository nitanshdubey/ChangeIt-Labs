import { motion } from 'framer-motion'
import { MessageCircle, Menu } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-dark/70 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue to-purple flex items-center justify-center font-bold text-white shadow-lg">
              C
            </div>

            <div>
              <h2 className="text-white font-bold text-lg font-space">
                ChangeIt Labs
              </h2>
              <p className="text-xs text-gray-400">
                Digital Brand Studio
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
<div className="hidden md:flex items-center gap-8">

<a href="#services" className="text-gray-300 hover:text-white transition">
  Services
</a>

<a href="#portfolio" className="text-gray-300 hover:text-white transition">
  Portfolio
</a>

<a href="#process" className="text-gray-300 hover:text-white transition">
  Process
</a>

<a href="#about" className="text-gray-300 hover:text-white transition">
  About
</a>

<a href="#founder" className="text-gray-300 hover:text-white transition">
  Founder
</a>

</div>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/916266334438?text=Hello%20ChangeIt%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue to-purple text-white font-semibold hover:scale-105 transition"
          >
            <MessageCircle size={18} />
            Start Project
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-white/10 flex flex-col gap-5">

<a href="#services" onClick={() => setIsOpen(false)}>
  Services
</a>

<a href="#portfolio" onClick={() => setIsOpen(false)}>
  Portfolio
</a>

<a href="#process" onClick={() => setIsOpen(false)}>
  Process
</a>

<a href="#about" onClick={() => setIsOpen(false)}>
  About
</a>

<a href="#founder" onClick={() => setIsOpen(false)}>
  Founder
</a>

            <a
              href="https://wa.me/916266334438?text=Hello%20ChangeIt%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue to-purple text-white font-semibold"
            >
              <MessageCircle size={18} />
              Start Project
            </a>

          </div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar