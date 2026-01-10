import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d3f3c',
          50: '#f6f7f7',
          100: '#e3e6e5',
          200: '#c7cdcb',
          300: '#a4aca9',
          400: '#7d8a86',
          500: '#40514e',
          600: '#364540',
          700: '#2d3f3c',
          800: '#252e2b',
          900: '#1a211f',
        },
        secondary: {
          DEFAULT: '#0d7d82',
          50: '#f0fdfe',
          100: '#ccf7fa',
          200: '#99eff5',
          300: '#5ce1eb',
          400: '#22c9d4',
          500: '#11999e',
          600: '#0f7d85',
          700: '#0d7d82',
          800: '#17525a',
          900: '#17454c',
        },
        accent: {
          DEFAULT: '#0da8b0',
          50: '#f0feff',
          100: '#ccfbfe',
          200: '#9af6fc',
          300: '#5aecf7',
          400: '#16c6cc',
          500: '#0da8b0',
          600: '#0d8797',
          700: '#126c7a',
          800: '#175864',
          900: '#174a55',
        },
        text: {
          secondary: '#576d69',
          dark: '#293533',
        },
        anthracite: '#293533',
      },

      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        hero: ['4rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '800' }],
        display: ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        title: ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
      },

      lineHeight: {
        'extra-loose': '2',
        'super-loose': '2.25',
      },

      letterSpacing: {
        tighter: '-0.05em',
        'extra-tight': '-0.03em',
      },

      spacing: {
        18: '4.5rem',
        88: '22rem',
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      // === ANIMATIONS ===
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scroll-x': 'scrollX 30s linear infinite',
        'pulse-smooth': 'pulseSmooth 6s ease-in-out infinite',
        'pulse-warm': 'pulseWarm 8s ease-in-out infinite',
        'glow-hover': 'glowHover 2s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSmooth: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1)', opacity: '0.9' },
        },
        pulseWarm: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5', backgroundColor: '#0da8b0' },
          '50%': { transform: 'scale(1.15)', opacity: '0.8', backgroundColor: '#f6efe7' },
        },
        glowHover: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(13, 168, 176, 0)' },
          '50%': { boxShadow: '0 0 20px rgba(13, 168, 176, 0.5)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
