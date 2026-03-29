# About Me - Personal Portfolio

A modern, responsive personal portfolio website built with React and Tailwind CSS, showcasing professional experience, skills, projects, certifications, writings, and open-source contributions.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Smooth Animations**: Framer Motion for transitions, animated stat counters, and 3D tilt avatar
- **Modern UI**: Dark theme with glassmorphism effects and gradient accents
- **AI Chatbot**: Interactive assistant powered by Claude (Anthropic) for portfolio Q&A
- **Search**: Full-text search modal across all portfolio content
- **PDF Resume Download**: One-click resume export via `html2canvas` + `jsPDF`
- **Social Integration**: Dynamic brand icons via Simple Icons
- **Filterable Projects**: Category-based project filtering

## Tech Stack

- **Frontend**: React 19, Vite 7
- **Styling**: Tailwind CSS 3.4 with PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, Simple Icons
- **AI**: Anthropic Claude API (ChatBot component)
- **PDF**: html2canvas + jsPDF

## Project Structure

```
src/
├── main.jsx                  # Application entry point
├── App.jsx                   # Root component
├── AboutMe.jsx               # Main layout and section orchestration
├── index.css                 # Global styles (Tailwind base)
├── data/
│   └── profile.js            # All personal/professional content
├── components/
│   ├── Section.jsx           # Reusable section wrapper
│   ├── Chip.jsx              # Tag/chip component
│   ├── SocialIcon.jsx        # Social link with brand icon
│   ├── ChatBot.jsx           # AI-powered chat assistant
│   └── SearchModal.jsx       # Full-text search overlay
└── utils/
    ├── yearsFrom.js          # Calculates years elapsed from a date
    └── downloadAsPdf.js      # PDF export utility
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd about-me
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open `http://localhost:5173` in your browser.

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production to `dist/`
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Customization

### Personal Information

All personal and professional content lives in `src/data/profile.js`:

- Basic info: name, title, location, summary, avatar, phone
- Social links (with Simple Icons slugs)
- Skills (flat list for search + grouped with icons for the Skills section)
- Career highlights / animated stats
- Experience, certifications, contributions, writings, projects

### Profile Picture

Replace `src/assets/images/9da59552-da8c-4924-a829-35409af9ea7e.jpg` with your own image and update the import in `src/data/profile.js`.

### Resume

Set `resumeUrl` in `src/data/profile.js` to the path of your PDF (place it in `public/`).

## Sections

- **Hero**: Profile photo (3D tilt), name, title, animated stats, social links, resume download
- **Skills**: Grouped skill cards with brand icons
- **Experience**: Chronological work history with expandable bullet points
- **Projects**: Filterable project cards by category
- **Certifications**: Issued credentials with verify links
- **Contributions**: Open-source and collaborative work
- **Writings**: Articles and blog posts
- **Education**: Academic background
- **Contact**: Contact info and call-to-action

## Building for Production

```bash
npm run build
```

Built files land in `dist/`, ready for any static hosting service.

## License

This project is private and proprietary.
