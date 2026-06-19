import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'IronForge Fitness',
    badge: 'Concept Project',
    color: 'from-orange-500 to-red-500',
    description:
      'A luxury gym website focused on energy, motivation, and membership conversion.',
  },
  {
    title: 'Velvet Brew Café',
    badge: 'Concept Project',
    color: 'from-amber-500 to-orange-500',
    description:
      'A premium café experience emphasizing atmosphere, storytelling, and brand identity.',
  },
  {
    title: 'Elevate Personal Brand',
    badge: 'Concept Project',
    color: 'from-blue to-purple',
    description:
      'A clean and professional personal portfolio built to establish authority and trust.',
  },
]

const Portfolio = () => {
  return (
    <section
  id="portfolio"
  className="w-full py-24 px-4 md:px-8 bg-dark relative overflow-hidden"
>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-24 w-96 h-96 bg-blue opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.5}}
          className="text-center mb-20"
        >
          <p className="text-sm md:text-base text-blue font-semibold mb-4 uppercase tracking-wide">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">
            Concept Projects
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            A selection of concept projects demonstrating our design thinking,
            strategy, and attention to detail.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project,index)=>(
            <motion.div
              key={project.title}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
              className={`grid lg:grid-cols-2 gap-14 items-center ${index%2?'lg:grid-flow-dense':''}`}
            >
              <div className={`${index%2?'lg:col-start-2':''}`}>
                <div className={`absolute hidden lg:block w-80 h-80 bg-gradient-to-br ${project.color} opacity-20 blur-3xl rounded-full`}></div>

                <motion.div whileHover={{y:-8,rotate:-1}} className="relative mx-auto max-w-xl">
                  <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-3 shadow-2xl">
                    <div className="flex justify-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
                      <div className="h-10 border-b border-white/10 flex items-center gap-2 px-4">
                        <span className="w-3 h-3 rounded-full bg-red-400"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                        <span className="w-3 h-3 rounded-full bg-green-400"></span>
                      </div>
                      <div className="p-6">
                        <div className={`h-10 w-2/3 rounded-lg bg-gradient-to-r ${project.color}`}></div>
                        <div className="grid grid-cols-3 gap-3 mt-6">
                          <div className="col-span-2 h-44 rounded-xl bg-white/5"></div>
                          <div className="space-y-3">
                            <div className="h-12 rounded-lg bg-white/5"></div>
                            <div className="h-12 rounded-lg bg-white/5"></div>
                            <div className="h-12 rounded-lg bg-white/5"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mt-4">
                          <div className="h-16 rounded-lg bg-white/5"></div>
                          <div className="h-16 rounded-lg bg-white/5"></div>
                          <div className="h-16 rounded-lg bg-white/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-10 h-3 bg-zinc-700 rounded-b-full"></div>
                </motion.div>
              </div>

              <div className={`${index%2?'lg:col-start-1 lg:row-start-1':''}`}>
                <span className={`inline-block bg-gradient-to-r ${project.color} px-4 py-2 rounded-full text-xs font-semibold uppercase mb-6`}>
                  {project.badge}
                </span>

                <h3 className="text-3xl md:text-5xl font-space font-bold mb-6">{project.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">{project.description}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {['Premium UI','Responsive','SEO Ready','Conversion Focused'].map(f=>(
                    <span key={f} className="glass-effect border border-white/10 rounded-full px-4 py-2 text-sm">{f}</span>
                  ))}
                </div>

                <button className="bg-blue hover:bg-blue/90 px-7 py-4 rounded-xl font-semibold inline-flex items-center gap-3 smooth-transition">
                  Explore Concept
                  <ArrowUpRight size={20}/>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
