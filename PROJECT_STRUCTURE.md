# RECS Next.js Project Structure

## 📁 Project Organization

```
recs-next/
├── app/                          # Next.js 13+ App Router
│   ├── about/                    # About page
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── services/                 # Services page
│   │   └── page.tsx
│   ├── sectors/                  # Sectors pages
│   │   ├── health/
│   │   │   └── page.tsx
│   │   ├── education/
│   │   │   └── page.tsx
│   │   ├── agriculture/
│   │   │   └── page.tsx
│   │   └── development/
│   │       └── page.tsx
│   ├── countries/                # Country pages
│   │   ├── zambia/
│   │   │   └── page.tsx
│   │   ├── kenya/
│   │   │   └── page.tsx
│   │   ├── rwanda/
│   │   │   └── page.tsx
│   │   └── zimbabwe/
│   │       └── page.tsx
│   ├── careers/                  # Careers page
│   │   └── page.tsx
│   ├── contact/                  # Contact page
│   │   └── page.tsx
│   ├── api/                      # API routes
│   │   └── hello/
│   │       └── route.ts
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
│
├── components/                   # React components
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx            # Site header with logo
│   │   ├── Footer.tsx            # Site footer with links
│   │   └── Navigation.tsx        # Main navigation menu
│   ├── home/                     # Home page sections
│   │   ├── HeroSection.tsx       # Hero banner
│   │   ├── SectorsSection.tsx    # Sectors showcase
│   │   ├── CountriesSection.tsx  # Countries overview
│   │   ├── ServicesSection.tsx   # Services grid
│   │   └── ImpactSection.tsx     # Impact statistics
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx            # Button component
│   │   ├── Card.tsx              # Card component
│   │   └── Container.tsx         # Container wrapper
│   └── shared/                   # Shared components
│       ├── SectionHeader.tsx     # Section title/subtitle
│       └── AnimatedCard.tsx      # Animated card with transitions
│
├── lib/                          # Utility functions and helpers
│   ├── constants.ts              # Site constants and data
│   └── utils.ts                  # Utility functions
│
├── types/                        # TypeScript type definitions
│   └── index.ts                  # Common types
│
├── public/                       # Static assets
│   └── images/                   # Image assets
│
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18.0 or higher (currently using 22.17.0)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## 📄 Page Routes

- `/` - Home page
- `/about` - About page
- `/services` - Services overview
- `/sectors/health` - Health sector
- `/sectors/education` - Education sector
- `/sectors/agriculture` - Agriculture sector
- `/sectors/development` - Development sector
- `/countries/zambia` - Zambia country page
- `/countries/kenya` - Kenya country page
- `/countries/rwanda` - Rwanda country page
- `/countries/zimbabwe` - Zimbabwe country page
- `/careers` - Careers page
- `/contact` - Contact page

## 🧩 Component Structure

### Layout Components
- **Header**: Contains logo and navigation
- **Footer**: Site footer with links and copyright
- **Navigation**: Responsive navigation menu with dropdowns

### Home Components
- **HeroSection**: Main banner with CTA buttons
- **SectorsSection**: Grid of sector cards
- **CountriesSection**: Country overview with project counts
- **ServicesSection**: Services grid with descriptions
- **ImpactSection**: Impact statistics display

### UI Components
- **Button**: Reusable button with variants
- **Card**: Card container with hover effects
- **Container**: Responsive container wrapper

### Shared Components
- **SectionHeader**: Reusable section title component
- **AnimatedCard**: Card with animation effects

## 📦 Key Dependencies

- **Next.js 15.5.4**: React framework
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **clsx**: Conditional class names
- **tailwind-merge**: Merge Tailwind classes

## 🎨 Styling

The project uses Tailwind CSS for styling. Global styles are in `app/globals.css`.

## 🔧 Configuration Files

- `next.config.ts`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `postcss.config.mjs`: PostCSS configuration

## 📝 Notes

- This is a Next.js 13+ App Router project
- All pages use Server Components by default
- Client components are marked with `'use client'`
- TypeScript is used throughout the project
- Tailwind CSS is configured for responsive design
