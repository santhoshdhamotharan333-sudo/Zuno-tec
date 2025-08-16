/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'turret': ['Turret Road', 'monospace'],
      },
      colors: {
        'primary': '#000000',
        'accent': '#64A5E3',
        'card': '#E8E8E8',
        'text-primary': '#FFFFFF',
        'text-secondary': '#E8E8E8',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'tilt': 'tilt 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(100, 165, 227, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(100, 165, 227, 0.8)' },
        },
        tilt: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        }
      },
    },
  },
  plugins: [],
};