# About Me — Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite. Dark-themed, installable single-page app with animated UI, an AI chatbot, full-text search, and a branded page loader.

## Features

- **Page Loader** — Branded RS monogram loader with a fade-in/out animation on first visit
- **Responsive Design** — Desktop nav with a collapsible "More" dropdown; mobile drawer with all sections
- **Smooth Animations** — Framer Motion transitions, animated stat counters, 3D tilt avatar, flip cert cards
- **Modern UI** — Dark theme with glassmorphism, radial glows, and amber accents
- **AI Chatbot** — Interactive assistant powered by Claude (Anthropic) for portfolio Q&A
- **Full-Text Search** — ⌘K / Ctrl+K overlay across sections, skills, projects, experience, certifications, open source, writings, and leadership
- **PDF Resume Download** — One-click resume export via html2pdf.js
- **Installable PWA** — Offline-capable via Workbox service worker, with an offline status banner
- **Social Integration** — Dynamic brand icons via Simple Icons and react-icons/fa6
- **Filterable Projects** — Category-based project filtering
- **SEO** — Open Graph tags, Twitter Card, JSON-LD structured data, canonical URL
- **Support Widget** — Floating "Buy Me a Coffee" button for visitor support

## Tech Stack

| Concern | Library | Version |
|---|---|---|
| Build | Vite + `@vitejs/plugin-react` | ^7.1.2 |
| PWA | vite-plugin-pwa (Workbox) | ^1.3.0 |
| UI framework | React 19 | ^19.1.1 |
| Styling | Tailwind CSS 3 + PostCSS | ^3.4.14 |
| Animation | Framer Motion | ^12.23.12 |
| Icons (UI) | Lucide React | ^0.539.0 |
| Icons (brand) | simple-icons + react-icons/fa6 | ^15.11.0 / ^5.6.0 |
| AI chatbot | `@anthropic-ai/sdk` (browser) | ^0.106.0 |
| PDF export | html2pdf.js | ^0.14.0 |
| Markdown | react-markdown + remark-gfm | ^10.1.0 / ^4.0.1 |

## Project Structure

```
about-me/
├── index.html                    # Meta tags, OG image, JSON-LD, favicon, Buy Me a Coffee widget
├── vite.config.js                # Vite + PWA (Workbox) configuration
├── public/
│   ├── Profile.pdf               # Resume download
│   ├── favicon.svg               # Site favicon
│   └── og-image.jpg              # Open Graph / Twitter Card preview image
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css                 # Tailwind base + scrollbar + .backface-hidden
    ├── data/
    │   └── profile.js            # Single source of truth for all content
    ├── components/
    │   ├── Section.jsx           # Scroll-animated section wrapper
    │   ├── Chip.jsx               # Generic tag/badge
    │   ├── SocialIcon.jsx        # Brand icon (Simple Icons or react-icons/fa6)
    │   ├── ChatBot.jsx           # Floating AI chat assistant
    │   ├── SearchModal.jsx       # ⌘K full-text search overlay
    │   ├── PageLoader.jsx        # Full-screen branded loader shown on first load
    │   ├── AnimatedStat.jsx      # Scroll-triggered counter for hero highlights
    │   ├── TiltAvatar.jsx        # 3D perspective tilt on avatar image
    │   ├── TiltCard.jsx          # 3D tilt + radial cursor glow for project cards
    │   ├── FlipCertCard.jsx      # CSS 3D flip card for certifications
    │   ├── SkillChip.jsx         # Color-coded skill badge (also exports ROW_GLOW, GLOW_COLOR)
    │   ├── Tag.jsx               # Monospace project tag
    │   ├── ExpandableCard.jsx    # Click-to-expand wrapper for writings / open source
    │   └── OfflineBanner.jsx     # Offline status banner
    ├── utils/
    │   ├── yearsFrom.js          # yearsFrom("YYYY-MM-DD") → "N+" string
    │   └── downloadAsPdf.js      # html2pdf.js export utility
    └── AboutMe.jsx               # Main layout + NavMoreDropdown inline component
```

## Getting Started

### Prerequisites

- Node.js `^20.19.0` or `>=22.12.0` (required by Vite 7 / `@vitejs/plugin-react` 5)
- npm

### Installation

```bash
git clone <repository-url>
cd about-me
npm install
```

### Environment Variables

Create `.env.local` (not committed):

```
VITE_ANTHROPIC_API_KEY=sk-ant-...
```

Required for the AI chatbot to function.

### Development

```bash
npm run dev       # http://localhost:5173
npm run build     # Production bundle → dist/
npm run preview   # Preview production build
npm run lint      # ESLint check
```

## Customization

All personal and professional content lives in `src/data/profile.js` — edit that file to update any section without touching layout code.

### Profile Picture

Replace `src/assets/images/9da59552-da8c-4924-a829-35409af9ea7e.jpg` and update the import in `src/data/profile.js`.

### OG / Social Preview Image

Replace `public/og-image.jpg` (used in Open Graph and Twitter Card meta tags).

### PWA Manifest

App name, colors, and caching behavior are configured in the `VitePWA` block of `vite.config.js`.

## Sections

| Section | Nav | Description |
|---|---|---|
| About | Primary | Hero: photo, name, summary, animated stats, social links |
| Skills | Primary | Grouped skill chips with brand icons |
| Experience | Primary | Chronological work history with expandable bullets |
| Projects | Primary | Filterable project cards by category |
| Leadership | Primary | Team lead initiatives and hiring |
| Contact | Primary | Email, résumé download, LinkedIn, personal portfolio link |
| Certifications | More ↓ | Flip cards with credential verify links |
| Open Source | More ↓ | Community contributions |
| Publications | More ↓ | Articles and writing |
| Education | More ↓ | Academic background |

## License

GNU General Public License v3.0 — see [LICENSE](LICENSE).
