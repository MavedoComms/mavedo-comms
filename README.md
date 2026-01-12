# Mavedo Communications

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Vitest](https://img.shields.io/badge/Vitest-4.0.16-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)](https://github.com/your-username/mavedo-communications)
[![License](https://img.shields.io/badge/License-All_Rights_Reserved-red?style=flat-square)](LICENSE)
[![Made in Namibia](https://img.shields.io/badge/Made_in-Namibia-00A86B?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMDBBODZCIi8+Cjx0ZXh0IHg9IjEwIiB5PSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TkE8L3RleHQ+Cjwvc3ZnPgo=)](https://en.wikipedia.org/wiki/Namibia)

> **Affordable creative power for ambitious startups**

A modern, high-performance website for **Mavedo Communications** - a Namibia-based marketing and branding agency that helps startups and small businesses access professional, cost-effective creative services without breaking the budget.

## About Mavedo Communications

Mavedo Communications is a full-service creative agency based in **Windhoek, Namibia**, specializing in helping startups build brands that stand out in competitive markets. We believe that every business, regardless of size or budget, deserves access to professional creative services.

### Our Services

- **Brand Strategy & Identity Design**
  - Logo design and brand guidelines
  - Color palettes and typography systems
  - Brand positioning and messaging

- **Digital Marketing & Social Media**
  - Social media strategy and management
  - Content creation and copywriting
  - Digital advertising campaigns

- **Web Design & Development**
  - Responsive website design
  - E-commerce solutions
  - SEO optimization

- **Marketing Strategy & Campaigns**
  - Campaign planning and execution
  - Performance tracking and analytics
  - Growth strategy consulting

### Our Mission

We work with ambitious entrepreneurs who are building with intention, providing flexible service packages that scale with your business growth.

## Website Features

- **Modern Design System** - Clean, professional interface with custom branding
- **Fully Responsive** - Optimized for all devices and screen sizes
- **Lightning Fast Performance** - Built with Vite for optimal loading speeds
- **SEO Optimized** - Structured for maximum search engine visibility
- **Analytics Integration** - Built-in tracking and performance monitoring
- **Smooth Animations** - Enhanced user experience with Framer Motion
- **Comprehensive Testing** - Full test coverage with Vitest and Testing Library
- **Content Management** - Easy content updates with structured JSON data
- **Security First** - Secure hosting and best practices implementation
- **Accessibility Compliant** - WCAG guidelines adherence

## Technology Stack

### Frontend Framework
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.9.3** - Type-safe development with latest features
- **React Router DOM 7.9.4** - Modern client-side routing

### Build Tools & Development
- **Vite 7.1.7** - Next-generation frontend build tool
- **ESLint 9.36.0** - Advanced code linting and formatting
- **PostCSS** - Modern CSS processing and optimization

### UI & Animation
- **Framer Motion 12.23.24** - Production-ready motion library
- **Custom CSS Grid & Flexbox** - Modern layout systems
- **CSS Custom Properties** - Dynamic theming support

### Testing Framework
- **Vitest 4.0.16** - Fast, modern testing framework
- **Testing Library** - Simple and complete testing utilities
- **jsdom 27.4.0** - DOM testing environment

### Deployment & Infrastructure
- **Firebase Hosting** - Fast, secure, and reliable hosting
- **GitHub Actions** - Automated CI/CD pipeline
- **Content Validation** - Pre-build content integrity checks

## Quick Start

### Prerequisites
- **Node.js 18+** (LTS recommended)
- **npm 9+** or **yarn 1.22+**
- **Git** for version control

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mavedo-communications.git
   cd mavedo-communications
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

The development server includes hot module replacement (HMR) for instant updates during development.

## Available Scripts

| Command | Description | Usage |
|---------|-------------|-------|
| `npm run dev` | Start development server with HMR | Development |
| `npm run build` | Build optimized production bundle | Deployment |
| `npm run preview` | Preview production build locally | Testing |
| `npm run test` | Run tests in watch mode | Development |
| `npm run test:run` | Run all tests once | CI/CD |
| `npm run lint` | Lint and fix code issues | Code Quality |

### Development Workflow

```bash
# Start development
npm run dev

# Run tests while developing
npm run test

# Build and preview before deployment
npm run build && npm run preview

# Lint code before committing
npm run lint
```

## Project Architecture

```
mavedo-communications/
├── 📁 public/                  # Static assets
│   ├── 📁 admin/              # CMS configuration
│   ├── 📁 images/             # Optimized images
│   └── 📄 Logo icon - 1 (1).svg
├── 📁 src/
│   ├── 📁 components/         # Reusable UI components
│   │   ├── 📄 Header.tsx      # Navigation header
│   │   ├── 📄 Footer.tsx      # Site footer
│   │   ├── � ContactForm.tsx # Contact form with validation
│   │   ├── 📄 StarterPacks.tsx # Service packages
│   │   ├── 📄 Process.tsx     # Process showcase
│   │   ├── 📄 FAQ.tsx         # Frequently asked questions
│   │   └── 📄 BackToTop.tsx   # Scroll to top functionality
│   ├── 📁 pages/              # Route components
│   │   ├── 📄 Home.tsx        # Homepage with hero & services
│   │   ├── 📄 About.tsx       # About page with values
│   │   ├── 📄 Contact.tsx     # Contact page with forms
│   │   └── 📄 ServicesRates.tsx # Services & pricing details
│   ├── 📁 content/            # Structured content data
│   │   ├── 📄 site.json       # Global site configuration
│   │   ├── 📄 home.json       # Homepage content
│   │   ├── 📄 packages.json   # Service packages data
│   │   ├── 📄 process.json    # Process steps data
│   │   ├── 📄 faq.json        # FAQ content
│   │   ├── 📄 coreValues.json # Company values
│   │   └── 📄 types.ts        # TypeScript type definitions
│   ├── 📁 utils/              # Utility functions
│   │   ├── 📄 analytics.ts    # Google Analytics integration
│   │   └── 📄 whatsapp.ts     # WhatsApp link generation
│   ├── 📁 test/               # Test suites
│   │   ├── 📄 setup.ts        # Test environment setup
│   │   ├── 📄 *.test.tsx      # Component tests
│   │   └── 📄 *.test.ts       # Utility tests
│   ├── 📄 App.tsx             # Main application component
│   ├── 📄 main.tsx            # Application entry point
│   ├── 📄 config.ts           # Application configuration
│   ├── 📄 App.css             # Global styles
│   └── 📄 index.css           # CSS reset and base styles
├── 📁 assets/                 # Build-time assets
│   └── 📁 css/                # Brand stylesheets
├── 📁 scripts/                # Build and utility scripts
│   └── 📄 validate-content.mjs # Content validation
├── 📄 package.json            # Dependencies and scripts
├── 📄 tsconfig.json           # TypeScript configuration
├── 📄 vite.config.ts          # Vite build configuration
├── 📄 vitest.config.ts        # Test configuration
└── 📄 README.md               # This file
```

## Design System

### Color Palette
```css
/* Primary Colors */
--primary-blue: #002642;     /* Professional, trustworthy */
--accent-orange: #E59500;    /* Energetic, creative */
--dark: #1B1B1B;            /* Modern, sophisticated */
--light: #FFFFFF;           /* Clean, minimal */

/* Supporting Colors */
--gray-100: #F8F9FA;
--gray-200: #E9ECEF;
--gray-600: #6C757D;
--gray-900: #212529;
```

### Typography Scale
```css
/* Font Families */
--font-heading: 'Custom Brand Font', system-ui;
--font-body: system-ui, -apple-system, sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### Spacing System
```css
/* Consistent spacing scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
```

## Testing Strategy

The project maintains comprehensive test coverage across multiple layers:

### Test Types
- **Unit Tests** - Individual component functionality
- **Integration Tests** - Component interaction workflows
- **Static Asset Tests** - Resource availability validation
- **CMS Integration Tests** - Content management functionality
- **Deployment Tests** - Firebase routing validation

### Test Coverage Areas
- ✅ Component rendering and props
- ✅ User interaction handling
- ✅ Form validation and submission
- ✅ Navigation and routing
- ✅ Content loading and display
- ✅ Accessibility compliance
- ✅ Performance benchmarks

### Running Tests

```bash
# Watch mode for development
npm run test

# Single run for CI/CD
npm run test:run

# Coverage report
npm run test -- --coverage

# Specific test file
npm run test Footer.test.tsx
```

## Deployment

### Automated Deployment
The site automatically deploys to Firebase Hosting via GitHub Actions on every push to the `main` branch.

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to Firebase (requires Firebase CLI)
firebase deploy

# Preview deployment
firebase hosting:channel:deploy preview
```

### Environment Setup
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`
3. Initialize project: `firebase init hosting`

## Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Mobile Performance**: Optimized for 3G networks
- **Accessibility**: WCAG 2.1 AA compliant

## Security Features

- **Content Security Policy** - XSS protection
- **HTTPS Enforcement** - Secure data transmission
- **No Sensitive Data Exposure** - Environment variables for secrets
- **Dependency Scanning** - Regular security audits
- **Input Validation** - Form data sanitization

## Contact & Support

### Business Inquiries
- **Website**: [mavedo.na](https://mavedo.na)
- **Email**: hello@mavedo.na
- **Location**: Windhoek, Namibia

### Social Media
- **LinkedIn**: [Mavedo Communications](https://www.linkedin.com/company/mavedo-comms)
- **X (Twitter)**: [@MavedoComms](https://x.com/MavedoComms)
- **Facebook**: [Mavedo Communications](https://www.facebook.com/people/Mavedo-Communications/61581663933468/)
- **Instagram**: [@mavedocomms](https://www.instagram.com/mavedocomms/)

### Technical Support
For technical issues or development questions:
- **Email**: tech@mavedo.na
- **Issues**: [GitHub Issues](https://github.com/your-username/mavedo-communications/issues)

## Contributing

We welcome contributions from the community! Please read our contributing guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain test coverage above 80%
- Use semantic commit messages
- Update documentation for new features

## License

© 2025 Mavedo Communications. All rights reserved.

This project is proprietary software. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited without explicit written permission from Mavedo Communications.

## Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the lightning-fast build tool
- **Framer** - For the smooth animation library
- **Namibian Tech Community** - For the support and inspiration

---

<div align="center">
  <strong>Built with love in Namibia</strong>
  <br>
  <em>Empowering startups, one brand at a time</em>
</div>