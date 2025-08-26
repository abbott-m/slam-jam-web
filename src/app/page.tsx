'use client'

import { motion } from 'framer-motion'
import { Music, Users, ShoppingBag, Shield, Ticket, Heart, Camera, HandHeart } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Tickets from '@/components/sections/Tickets'
import MediaForm from '@/components/sections/MediaForm'
import VolunteerForm from '@/components/sections/VolunteerForm'
import FoundationForm from '@/components/sections/FoundationForm'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Tickets />
      
      {/* Forms Section */}
      <section className="py-20 arena-section arena-floor">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="scoreboard mx-auto mb-6 p-6 rounded-lg max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-scoreboard bg-gradient-gold bg-clip-text text-transparent">
                Join the Arena
              </h2>
              <div className="text-primary-400 font-mono text-sm">● REGISTRATION OPEN ●</div>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us in creating the ultimate basketball and entertainment fusion experience
            </p>
            <div className="mt-6 arena-lights"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <MediaForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <VolunteerForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FoundationForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}