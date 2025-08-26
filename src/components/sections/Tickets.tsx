'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Users, Gift } from 'lucide-react'

const Tickets = () => {
  const ticketTiers = [
    {
      name: 'Regular Pass',
      price: '₵100',
      popular: false,
      description: 'Perfect for students who want the full basketball and entertainment experience',
      features: [
        'Entry to all basketball games and competitions',
        'Access to live entertainment and performances',
        'Access to food and merchandise vendor areas',
        'Event wristband for re-entry (same day)',
        'Free event merchandise item',
      ],
      icon: Users,
      gradient: 'from-gray-700 to-gray-900',
      buttonText: 'Get Regular Pass',
    },
    {
      name: 'VIP Pass',
      price: '₵200',
      popular: true,
      description: 'The ultimate basketball and entertainment experience with exclusive perks',
      features: [
        'All Regular Pass benefits, plus:',
        'Fast-track entry (skip the long queues)',
        'Exclusive access to the VIP Lounge with premium seating',
        'Complimentary welcome refreshment package',
        'Courtside/close-up viewing area for games',
        'VIP-only merchandise discount',
        'Meet & Greet opportunity with players and performers',
      ],
      icon: Star,
      gradient: 'from-primary-800 to-primary-600',
      buttonText: 'Get VIP Pass',
    },
  ]

  return (
    <section id="tickets" className="py-20 arena-section arena-floor">
      <div className="container mx-auto px-4">
        {/* Arena Seating Chart Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="scoreboard mx-auto mb-6 p-6 rounded-lg max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-scoreboard bg-gradient-gold bg-clip-text text-transparent"
            >
              Arena Seating
            </motion.h2>
            <div className="text-primary-400 font-mono text-sm">● TICKETS AVAILABLE ●</div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Choose your arena experience. Student-priced tickets designed to make the ultimate basketball and entertainment fusion accessible to everyone.
          </p>
          <div className="mt-6 arena-lights"></div>
        </motion.div>

        {/* Arena Seating Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {ticketTiers.map((ticket, index) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -15,
              }}
              className={`relative arena-card rounded-2xl p-8 ${ticket.popular ? 'arena-spotlight' : 'hover:arena-spotlight'} transition-all duration-300`}
              style={{
                background: ticket.popular 
                  ? 'linear-gradient(135deg, rgba(234, 201, 113, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%), repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(234, 201, 113, 0.02) 10px, rgba(234, 201, 113, 0.02) 11px)'
                  : undefined
              }}
            >
              {/* Popular Badge - Championship Banner Style */}
              {ticket.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-gold text-black px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    <span className="text-scoreboard">COURT FAVORITE</span>
                    <Star className="w-4 h-4" />
                  </div>
                </motion.div>
              )}

              {/* Seating Section Header */}
              <div className="text-center mb-6 mt-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`${
                    ticket.popular ? 'bg-gradient-gold' : 'bg-gray-600'
                  } p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                >
                  <ticket.icon className={`w-8 h-8 ${ticket.popular ? 'text-black' : 'text-white'}`} />
                </motion.div>
                
                <div className="scoreboard p-3 rounded-lg mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1 text-scoreboard">{ticket.name}</h3>
                  <div className="text-primary-400 font-mono text-xs">● {ticket.popular ? 'PREMIUM SEATING' : 'GENERAL ADMISSION'} ●</div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{ticket.description}</p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="text-5xl font-bold text-primary-400 mb-2 text-scoreboard">
                    {ticket.price}
                  </div>
                  <div className="text-gray-400 text-sm font-mono">PER SEAT</div>
                </motion.div>
              </div>

              {/* Arena Features List */}
              <div className="space-y-3 mb-8">
                {ticket.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span className={`text-sm ${
                      feature.includes('All Regular Pass benefits') ? 'font-semibold text-primary-300' : 'text-gray-300'
                    }`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Arena Entry Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  ticket.popular
                    ? 'btn-arena text-black'
                    : 'arena-card text-white border-2 border-primary-400 hover:bg-primary-400/20'
                } text-scoreboard`}
              >
                🎫 {ticket.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tickets