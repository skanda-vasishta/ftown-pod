module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom dark theme colors
        dark: {
          bg: '#1a0826', // super dark purple
          accent: '#7c3aed', // lighter purple accent
          accent2: '#a78bfa', // even lighter purple
          gray: '#a1a1aa', // neutral gray
        },
        // Optionally override default colors for dark mode
        background: {
          DEFAULT: '#1a0826',
        },
        primary: {
          500: '#7c3aed',
          600: '#6d28d9',
        },
        gray: {
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
    },
  },
  plugins: [],
}
