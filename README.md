# 🏀 SLAM JAM | Basketball Arena Experience

> **Step into the Arena - Basketball Prowess Meets Electrifying Entertainment**

A production-ready Next.js website for SLAM JAM that provides a complete **basketball arena experience**. Users feel like they're entering a professional basketball auditorium with authentic arena lighting, court aesthetics, and stadium atmosphere.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-cyan)

## ✨ Features

### 🎨 **Basketball Arena Design**
- **Arena atmosphere** with authentic basketball court aesthetics
- **Stadium lighting effects** including spotlights and arena beams
- **Basketball court elements** like center circles and court lines
- **Digital scoreboard styling** throughout the interface
- **Arena glass panel cards** resembling luxury suites
- **Basketball physics animations** with realistic bouncing effects

### 🏟️ **Complete Arena Experience**
- **Arena entrance** feeling when users first visit
- **Basketball court floor** textures and authentic court markings  
- **Stadium lighting** with dynamic spotlights and arena beams
- **Digital scoreboards** for headers and important information
- **Arena seating** terminology and visual layout
- **Basketball physics** with bouncing animations and realistic movement
- **Professional sports** venue atmosphere throughout

### 🚀 **Performance**
- **Next.js 14** with App Router for optimal performance
- **Static Site Generation (SSG)** for lightning-fast loading
- **Image optimization** with Next.js built-in optimization
- **Service Worker** for offline functionality
- **PWA capabilities** for mobile app-like experience

### 📱 **Interactive Arena Sections**
- **Arena entrance** (Hero) with ceiling spotlights and court center circle
- **Arena floor** (About) featuring basketball court elements and arena lighting  
- **Arena seating chart** (Tickets) with VIP courtside and general admission areas
- **Arena registration offices** (Forms) for media passes, team crew, and sponsors
- **Arena navigation** with digital scoreboard styling and arena terminology

### 🎯 **Accessibility**
- **WCAG 2.1 compliant** design
- **Keyboard navigation** support
- **Screen reader** optimized
- **Focus indicators** for better UX
- **Reduced motion** respect for accessibility preferences

### 🔧 **Developer Experience**
- **TypeScript** for type safety
- **ESLint** and **Prettier** for code quality
- **Tailwind CSS** for rapid styling
- **Component-based architecture** for maintainability
- **Comprehensive type definitions**

## 🛠 Quick Start

### Prerequisites

- **Node.js 18+** (recommended: 18.17.0 or later)
- **npm 8+** or **yarn 1.22+** or **pnpm 8+**

### Installation

1. **Create the project:**
```bash
npx create-next-app@latest slam-jam-festival --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd slam-jam-festival
```

2. **Install dependencies:**
```bash
npm install framer-motion lucide-react @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-select @radix-ui/react-checkbox class-variance-authority clsx tailwind-merge
```

3. **Copy the project files:**
   - Copy all the component files to their respective directories
   - Update `tailwind.config.ts`, `package.json`, `next.config.js`, etc.
   - Add the public assets (icons, manifest.json, sw.js)

4. **Start development server:**
```bash
npm run dev
```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
slam-jam-festival/
├── public/
│   ├── icons/               # PWA icons
│   ├── manifest.json        # PWA manifest
│   ├── sw.js               # Service worker
│   └── favicon.ico         # Favicon
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/
│   │   ├── sections/       # Page sections
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Tickets.tsx
│   │   │   ├── MediaForm.tsx
│   │   │   ├── VolunteerForm.tsx
│   │   │   ├── FoundationForm.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/             # Reusable UI components
│   ├── lib/
│   │   └── utils.ts        # Utility functions
│   └── types/
│       └── index.ts        # TypeScript definitions
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## 🎨 Design System

### Colors

The website uses a sophisticated color palette inspired by the brand:

- **Primary Gold Gradient**: `#9A4A22` → `#EBDB80` → `#EABB52` → `#EAC971`
- **Background**: Black (`#000000`) with gray gradients
- **Text**: White with gray variations for hierarchy
- **Accents**: Gold variants for highlights and interactions

### Typography

- **Primary**: Inter (via Google Fonts, optimized by Next.js)
- **Display**: Poppins (via Google Fonts, optimized by Next.js)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **No local font files needed** - handled automatically by Next.js

### Components

All components follow a consistent design pattern:
- **Glass morphism backgrounds** with backdrop blur
- **Smooth hover animations** and micro-interactions
- **Responsive grid layouts** for all screen sizes
- **Consistent spacing** using Tailwind's scale

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript checking
npm run preview      # Build and start production server
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** (if any)
3. **Deploy** - Vercel will handle the build process automatically

### Other Platforms

The project is configured for deployment on:
- **Netlify** (with `netlify.toml` configuration)
- **Railway** (with proper Node.js setup)
- **DigitalOcean App Platform**
- **AWS Amplify**
- **Traditional VPS** (using `npm run build` and serve static files)

### Environment Variables

Create a `.env.local` file for local development:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# API Keys (if integrating with external services)
NEXT_PUBLIC_FORM_API_KEY=your_form_api_key

# Feature Flags
NEXT_PUBLIC_ENABLE_PWA=true
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

## 🔧 Customization

### Updating Brand Colors

1. **Modify `tailwind.config.js`:**
```javascript
colors: {
  primary: {
    // Update these values
    400: "#your-primary-color",
    500: "#your-primary-color",
    // etc.
  }
}
```

2. **Update CSS variables in `globals.css`:**
```css
:root {
  --primary-color: your-color;
}
```

### Adding New Sections

1. **Create component** in `src/components/sections/`
2. **Add to main page** in `src/app/page.tsx`
3. **Update navigation** in `src/components/sections/Navigation.tsx`

### Form Integration

The forms are ready for integration with:
- **Formspree** (easy setup, no backend required)
- **Netlify Forms** (if deployed on Netlify)
- **Custom API endpoints** (update form actions)
- **Email services** (Resend, SendGrid, etc.)

## 🔍 SEO Optimization

The website includes comprehensive SEO features:

- **Meta tags** for all social platforms
- **Structured data** (JSON-LD) for search engines
- **Optimized images** with proper alt text
- **Semantic HTML** structure
- **Fast loading** for better search rankings
- **Mobile-first** responsive design

## ♿ Accessibility

The website follows WCAG 2.1 guidelines:

- **Keyboard navigation** support
- **Screen reader** optimization
- **High contrast** mode support
- **Focus indicators** for interactive elements
- **Reduced motion** respect
- **Semantic HTML** structure
- **Alt text** for all images

## 🔒 Security

Security features implemented:

- **Content Security Policy** headers
- **XSS protection** headers
- **Frame options** protection
- **HTTPS enforcement** in production
- **Input validation** on all forms
- **No sensitive data** in client-side code

## 📱 PWA Features

The website includes Progressive Web App capabilities:

- **Installable** on mobile devices
- **Offline functionality** with service worker
- **Background sync** for form submissions
- **Push notifications** (ready for implementation)
- **App-like experience** on mobile

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Desktop responsiveness** (1920px, 1440px, 1024px)
- [ ] **Mobile responsiveness** (375px, 414px, 768px)
- [ ] **Navigation** works on all screen sizes
- [ ] **Forms** validate and submit properly
- [ ] **Animations** are smooth and performant
- [ ] **Accessibility** with keyboard and screen reader
- [ ] **PWA installation** works on mobile
- [ ] **Offline functionality** works as expected

### Performance Testing

Use these tools to test performance:
- **Lighthouse** (built into Chrome DevTools)
- **PageSpeed Insights** by Google
- **GTmetrix** for detailed analysis
- **WebPageTest** for comprehensive testing

## 🐛 Troubleshooting

### Common Issues

**Font 404 Errors:**
```bash
# If you see font 404 errors, it's because we use Google Fonts
# Remove any font preload links and let Next.js handle fonts automatically
# Update layout.tsx with the corrected version from the artifacts
```

**Build Errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Styling Issues:**
```bash
# Rebuild Tailwind
npm run dev
# Or clear Tailwind cache
npx tailwindcss --watch --purge
```

**TypeScript Errors:**
```bash
# Check TypeScript
npm run type-check
```

### Performance Issues

- **Check bundle size** with `npm run analyze`
- **Optimize images** (use WebP/AVIF formats)
- **Enable compression** in hosting platform
- **Use CDN** for static assets

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style

- **Use TypeScript** for all components
- **Follow ESLint** rules
- **Use Tailwind CSS** for styling
- **Write descriptive** commit messages
- **Add JSDoc comments** for complex functions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **Vercel** for excellent hosting platform

## 📞 Support

For support and questions:

- **Email**: info@slamjamfestival.com
- **Website**: [slamjamfestival.com](https://slamjamfestival.com)
- **Social**: Follow @slamjamfestival on all platforms

---

**Built with ❤️ for the ultimate student rave experience**# slam-jam-web
