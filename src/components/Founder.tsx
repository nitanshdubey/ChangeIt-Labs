import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const Founder = () => {
  const stats = [
    { value: '1:1', label: 'Direct Founder Collaboration' },
    { value: 'Premium', label: 'Design Standards' },
    { value: '2+', label: 'Years Experience' },
  ]

  return (
    <section id="founder" className="w-full py-24 px-4 md:px-8 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-24 w-96 h-96 bg-blue opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute right-0 bottom-10 w-96 h-96 bg-purple opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.6}}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base text-blue font-semibold mb-4 uppercase tracking-wide">
            The Founder
          </p>
          <h2 className="text-4xl md:text-6xl font-bold font-space leading-tight">
            Building Digital Brands That Businesses Are Proud To Share.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="flex justify-center"
>
  <div className="glass-effect border border-white/10 rounded-3xl p-3 w-[320px]">
    <div className="rounded-2xl overflow-hidden h-[420px]">
      <img
        src="https://github.com/nitanshdubey/ChangeIt-Labs/blob/main/Dubey.jpeg?raw=true"
        alt="Nitansh Dubey - Founder"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</motion.div>

          <motion.div
            initial={{opacity:0,x:30}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:.6}}
          >
            <p className="text-blue font-semibold text-lg mb-2">Nitansh Dubey</p>
            <p className="text-gray-400 mb-8">Founder, ChangeIt Labs</p>

            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                I'm Nitansh — a designer and developer obsessed with helping local
                businesses look and feel premium online. I started ChangeIt Labs
                because I believe every ambitious business deserves a website
                that builds instant trust.
              </p>

              <p>
                We don't just build websites. We craft digital identities that
                position your brand as the obvious choice — turning visitors into
                customers, and customers into loyal advocates.
              </p>

              <p>
                If you're ready to elevate how the world sees your business,
                I'd love to hear from you personally.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
              {stats.map((item)=>(
                <div key={item.value} className="glass-effect border border-white/10 rounded-2xl p-5">
                  <p className="text-3xl font-bold text-blue font-space">{item.value}</p>
                  <p className="text-sm text-gray-400 mt-2">{item.label}</p>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/916266334438"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue hover:bg-blue/90 smooth-transition mt-10 px-8 py-4 rounded-xl font-semibold"
            >
              <MessageCircle size={20}/>
              Chat with Nitansh on WhatsApp
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Founder
