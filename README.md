<div align="center">

# 🌟 BrightPath Consulting

### Strategic Growth & Digital Transformation Platform

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-0066cc?style=for-the-badge)](https://bright-path-strategic-vision.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**A cutting-edge consulting platform built with modern web technologies, featuring responsive design, interactive components, and comprehensive business content.**

[View Demo](https://bright-path-landing-page.vercel.app) · [Report Bug](https://github.com/jeremiahmadronio/BrightPath---Landing-Page/issues) · [Request Feature](https://github.com/jeremiahmadronio/BrightPath---Landing-Page/issues)

</div>

---

## 📑 Table of Contents

<details open>
<summary>Click to expand</summary>

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Project Architecture](#-project-architecture)
- [Routing Structure](#-routing-structure)
- [Component Library](#-component-library)
- [Code Quality](#-code-quality)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Customization Guide](#-customization-guide)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Contact & Support](#-contact--support)
- [Acknowledgments](#-acknowledgments)

</details>

---

## 🎯 Overview

**BrightPath Consulting** is a modern, full-featured consulting website designed to showcase strategic consulting services, thought leadership, and client success stories. Built with React, TypeScript, and Tailwind CSS, it delivers exceptional performance and user experience across all devices.

### 📱 Responsive Design Excellence

The platform features a **fully responsive and flexible architecture** that automatically adapts to any screen size:

-  **Mobile Devices** (320px - 768px): Touch-optimized interface with mobile-first design
-  **Tablets** (768px - 1024px): Optimized grid layouts and comfortable touch targets
-  **Laptops** (1024px - 1440px): Enhanced multi-column layouts with rich interactions
-  **Desktops** (1440px - 1920px): Full-width experience with maximum content visibility
-  **Ultra-Wide & 4K** (1920px+): Adaptive containers that maintain readability

**Key Responsive Features:**
- Fluid typography that scales with viewport size
- Dynamic grid systems (1-column mobile → 4-column desktop)
- Flexible images and media with optimized loading
- Adaptive navigation (hamburger menu → full navigation)
- Touch-friendly buttons on mobile, hover effects on desktop

### 🎨 Design Philosophy

- **User-Centric**: Intuitive navigation and clear information hierarchy
- **Performance-First**: Optimized for speed with lazy loading and code splitting
- **Responsive Design**: Seamless experience from mobile to desktop
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO Optimized**: Structured data and semantic HTML

### 🎯 Business Objectives

- Establish thought leadership in strategic consulting
- Generate qualified leads through content marketing
- Showcase expertise through case studies
- Build trust with professional presentation
- Enable easy contact and engagement

---

## ✨ Features

### 🏠 **Core Functionality**

<table>
<tr>
<td width="50%">

**Homepage**
-  Service overview cards
-  Featured case studies
-  Client testimonials
-  Newsletter signup
-  Contact modal

</td>
<td width="50%">

**Content Pages**
-  Thought leadership articles
-  Detailed case studies
-  Service descriptions
-  Educational resources
-  Data visualizations
-  Rich media content

</td>
</tr>
</table>

### 🎨 **User Experience**

-  **Lightning Fast**: Sub-second page loads with Vite
-  **Fully Responsive**: Perfectly adapts to any screen size - from 320px mobile to 4K displays
-  **Flexible Layouts**: Fluid grids and components that scale seamlessly across all viewports
-  **Adaptive UI**: Smart breakpoints ensuring optimal layout at every device size
-  **Smooth Animations**: Polished micro-interactions that work on all devices
-  **SEO Ready**: Meta tags, structured data, sitemap
- **Accessible**: Keyboard navigation, screen reader support
-  **Modern Design**: Contemporary aesthetics with professional polish

### 🛡️ **Technical Features**

-  **Type Safety**: Full TypeScript coverage
-  **Component Library**: Reusable, tested components
-  **Code Splitting**: Optimized bundle sizes
-  **Lazy Loading**: On-demand resource loading
-  **React Router**: Client-side navigation
-  **Tailwind CSS**: Utility-first styling with responsive breakpoints
- 📱 **Responsive Images**: Optimized AVIF formats with srcset for all screen sizes
-  **ESLint**: Code quality enforcement
-  **Flexible Grid System**: Adapts from 1-column to 4-column layouts automatically
-  **Breakpoint Management**: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
-  **Fluid Spacing**: Responsive padding and margins that scale with viewport



## 🛠️ Technology Stack

### **Frontend Framework**

```
React 18.3.1          - Modern UI library
TypeScript 5.6.2      - Type-safe JavaScript
React Router DOM 7.1.1 - Client-side routing
```

### **Build Tools & Development**

```
Vite 6.0.5           - Next-gen build tool
ESLint 9.17.0        - Code quality
PostCSS 8.4.49       - CSS processing
```

### **Styling & UI**

```
Tailwind CSS 3.4.17  - Utility-first CSS
Lucide React 0.469.0 - Modern icon library
```

### **Type Definitions**

```
@types/react 18.3.18
@types/react-dom 18.3.5
@types/node (latest)
```

### **Deployment & Hosting**

```
Vercel              - Edge network deployment
GitHub              - Version control
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

| Tool | Version | Download |
|------|---------|----------|
| Node.js | ≥ 18.0.0 | [nodejs.org](https://nodejs.org/) |
| npm | ≥ 9.0.0 | (comes with Node.js) |
| Git | Latest | [git-scm.com](https://git-scm.com/) |

**Verify installation:**

```bash
node --version  # Should output v18.x.x or higher
npm --version   # Should output 9.x.x or higher
git --version   # Any recent version
```

### Installation

**1. Clone the Repository**

```bash
# Using HTTPS
git clone https://github.com/jeremiahmadronio/BrightPath---Landing-Page.git

# Using SSH
git clone git@github.com:jeremiahmadronio/BrightPath---Landing-Page.git

# Navigate to project directory
cd BrightPath---Landing-Page
```

**2. Install Dependencies**

```bash
# Using npm (recommended)
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

This will install all dependencies listed in `package.json`.

### Running Locally

**Development Server**

```bash
npm run dev
```

This will:
- Start Vite dev server
- Enable hot module replacement (HMR)
- Open browser at `http://localhost:5173`
- Watch for file changes

**Development with Network Access**

```bash
npm run dev -- --host
```

This allows access from other devices on your network.

### Building for Production

**Create Production Build**

```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Bundle and minify code
- Optimize assets
- Generate static files in `dist/`

**Preview Production Build**

```bash
npm run preview
```

Serves the production build locally at `http://localhost:4173`

**Analyze Bundle Size**

```bash
npm run build -- --mode analyze
```

---

## 📂 Project Architecture

```
BrightPath---Landing-Page/
│
├── 📁 public/                          # Static assets (served as-is)
│   ├──   photo-*.avif                 # Optimized images (AVIF format)
│   ├──  brightpath-favicon.svg       # Site favicon
│   └──  vite.svg                     # Vite logo
│
├── 📁 src/                             # Source code
│   │
│   ├── 📁 assets/                      # Project assets
│   │   └── react.svg                  # React logo
│   │
│   ├── 📁 components/                  # Reusable UI components
│   │   ├──  CaseStudies.tsx          # Case studies grid
│   │   ├──  CaseStudyModal.tsx       # Generic case study modal
│   │   ├──  ContactModal.tsx         # Contact form modal
│   │   ├──  DigitalTransformationModal.tsx
│   │   ├──  EcoEnergyCaseStudyModal.tsx
│   │   ├──  FinTechCaseStudyModal.tsx
│   │   ├──  Footer.tsx               # Site footer
│   │   ├──  Hero.tsx                 # Hero section
│   │   ├──  InnovationLabsModal.tsx
│   │   ├──  Insights.tsx             # Blog/insights section
│   │   ├──  Navigation.tsx           # Site navigation
│   │   ├──  NewsletterModal.tsx      # Newsletter signup
│   │   ├──   Services.tsx            # Services section
│   │   ├──  StrategicConsultingModal.tsx
│   │   ├──  Testimonials.tsx         # Client testimonials
│   │   └──  TestModal.tsx            # Test/demo modal
│   │
│   ├── 📁 pages/                       # Page-level components
│   │   │
│   │   ├──  Articles                 # Thought leadership
│   │   │   ├── ArticleAsymmetricAdvantage.tsx
│   │   │   ├── ArticleDigitalEthics.tsx
│   │   │   ├── ArticleHumanCentricLeadership.tsx
│   │   │   └── ArticleSustainableInnovation.tsx
│   │   │
│   │   ├──  Case Studies             # Client success stories
│   │   │   ├── CaseStudyEcoEnergy.tsx
│   │   │   ├── CaseStudyFinTech.tsx
│   │   │   └── CaseStudyGlobalLogistics.tsx
│   │   │
│   │   ├──   Services                # Service detail pages
│   │   │   ├── ServiceDigitalTransformation.tsx
│   │   │   ├── ServiceInnovationLabs.tsx
│   │   │   └── ServiceStrategicConsulting.tsx
│   │   │
│   │   └──  EditorialHome.tsx        # Homepage
│   │
│   ├──  App.tsx                      # Main application component
│   ├──  main.tsx                     # Application entry point
│   ├──  index.css                    # Global styles & Tailwind
│   └──  vite-env.d.ts                # Vite type definitions
│
├── 📁 pdf/                             # PDF documents
│   └── brightpath-strategic-planning.pdf
│
├──   Configuration Files
│   ├── .gitignore                      # Git ignore rules
│   ├── eslint.config.js                # ESLint configuration
│   ├── index.html                      # HTML entry point
│   ├── package.json                    # Dependencies & scripts
│   ├── package-lock.json               # Dependency lock file
│   ├── postcss.config.js               # PostCSS configuration
│   ├── tailwind.config.js              # Tailwind configuration
│   ├── tsconfig.json                   # TypeScript base config
│   ├── tsconfig.app.json               # App TypeScript config
│   ├── tsconfig.node.json              # Node TypeScript config
│   └── vite.config.ts                  # Vite build configuration
│
└──  README.md                        # This file
```

---

## 🗺️ Routing Structure

### Route Configuration

The application uses React Router for client-side routing with the following structure:

| Route Path | Component | Description | Type |
|------------|-----------|-------------|------|
| `/` | `EditorialHome` | Homepage with hero, services, testimonials | Public |
| `/articles/asymmetric-advantage` | `ArticleAsymmetricAdvantage` | Strategy article | Public |
| `/articles/digital-ethics` | `ArticleDigitalEthics` | AI ethics article | Public |
| `/articles/human-centric-leadership` | `ArticleHumanCentricLeadership` | Leadership insights | Public |
| `/articles/sustainable-innovation` | `ArticleSustainableInnovation` | Sustainability article | Public |
| `/case-studies/ecoenergy` | `CaseStudyEcoEnergy` | EcoEnergy transformation | Public |
| `/case-studies/fintech` | `CaseStudyFinTech` | Digital banking platform | Public |
| `/case-studies/logistics` | `CaseStudyGlobalLogistics` | Supply chain optimization | Public |
| `/services/digital-transformation` | `ServiceDigitalTransformation` | Service details | Public |
| `/services/innovation-labs` | `ServiceInnovationLabs` | R&D services | Public |
| `/services/strategic-consulting` | `ServiceStrategicConsulting` | Consulting services | Public |

### URL Structure Best Practices

- **Clean URLs**: No hash routing, using browser history API
- **SEO Friendly**: Descriptive paths for better indexing
- **Consistent**: Predictable URL patterns
- **Case Sensitive**: Lowercase for consistency

---

## 🧩 Component Library

### Layout Components

**Navigation**
```typescript
<Navigation />
```
- Responsive header with mobile menu
- Smooth scroll navigation
- Active route highlighting
- Sticky positioning on scroll

**Footer**
```typescript
<Footer />
```
- Multi-column layout
- Social media links
- Newsletter signup
- Site links and legal info

**Hero**
```typescript
<Hero />
```
- Video background support
- Animated headlines
- Call-to-action buttons
- Responsive design

### Content Components

**Services**
```typescript
<Services />
```
- Grid layout with service cards
- Modal integration
- Icon library integration
- Hover effects

**CaseStudies**
```typescript
<CaseStudies />
```
- Featured project showcase
- Image optimization
- Modal overlays
- Grid/list toggle

**Testimonials**
```typescript
<Testimonials />
```
- Client feedback carousel
- Star ratings
- Company logos
- Responsive grid

**Insights**
```typescript
<Insights />
```
- Article previews
- Category filtering
- Read time estimates
- Featured articles

### Modal Components

All modals include:
- Backdrop overlay with blur
- Smooth enter/exit animations
- Escape key to close
- Click outside to close
- Responsive design
- Scroll lock on body

**Available Modals:**
- `ContactModal` - Lead generation form
- `NewsletterModal` - Email subscription
- `CaseStudyModal` - Generic case study template
- Service-specific modals for detailed information

---

## 🔍 Code Quality

### ESLint Configuration

The project uses ESLint with TypeScript support for code quality:

```javascript
// eslint.config.js highlights
- TypeScript recommended rules
- React recommended rules
- Accessibility checks
- Import organization
- Unused variable detection
```

**Run Linter:**

```bash
npm run lint
```

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### Code Style Guidelines

- Use functional components with hooks
- Prefer TypeScript interfaces over types
- Use meaningful variable names
- Keep components under 300 lines
- Extract reusable logic to custom hooks
- Use const for all variables unless reassignment needed

---

## ⚡ Performance

### Optimization Techniques

**Code Splitting**
- Route-based splitting with React.lazy()
- Dynamic imports for large components
- Separate vendor bundles

**Image Optimization**
- AVIF format for modern browsers
- Responsive images with srcset
- Lazy loading below fold
- Optimized file sizes

**Bundle Optimization**
- Tree shaking enabled
- Minification in production
- CSS purging with Tailwind
- Gzip compression

### Performance Metrics

Target metrics for production build:

| Metric | Target | Current |
|--------|--------|---------|
| First Contentful Paint | < 1.5s | ✅ |
| Largest Contentful Paint | < 2.5s | ✅ |
| Total Blocking Time | < 200ms | ✅ |
| Cumulative Layout Shift | < 0.1 | ✅ |
| Time to Interactive | < 3.5s | ✅ |

### Bundle Size

```bash
# Analyze bundle size
npm run build

# Typical output:
dist/assets/index-[hash].js     ~120 KB
dist/assets/index-[hash].css    ~15 KB
dist/assets/vendor-[hash].js    ~150 KB
```

---

## 🚢 Deployment

### Vercel Deployment (Recommended)

**Automatic Deployment:**

1. **Connect Repository**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration

2. **Configure Project**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

3. **Deploy**
   - Click "Deploy"
   - Vercel builds and deploys automatically
   - Get production URL

**Manual Deployment:**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

### Alternative Platforms

**Netlify**

```bash
# Build the project
npm run build

# Deploy dist/ folder via Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages**

```javascript
// vite.config.ts
export default defineConfig({
  base: '/BrightPath---Landing-Page/',
  // ... other config
})
```

```bash
# Build and deploy
npm run build
npm run deploy # If gh-pages script configured
```

**Docker**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"]
```

### Environment Variables

Create `.env` file for environment-specific configuration:

```env
VITE_API_URL=https://api.brightpath.com
VITE_CONTACT_EMAIL=contact@brightpath.com
VITE_GA_ID=G-XXXXXXXXXX
```

Access in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 🎨 Customization Guide

### Branding & Colors

**Update Brand Colors** (`tailwind.config.js`):

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#b3d9ff',
          500: '#0066cc', // Main brand color
          900: '#003366',
        },
        secondary: {
          500: '#00ccaa',
        }
      }
    }
  }
}
```

**Update Logo & Favicon:**

Replace files in `/public/`:
- `brightpath-favicon.svg` - Site icon
- Update logo references in `Navigation.tsx`

### Content Updates

**Homepage Hero** (`src/components/Hero.tsx`):

```typescript
const heroContent = {
  headline: "Your New Headline",
  subheadline: "Your new description",
  ctaPrimary: "Get Started",
  ctaSecondary: "Learn More"
}
```

**Footer Information** (`src/components/Footer.tsx`):

```typescript
const footerData = {
  company: "Your Company Name",
  address: "Your Address",
  phone: "+1 (555) 123-4567",
  email: "contact@yourcompany.com"
}
```

**Services** (`src/components/Services.tsx`):

Add/edit services in the services array:

```typescript
const services = [
  {
    title: "New Service",
    description: "Service description",
    icon: <YourIcon />,
    features: ["Feature 1", "Feature 2"]
  }
]
```

### Adding New Pages

**1. Create Page Component**

```typescript
// src/pages/YourNewPage.tsx
export default function YourNewPage() {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  )
}
```

**2. Add Route** (`src/App.tsx`):

```typescript
import YourNewPage from './pages/YourNewPage'

// In router configuration
<Route path="/new-page" element={<YourNewPage />} />
```

**3. Add Navigation Link** (`src/components/Navigation.tsx`):

```typescript
<Link to="/new-page">New Page</Link>
```

### Styling Customization

**Global Styles** (`src/index.css`):

```css
/* Add custom global styles */
@layer base {
  h1 {
    @apply text-4xl font-bold;
  }
}

@layer components {
  .btn-primary {
    @apply bg-primary-500 text-white px-6 py-3 rounded-lg;
  }
}
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

**1. Fork the Repository**

Click the "Fork" button at the top right of this page.

**2. Clone Your Fork**

```bash
git clone https://github.com/YOUR-USERNAME/BrightPath---Landing-Page.git
cd BrightPath---Landing-Page
```

**3. Create a Branch**

```bash
git checkout -b feature/amazing-feature
```

**4. Make Changes**

- Write clean, maintainable code
- Follow existing code style
- Add comments where necessary
- Update documentation if needed

**5. Test Your Changes**

```bash
npm run dev
npm run build
npm run lint
```

**6. Commit Your Changes**

```bash
git add .
git commit -m "feat: add amazing feature"
```

**Commit Message Convention:**

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

**7. Push to Your Fork**

```bash
git push origin feature/amazing-feature
```

**8. Create Pull Request**

- Go to your fork on GitHub
- Click "Pull Request"
- Describe your changes
- Submit for review

### Development Guidelines

**Code Style:**
- Use TypeScript for type safety
- Follow ESLint rules
- Use functional components
- Prefer composition over inheritance
- Keep components focused and small

**Testing:**
- Test in multiple browsers
- Test responsive behavior
- Verify accessibility
- Check console for errors

**Documentation:**
- Update README if needed
- Add JSDoc comments
- Document complex logic
- Include usage examples

### Code Review Process

1. Maintainer reviews your PR
2. Address any feedback
3. PR gets approved
4. Changes merged to main
5. Deployed automatically

---

## 🗺️ Roadmap

### Current Version: 1.0.0

### Planned Features

**Q1 2026**
- [ ] Blog system with CMS integration
- [ ] Multi-language support (i18n)
- [ ] Dark mode toggle
- [ ] Advanced analytics integration

**Q2 2026**
- [ ] Client portal/dashboard
- [ ] Live chat integration
- [ ] Advanced search functionality
- [ ] Video testimonials

**Q3 2026**
- [ ] Mobile app (React Native)
- [ ] AI-powered chatbot
- [ ] Resources library
- [ ] Webinar platform integration

**Future Considerations**
- GraphQL API integration
- Progressive Web App (PWA)
- Advanced animations with Framer Motion
- Headless CMS integration
- A/B testing framework

### Completed Features

- [x] Responsive design
- [x] React Router implementation
- [x] TypeScript migration
- [x] Tailwind CSS integration
- [x] Modal system
- [x] Case studies
- [x] Article pages
- [x] Contact forms
- [x] Newsletter signup
- [x] SEO optimization
- [x] Vercel deployment

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Jeremiah Madronio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

See the [LICENSE](LICENSE) file for full details.

---

## 📧 Contact & Support

### Project Maintainer

**Jeremiah Madronio**

- 🌐 Portfolio: [Coming Soon]
- 💼 LinkedIn: [Coming Soon]
- 📧 Email: [Your Email]
- 🐙 GitHub: [@jeremiahmadronio](https://github.com/jeremiahmadronio)

### Project Links

- 🌍 **Live Demo**: [bright-path-landing-page.vercel.app](https://bright-path-strategic-vision.vercel.app/)
- 📦 **Repository**: [github.com/jeremiahmadronio/BrightPath---Landing-Page](https://github.com/jeremiahmadronio/BrightPath---Landing-Page)
- 🐛 **Issues**: [github.com/jeremiahmadronio/BrightPath---Landing-Page/issues](https://github.com/jeremiahmadronio/BrightPath---Landing-Page/issues)
- 📋 **Discussions**: [github.com/jeremiahmadronio/BrightPath---Landing-Page/discussions](https://github.com/jeremiahmadronio/BrightPath---Landing-Page/discussions)

### Getting Help

**Found a bug?**
- Check [existing issues](https://github.com/jeremiahmadronio/BrightPath---Landing-Page/issues)
- Create a new issue with detailed description
- Include steps to reproduce

**Have a question?**
- Check documentation first
- Search existing discussions
- Ask in Discussions section

**Want to contribute?**
- Read [Contributing](#-contributing) section
- Check open issues for "good first issue" label
- Join community discussions

---

## 🙏 Acknowledgments

### Technologies

- **[React](https://reactjs.org/)** - UI library that powers the interface
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and developer experience
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Router](https://reactrouter.com/)** - Declarative routing for React
- **[Lucide Icons](https://lucide.dev/)** - Beautiful, consistent icon set

### Deployment & Services

- **[Vercel](https://vercel.com/)** - Seamless deployment and hosting
- **[GitHub](https://github.com/)** - Version control and collaboration

### Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Inspiration

- Modern SaaS landing pages
- Consulting firm websites
- Design systems and pattern libraries

---

<div align="center">

## 💫 Show Your Support

If you found this project helpful or interesting, please consider:

⭐ **Starring** this repository

🔄 **Sharing** with your network

🤝 **Contributing** to make it better



**Built by [Jeremiah Madronio](https://github.com/jeremiahmadronio)**

*Making strategic consulting accessible through modern web technology*

---

