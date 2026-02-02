/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'xs': '475px',    // Extra small phones
      'sm': '640px',    // Small phones and large tablets
      'md': '768px',    // Tablets
      'lg': '1024px',   // Small laptops and large tablets
      'xl': '1280px',   // Laptops
      '2xl': '1536px',  // Large laptops and desktops
      '3xl': '1920px',  // Extra large desktops
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        sidebar: {
          bg: '#1e293b',
          hover: '#334155',
          active: '#3b82f6',
          text: '#f1f5f9',
          textSecondary: '#94a3b8',
        }
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'typing': 'typing 1.4s infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        typing: {
          '0%, 60%, 100%': { transform: 'translateY(-100%)' },
          '30%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}
