import { motion } from 'framer-motion'

const TrustedBy = () => {
  const logos = [
    { name: 'IronForge Fitness', color: 'bg-red-500/20' },
    { name: 'Velvet Brew Café', color: 'bg-yellow-500/20' },
    { name: 'Elevate Studio', color: 'bg-purple-500/20' },
    { name: 'Urban Eats', color: 'bg-orange-500/20' },
    { name: 'Wellness Co', color: 'bg-green-500/20' },
    { name: 'Creative Labs', color: 'bg-pink-500/20' },
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base text-blue font-semibold mb-4 uppercase tracking-wide">Trusted By</p>
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">Helping Ambitious Businesses Grow Online</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Partnered with industry leaders and local champions</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={itemVariants}
              className={`${logo.color} h-24 rounded-lg flex items-center justify-center smooth-transition hover:scale-110 cursor-pointer border border-white/10 backdrop-blur`}
            >
              <p className="text-sm font-semibold text-center px-2 text-white">{logo.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBy
