import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import ProjectCard from './ProjectCard'

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'IronForge Fitness',
      category: 'Fitness Brand',
      description: 'Complete brand redesign with modern website. Resulted in 200% increase in inquiries.',
      image: '🏋️',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      results: ['200% Lead Increase', '5 sec Load Time', '98 Lighthouse Score'],
    },
    {
      id: 2,
      title: 'Velvet Brew Café',
      category: 'Food & Beverage',
      description: 'Premium website with online ordering system. Launched their e-commerce presence.',
      image: '☕',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      results: ['250 Monthly Orders', '4.9★ Rating', '50+ Google Reviews'],
    },
    {
      id: 3,
      title: 'Elevate Studio',
      category: 'Wellness Center',
      description: 'Interactive portfolio with booking system. Increased class enrollments by 150%.',
      image: '🧘',
      technologies: ['React', 'Firebase', 'Stripe'],
      results: ['150% Enrollment Growth', '1000+ Monthly Visitors', '30% Conversion Rate'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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
          <p className="text-sm md:text-base text-blue font-semibold mb-4 uppercase tracking-wide">Featured Work</p>
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">Recent Projects</h2>
          <p className="text-gray-400 text-lg">See what we've built for our clients</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue/10 hover:bg-blue/20 border border-blue/30 text-blue font-semibold rounded-lg smooth-transition">
            <Zap size={20} />
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
