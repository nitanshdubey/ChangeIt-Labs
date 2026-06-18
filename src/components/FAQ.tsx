import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How long does a website project typically take?',
      answer: 'Most projects take 4-8 weeks depending on complexity. We maintain regular communication throughout the process with weekly check-ins.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer packages starting from ₹5,000 for basic websites up to ₹35,000+ for comprehensive solutions. Custom pricing available based on specific requirements.',
    },
    {
      question: 'Do you provide hosting and maintenance?',
      answer: 'Yes! We offer both hosting solutions and ongoing maintenance packages. Most clients choose our annual maintenance plan which includes updates, backups, and support.',
    },
    {
      question: 'Will my website be mobile-responsive?',
      answer: 'Absolutely. All our websites are 100% mobile-responsive and tested across all devices. Mobile-first design is our standard approach.',
    },
    {
      question: 'Is SEO included in your packages?',
      answer: 'Yes, all websites include SEO optimization for on-page factors, meta tags, schema markup, and performance optimization. We also offer monthly SEO services.',
    },
    {
      question: 'Can you help with branding and logo design?',
      answer: 'Yes! We offer complete brand identity packages including logo design, color systems, typography guidelines, and brand voice documentation.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We primarily use React, Next.js, Tailwind CSS, and modern frontend frameworks for performance. Backend solutions include Node.js, Python, and cloud services.',
    },
    {
      question: 'Do you offer revisions and support after launch?',
      answer: 'Yes, all packages include revision rounds during development. Post-launch, we offer maintenance plans with ongoing support, updates, and optimizations.',
    },
    {
      question: 'How will we communicate during the project?',
      answer: 'We maintain regular communication through WhatsApp, Email, and scheduled video calls. You\'ll have direct access for updates and quick questions.',
    },
    {
      question: 'What happens if I need changes after the website launches?',
      answer: 'We offer affordable maintenance packages for post-launch changes, updates, and optimizations. Most clients choose our annual plan for peace of mind.',
    },
  ]

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-dark relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-96 h-96 bg-blue opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base text-blue font-semibold mb-4 uppercase tracking-wide">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Everything you need to know about working with us</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-effect border border-white/10 rounded-lg overflow-hidden smooth-transition hover:border-blue/30"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 smooth-transition"
              >
                <span className="text-lg font-bold font-space text-left">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-blue" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6 border-t border-white/10"
                  >
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
