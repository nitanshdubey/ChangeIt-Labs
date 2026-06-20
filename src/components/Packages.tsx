import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const Packages = () => {
  const packages = [
    {
      name: 'Foundation Website',
      price: '₹5,000',
      period: 'Starting from',
      description: 'For new businesses needing a clean and professional online presence.',
      features: [
        '5-7 Page Website',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        'Contact Form',
        '1 Month Support',
        'Fast Loading Speed',
      ],
      isHighlighted: false,
      cta: 'Get Started',
    },
    {
      name: 'Growth Website',
      price: '₹15,000',
      period: 'Starting from',
      description: 'For businesses that want to stand out and convert visitors.',
      features: [
        'Custom Design',
        'Mobile Responsive',
        'Advanced SEO',
        'Lead Capture Forms',
        'Analytics Setup',
        '3 Months Support',
        'Fast Performance',
        'Brand Integration',
      ],
      isHighlighted: true,
      cta: 'Most Popular',
    },
    {
      name: 'Signature Digital Experience',
      price: 'Custom',
      period: 'Pricing',
      description: 'For brands requiring unique, high-impact digital experiences.',
      features: [
        'Bespoke Design',
        'Advanced Features',
        'Custom Integrations',
        'E-commerce Ready',
        'Premium Support',
        '6 Months Support',
        'Marketing Strategy',
        'Ongoing Optimization',
      ],
      isHighlighted: false,
      cta: 'Contact Us',
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
          <p className="text-sm md:text-base text-blue font-semibold mb-4 uppercase tracking-wide">Services & Packages</p>
          <h2 className="text-4xl md:text-6xl font-bold font-space mb-6 leading-tight">
          Built for every stage of your growth.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your business needs
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl overflow-hidden smooth-transition ${
                pkg.isHighlighted
                  ? 'md:scale-105 ring-2 ring-blue shadow-2xl'
                  : 'glass-effect border border-white/10'
              }`}
            >
              {/* Highlighted Package Background */}
              {pkg.isHighlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue/20 to-purple/20"></div>
              )}

              {/* Recommended Badge */}
              {pkg.isHighlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-blue to-purple px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-white">Recommended</span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className={`relative p-8 flex flex-col h-full ${pkg.isHighlighted ? 'bg-dark/90 backdrop-blur' : 'glass-effect'}`}>
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold font-space mb-3">{pkg.name}</h3>
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm">{pkg.period}</p>
                    <p className={`text-4xl font-bold font-space ${pkg.isHighlighted ? 'text-blue' : 'text-white'}`}>
                      {pkg.price}
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{pkg.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8 flex-grow">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={20} className={`flex-shrink-0 mt-0.5 ${pkg.isHighlighted ? 'text-blue' : 'text-green-400'}`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
  href="#contact"
  className={`w-full py-4 font-semibold rounded-lg smooth-transition text-center ${
    pkg.isHighlighted
      ? 'bg-blue hover:bg-blue/90 text-white'
      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
  }`}
>
  {pkg.cta}
</a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg">
            All packages include <span className="text-blue font-semibold">premium support</span> and <span className="text-blue font-semibold">free revisions</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">Custom requirements? <a href="#contact" className="text-blue hover:underline">Let's talk</a></p>
        </motion.div>
      </div>
    </section>
  )
}

export default Packages