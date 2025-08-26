'use client'

import { motion } from 'framer-motion'
import { Camera, Send, FileText, Users } from 'lucide-react'
import { useState } from 'react'

const MediaForm = () => {
  const [formData, setFormData] = useState({
    // Media House Information
    mediaHouse: '',
    mediaType: '',
    officeAddress: '',
    websiteSocial: '',
    
    // Applicant Information
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    
    // Coverage Details
    intendedCoverage: '',
    typeCoverage: '',
    interviewAccess: false,
    
    // Accreditation Request
    numRepresentatives: '',
    teamMembers: '',
    
    // Agreement
    agreed: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Handle form submission logic here
    console.log('Media form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/5 backdrop-blur-sm border border-primary-400/20 rounded-xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
        >
          <Camera className="w-8 h-8 text-black" />
        </motion.div>
        <h3 className="text-xl font-bold text-white mb-2">Application Received!</h3>
        <p className="text-gray-300">We&apos;ll review your media accreditation request for SLAM JAM and get back to you soon.</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      id="media"
      whileHover={{ y: -8 }}
      className="arena-card rounded-xl p-8 arena-spotlight transition-all duration-300"
    >
      <div className="text-center mb-6">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
        >
          <Camera className="w-8 h-8 text-black" />
        </motion.div>
        <div className="scoreboard p-3 rounded-lg mb-3">
          <h3 className="text-2xl font-bold text-white mb-1 text-scoreboard">Media Arena Pass</h3>
          <div className="text-primary-400 font-mono text-xs">● PRESS CREDENTIALS ●</div>
        </div>
        <p className="text-gray-300 text-sm">Apply for media accreditation to cover SLAM JAM basketball and entertainment event</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Media House Information */}
        <div className="space-y-3">
          <h4 className="text-primary-400 font-semibold text-sm">Media House Information</h4>
          
          <input
            type="text"
            name="mediaHouse"
            placeholder="Media House / Organization Name"
            value={formData.mediaHouse}
            onChange={handleChange}
            required
            className="w-full bg-black/60 border border-primary-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors backdrop-blur-sm"
          />
          
          <select
            name="mediaType"
            value={formData.mediaType}
            onChange={handleChange}
            required
            className="w-full bg-black/60 border border-primary-400/30 rounded-lg px-4 py-3 text-white focus:border-primary-400 focus:outline-none transition-colors backdrop-blur-sm"
          >
            <option value="">Type of Media</option>
            <option value="TV">TV</option>
            <option value="Radio">Radio</option>
            <option value="Newspaper">Newspaper</option>
            <option value="Magazine">Magazine</option>
            <option value="Online">Online</option>
            <option value="Blogger">Blogger</option>
            <option value="Other">Other</option>
          </select>
          
          <input
            type="text"
            name="websiteSocial"
            placeholder="Website / Social Media Handles"
            value={formData.websiteSocial}
            onChange={handleChange}
            className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Applicant Information */}
        <div className="space-y-3">
          <h4 className="text-primary-400 font-semibold text-sm">Applicant Information</h4>
          
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
          />
          
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title/Role"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
          />
          
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number / WhatsApp"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Coverage Details */}
        <div className="space-y-3">
          <h4 className="text-primary-400 font-semibold text-sm">Coverage Details</h4>
          
          <select
            name="intendedCoverage"
            value={formData.intendedCoverage}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary-400 focus:outline-none transition-colors"
          >
            <option value="">Intended Coverage</option>
            <option value="Pre-event">Pre-event</option>
            <option value="Event Day">Event Day</option>
            <option value="Post-event">Post-event</option>
            <option value="All">All Phases</option>
          </select>
          
          <input
            type="text"
            name="typeCoverage"
            placeholder="Type of Coverage (News Report, Feature Story, etc.)"
            value={formData.typeCoverage}
            onChange={handleChange}
            className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
          />
          
          <label className="flex items-center space-x-3 text-gray-300">
            <input
              type="checkbox"
              name="interviewAccess"
              checked={formData.interviewAccess}
              onChange={handleChange}
              className="w-4 h-4 text-primary-400 bg-transparent border-gray-600 rounded focus:ring-primary-400"
            />
            <span className="text-sm">Require interview access with organizers or artists</span>
          </label>
        </div>

        {/* Agreement */}
        <label className="flex items-start space-x-3 text-gray-300">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            required
            className="w-4 h-4 text-primary-400 bg-transparent border-gray-600 rounded focus:ring-primary-400 mt-1"
          />
          <span className="text-sm">
            I agree to abide by the event&apos;s media guidelines and credit SLAM JAM in all publications.
          </span>
        </label>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-gold text-black font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <Send className="w-4 h-4" />
          <span>Submit Application</span>
        </motion.button>
      </form>
    </motion.div>
  )
}

export default MediaForm