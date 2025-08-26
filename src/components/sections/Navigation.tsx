'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Tickets', href: '#tickets' },
    { name: 'Media', href: '#media' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Support', href: '#foundation' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'arena-card backdrop-blur-md shadow-lg border-b border-primary-400/20' 
          : 'bg-transparent'
      }`}
    >
      {/* Arena ceiling lights indicator */}
      {scrolled && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent"></div>}
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Arena Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 z-10"
          >
              <Image 
                src="/icon-512x512.png" 
                alt="SLAM JAM Logo" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
            <div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent text-scoreboard">
                SLAM JAM
              </span>
              <div className="text-xs text-primary-400 font-mono -mt-1">● ARENA ●</div>
            </div>
          </motion.div>

          {/* Arena Navigation Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  color: '#EAC971',
                  textShadow: '0 0 10px rgba(234, 201, 113, 0.5)'
                }}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-primary-400 transition-all duration-300 font-medium font-mono text-sm relative z-10"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Arena Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden arena-card p-2 rounded-lg border border-primary-400/20 hover:border-primary-400/40 transition-colors z-20"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-6 h-6 text-primary-400" /> : <Menu className="w-6 h-6 text-primary-400" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Arena Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden arena-card border-t border-primary-400/20 relative z-30"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-white hover:text-primary-400 hover:bg-primary-400/10 transition-all duration-300 rounded-lg font-mono text-sm"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
                  <span>{item.name}</span>
                </div>
              </motion.button>
            ))}
            
            {/* Mobile Arena Entry Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              onClick={() => {
                scrollToSection('#tickets')
                setIsOpen(false)
              }}
              className="w-full mt-4 btn-arena text-black font-bold py-3 rounded-lg transition-all duration-300 text-scoreboard relative z-40"
            >
              🎫 Enter Arena
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation