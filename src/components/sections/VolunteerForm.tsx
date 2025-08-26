'use client'

import { motion } from 'framer-motion'
import { Heart, Send, Users, HandHeart } from 'lucide-react'
import { useState } from 'react'

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    school: '',
    
    // Volunteer Roles
    roles: [] as string[],
    
    // Skills & Experience
    hasExperience: false,
    experienceDescription: '',
    specialSkills: '',
    
    // Availability
    preEvent: false,
    eventMorning: false,
    eventAfternoon: false,
    eventEvening: false,
    eventFullDay: false,
    postEvent: false,
    
    // Emergency Contact
    emergencyName: '',
    emergencyRelationship: '',
    emergencyPhone: '',
    
    // Agreement
    agreed: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const volunteerRoles = [
    'Event Setup & Logistics',
    'Guest/Attendee Support (ushers, ticketing, wristbands)',
    'Vendor & Merchandise Assistance',
    'Food & Beverage Support',
    'Media & Communications (social media, photography, videography)',
    'Stage & Artist Support',
    'Security & Safety Assistance',
    'Clean-Up & Post-Event Support',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    console.log('Volunteer form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleRoleChange = (role: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      roles: checked 
        ? [...prev.roles, role]
        : prev.roles.filter(r => r !== role)
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
          <Heart className="w-8 h-8 text-black" />
        </motion.div>
        <h3 className="text-xl font-bold text-white mb-2">Welcome to the Team!</h3>
        <p className="text-gray-300">Thank you for volunteering with SLAM JAM. We&apos;`ll contact you with more details soon.</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      id="volunteer"
      whileHover={{ y: -8 }}
      className="arena-card rounded-xl p-8 arena-spotlight transition-all duration-300"
    >
      <div className="text-center mb-6">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
        >
          <Heart className="w-8 h-8 text-black" />
        </motion.div>
        <div className="scoreboard p-3 rounded-lg mb-3">
          <h3 className="text-2xl font-bold text-white mb-1 text-scoreboard">Arena Team</h3>
          <div className="text-primary-400 font-mono text-xs">● VOLUNTEER CREW ●</div>
        </div>
        <p className="text-gray-300 text-sm">Be part of the team making SLAM JAM basketball and entertainment experience unforgettable</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Information */}
        <div className="space-y-3">
          <h4 className="text-primary-400 font-semibold text-sm">Personal Information</h4>
          
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="bg-black/60 border border-primary-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors backdrop-blur-sm"
          />
          
          <div className="grid grid-cols-2 gap-3">
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="bg-black/60 border border-primary-400/30 rounded-lg px-4 py-3 text-white focus:border-primary-400 focus:outline-none transition-colors backdrop-blur-sm"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              className="bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
            />
          </div>
          
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full bg-black/60 border border-primary-400/30 rounded-lg px-4 py-3 text-white focus:border-primary-400 focus:outline-none transition-colors backdrop-blur-sm"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number / WhatsApp"
            value={formData.phone}
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
            type="text"
            name="school"
            placeholder="School / Institution"
            value={formData.school}
            onChange={handleChange}
            className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Volunteer Roles */}
        <div className="space-y-3">
          <h4 className="text-primary-400 font-semibold text-sm">Preferred Volunteer Areas</h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {volunteerRoles.map((role) => (
              <label key={role} className="flex items-start space-x-3 text-gray-300">
                <input
                  type="checkbox"
                  checked={formData.roles.includes(role)}
                  onChange={(e) => handleRoleChange(role, e.target.checked)}
                  className="w-4 h-4 text-primary-400 bg-transparent border-gray-600 rounded focus:ring-primary-400 mt-1"
                />
                <span className="text-sm">{role}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-3">
          <h4 className="text-primary-400 font-semibold text-sm">Skills & Experience</h4>
          
          <label className="flex items-center space-x-3 text-gray-300">
            <input
              type="checkbox"
              name="hasExperience"
              checked={formData.hasExperience}
              onChange={handleChange}
              className="w-4 h-4 text-primary-400 bg-transparent border-gray-600 rounded focus:ring-primary-400"
            />
            <span className="text-sm">I have prior volunteering/event experience</span>
          </label>
          
          {formData.hasExperience && (
            <textarea
              name="experienceDescription"
              placeholder="Briefly describe your experience"
              value={formData.experienceDescription}
              onChange={handleChange}
              rows={2}
              className="w-full bg-black/60 border border-primary-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors resize-none backdrop-blur-sm"
            />
          )}
          
          <input
            type="text"
            name="specialSkills"
            placeholder="Special skills (photography, crowd management, sales, etc.)"
            value={formData.specialSkills}
            onChange={handleChange}
            className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Emergency Contact */}
        <div className="space-y-3">
          <h4 className="text-primary-400 font-semibold text-sm">Emergency Contact</h4>
          
          <input
            type="text"
            name="emergencyName"
            placeholder="Emergency Contact Name"
            value={formData.emergencyName}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
          />
          
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="emergencyRelationship"
              placeholder="Relationship"
              value={formData.emergencyRelationship}
              onChange={handleChange}
              required
              className="bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
            />
            <input
              type="tel"
              name="emergencyPhone"
              placeholder="Phone Number"
              value={formData.emergencyPhone}
              onChange={handleChange}
              required
              className="bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
            />
          </div>
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
            I agree to follow the organizers&apos; rules, work responsibly, and represent SLAM JAM positively.
          </span>
        </label>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-arena text-black font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-scoreboard"
        >
          <HandHeart className="w-4 h-4" />
          <span>Join Arena Team</span>
        </motion.button>
      </form>
    </motion.div>
  )
}

export default VolunteerForm