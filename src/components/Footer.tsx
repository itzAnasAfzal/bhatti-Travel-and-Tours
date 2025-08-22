'use client'

import { motion } from 'motion/react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp
} from 'lucide-react'
import { Button } from './ui/button'

type PageType = 'home' | 'about' | 'gallery' | 'contact'

interface FooterProps {
  onPageChange?: (page: PageType) => void
}

export function Footer({ onPageChange }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (page: PageType) => {
    onPageChange?.(page)
    scrollToTop()
  }

  const quickLinks = [
    { label: 'Home', page: 'home' as PageType },
    { label: 'About Us', page: 'about' as PageType },
    { label: 'Gallery', page: 'gallery' as PageType },
    { label: 'Contact Us', page: 'contact' as PageType }
  ]

  const destinations = [
    'Dubai & UAE',
    'Turkey & Europe',
    'Maldives',
    'Thailand',
    'Saudi Arabia (Umrah)',
    'Malaysia & Singapore',
    'Egypt & Morocco',
    'Indonesia & Bali'
  ]

  const resources = [
    'Travel Blog',
    'Travel Tips',
    'Visa Information',
    'Travel Insurance',
    'Group Bookings',
    'Corporate Travel',
    'Travel Guides',
    'Customer Reviews'
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#6415ff] rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6415ff] rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <div className="text-3xl font-bold text-[#6415ff] mb-2">
                  Bhatti
                </div>
                <div className="text-lg text-gray-300">
                  Travel & Tours
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Creating unforgettable travel experiences and memories that last a lifetime. 
                Your trusted partner for extraordinary journeys around the world.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, href: '#', label: 'Facebook' },
                  { Icon: Twitter, href: '#', label: 'Twitter' },
                  { Icon: Instagram, href: '#', label: 'Instagram' },
                  { Icon: Linkedin, href: '#', label: 'LinkedIn' }
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-[#6415ff] rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <nav className="space-y-3">
                {quickLinks.map(link => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.page)}
                    className="block text-gray-300 hover:text-[#6415ff] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <a href="#" className="block text-gray-300 hover:text-[#6415ff] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-gray-300 hover:text-[#6415ff] transition-colors">
                  Terms of Service
                </a>
              </nav>
            </motion.div>

            {/* Popular Destinations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Popular Destinations</h3>
              <nav className="space-y-3">
                {destinations.map(destination => (
                  <a
                    key={destination}
                    href="#"
                    className="block text-gray-300 hover:text-[#6415ff] transition-colors text-sm"
                  >
                    {destination}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Resources & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
              <nav className="space-y-3 mb-6">
                {resources.slice(0, 4).map(resource => (
                  <a
                    key={resource}
                    href="#"
                    className="block text-gray-300 hover:text-[#6415ff] transition-colors text-sm"
                  >
                    {resource}
                  </a>
                ))}
              </nav>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#6415ff] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#6415ff] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">info@bhattitravel.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#6415ff] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">123 Travel Street<br />Adventure City, AC 12345</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-300">
                  Get the latest travel deals and destination guides delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#6415ff] min-w-[280px]"
                />
                <Button className="bg-[#6415ff] hover:bg-purple-700 text-white px-6 py-2 rounded-lg whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Copyright */}
        <motion.div
          className="border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 Bhatti Travel & Tours. All rights reserved. | Designed with ❤️ for travelers
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">Follow your dreams</span>
                <Button
                  onClick={scrollToTop}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-800 p-2"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}