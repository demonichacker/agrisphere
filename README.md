# 🌱 IOGRIC - Smart Agricultural Monitoring Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18.0.0-61DAFB)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Revolutionize agriculture with AI-powered monitoring, real-time analytics, and intelligent insights for sustainable farming.

![AgriSphere Preview](./public/placeholder.jpg)

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📱 Demo](#-demo)
- [🏗️ Project Structure](#️-project-structure)
- [🔧 Development](#-development)
- [📊 Available Scripts](#-available-scripts)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🌟 Overview

IOGRIC is a comprehensive agricultural monitoring platform that combines cutting-edge technology with user-friendly design to help farmers optimize their operations. Built with modern web technologies, it provides real-time insights, predictive analytics, and intelligent automation for sustainable farming practices.

### 🎯 Mission
Transform traditional agriculture through technology, enabling farmers to make data-driven decisions that maximize yields while minimizing environmental impact.

## ✨ Features

### 🌐 **Core Features**
- **Real-time Dashboard** - Monitor all farm operations from a single, intuitive interface
- **IoT Sensor Integration** - Connect and manage soil, weather, and crop sensors
- **AI-Powered Analytics** - Predictive insights using machine learning algorithms
- **Smart Alert System** - Proactive notifications for irrigation, pests, and weather events
- **3D Field Visualization** - Interactive maps with satellite imagery integration

### 📱 **User Experience**
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode** - Automatic theme switching with user preference
- **Intuitive Navigation** - Clean, modern interface with smooth animations
- **Real-time Updates** - Live data streaming and instant notifications

### 🔧 **Technical Features**
- **Progressive Web App** - Installable on mobile devices
- **Offline Capability** - Core functionality works without internet
- **Performance Optimized** - Fast loading with code splitting and lazy loading
- **Accessibility** - WCAG compliant with screen reader support

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with concurrent features
- **TypeScript** - Type-safe JavaScript

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### **State Management & Data**
- **Zustand** - Lightweight state management
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

### **Visualization & 3D**
- **React Three Fiber** - 3D graphics in React
- **Three.js** - 3D JavaScript library
- **Recharts** - Chart library for data visualization

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **SWC** - Fast TypeScript/JavaScript compiler

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

```bash
# Check versions
node --version  # Should be 18.0.0+
npm --version   # Should be 8.0.0+
```

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/demonichacker/iogric.git
    cd iogric
    ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Demo

### Demo Credentials
Use these credentials to explore the platform:

- **Email:** `demo@iogric.com`
- **Password:** `demo123`

### Live Demo
🌐 **[View Live Demo](https://iogric.vercel.app)** (Deploy when ready)

### Screenshots

#### Landing Page
![Landing Page](./public/placeholder.jpg)

#### Dashboard
![Dashboard](./public/placeholder.jpg)

#### Mobile View
![Mobile](./public/placeholder.jpg)

## 🏗️ Project Structure

```
iogric/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication pages
│   ├── (dashboard)/              # Protected dashboard pages
│   │   ├── analytics/            # Analytics page
│   │   ├── alerts/               # Alerts management
│   │   ├── dashboard/            # Main dashboard
│   │   ├── sensors/              # Sensor management
│   │   └── settings/             # User settings
│   ├── api/                      # API routes
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
├── components/                   # Reusable components
│   ├── ui/                       # Base UI components
│   ├── auth/                     # Authentication components
│   ├── dashboard/                # Dashboard-specific components
│   ├── landing/                  # Landing page sections
│   ├── sensors/                  # Sensor-related components
│   ├── analytics/                # Analytics components
│   ├── alerts/                   # Alert components
│   └── 3d/                       # 3D visualization components
├── lib/                          # Utility libraries
│   ├── store.ts                  # Zustand state management
│   ├── utils.ts                  # Helper functions
│   └── loading-context.tsx       # Loading state context
├── hooks/                        # Custom React hooks
├── public/                       # Static assets
├── styles/                       # Additional styles
├── middleware.ts                 # Next.js middleware
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS config
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🔧 Development

### Environment Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Start production server**
   ```bash
   npm start
   ```

### Code Quality

```bash
# Run linting
npm run lint

# Format code
npm run format

# Type checking
npm run type-check
```

### Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📊 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Icons:** [Lucide React](https://lucide.dev/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Fonts:** [Google Fonts](https://fonts.google.com/)
- **3D Graphics:** [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/demonichacker/iogric/issues)
- **Discussions:** [GitHub Discussions](https://github.com/demonichacker/iogric/discussions)
- **Email:** hello@iogric.com

---

**IO Made It with ❤️ for sustainable agriculture**

🌱 *Growing the future, one byte at a time* 🌱
