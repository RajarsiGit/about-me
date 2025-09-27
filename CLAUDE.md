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
├── main.jsx           # Application entry point
├── App.jsx           # Root component (renders AboutMe)
├── AboutMe.jsx       # Main portfolio component with all content
├── index.css         # Global styles (Tailwind base)
├── App.css          # Component styles
└── assets/
    └── images/       # Profile images and other static assets
```

### Technology Stack
- **Build Tool**: Vite with React plugin
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React + Simple Icons
- **Animation**: Framer Motion
- **Content**: React Markdown with remark-gfm for GitHub Flavored Markdown support

### Architecture Notes

#### Single Component Design
The entire portfolio is implemented as one large `AboutMe.jsx` component that contains:
- Profile data model at the top (easily editable personal information)
- Inline component definitions for reusable UI elements
- All content sections in a single render function

#### Data Configuration
Personal information is configured via a `profile` object at the top of `AboutMe.jsx` containing:
- Basic info (name, title, location, summary)
- Social links with corresponding simple-icons slugs
- Skills array
- Career highlights
- Experience and projects data

#### Icon System
Uses a hybrid approach:
- Lucide React for UI icons (Mail, GitHub, etc.)
- Simple Icons for brand/technology icons (accessed via slugs like "postgresql", "react")

#### Styling Approach
- Tailwind CSS for all styling
- Custom gradient backgrounds and glassmorphism effects
- Responsive design with mobile-first approach
- Animation effects using Framer Motion

### Key Files to Modify

**For content changes**: Edit the `profile` object in `src/AboutMe.jsx:19-80`
**For styling changes**: Modify Tailwind classes in `src/AboutMe.jsx` or adjust `tailwind.config.js`
**For adding new icons**: Use simple-icons slugs or add new Lucide React imports
**For layout changes**: Modify the component structure in `src/AboutMe.jsx`

### ESLint Configuration
Custom rules include:
- Unused variables allowed if they match pattern `^[A-Z_]` (for constants)
- React Hooks and React Refresh plugins enabled
- Ignores `dist/` directory in builds