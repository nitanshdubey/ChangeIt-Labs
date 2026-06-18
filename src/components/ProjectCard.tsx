import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  results: string[]
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group glass-effect rounded-xl overflow-hidden border border-white/10 smooth-transition hover:border-blue/30 hover:shadow-glow"
    >
      {/* Project Image */}
      <div className="relative w-full h-64 bg-gradient-to-br from-blue/10 to-purple/10 flex items-center justify-center overflow-hidden group-hover:from-blue/20 group-hover:to-purple/20 transition-all duration-500">
        <div className="text-7xl">{project.image}</div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-sm text-blue font-semibold mb-2 uppercase tracking-wide">{project.category}</p>
        <h3 className="text-2xl font-bold font-space mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

        {/* Results */}
        <div className="mb-6 space-y-2">
          {project.results.map((result, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-green-400">
              <TrendingUp size={16} />
              {result}
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 text-xs font-medium bg-purple/10 text-purple rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue hover:bg-blue/90 text-white font-semibold rounded-lg smooth-transition w-full justify-center group-hover:gap-3"
        >
          View Project
          <ExternalLink size={16} className="group-hover:translate-x-1 smooth-transition" />
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard
