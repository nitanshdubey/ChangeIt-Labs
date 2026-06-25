import { motion } from 'framer-motion'
import { Lightbulb, Pencil, Code, Send, Zap } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Discovery',
      description: 'Understanding your business, goals, and target audience.',
      number: 1,
    },
    {
      icon: Pencil,
      title: 'Strategy',
      description: 'Creating a roadmap aligned with your objectives.',
      number: 2,
    },
    {
      icon: Pencil,
      title: 'Design',
      description: 'Crafting beautiful, conversion-focused designs.',
      number: 3,
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Building fast, scalable, and secure websites.',
      number: 4,
    },
    {
      icon: Send,
      title: 'Launch',
      description: 'Going live with full optimization and testing.',
      number: 5,
    },
    {
      icon: Zap,
      title: 'Support',
      description: 'Ongoing maintenance and growth optimization.',
      number: 6,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="process" className="w-full py-20 px-4 md:px-8 bg-dark relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base text-blue font-semibold mb-4 uppercase tracking-wide">Our Process</p>
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">A Clear Path From Idea To Launch</h2>
          <p className="text-gray-400 text-lg">A proven process that delivers results</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-1 bg-gradient-to-r from-blue to-purple"></div>
                )}

                <div className="glass-effect p-8 rounded-xl border border-white/10 h-full hover:border-blue/30 smooth-transition hover:shadow-glow group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center group-hover:shadow-glow smooth-transition">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-dark border-2 border-blue flex items-center justify-center text-xs font-bold text-blue">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-space">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect p-8 rounded-xl border border-blue/20 text-center"
        >
          <p className="text-lg text-gray-300 mb-4">📅 <span className="font-bold">Typical Timeline:</span> 2-4 weeks depending on project scope</p>
          <p className="text-gray-400">Regular check-ins and updates throughout the entire process</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
