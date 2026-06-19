import { motion } from 'framer-motion'
import { Brain, Sparkles, Zap } from 'lucide-react'

const Solution = () => {
  const solutions = [
    {
      icon: Brain,
      title: 'Strategy First',
      description: 'Understanding the business, customers, and goals.',
    },
    {
      icon: Sparkles,
      title: 'Premium Design',
      description: 'Beautiful interfaces with strong branding.',
    },
    {
      icon: Zap,
      title: 'Fast Development',
      description: 'Modern, responsive, high-performance websites.',
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 -mt-8">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-center mb-16"
>
  <p className="text-sm md:text-base text-blue font-semibold mb-4 uppercase tracking-wide">Our Approach</p>
  <h2 className="text-4xl md:text-6xl font-bold font-space mb-6 leading-tight">
    We Create Digital Experiences That Build Trust.
  </h2>
</motion.div>

        {/* Solution Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group glass-effect p-8 rounded-xl border border-green-500/20 smooth-transition hover:border-green-500/40 hover:shadow-glow overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-green-500/10 mb-6 group-hover:bg-green-500/20 smooth-transition">
                    <Icon className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold font-space mb-4">{solution.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{solution.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Solution