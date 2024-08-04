/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#2C3A4F',
          200: '#56647b',
          300: '#b4c2dc',        
        },
        accent: {
          100: '#FF4D4D',
          200: '#ffecda',
        },
        text: {
          100: '#FFFFFF',
          200: '#e0e0e0',
        },
        bg: {
          100: '#1A1F2B',
          200: '#292e3b',
          300: '#414654',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      animation: {
        'text-fill': 'text-fill 1.5s cubic-bezier(.1,.5,.5,1) 1 forwards',
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.4, 0, 0.6, 1) 1 forwards',
      },
      keyframes: {
        'text-fill': {
          '0%': {
            backgroundSize: '0%', 
          },
          '100%': {
            backgroundSize: '100%',
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

