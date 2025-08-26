'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tickets', href: '#tickets' },
    { name: 'Media', href: '#media' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Support', href: '#foundation' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="arena-section arena-floor border-t border-primary-400/20 crowd-silhouette">
      <div className="container mx-auto px-4 py-16">
        {/* Arena Lights */}
        <div className="arena-lights mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={scrollToTop}
              className="flex items-center space-x-3 mb-6 cursor-pointer"
            >
                <Image 
                  src="/icon-512x512.png" 
                  alt="SLAM JAM Logo" 
                  width={32} 
                  height={32}
                  className="w-8 h-8"
                />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent text-scoreboard">
                  SLAM JAM
                </h3>
                <p className="text-gray-400 text-sm font-mono">ARENA EXPERIENCE</p>
              </div>
            </motion.div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Step into the arena where high-octane basketball prowess meets electrifying entertainment. The ultimate celebration of high school culture, sport, and music creating an immersive, dynamic experience.
            </p>

            {/* Contact Info with Arena Style */}
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <div className="bg-primary-400/20 p-2 rounded-full">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono">info@slamjam.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <div className="bg-primary-400/20 p-2 rounded-full">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-mono">+233 XX XXX XXXX</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <div className="bg-primary-400/20 p-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-mono">Basketball Arena, Accra</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="scoreboard p-4 rounded-lg mb-6">
              <h4 className="text-xl font-bold text-white text-scoreboard">Arena Navigation</h4>
              <div className="text-primary-400 font-mono text-xs">● QUICK ACCESS ●</div>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ x: 5, color: '#EAC971' }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors font-mono text-sm flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full"></span>
                    <span>{link.name}</span>
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arena Entry */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="scoreboard p-4 rounded-lg mb-6">
              <h4 className="text-xl font-bold text-white text-scoreboard">Arena Entry</h4>
              <div className="text-primary-400 font-mono text-xs">● GET INVOLVED ●</div>
            </div>
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#tickets')}
                className="w-full btn-arena text-black font-bold py-3 rounded-lg transition-all duration-300 text-scoreboard text-sm"
              >
                🎫 Buy Arena Tickets
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#volunteer')}
                className="w-full border-2 border-primary-400 text-primary-400 font-bold py-3 rounded-lg hover:bg-primary-400/20 transition-all duration-300 text-scoreboard text-sm"
              >
                🏀 Join Arena Team
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#foundation')}
                className="w-full arena-card text-white font-bold py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-scoreboard text-sm border border-primary-400/20"
              >
                💎 Sponsor Arena
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Arena Floor Center Line */}
        <div className="arena-lights my-12"></div>

        {/* Social Links & Newsletter - Arena Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-primary-400/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-300 font-mono text-sm">FOLLOW THE ARENA:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.3, 
                      color: '#EAC971',
                      rotate: 5,
                    }}
                    className="text-gray-400 hover:text-primary-400 transition-all duration-300 bg-primary-400/10 p-2 rounded-full"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter - Arena Style */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 font-mono text-sm">ARENA UPDATES:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="arena@email.com"
                  className="bg-black/60 border border-primary-400/30 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors font-mono text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-arena text-black px-4 py-2 rounded-r-lg font-mono text-sm transition-all duration-300"
                >
                  JOIN
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Arena Floor */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-primary-400/20 mt-8 pt-8 text-center"
        >
          <div className="court-circle mx-auto mb-4" style={{ width: '100px', height: '100px' }} />
          <p className="text-gray-400 font-mono text-sm">
            © 2025 SLAM JAM ARENA. All rights reserved. Made with ❤️ for basketball culture.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer