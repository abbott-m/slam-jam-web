'use client'

import { motion } from 'framer-motion'
import { Music, Coffee, ShoppingBag, Trophy, Shield, Zap, Shirt, Store, Users, Target } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Basketball Competition',
      description: 'High-energy basketball games featuring the best high school teams showcasing their prowess on the court.',
      delay: 0.1,
    },
    {
      icon: Music,
      title: 'Live Entertainment',
      description: 'Electrifying performances from trending artists and DJs creating the perfect soundtrack to the action.',
      delay: 0.2,
    },
    {
      icon: Coffee,
      title: 'Food & Refreshments',
      description: 'A variety of food vendors and refreshment stands to keep fans and players fueled throughout the event.',
      delay: 0.3,
    },
    {
      icon: ShoppingBag,
      title: 'Lifestyle Market',
      description: 'Basketball gear, trendy clothing, accessories, and student-friendly merchandise from local vendors.',
      delay: 0.4,
    },
    {
      icon: Target,
      title: 'Interactive Zones',
      description: 'Basketball skill challenges, fan activities, and brand activations for participants to engage and win prizes.',
      delay: 0.5,
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Controlled access, security presence, and student-friendly policies ensuring everyone enjoys the event safely.',
      delay: 0.6,
    },
  ]

  const highlights = [
    {
      icon: Trophy,
      title: 'Basketball Tournament',
      description: 'competitive games & skill showcases',
    },
    {
      icon: Store,
      title: 'Student-Priced Tickets',
      description: 'affordable access for all students',
    },
    {
      icon: Shirt,
      title: 'Exclusive Merchandise',
      description: 'basketball gear, apparel & accessories',
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'connecting schools, fans & local businesses',
    },
  ]

  return (
    <section id="about" className="py-20 arena-section arena-floor court-lines">
      <div className="container mx-auto px-4">
        {/* Arena Entrance Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="scoreboard mx-auto mb-6 p-6 rounded-lg max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-scoreboard bg-gradient-gold bg-clip-text text-transparent">
              The Experience
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            More than just an event - step into the arena for a high-octane fusion of basketball prowess and electrifying entertainment. A full-day celebration creating an immersive, dynamic experience that captivates fans and participants alike.
          </p>
          <div className="mt-6 arena-lights"></div>
        </motion.div>

        {/* Court Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              className="arena-card rounded-xl p-6 text-center"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.3 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
              >
                <feature.icon className="w-8 h-8 text-black" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3 text-scoreboard">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent"></div>
            </motion.div>
          ))}
        </div>

        {/* Arena Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="arena-card rounded-2xl p-8 md:p-12 arena-floor"
        >
          <div className="text-center mb-10">
            <div className="scoreboard mx-auto mb-4 p-4 rounded-lg max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 text-scoreboard">
                Event Highlights
              </h3>
            </div>
            <p className="text-gray-300 text-lg">
              Basketball, entertainment, and high school culture combined
            </p>
            <div className="mt-4 arena-lights"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -5 }}
                className="text-center p-4 rounded-lg"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.2 }}
                  className="bg-gradient-gold p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center"
                >
                  <highlight.icon className="w-6 h-6 text-black" />
                </motion.div>
                <h4 className="text-white font-semibold mb-2 text-scoreboard text-sm">{highlight.title}</h4>
                <p className="text-gray-400 text-xs">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Arena Floor Center Circle CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 relative"
        >
          {/* Center court circle */}
          <div className="court-circle mx-auto mb-8 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(234, 201, 113, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#tickets')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-arena text-black font-bold py-6 px-10 rounded-full text-xl transition-all duration-300"
            >
              🏀 Secure Your Spot
            </motion.button>
          </div>
          
          <p className="text-primary-400 font-mono text-sm">● GAME TIME APPROACHING ●</p>
        </motion.div>
      </div>
    </section>
  )
}

export default About