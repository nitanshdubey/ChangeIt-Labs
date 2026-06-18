import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Raj Kumar',
      business: 'IronForge Fitness',
      rating: 5,
      text: 'Nitansh transformed our gym from barely having any online presence to getting inquiries every single day. The website is beautiful and converts amazingly.',
    },
    {
      name: 'Priya Singh',
      business: 'Velvet Brew Café',
      rating: 5,
      text: 'The design is premium, the UX is smooth, and our online orders have tripled since launch. Worth every penny!',
    },
    {
      name: 'Arjun Patel',
      business: 'Elevate Studio',
      rating: 5,
      text: 'Working with ChangeIt Labs was a game-changer. Professional, responsive, and delivered exactly what we needed and more.',
    },
    {
      name: 'Sneha Verma',
      business: 'Urban Eats',
      rating: 5,
      text: 'The team is incredibly talented. They understood our vision perfectly and created something that truly represents our brand.',
    },
    {
      name: 'Vikram Sharma',
      business: 'Wellness Co',
      rating: 5,
      text: 'From concept to launch, everything was smooth. The website loads super fast and looks incredible on mobile too.',
    },
    {
      name: 'Anjali Desai',
      business: 'Creative Labs',
      rating: 5,
      text: 'Best decision we made for our business. Nitansh was very available and supportive throughout the entire process.',
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
          <p className="text-sm md:text-base text-blue font-semibold mb-4 uppercase tracking-wide">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg">Real feedback from real businesses</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-effect p-8 rounded-xl border border-white/10 smooth-transition hover:border-blue/30 hover:shadow-glow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <p className="font-bold font-space">{testimonial.name}</p>
                <p className="text-sm text-blue">{testimonial.business}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
