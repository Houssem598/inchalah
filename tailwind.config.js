/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          900: '#0a0e14',
          800: '#13181f',
          700: '#1c2330',
          600: '#2a3343',
          500: '#4a5466',
          400: '#6b7280',
          300: '#9ca3af',
          200: '#d1d5db',
          100: '#e5e7eb',
          50: '#f5f5f4',
        },
        cream: {
          50: '#fbfaf7',
          100: '#f5f1e8',
          200: '#ebe5d4',
        },
        gold: {
          400: '#c9a96e',
          500: '#b08e54',
          600: '#8e7240',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.18em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
