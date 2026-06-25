import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="w-full py-24 px-4 md:px-8 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-20 w-96 h-96 bg-blue opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-10 w-96 h-96 bg-purple opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect border border-white/10 rounded-3xl p-8 md:p-14"
        >
          <div className="inline-flex items-center gap-3 bg-blue/10 border border-blue/20 px-5 py-2 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-blue" />
            <span className="text-sm md:text-base text-blue font-semibold uppercase tracking-wide">
              About ChangeIt Labs
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-space leading-tight mb-8">
            Built for businesses that refuse to look ordinary.
          </h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-4xl">
            <p>
              ChangeIt Labs was founded on the belief that every local business
              deserves a digital presence as impressive as the work they deliver.
            </p>

            <p>
              We combine creativity, strategy, and modern technology to create
              websites that build trust and unlock real opportunities — for
              ambitious founders, premium studios, and growing local brands.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
          >
            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <p className="text-4xl font-bold text-blue font-space mb-2">100%</p>
              <p className="text-gray-400">Custom Design Approach</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <p className="text-4xl font-bold text-blue font-space mb-2">Modern</p>
              <p className="text-gray-400">Technology & Best Practices</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <p className="text-4xl font-bold text-blue font-space mb-2">Growth</p>
              <p className="text-gray-400">Focused on Real Business Results</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
