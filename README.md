# recs-next

This is a [Next.js](https://nextjs.org) project using the App Router structure.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

This project uses the Next.js App Router with the following structure:

```
recs-next/
├── src/
│   ├── app/                    # App Router directory
│   │   ├── api/               # API routes
│   │   │   └── hello/
│   │   │       └── route.ts   # API endpoint
│   │   ├── about/             # About page route
│   │   │   ├── page.tsx       # About page component
│   │   │   └── loading.tsx    # Loading UI
│   │   ├── blog/              # Blog routes
│   │   │   └── [slug]/        # Dynamic route
│   │   │       └── page.tsx   # Dynamic blog post page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   └── components/            # Reusable components
│       └── Button.tsx
├── public/                    # Static assets
│   ├── next.svg
│   ├── vercel.svg
│   └── ...
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies

```

## App Router Features

- **File-based routing**: Routes are defined by the folder structure in `src/app`
- **Layouts**: Shared UI with `layout.tsx` files
- **Loading UI**: Loading states with `loading.tsx` files
- **API Routes**: Server endpoints in `src/app/api`
- **Dynamic Routes**: URL parameters with `[param]` folders
- **TypeScript**: Full TypeScript support
- **Tailwind CSS**: Utility-first CSS framework

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.