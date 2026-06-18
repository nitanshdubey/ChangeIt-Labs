import { motion } from 'framer-motion'
import { Mail, MessageCircle, Linkedin } from 'lucide-react'

const Founder = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-dark relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden glass-effect border border-white/10">
              <div className="w-full h-full bg-gradient-to-br from-blue/20 to-purple/20 flex items-center justify-center">
                <div className="text-9xl">👨‍💼</div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue/20 to-purple/20 opacity-50 blur-2xl -z-10"></div>
            </div>
          </motion.div>

          {/* Founder Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-blue font-semibold mb-4 uppercase tracking-wide">Meet The Founder</p>
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">Nitansh Dubey</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Digital brand strategist and full-stack designer with 6+ years of experience transforming businesses through premium web design and strategic branding.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-bold font-space mb-2">🎯 Mission</h3>
                <p className="text-gray-400">To empower ambitious businesses with premium digital presence that drives real growth and sustainable success.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold font-space mb-2">✨ Vision</h3>
                <p className="text-gray-400">Creating a world where every local business has access to world-class digital branding and design solutions.</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:nitansh@changeitlabs.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue/10 hover:bg-blue/20 border border-blue/30 text-blue font-semibold rounded-lg smooth-transition"
              >
                <Mail size={20} />
                Email
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20Nitansh,%20I%20want%20to%20discuss%20my%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-400 font-semibold rounded-lg smooth-transition"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue/10 hover:bg-blue/20 border border-blue/30 text-blue font-semibold rounded-lg smooth-transition"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Founder
