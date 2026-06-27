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

React + Vite personal portfolio/about-me website for Rajarsi Saha (Technical Architect at SysCloud). Dark-themed, single-page application with animated UI, an AI chatbot, full-text search, and a branded page loader.

## Project Structure

```
about-me/
├── index.html                    # Meta tags, OG image, JSON-LD structured data, favicon
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── Profile.pdf               # Resume served at /Profile.pdf
│   ├── favicon.svg               # Site favicon
│   └── og-image.jpg              # Open Graph / Twitter Card preview image
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
    │   ├── SearchModal.jsx       # ⌘K / Ctrl+K full-text search overlay
    │   ├── PageLoader.jsx        # Full-screen branded loader shown on first load; fades out after 1.6s
    │   ├── AnimatedStat.jsx      # Scroll-triggered counter for hero highlights
    │   ├── TiltAvatar.jsx        # 3D perspective tilt on avatar image via Framer Motion
    │   ├── TiltCard.jsx          # 3D tilt + radial cursor-following glow for project cards
    │   ├── FlipCertCard.jsx      # CSS 3D flip card (front: cert name/issuer, back: credential ID + verify link)
    │   ├── SkillChip.jsx         # Color-coded skill badge with optional brand icon; also exports ROW_GLOW, GLOW_COLOR
    │   ├── Tag.jsx               # Minimal monospace project tag
    │   ├── ExpandableCard.jsx    # Click-to-expand wrapper for publications and open source entries
    │   └── OfflineBanner.jsx     # Offline status banner (top of page, auto-shows when navigator.onLine is false)
    ├── utils/
    │   ├── yearsFrom.js          # yearsFrom("YYYY-MM-DD") → "N+" string
    │   └── downloadAsPdf.js      # downloadAsPdf(elementId, filename) via html2pdf.js
    └── AboutMe.jsx               # Main layout + NavMoreDropdown inline component
```

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
profile.contributions[]    — { project, role, description, url, tags[] }
profile.writings[]         — { title, type, description, url, date, tags[] }
profile.projects[]         — { name, tagline, link, category, tags[] }
```

`yearsFrom("2021-01-01")` is called inside `profile.js` so the years-of-experience value is always current.

### Navigation

Navigation is split into two arrays in `AboutMe.jsx`:

```js
const NAV_ITEMS      = ["About", "Skills", "Experience", "Projects", "Leadership", "Contact"];
const MORE_NAV_ITEMS = ["Certifications", "Open Source", "Publications", "Education"];
const ALL_NAV_ITEMS  = [...NAV_ITEMS, ...MORE_NAV_ITEMS];
```

- **Desktop**: `NAV_ITEMS` render as links; `MORE_NAV_ITEMS` appear in a hover-triggered `NavMoreDropdown` ("More ↓")
- **Mobile drawer**: Shows all items from `ALL_NAV_ITEMS` in a flat list
- **IntersectionObserver**: Watches all `ALL_NAV_ITEMS` IDs so active highlighting works for both primary and More items
- **`toId(item)`** helper: `item.toLowerCase().replace(/\s+/g, "-")` — converts "Open Source" → `open-source`

Adding a new nav item requires: add to `NAV_ITEMS` or `MORE_NAV_ITEMS`, add a `<Section id="...">` in the JSX, and add a matching entry to `SECTIONS` in `SearchModal.jsx`.

### SearchModal (`src/components/SearchModal.jsx`)

The search index (`INDEX`) covers: sections, skills, projects, experience, certifications, open-source contributions, writings, and leadership entries. The `TYPE_LABEL` map controls the display text on result badges (e.g. `"open-source"` → `"open source"`).

### Page Loader (`src/components/PageLoader.jsx`)

- Shown on first render via `loading` state in `AboutMe` (starts `true`)
- `useEffect` clears it after 1600ms
- Displays: RS monogram → name → role → amber progress bar, each staggered
- Exit: whole overlay fades out over 0.7s via `AnimatePresence` + Framer Motion `exit` prop

### RS Monogram

The "RS" branded box appears in two places:
- **Nav header**: Small (`h-7 w-7`) version with amber border + glow, left of the name
- **Page loader**: Large (`h-14 w-14`) version as the centerpiece of the loading screen

Both use the same visual treatment: `border-amber-400/20 bg-amber-400/[0.05]` with `font-display text-amber-400`.

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

### SEO (`index.html`)

- Primary meta: title, description, author, keywords, robots, theme-color
- Open Graph: type, title, description, url, locale, image (`/og-image.jpg`, 400×400)
- Twitter Card: summary with image
- JSON-LD: `Person` schema with name, jobTitle, worksFor, url, image, email, sameAs links, knowsAbout
- Canonical: `https://rajarsi.work`

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
| Add a primary nav section | `NAV_ITEMS` in `AboutMe.jsx` + new `<Section>` in JSX + entry in `SearchModal.jsx` `SECTIONS` |
| Add a secondary nav section (More dropdown) | `MORE_NAV_ITEMS` in `AboutMe.jsx` + new `<Section>` in JSX + entry in `SearchModal.jsx` `SECTIONS` |
| Change layout or section order | `src/AboutMe.jsx` |
| Change color theme / fonts | `tailwind.config.js` |
| Change global base styles | `src/index.css` |
| Add a new brand icon | Use a Simple Icons PascalCase slug or a `Fa*` slug from react-icons/fa6 |
| Change chatbot behavior/model | `src/components/ChatBot.jsx` |
| Change PDF export options | `src/utils/downloadAsPdf.js` |
| Change loader duration or design | `src/components/PageLoader.jsx` + `loading` useEffect in `AboutMe.jsx` |
| Update OG / social preview image | Replace `public/og-image.jpg` and update dimensions in `index.html` |

## Environment Variables

```
VITE_ANTHROPIC_API_KEY=sk-ant-...    # Required for ChatBot. Set in .env.local (not committed).
```

## Keeping Docs in Sync

**After any significant change, update both `README.md` and `CLAUDE.md` before finishing.**

A change is significant if it:
- Adds, removes, or renames a component or utility file
- Changes the nav structure (`NAV_ITEMS`, `MORE_NAV_ITEMS`, sections)
- Adds or removes a page section
- Changes the data shape in `profile.js`
- Introduces a new library or removes an existing one
- Changes any behaviour described in the Architecture Notes above (loader, search, chatbot, PDF export, SEO)

`README.md` is user-facing — update features, project structure, and the sections table.  
`CLAUDE.md` is AI-facing — update architecture notes, key files, and any behavioural rules that future sessions need to know.

## ESLint Configuration

- Unused variables allowed if name matches `^[A-Z_]` (covers exported constants)
- `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` enabled
- `dist/` directory excluded from linting
