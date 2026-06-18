import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Calendar, Send } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    project: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', businessName: '', project: '' })
      setTimeout(() => setSubmitSuccess(false), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="w-full py-20 px-4 md:px-8 bg-dark relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/10 via-dark to-dark"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base text-blue font-semibold mb-4 uppercase tracking-wide">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">Ready to Transform Your Brand?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Let's discuss your project and find the perfect solution for your business</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Contact Options */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            href="https://wa.me/919876543210?text=Hi%20ChangeIt%20Labs,%20I%20want%20to%20discuss%20my%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-effect p-8 rounded-xl border border-white/10 smooth-transition hover:border-green-500/30 hover:shadow-glow text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-green-500/10 mb-4 group-hover:bg-green-500/20 smooth-transition">
              <MessageCircle className="w-7 h-7 text-green-400" />
            </div>
            <h3 className="text-xl font-bold font-space mb-2">WhatsApp</h3>
            <p className="text-gray-400 mb-4">Quick chat for urgent inquiries</p>
            <p className="text-green-400 font-semibold">Chat Now →</p>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            href="#"
            className="group glass-effect p-8 rounded-xl border border-white/10 smooth-transition hover:border-blue/30 hover:shadow-glow text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-blue/10 mb-4 group-hover:bg-blue/20 smooth-transition">
              <Calendar className="w-7 h-7 text-blue" />
            </div>
            <h3 className="text-xl font-bold font-space mb-2">Book a Call</h3>
            <p className="text-gray-400 mb-4">Schedule a free 30-min consultation</p>
            <p className="text-blue font-semibold">Schedule Now →</p>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            href="mailto:nitansh@changeitlabs.com"
            className="group glass-effect p-8 rounded-xl border border-white/10 smooth-transition hover:border-purple/30 hover:shadow-glow text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-purple/10 mb-4 group-hover:bg-purple/20 smooth-transition">
              <Send className="w-7 h-7 text-purple" />
            </div>
            <h3 className="text-xl font-bold font-space mb-2">Email</h3>
            <p className="text-gray-400 mb-4">Detailed project discussion</p>
            <p className="text-purple font-semibold">Send Email →</p>
          </motion.a>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-effect p-8 md:p-12 rounded-2xl border border-white/10 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold font-space mb-8">Project Inquiry Form</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue/50 focus:outline-none smooth-transition text-white"
                  placeholder="Raj Kumar"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue/50 focus:outline-none smooth-transition text-white"
                  placeholder="raj@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Business Name *</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue/50 focus:outline-none smooth-transition text-white"
                placeholder="Your Business Name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">About Your Project *</label>
              <textarea
                name="project"
                value={formData.project}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue/50 focus:outline-none smooth-transition text-white resize-none"
                placeholder="Tell us about your project, goals, and what you're looking for..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-blue hover:bg-blue/90 text-white font-semibold rounded-lg smooth-transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : submitSuccess ? (
                '✓ Message Sent!'
              ) : (
                <>
                  Send Inquiry
                  <Send size={20} />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">We typically respond within 2-4 hours</p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
