/* eslint-disable @typescript-eslint/no-explicit-any */
// Form Data Types
export interface MediaFormData {
  // Media House Information
  mediaHouse: string
  mediaType: 'TV' | 'Radio' | 'Newspaper' | 'Magazine' | 'Online' | 'Blogger' | 'Other' | ''
  officeAddress: string
  websiteSocial: string
  
  // Applicant Information
  fullName: string
  jobTitle: string
  email: string
  phone: string
  
  // Coverage Details
  intendedCoverage: 'Pre-event' | 'Event Day' | 'Post-event' | 'All' | ''
  typeCoverage: string
  interviewAccess: boolean
  
  // Accreditation Request
  numRepresentatives: string
  teamMembers: string
  
  // Agreement
  agreed: boolean
}

export interface VolunteerFormData {
  // Personal Information
  fullName: string
  dateOfBirth: string
  age: string
  gender: 'Male' | 'Female' | 'Other' | ''
  phone: string
  email: string
  address: string
  school: string
  
  // Volunteer Roles
  roles: string[]
  
  // Skills & Experience
  hasExperience: boolean
  experienceDescription: string
  specialSkills: string
  
  // Availability
  preEvent: boolean
  eventMorning: boolean
  eventAfternoon: boolean
  eventEvening: boolean
  eventFullDay: boolean
  postEvent: boolean
  
  // Emergency Contact
  emergencyName: string
  emergencyRelationship: string
  emergencyPhone: string
  
  // Agreement
  agreed: boolean
}

export interface FoundationFormData {
  // Donor Information
  fullName: string
  contactPerson: string
  phone: string
  email: string
  address: string
  
  // Type of Support
  supportType: string[]
  donationAmount: string
  customAmount: string
  inKindSupport: string
  strategicSupport: string
  
  // Payment Details
  paymentMode: 'Cash' | 'Mobile Money' | 'Bank Transfer' | ''
  transactionRef: string
  
  // Recognition Preference
  recognition: 'anonymous' | 'list' | ''
  receiveUpdates: boolean
  
  // Agreement
  agreed: boolean
}

// Ticket Types
export interface TicketTier {
  id: string
  name: string
  price: number
  originalPrice?: number
  currency: string
  popular: boolean
  description: string
  features: string[]
  icon: any // Lucide icon component
  gradient: string
  buttonText: string
  soldOut?: boolean
  limitedQuantity?: number
  earlyBird?: boolean
}

// Event Information
export interface EventInfo {
  name: string
  date: string
  time: string
  location: string
  venue: string
  description: string
  ageRestriction: string
  duration: string
  capacity: number
  dressCode?: string
}

// Artist/DJ Information
export interface Artist {
  id: string
  name: string
  genre: string[]
  image: string
  bio: string
  socialLinks: {
    instagram?: string
    twitter?: string
    spotify?: string
    soundcloud?: string
  }
  performanceTime?: string
  isHeadliner: boolean
}

// Sponsor Information
export interface Sponsor {
  id: string
  name: string
  logo: string
  website: string
  tier: 'Gold' | 'Silver' | 'Bronze' | 'Partner'
  description?: string
}

// Navigation Types
export interface NavItem {
  name: string
  href: string
  external?: boolean
}

// Form Validation
export interface FormErrors {
  [key: string]: string | undefined
}

export interface FormState<T> {
  data: T
  errors: FormErrors
  isSubmitting: boolean
  isSubmitted: boolean
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message: string
  errors?: FormErrors
}

// Media Coverage Types
export type MediaCoverageType = 
  | 'News Report'
  | 'Feature Story' 
  | 'Live Broadcast'
  | 'Social Media'
  | 'Photo/Video'
  | 'Interview'
  | 'Other'

export type MediaType = 
  | 'TV'
  | 'Radio'
  | 'Newspaper'
  | 'Magazine'
  | 'Online'
  | 'Blogger'
  | 'Other'

// Volunteer Role Types
export type VolunteerRole = 
  | 'Event Setup & Logistics'
  | 'Guest/Attendee Support (ushers, ticketing, wristbands)'
  | 'Vendor & Merchandise Assistance'
  | 'Food & Beverage Support'
  | 'Media & Communications (social media, photography, videography)'
  | 'Stage & Artist Support'
  | 'Security & Safety Assistance'
  | 'Clean-Up & Post-Event Support'

// Support Types
export type SupportType = 
  | 'One-time ₵50 Donation'
  | 'Multiple Donations'
  | 'In-kind Support'
  | 'Strategic Support (mentorship, health, education, safety, SME empowerment)'

// Payment Methods
export type PaymentMethod = 'Cash' | 'Mobile Money' | 'Bank Transfer'

// Recognition Preferences
export type RecognitionPreference = 'anonymous' | 'list'

// Device Types
export type DeviceType = 'mobile' | 'tablet' | 'desktop'

// Animation Variants
export interface AnimationVariant {
  initial: any
  animate: any
  transition?: any
  exit?: any
}

// Contact Information
export interface ContactInfo {
  email: string
  phone: string
  whatsapp?: string
  address: string
  socialLinks: {
    instagram?: string
    twitter?: string
    facebook?: string
    youtube?: string
    tiktok?: string
  }
}

// SEO Meta Data
export interface SeoMeta {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  twitterImage?: string
  canonical?: string
}

// Feature Information
export interface Feature {
  icon: any // Lucide icon component
  title: string
  description: string
  delay?: number
}

// Highlight Information
export interface Highlight {
  icon: any // Lucide icon component
  title: string
  description: string
}

// Social Link
export interface SocialLink {
  icon: any // Lucide icon component
  href: string
  label: string
}

// Quick Link
export interface QuickLink {
  name: string
  href: string
}

// Newsletter Subscription
export interface NewsletterSubscription {
  email: string
  subscribeDate: string
  active: boolean
}

// Analytics Event
export interface AnalyticsEvent {
  eventName: string
  eventCategory: string
  eventAction: string
  eventLabel?: string
  value?: number
  customParameters?: Record<string, any>
}

// Error Boundary State
export interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: any
}

// Loading State
export interface LoadingState {
  isLoading: boolean
  loadingText?: string
  progress?: number
}

// Modal State
export interface ModalState {
  isOpen: boolean
  title?: string
  content?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  closable?: boolean
}

// Toast Notification
export interface ToastNotification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

// Theme Configuration
export interface ThemeConfig {
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  textColor: string
  borderRadius: string
  fontSize: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}

// Accessibility Options
export interface AccessibilityOptions {
  reduceMotion: boolean
  highContrast: boolean
  largeText: boolean
  screenReader: boolean
}

// Performance Metrics
export interface PerformanceMetrics {
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  timeToInteractive: number
}