/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ["Outfit", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        canvas: "#0d0d10",
        card: "#141419",
        amber: {
          400: "#fbbf24",
          300: "#fcd34d",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
