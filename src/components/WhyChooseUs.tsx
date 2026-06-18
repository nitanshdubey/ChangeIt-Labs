import { motion } from 'framer-motion'
import { Zap, Shield, Target, Rocket, Users, TrendingUp } from 'lucide-react'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for maximum speed. Your website loads in under 2 seconds.',
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Premium quality code and design that stands the test of time. Future-proof architecture.',
    },
    {
      icon: Target,
      title: 'Results Focused',
      description: 'Every design decision is data-driven. We focus on conversion, not just aesthetics.',
    },
    {
      icon: Rocket,
      title: 'SEO Ready',
      description: 'Optimized for search engines from day one. Rank higher, get more organic traffic.',
    },
    {
      icon: Users,
      title: 'Premium Support',
      description: 'Direct access to the founder. Personal support throughout your journey.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Beyond design, we create a growth strategy tailored to your business goals.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        <div className="absolute top-40 left-0 w-96 h-96 bg-purple opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base text-blue font-semibold mb-4 uppercase tracking-wide">Why ChangeIt Labs</p>
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">Why Businesses Choose Us</h2>
          <p className="text-gray-400 text-lg">We're not just designers. We're growth partners.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group glass-effect p-8 rounded-xl border border-white/10 smooth-transition hover:border-blue/30 hover:shadow-glow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-blue/10 mb-6 group-hover:bg-blue/20 smooth-transition">
                  <Icon className="w-7 h-7 text-blue" />
                </div>
                <h3 className="text-xl font-bold font-space mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
