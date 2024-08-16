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
        oswald: ['Oswald', 'sans-serif'],
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
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      animationDelay: {
        '450': '450ms',
      },
      animation: {
        'text-fill': 'text-fill 1.5s cubic-bezier(.1,.5,.5,1) 1 forwards',
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.4, 0, 0.6, 1) 1 forwards',
        'border-fill-tr': 'border-fill-tr 0.3s cubic-bezier(0.4, 0, 0.6, 1) 1 forwards',
        'border-fill-bl': 'border-fill-bl 0.3s cubic-bezier(0.4, 0, 0.6, 1) 1 forwards',
        'loader': 'loader 0.2s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate',
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
        'loader': {
          '0%': {
            height: '0', 
          },
          '100%': {
            height: '3rem',
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
        'border-fill-tr': {
          '0%': {
            opacity: '1',
            width: '0',
            height: '0',
          },
          '25%': {
            opacity: '1',
            width: '100%',
            height: '0',
          },
          '50%': {
            opacity: '1',
            width: '100%',
            height: '100%',
          },
          '100%': {
            opacity: '1',
            width: '100%',
            height: '100%',          
          },
        },
        'border-fill-bl': {
          '0%': {
            opacity: '0',
            width: '0',
            height: '0',
          },
          '50%': {
            opacity: '0',
            width: '0%',
            height: '0%',
          },
          '50.1%': {
            opacity: '1',
            width: '0%',
            height: '0%',
          },
          '75%': {
            opacity: '1',
            width: '100%',
            height: '0%',
          },
          '100%': {
            opacity: '1',
            width: '100%',
            height: '100%',          
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

