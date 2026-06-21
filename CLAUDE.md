# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev       # Start dev server with HMR (http://localhost:5173)
npm run build     # Production bundle → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint check
```

## Project Overview

React + Vite personal portfolio/about-me website for Rajarsi Saha (Technical Architect at SysCloud). Dark-themed, single-page application with animated UI, an AI chatbot, and full-text search.

## Project Structure

```
about-me/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── Profile.pdf               # Resume served at /Profile.pdf
└── src/
    ├── main.jsx                  # React DOM entry point
    ├── App.jsx                   # Root component — renders <AboutMe />
    ├── App.css                   # (minimal, mostly unused)
    ├── index.css                 # Global styles: Tailwind base + scrollbar + selection + .backface-hidden
    ├── data/
    │   └── profile.js            # SINGLE SOURCE OF TRUTH for all content
    ├── components/
    │   ├── Section.jsx           # Scroll-animated section wrapper with amber-accent heading
    │   ├── Chip.jsx              # Generic tag/badge — amber hover
    │   ├── SocialIcon.jsx        # Brand icon: simple-icons (PascalCase slug) or react-icons/fa6 (Fa* slug)
    │   ├── ChatBot.jsx           # Floating AI chat (Anthropic claude-haiku via browser SDK)
    │   └── SearchModal.jsx       # ⌘K / Ctrl+K full-text search overlay
    ├── utils/
    │   ├── yearsFrom.js          # yearsFrom("YYYY-MM-DD") → "N+" string
    │   └── downloadAsPdf.js      # downloadAsPdf(elementId, filename) via html2pdf.js
    └── AboutMe.jsx               # Main layout + all inline UI primitives (see below)
```

### Inline components in `AboutMe.jsx`

These live directly in `AboutMe.jsx` rather than `src/components/` because they are tightly coupled to this page's data and layout:

| Component | Purpose |
|---|---|
| `AnimatedStat` | Scroll-triggered counter for hero highlights. Uses IntersectionObserver + interval. |
| `TiltAvatar` | 3D perspective tilt on avatar image via Framer Motion `useMotionValue` + `useSpring`. |
| `TiltCard` | Same 3D tilt + radial cursor-following glow for project cards. |
| `FlipCertCard` | CSS 3D flip card (front: cert name/issuer, back: credential ID + verify link). |
| `SkillChip` | Color-coded skill badge with optional brand icon via `SocialIcon`. |
| `Tag` | Minimal monospace project tag. |
| `ExpandableCard` | Click-to-expand wrapper for publications and open source entries. |

## Technology Stack

| Concern | Library | Version |
|---|---|---|
| Build | Vite + `@vitejs/plugin-react` | ^7.1.2 |
| UI framework | React 19 | ^19.1.1 |
| Styling | Tailwind CSS 3 + PostCSS | ^3.4.14 |
| Animation | Framer Motion | ^12.23.12 |
| Icons (UI) | Lucide React | ^0.539.0 |
| Icons (brand) | simple-icons + react-icons/fa6 | ^15.11.0 / ^5.6.0 |
| AI chatbot | `@anthropic-ai/sdk` (browser) | ^0.80.0 |
| PDF export | html2pdf.js | ^0.14.0 |
| Markdown | react-markdown + remark-gfm | ^10.1.0 / ^4.0.1 |

## Architecture Notes

### Data layer — `src/data/profile.js`

**All content changes go here.** The `profile` default export contains:

```
profile.name / title / company / location / summary / avatar / phone / resumeUrl / pronouns
profile.socials[]          — { name, href, slug } for SocialIcon
profile.skills[]           — flat string array → used by SearchModal index
profile.skillGroups[]      — { label, color, skills[{ name, slug }] } → Skills section
profile.highlights[]       — { label, value } → AnimatedStat in hero
profile.experience[]       — { role, company, period, bullets[] }
profile.certifications[]   — { name, issuer, abbr, badgeColor, issued, credentialId, verifyUrl }
profile.leadership[]       — { title, period, bullets[] }
profile.incidents[]        — { title, severity, date, summary, resolution, impact }
profile.contributions[]    — { project, role, description, url, tags[] }
profile.writings[]         — { title, type, description, url, date, tags[] }
profile.projects[]         — { name, tagline, link, category, tags[] }
```

`yearsFrom("2021-01-01")` is called inside `profile.js` so the years-of-experience value is always current.

### Navigation

`NAV_ITEMS` in `AboutMe.jsx` drives both the top nav bar and mobile drawer:
```js
const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Leadership", "Incidents", "Contact"];
```
Each item maps to a section `id` by `.toLowerCase()`. Adding a nav item requires: add to `NAV_ITEMS`, add a `<Section id="...">` in the JSX, and add a matching entry to `SECTIONS` in `SearchModal.jsx`.

### Icon system

`SocialIcon` handles two icon sources via the `slug` prop:

- **`Fa*` prefix** → `react-icons/fa6` (e.g. `"FaAws"`, `"FaMicrosoft"`, `"FaLinkedin"`)
- **PascalCase** → `simple-icons` prefixed with `si` (e.g. `"Postgresql"` → `siPostgresql`)
- **`null` slug** → renders no icon, just the label text

### ChatBot (`src/components/ChatBot.jsx`)

- Uses `@anthropic-ai/sdk` directly in the browser (`dangerouslyAllowBrowser: true`)
- API key read from `VITE_ANTHROPIC_API_KEY` env var (must be set in `.env.local`)
- Model: `claude-haiku-4-5-20251001` (fast, low-cost for embedded chat)
- System prompt is built at module load time from `profile` data (experience, projects, certifications, education)
- Stateless: conversation history held in React state, cleared on page reload

### PDF Export (`src/utils/downloadAsPdf.js`)

`downloadAsPdf("resume-root", "Rajarsi_Saha_Resume.pdf")` captures the element with `id="resume-root"` (the entire `<main>` in `AboutMe.jsx`) using html2pdf.js at 2× scale on A4 portrait.

### Styling conventions

- **Color palette**: `canvas` (`#0d0d10`), `card` (`#141419`), amber-400 (`#fbbf24`) as accent
- **Typography**: `font-display` = Playfair Display, `font-sans` = Outfit, `font-mono` = JetBrains Mono
- **Glassmorphism**: `bg-white/[0.02]` + `border-white/[0.06]` pattern throughout
- **Dark opacity scale**: `text-white/80` → `text-white/50` → `text-white/30` → `text-white/18` for hierarchy
- **Hover glow**: `hover:shadow-[0_0_12px_rgba(R,G,B,0.25)]` per color theme
- **Amber highlight**: `text-amber-400`, `border-amber-400/20`, `hover:border-amber-400/30`

## Key Files to Modify

| Task | File(s) |
|---|---|
| Add/edit content (jobs, projects, skills, certs, etc.) | `src/data/profile.js` |
| Add a new page section | `src/components/` (new component) + wire into `src/AboutMe.jsx` + add to `NAV_ITEMS` + `SearchModal.jsx` `SECTIONS` |
| Change layout or section order | `src/AboutMe.jsx` |
| Change color theme / fonts | `tailwind.config.js` |
| Change global base styles | `src/index.css` |
| Add a new brand icon | Use a Simple Icons PascalCase slug or a `Fa*` slug from react-icons/fa6 |
| Change chatbot behavior/model | `src/components/ChatBot.jsx` |
| Change PDF export options | `src/utils/downloadAsPdf.js` |

## Environment Variables

```
VITE_ANTHROPIC_API_KEY=sk-ant-...    # Required for ChatBot. Set in .env.local (not committed).
```

## ESLint Configuration

- Unused variables allowed if name matches `^[A-Z_]` (covers exported constants)
- `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` enabled
- `dist/` directory excluded from linting
