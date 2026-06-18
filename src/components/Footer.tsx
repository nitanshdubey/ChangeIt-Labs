import { Mail, MessageCircle, MapPin, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-dark border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-space mb-4">ChangeIt Labs</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Premium digital brand studio transforming ambitious businesses online.</p>
            <p className="text-gray-500 text-xs mt-4">🇮🇳 Based in India</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-blue smooth-transition">Website Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue smooth-transition">Landing Pages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue smooth-transition">Brand Identity</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue smooth-transition">SEO Optimization</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-blue smooth-transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue smooth-transition">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue smooth-transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue smooth-transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-white">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:nitansh@changeitlabs.com" className="flex items-center gap-2 text-gray-400 hover:text-blue smooth-transition">
                <Mail size={16} />
                nitansh@changeitlabs.com
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue smooth-transition">
                <MessageCircle size={16} />
                +91 9876 543210
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                India
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue/20 border border-white/10 flex items-center justify-center smooth-transition text-gray-400 hover:text-blue">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue/20 border border-white/10 flex items-center justify-center smooth-transition text-gray-400 hover:text-blue">
              <Twitter size={18} />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-500/20 border border-white/10 flex items-center justify-center smooth-transition text-gray-400 hover:text-green-400">
              <MessageCircle size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">© {currentYear} ChangeIt Labs. All rights reserved.</p>
            <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-400 smooth-transition">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400 smooth-transition">Terms of Service</a>
              <a href="#" className="hover:text-gray-400 smooth-transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
