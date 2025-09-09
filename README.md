# 0xn1-starter

A modern Next.js starter template with advanced animations, custom typography, and a sleek design system. Built with TypeScript, Tailwind CSS, and Framer Motion for smooth, engaging user experiences.

![](https://r2.nero1.run/share/etc/0xn1-starter-scr.png)

> This is my go-to starter template that I use for every new project. It includes all the essential tools and components I need to get started quickly.

## ✨ Features

- **Next.js 15** with App Router and React 19
- **TypeScript** for type safety and better development experience
- **Tailwind CSS v4** with custom design system and dark mode support
- **Motion** for smooth animations and transitions
- **Custom Typography** with local fonts (PPF Sans & PPF Mono)
- **Advanced Text Animations** with multiple animation directions and scramble effects
- **Modern UI Components** with hover effects and transitions
- **Biome** for fast linting and formatting
- **Responsive Design** with mobile-first approach
- **Custom Color Palette** with semantic color tokens

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/0xn1-starter.git
   cd 0xn1-starter
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using bun (recommended)
   bun install
   ```

3. **Start the development server**

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using bun
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run Biome linter
- `format` - Format code with Biome

## 🎨 Design System

### Color Palette

- **Background**: White (light) / Dark (dark mode)
- **Foreground**: Dark gray (light) / Light gray (dark mode)
- **N1 Cream**: `#dcdbce` - Primary text color
- **N1 Orange**: `#ff6b00` - Accent color for highlights and interactions
- **N1 Dark Gray**: `#1d1c1c` - Secondary text
- **N1 Gray**: `#888888` - Muted text

### Typography

- **PPF Sans** - Primary font for headings and UI elements
- **PPF Mono** - Monospace font for code and technical content

## 🎭 Animation Features

### AnimatedText Component

The `AnimatedText` component provides multiple animation directions:

- **left-to-right** - Characters animate from left to right
- **right-to-left** - Characters animate from right to left
- **middle-out** - Characters animate from center outward
- **middle-in** - Characters animate from edges to center
- **scramble** - Characters scramble before revealing the final text

#### Usage Example

```tsx
import AnimatedText from "@/components/anim/animated-text";

<AnimatedText
  text="Hello World"
  direction="scramble"
  duration={0.2}
  delayStep={0.1}
  scrambleChars="-0XN1"
  className="text-5xl"
/>;
```

### Motion Components

Built-in Motion (Framer Motion) components for page transitions and element animations:

```tsx
import { motion as m } from "motion/react";

<m.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1, ease: easeInOut }}
>
  Content
</m.div>;
```

## 📁 Project Structure

```
0xn1-starter/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── anim/              # Animation demo page
│   │   ├── sample/            # Sample content page
│   │   ├── fonts/             # Local font files
│   │   ├── container.tsx      # Layout container component
│   │   ├── globals.css        # Global styles and CSS variables
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── anim/              # Animation components
│   │   │   └── animated-text.tsx
│   │   └── uis.tsx            # UI components (Header, Footer, Links)
│   └── lib/
│       └── mock.ts            # Mock data and content
├── public/                    # Static assets
├── biome.json                 # Biome configuration
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎯 Key Components

### Container Component

A reusable layout container with:

- Grid background pattern
- Header and footer
- Responsive design
- Custom styling

### UI Components

- **LinkUnderline** - Animated link with underline effect
- **Header** - Page header with navigation
- **Footer** - Page footer with copyright
- **Divider** - Visual separator component

## 🎨 Customization

### Adding New Colors

1. Add color variables to `src/app/globals.css`:

   ```css
   :root {
     --your-color: #your-hex-value;
   }
   ```

2. Add to Tailwind theme in the same file:
   ```css
   @theme inline {
     --color-your-color: var(--your-color);
   }
   ```

### Adding New Animations

Extend the `AnimatedText` component by adding new animation directions to the `AnimationDirection` type and implementing the logic in the `getDelays` function.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

Build the project and deploy the `out` folder:

```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Motion (Framer Motion)](https://motion.dev) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Biome](https://biomejs.dev/) - Fast linter and formatter

---

**Built with ❤️ by 0xn1**
