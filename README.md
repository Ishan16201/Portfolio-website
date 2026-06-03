# Portfolio Website

Modern portfolio for [Ishan Saraf](https://ishansaraf.vercel.app) — trader, researcher, developer, author, and musician.

## Stack

- **Next.js 15** (App Router, static export-ready)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** — glassmorphism, gradients, noise texture
- **Framer Motion** — scroll reveals, hero parallax, custom cursor, micro-interactions
- **Space Grotesk** via `next/font` (optimized, no layout shift)

## Features

- Animated hero with typewriter tagline, mouse parallax, and scroll indicator
- Custom cursor with trailing ring (desktop only; disabled on touch + `prefers-reduced-motion`)
- Floating glass navbar with scroll-driven blur and animated link underlines
- Staggered project/book/research cards with lift, glow, and pulse ring on hover
- Section scroll animations via `whileInView`
- Accessible motion: respects `prefers-reduced-motion` globally

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

## Deploy (Vercel)

Connect this repository to Vercel. Framework preset: **Next.js**. No extra configuration required.

## Project structure

```
src/
├── app/              # layout, page, global styles
├── components/
│   ├── effects/      # CustomCursor, AnimatedBackground
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Books, Research, Projects, Blog
│   └── ui/           # Button, ContentCard, ScrollReveal, SectionHeader
├── data/content.ts   # All copy and links (single source of truth)
├── hooks/            # useReducedMotion, useIsTouchDevice
└── lib/motion.ts     # Shared animation variants
```
