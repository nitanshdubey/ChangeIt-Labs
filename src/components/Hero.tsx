import { motion } from 'framer-motion'
import { MessageCircle, Calendar, Briefcase } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section className="w-full min-h-screen bg-dark flex items-center justify-center pt-20 pb-20 px-4 md:px-8">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple opacity-5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto z-10 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="inline-block glass-effect px-6 py-2 rounded-full border border-blue/20">
            <p className="text-sm font-medium text-blue">🚀 Digital Brand Studio</p>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-space"
        >
          Transform Your Brand<br />
          <span className="gradient-text">Online Presence</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter"
        >
          Premium web design, strategic branding, and digital transformation for ambitious businesses. 
          Built by Nitansh Dubey. Trusted by 50+ businesses across India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="https://wa.me/919876543210?text=Hi%20ChangeIt%20Labs,%20I%20want%20to%20book%20a%20free%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue hover:bg-blue/90 text-white font-semibold rounded-lg smooth-transition shadow-lg hover:shadow-2xl"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-blue/30 hover:border-blue text-white font-semibold rounded-lg smooth-transition hover:bg-blue/5"
          >
            <Calendar size={20} />
            Book a Free Call
          </a>
          <button
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple/30 hover:border-purple text-white font-semibold rounded-lg smooth-transition hover:bg-purple/5"
          >
            <Briefcase size={20} />
            View Our Work
          </button>
        </motion.div>

        {/* Hero Image Placeholder */}
        <motion.div
          variants={itemVariants}
          className="relative mt-16"
        >
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden glass-effect">
            <div className="w-full h-full bg-gradient-to-br from-blue/10 to-purple/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-gray-400">Premium Portfolio Preview</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue/20 to-purple/20 opacity-50 blur-2xl -z-10"></div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</p>
            <p className="text-gray-400 text-sm">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">200+</p>
            <p className="text-gray-400 text-sm">Projects Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">5★</p>
            <p className="text-gray-400 text-sm">Average Rating</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
