/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': '#F2E9DC', // Warm Beige background
        'primary-dark': '#1A1A1A', // Charcoal for contrast sections
        'emerald': '#004E3B', // Primary emerald green
        'gold': '#C6A55B', // Luxury gold
        'text-primary': '#111111', // Black for headings
        'text-secondary': '#6B6B6B', // Muted gray for body
        'text-light': '#FFFFFF', // White text for dark backgrounds
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'breathe': 'breathe 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(198, 165, 91, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(198, 165, 91, 0.6)' },
        },
        breathe: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(198, 165, 91, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(198, 165, 91, 0.4)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'luxury': '8px',
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'luxury-hover': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'gold-glow': '0 0 30px rgba(198, 165, 91, 0.3)',
      },
    },
  },
  plugins: [],
};