import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Slam Jam | Basketball Prowess Meets Electrifying Entertainment',
  description: 'A high-octane fusion of basketball prowess and electrifying entertainment. The ultimate celebration of high school culture, sport, and music creating an immersive, dynamic experience that captivates fans and participants alike.',
  keywords: [
    'slam jam',
    'basketball tournament',
    'high school basketball',
    'sports entertainment',
    'ghana basketball',
    'student sports',
    'basketball competition',
    'youth sports',
    'school basketball',
    'sports event',
    'basketball prowess',
    'high school culture'
  ],
  authors: [{ name: 'Slam Jam Festival' }],
  creator: 'Slam Jam Festival',
  publisher: 'Slam Jam Festival',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://slamjamfestival.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://slamjam.com',
    title: 'Slam Jam | Basketball Prowess Meets Electrifying Entertainment',
    description: 'A high-octane fusion of basketball prowess and electrifying entertainment. The ultimate celebration of high school culture, sport, and music creating an immersive, dynamic experience that captivates fans and participants alike.',
    siteName: 'Slam Jam',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Slam Jam - Basketball Prowess Meets Electrifying Entertainment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slam Jam | Basketball Prowess Meets Electrifying Entertainment',
    description: 'A high-octane fusion of basketball prowess and electrifying entertainment. The ultimate celebration of high school culture, sport, and music creating an immersive, dynamic experience that captivates fans and participants alike.',
    images: ['/twitter-image.jpg'],
    creator: '@slamjam',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'entertainment',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#EAC971" />
        <meta name="color-scheme" content="dark" />
        
        {/* Viewport meta tag */}
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" 
        />
        
        {/* Performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              "name": "Slam Jam",
              "description": "A high-octane fusion of basketball prowess and electrifying entertainment. The ultimate celebration of high school culture, sport, and music.",
              "sport": "Basketball",
              "startDate": "2025-12-01T18:00:00+00:00",
              "endDate": "2025-12-02T06:00:00+00:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Basketball Arena",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "TBD",
                  "addressLocality": "Accra",
                  "addressCountry": "Ghana"
                }
              },
              "image": [
                "https://slamjam.com/og-image.jpg"
              ],
              "organizer": {
                "@type": "Organization",
                "name": "Slam Jam",
                "url": "https://slamjam.com"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://slamjam.com/#tickets",
                "price": "100",
                "priceCurrency": "GHS",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01T00:00:00+00:00"
              }
            })
          }}
        />
      </head>
      <body 
        className={`font-sans antialiased bg-black text-white overflow-x-hidden selection:bg-primary-400/30 selection:text-white`}
        suppressHydrationWarning
      >
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-400 text-black px-4 py-2 rounded-lg font-bold z-50 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        {/* Loading indicator for better UX */}
        <div id="loading-indicator" className="fixed top-0 left-0 w-full h-1 bg-gradient-gold opacity-0 z-50 transition-opacity duration-300 pointer-events-none" />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js', { scope: '/' });
              }
            `,
          }}
        />
        
        {/* Google Analytics (replace with your GA4 ID) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
                anonymize_ip: true,
                custom_map: {
                  'custom_parameter': 'slam_jam_festival'
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}