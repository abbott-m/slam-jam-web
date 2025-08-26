'use client'

import { motion } from 'framer-motion'
import { Heart, Send, DollarSign, Gift } from 'lucide-react'
import { useState } from 'react'

const FoundationForm = () => {
  const [formData, setFormData] = useState({
    // Donor Information
    fullName: '',
    contactPerson: '',
    phone: '',
    email: '',
    address: '',
    
    // Type of Support
    supportType: [] as string[],
    donationAmount: '',
    customAmount: '',
    inKindSupport: '',
    strategicSupport: '',
    
    // Payment Details
    paymentMode: '',
    transactionRef: '',
    
    // Recognition Preference
    recognition: '',
    receiveUpdates: false,
    
    // Agreement
    agreed: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const supportTypes = [
    'One-time ₵50 Donation',
    'Multiple Donations',
    'In-kind Support',
    'Strategic Support (mentorship, health, education, safety, SME empowerment)',
  ]

  const donationAmounts = [
    '₵50',
    '₵100',
    '₵200',
    '₵500',
    'Custom Amount',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    console.log('Foundation form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSupportTypeChange = (type: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      supportType: checked 
        ? [...prev.supportType, type]
        : prev.supportType.filter(t => t !== type)
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
        <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">Your support for SLAM JAM basketball and entertainment means everything to us. We&apos;ll be in touch soon.</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      id="foundation"
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
          <h3 className="text-2xl font-bold text-white mb-1 text-scoreboard">Arena Sponsors</h3>
          <div className="text-primary-400 font-mono text-xs">● SUPPORT PARTNERS ●</div>
        </div>
        <p className="text-gray-300 text-sm">Help empower youth through basketball, sports, and entertainment experiences</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Donor Information */}
        <div className="space-y-3">
          <h4 className="text-primary-400 font-semibold text-sm">Donor / Foundation Information</h4>
          
          <input
            type="text"
            name="fullName"
            placeholder="Full Name / Organization"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full bg-black/60 border border-primary-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors backdrop-blur-sm"
          />
          
          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Person (if organization)"
            value={formData.contactPerson}
            onChange={handleChange}
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
          
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Type of Support */}
        <div className="space-y-3">
          <h4 className="text-primary-400 font-semibold text-sm">Type of Support</h4>
          
          <div className="space-y-2">
            {supportTypes.map((type) => (
              <label key={type} className="flex items-start space-x-3 text-gray-300">
                <input
                  type="checkbox"
                  checked={formData.supportType.includes(type)}
                  onChange={(e) => handleSupportTypeChange(type, e.target.checked)}
                  className="w-4 h-4 text-primary-400 bg-transparent border-gray-600 rounded focus:ring-primary-400 mt-1"
                />
                <span className="text-sm">{type}</span>
              </label>
            ))}
          </div>

          {formData.supportType.includes('In-kind Support') && (
            <input
              type="text"
              name="inKindSupport"
              placeholder="Specify in-kind support details"
              value={formData.inKindSupport}
              onChange={handleChange}
              className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
            />
          )}

          {formData.supportType.includes('Strategic Support (mentorship, health, education, safety, SME empowerment)') && (
            <textarea
              name="strategicSupport"
              placeholder="Describe your strategic support offering"
              value={formData.strategicSupport}
              onChange={handleChange}
              rows={2}
              className="w-full bg-black/60 border border-primary-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors resize-none backdrop-blur-sm"
            />
          )}
        </div>

        {/* Donation Amount */}
        {(formData.supportType.includes('One-time ₵50 Donation') || formData.supportType.includes('Multiple Donations')) && (
          <div className="space-y-3">
            <h4 className="text-primary-400 font-semibold text-sm">Donation Amount</h4>
            
            <select
              name="donationAmount"
              value={formData.donationAmount}
              onChange={handleChange}
              required
              className="w-full bg-black/60 border border-primary-400/30 rounded-lg px-4 py-3 text-white focus:border-primary-400 focus:outline-none transition-colors backdrop-blur-sm"
            >
              <option value="">Select Amount</option>
              {donationAmounts.map((amount) => (
                <option key={amount} value={amount}>{amount}</option>
              ))}
            </select>
            
            {formData.donationAmount === 'Custom Amount' && (
              <input
                type="number"
                name="customAmount"
                placeholder="Enter custom amount (₵)"
                value={formData.customAmount}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
              />
            )}
          </div>
        )}

        {/* Payment Details */}
        {formData.donationAmount && (
          <div className="space-y-3">
            <h4 className="text-primary-400 font-semibold text-sm">Payment Details</h4>
            
            <select
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary-400 focus:outline-none transition-colors"
            >
              <option value="">Payment Method</option>
              <option value="Cash">Cash</option>
              <option value="Mobile Money">Mobile Money</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
            
            <input
              type="text"
              name="transactionRef"
              placeholder="Transaction Reference / Receipt No."
              value={formData.transactionRef}
              onChange={handleChange}
              className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none transition-colors"
            />
          </div>
        )}

        {/* Recognition Preference */}
        <div className="space-y-3">
          <h4 className="text-primary-400 font-semibold text-sm">Recognition Preference</h4>
          
          <select
            name="recognition"
            value={formData.recognition}
            onChange={handleChange}
            className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary-400 focus:outline-none transition-colors"
          >
            <option value="">Select Preference</option>
            <option value="anonymous">Remain Anonymous</option>
            <option value="list">List my Name/Foundation as a Supporter</option>
          </select>
          
          <label className="flex items-center space-x-3 text-gray-300">
            <input
              type="checkbox"
              name="receiveUpdates"
              checked={formData.receiveUpdates}
              onChange={handleChange}
              className="w-4 h-4 text-primary-400 bg-transparent border-gray-600 rounded focus:ring-primary-400"
            />
            <span className="text-sm">Receive updates about Slam Jam Festival activities</span>
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
            I hereby pledge support towards SLAM JAM, contributing to student development, basketball culture, and a safe event experience.
          </span>
        </label>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-arena text-black font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-scoreboard"
        >
          <Gift className="w-4 h-4" />
          <span>Support Arena</span>
        </motion.button>
      </form>
    </motion.div>
  )
}

export default FoundationForm