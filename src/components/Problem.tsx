import { motion } from 'framer-motion'
import { AlertCircle, Palette, Smartphone, TrendingDown } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Outdated Websites',
      description: 'Your website looks stuck in the past. Outdated design kills trust and sends visitors to your competitors.',
    },
    {
      icon: Palette,
      title: 'No Clear Identity',
      description: 'Without a strong brand identity, you blend into the noise. Customers don\'t remember you.',
    },
    {
      icon: Smartphone,
      title: 'Poor Mobile Experiences',
      description: 'Most visitors come from phones. Slow loading and bad mobile design = lost customers.',
    },
    {
      icon: TrendingDown,
      title: 'Lost Customers',
      description: 'Weak digital presence means missing opportunities. Your competitors are winning while you lose.',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-dark relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <p className="text-sm md:text-base text-red-400 font-semibold mb-4 uppercase tracking-wide">The Problem</p>
  <h2 className="text-4xl md:text-6xl font-bold font-space mb-6 leading-tight">
    Your Business Deserves More Than Just an Online Presence.
  </h2>
  <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
    Most websites don't convert. They're slow, outdated, and forgettable. You need a digital presence that actually works.
  </p>
</motion.div>

        {/* Problem Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group glass-effect p-8 rounded-xl border border-red-500/20 smooth-transition hover:border-red-500/40 hover:shadow-glow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-500/10 mb-6 group-hover:bg-red-500/20 smooth-transition">
                  <Icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold font-space mb-3">{problem.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{problem.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        {/* Bottom CTA */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  viewport={{ once: true }}
  className="mt-8 text-center"
>
  <p className="text-gray-300 text-lg mb-6">
    Sound familiar? <span className="text-red-400 font-semibold">We fix this.</span>
  </p>
</motion.div>
      </div>
    </section>
  )
}

export default Problem