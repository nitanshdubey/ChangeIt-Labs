import { motion } from 'framer-motion'
import { Globe, Layers, Code, Zap, Smartphone, Palette } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Design',
      description: 'Custom-designed websites that convert visitors into customers.',
      features: ['Unique Design', 'User Focused', 'Brand Aligned'],
    },
    {
      icon: Layers,
      title: 'Landing Pages',
      description: 'High-converting landing pages optimized for your campaigns.',
      features: ['A/B Testing Ready', 'Mobile First', 'Conversion Focused'],
    },
    {
      icon: Code,
      title: 'Business Websites',
      description: 'Professional websites that establish authority and trust.',
      features: ['SEO Optimized', 'Fast Loading', 'Easy Maintenance'],
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand identity systems including logos and guidelines.',
      features: ['Logo Design', 'Color System', 'Visual Guidelines'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Perfect performance on all devices and screen sizes.',
      features: ['Adaptive Design', 'Touch Optimized', 'Fast Performance'],
    },
    {
      icon: Zap,
      title: 'Performance & SEO',
      description: 'Lightning-fast websites optimized for search engines.',
      features: ['Core Web Vitals', 'SEO Strategy', 'Analytics Setup'],
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
    <section className="w-full py-20 px-4 md:px-8 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base text-blue font-semibold mb-4 uppercase tracking-wide">Services</p>
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">What We Offer</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Complete digital solutions tailored to your business needs</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group glass-effect p-8 rounded-xl border border-white/10 smooth-transition hover:border-blue/30 hover:shadow-glow overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue/0 to-purple/0 group-hover:from-blue/5 group-hover:to-purple/5 transition-all duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue/10 mb-6 group-hover:bg-blue/20 smooth-transition">
                    <Icon className="w-6 h-6 text-blue" />
                  </div>
                  <h3 className="text-2xl font-bold font-space mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 text-xs font-medium bg-blue/10 text-blue rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
