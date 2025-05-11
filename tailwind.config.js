/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        'background-light': 'var(--color-background-light)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        accent: '#FFD700', // Retro gold
        success: '#39FF14', // Neon green
        warning: '#FF9933', // Retro orange
        error: '#FF3366', // Neon red
        text: {
          primary: '#FFFFFF', // Pure white
          secondary: '#E6E6FA', // Lavender
          muted: '#9370DB', // Medium purple
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
        display: ['var(--font-display)'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'glow-purple': 'var(--shadow-glow-purple)',
      },
    },
  },
  plugins: [],
};