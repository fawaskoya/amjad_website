/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#1A0F2E', // Deep purple night
        'background-light': '#2A1F3F', // Lighter purple
        'background-lighter': '#3D2F5F', // Warm purple dusk
        primary: '#FF00FF', // Neon pink
        secondary: '#00FFFF', // Neon cyan
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
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Amiri', 'serif'],
        display: ['Aref Ruqaa', 'serif'],
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
        'glow': '0 0 15px rgba(255, 0, 255, 0.5)', // Neon pink glow
        'glow-cyan': '0 0 15px rgba(0, 255, 255, 0.5)', // Neon cyan glow
      },
    },
  },
  plugins: [],
};