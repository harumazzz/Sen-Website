# Sen Website

The official website for **Sen**, an all-in-one modding tool for Plants vs. Zombies 2 (PvZ2). This is a modern, multilingual web application built with Next.js that showcases Sen's features, provides download options, displays changelogs, and manages documentation.

## About the Project

Sen is a powerful PvZ2 modding tool that enables developers and enthusiasts to create and customize game modifications. This website serves as the central hub for:

- **Homepage**: Hero section showcasing Sen's capabilities
- **Features**: Detailed information about supported modules and features
- **Download**: Platform-specific download options with system requirements
- **Changelog**: Version history and release notes
- **About**: Project information and technical details
- **Multilingual Support**: Available in 12 languages (English, Spanish, French, German, Hindi, Indonesian, Malay, Dutch, Polish, Russian, Vietnamese, and Simplified Chinese)

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Components**: [Radix UI](https://www.radix-ui.com/) (headless component library)
- **Internationalization**: [next-i18next](https://github.com/i18next/next-i18next)
- **State Management**: [TanStack React Query](https://tanstack.com/query/latest)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Sonner](https://sonner.emilkowal.ski/) (toast notifications)
- **Charts**: [Recharts](https://recharts.org/)
- **Backend**: [Firebase](https://firebase.google.com/)

## Prerequisites

Before running this project, ensure you have:

- **Node.js** 18+ installed
- **npm** or **yarn** package manager
- A text editor or IDE (VS Code recommended)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/harumazzz/Sen-Website.git
   cd Sen-Website
   ```

2. **Install dependencies**
   ```bash
   cd src
   npm install
   ```

## Running the Project

### Development Mode

Start the development server with hot reload:

```bash
cd src
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

Build the project for production:

```bash
cd src
npm run build
```

Start the production server:

```bash
cd src
npm start
```

## Available Scripts

All scripts should be run from the `src/` directory:

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start development server with hot reload |
| `npm run build`        | Create optimized production build        |
| `npm start`            | Run production server                    |
| `npm run lint`         | Run ESLint to check code quality         |
| `npm run lint:fix`     | Fix ESLint issues automatically          |
| `npm run format`       | Format code with Prettier                |
| `npm run format:check` | Check code formatting without changes    |

## Project Structure

```
Sen-Website/
├── public/                  # Static assets and locales
│   ├── assets/             # Images, icons, etc.
│   └── locales/            # Translation files (JSON)
│       ├── en/
│       ├── es/
│       ├── fr/
│       └── ... (10 more languages)
│
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── changelog/      # Changelog page
│   │   ├── download/       # Download page
│   │   └── page.tsx        # Homepage
│   │
│   ├── components/         # Reusable React components
│   │   ├── about/          # About page components
│   │   ├── animations/     # Animation components
│   │   ├── carousel/       # Carousel components
│   │   ├── changelog/      # Changelog components
│   │   ├── download/       # Download components
│   │   ├── footer/         # Footer components
│   │   ├── home/           # Homepage components
│   │   ├── layout/         # Layout components
│   │   ├── navigation/     # Navigation components
│   │   └── ui/             # Shared UI components (Radix UI based)
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── use-changelog.ts
│   │   ├── use-github-releases.ts
│   │   ├── use-mobile.ts
│   │   └── use-translation.ts
│   │
│   ├── lib/                # Utility functions and helpers
│   │   ├── api/            # API integration
│   │   ├── providers/      # React context providers
│   │   ├── utils/          # Utility functions
│   │   ├── firebase.ts     # Firebase configuration
│   │   └── types.ts        # TypeScript type definitions
│   │
│   ├── types/              # Global TypeScript types
│   ├── i18n/               # Internationalization setup
│   └── constants/          # Application constants
│
├── package.json            # Root package.json with dependencies
├── src/package.json        # Application package.json
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.mjs      # PostCSS configuration
├── middleware.ts           # Next.js middleware
└── next-i18next.config.js  # i18next configuration
```

## Key Features

### 🌍 Multilingual Support

The website supports 12 languages out of the box with seamless language switching. Translation files are stored in `public/locales/`.

### 📱 Responsive Design

Built with Tailwind CSS for a mobile-first, responsive design that works on all devices.

### ⚡ Performance Optimized

- React Compiler enabled for optimized rendering
- Image optimization with AVIF and WebP formats
- Optimized package imports for faster builds
- Server-side rendering with Next.js

### 🎨 Beautiful UI Components

Uses Radix UI for accessible, customizable components with a polished design system.

### 🔄 State Management

TanStack React Query for efficient server state management and caching.

### 🎬 Smooth Animations

Framer Motion integration for engaging page transitions and scroll animations.

## Environment Setup

Create a `.env.local` file in the `src/` directory if you need to configure environment variables:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_GITHUB_ORG=harumazzz
```

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
npm run dev -- -p 3001
```

### Build Errors

If you encounter build errors, try:

```bash
# Clear cache and reinstall dependencies
rm -r node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Locale Files Missing

Ensure all locale JSON files are present in `public/locales/` for each language.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes and commit (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Contact & Support

For questions, bug reports, or feature requests, please open an issue on the [GitHub repository](https://github.com/harumazzz/Sen-Website).

---

**Happy modding with Sen!** 🎮
