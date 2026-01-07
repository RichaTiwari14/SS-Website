import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const links = {
    services: ['Social Media Marketing', 'Performance Marketing', 'SEO & Content', 'Branding & Design', 'Web Development'],
    company: ['About Us', 'Our Team', 'Careers', 'Blog', 'Contact'],
    resources: ['Case Studies', 'Industry Reports', 'Free Tools', 'Newsletter', 'FAQs'],
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: 'in' },
    { name: 'Twitter', icon: '𝕏' },
    { name: 'Instagram', icon: '📷' },
    { name: 'YouTube', icon: '▶' },
  ]

  return (
    <footer className="bg-dark-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <span className="text-2xl font-bold">Social Spark</span>
                <span className="text-primary-400 font-semibold ml-1">India</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              India's leading digital marketing agency. Transforming ambitious brands 
              into market leaders since 2018.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-colors"
                >
                  <span>{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/5 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-1">Stay Updated</h4>
              <p className="text-gray-400 text-sm">Get weekly marketing insights & industry trends.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-5 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-primary-500 outline-none text-white placeholder-gray-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-500 hover:bg-primary-600 px-6 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Social Spark India. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <span className="text-red-500">❤️</span> in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer