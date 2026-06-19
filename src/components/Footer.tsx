import { Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-dark border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16">

        {/* Brand */}
        <div className="text-center">

          <h3 className="text-3xl font-bold font-space mb-5">
            ChangeIt Labs
          </h3>

          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
            Premium digital brand studio transforming ambitious businesses online.
          </p>

          {/* Contact */}

          <div className="flex flex-col items-center gap-4 text-gray-300">

            <a
              href="mailto:nitanshdubey7@gmail.com"
              className="inline-flex items-center gap-3 hover:text-blue smooth-transition"
            >
              <Mail size={18} />
              nitanshdubey7@gmail.com
            </a>

            <div className="inline-flex items-center gap-3 text-gray-400">
              <MapPin size={18} />
              India
            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 mt-14 pt-8">

          <p className="text-center text-sm text-gray-500">
            © {currentYear} ChangeIt Labs. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer