# About Me - Personal Portfolio

A modern, responsive personal portfolio website built with React and Tailwind CSS, showcasing professional experience, skills, and projects.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Social Integration**: Dynamic social media icons using Simple Icons
- **Interactive Navigation**: Smooth scrolling between sections

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React, Simple Icons
- **Build Tool**: Vite 7

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
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

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Personal Information

Edit the `profile` object in `src/AboutMe.jsx` to customize:

- Personal details (name, title, location)
- Professional summary
- Skills and experience
- Social media links
- Project portfolio
- Contact information

### Profile Picture

Replace `src/assets/images/9da59552-da8c-4924-a829-35409af9ea7e.jpg` with your own profile picture.

### Resume

Update the `resumeUrl` in the profile object to link to your actual resume.

## Sections

The portfolio includes the following sections:

- **Hero**: Introduction with profile picture and key highlights
- **Skills**: Technical skills and expertise
- **Experience**: Professional work history
- **Projects**: Selected project portfolio
- **Education**: Academic background
- **Contact**: Contact information and call-to-action

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## License

This project is private and proprietary.