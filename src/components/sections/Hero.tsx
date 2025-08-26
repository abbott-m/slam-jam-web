'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Trophy, Zap, Users } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black arena-section arena-floor">
      {/* Arena Ceiling Lights - STATIC */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        
        {/* Arena spotlights - STATIC positioning */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-400/20 via-primary-400/10 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-radial from-primary-400/25 via-primary-400/10 to-transparent rounded-full blur-3xl opacity-50" />
        
        {/* Court center circle */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 court-circle opacity-20" />
        
        {/* Arena lighting bars */}
        <div className="absolute top-20 left-0 right-0 arena-lights" />
        {/* <div className="absolute bottom-20 left-0 right-0 arena-lights" /> */}
      </div>

      {/* Crowd silhouettes */}
      <div className="absolute top-0 left-0 right-0 h-32 crowd-silhouette" />
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 crowd-silhouette" /> */}

      {/* Content - Center Court */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto court-lines arena-entrance">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Scoreboard-style title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="scoreboard mx-auto mt-8 mb-8 p-6 rounded-lg max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-2 text-scoreboard">
              <span className="block bg-gradient-gold bg-clip-text text-transparent basketball-bounce">
                SLAM
              </span>
              <span className="block text-white -mt-4">
                JAM
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light text-arena-glow"
          >
            FUSION EVENT
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-primary-400 mb-8 font-medium text-arena-glow"
          >
            Basketball Prowess Meets Electrifying Entertainment
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Step into the arena where high-octane basketball prowess meets electrifying entertainment. The ultimate celebration of high school culture, sport, and music creating an immersive, dynamic experience that captivates fans and participants alike.
          </motion.p>

          {/* Arena Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              className="arena-card rounded-lg p-6 text-center"
            >
              <Trophy className="w-10 h-10 text-primary-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2 text-scoreboard">Basketball Competition</h3>
              <p className="text-gray-400">High school basketball prowess</p>
              <div className="mt-2 text-xs text-primary-400 font-mono">● LIVE ●</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              className="arena-card rounded-lg p-6 text-center"
            >
              <Zap className="w-10 h-10 text-primary-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2 text-scoreboard">Electrifying Entertainment</h3>
              <p className="text-gray-400">Music, culture & dynamic shows</p>
              <div className="mt-2 text-xs text-primary-400 font-mono">● LIVE ●</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              className="arena-card rounded-lg p-6 text-center"
            >
              <Users className="w-10 h-10 text-primary-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2 text-scoreboard">High School Culture</h3>
              <p className="text-gray-400">Students, fans & participants</p>
              <div className="mt-2 text-xs text-primary-400 font-mono">● LIVE ●</div>
            </motion.div>
          </motion.div>

          {/* Arena Entry Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#tickets')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-arena text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
            >
              🎟️ Enter the Arena
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="border-2 border-primary-400 text-primary-400 font-bold py-4 px-8 rounded-full text-lg hover:bg-primary-400/20 transition-all duration-300 arena-spotlight"
            >
              🏀 Explore the Court
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero