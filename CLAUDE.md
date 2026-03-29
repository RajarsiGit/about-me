# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build production bundle to `dist/` directory
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality and style

### Project Structure
This is a React + Vite personal portfolio/about-me website with the following architecture:

```
src/
├── main.jsx                  # Application entry point
├── App.jsx                   # Root component (renders AboutMe)
├── AboutMe.jsx               # Main layout, section orchestration, inline UI components
├── index.css                 # Global styles (Tailwind base)
├── App.css                   # Component styles
├── data/
│   └── profile.js            # All personal/professional content (single source of truth)
├── components/
│   ├── Section.jsx           # Reusable section wrapper with heading
│   ├── Chip.jsx              # Tag/chip badge component
│   ├── SocialIcon.jsx        # Social link with Simple Icons brand icon
│   ├── ChatBot.jsx           # AI chat assistant (Anthropic Claude API)
│   └── SearchModal.jsx       # Full-text search overlay
└── utils/
    ├── yearsFrom.js          # Calculates years elapsed from an ISO date string
    └── downloadAsPdf.js      # PDF export via html2canvas + jsPDF
```

### Technology Stack
- **Build Tool**: Vite with React plugin
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React + Simple Icons
- **Animation**: Framer Motion (transitions, AnimatedStat counter, TiltAvatar)
- **AI**: Anthropic Claude API (ChatBot component)
- **PDF Export**: html2canvas + jsPDF
- **Content**: React Markdown with remark-gfm for GitHub Flavored Markdown support

### Architecture Notes

#### Component Structure
`AboutMe.jsx` handles the main layout and contains a few inline UI components (`AnimatedStat`, `TiltAvatar`). Reusable components live in `src/components/`. Utilities live in `src/utils/`.

#### Data Configuration
All personal and professional content is centralized in `src/data/profile.js`. The `profile` object contains:
- Basic info (name, title, location, summary, avatar, phone, resumeUrl)
- Social links with Simple Icons slugs
- `skills` — flat array used by the search index
- `skillGroups` — grouped skills with brand slugs for the Skills section UI
- `highlights` — animated stat counters shown in the hero
- `experience` — work history with bullet points
- `certifications` — credentials with issuer, year, and verify URL
- `contributions` — open-source and collaborative work entries
- `writings` — articles and blog posts with tags
- `projects` — portfolio items with category for filtering

#### Icon System
Uses a hybrid approach:
- Lucide React for UI icons (Mail, MapPin, Download, etc.)
- Simple Icons for brand/technology icons (accessed via slugs like `"postgresql"`, `"amazonaws"`)

#### Styling Approach
- Tailwind CSS for all styling
- Dark theme with custom gradient backgrounds and glassmorphism effects
- Responsive design with mobile-first approach
- Framer Motion for animations (page transitions, scroll-triggered counters, hover effects)

### Key Files to Modify

**For content changes**: Edit `src/data/profile.js`
**For styling changes**: Modify Tailwind classes in the relevant component or adjust `tailwind.config.js`
**For adding new icons**: Use Simple Icons slugs or add new Lucide React imports
**For layout changes**: Modify the component structure in `src/AboutMe.jsx`
**For new sections**: Add a component in `src/components/` and wire it into `src/AboutMe.jsx`

### ESLint Configuration
Custom rules include:
- Unused variables allowed if they match pattern `^[A-Z_]` (for constants)
- React Hooks and React Refresh plugins enabled
- Ignores `dist/` directory in builds
