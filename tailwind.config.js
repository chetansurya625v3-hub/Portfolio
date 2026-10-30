/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#07090c',
          900: '#0d1117', // Main matte carbon background
          850: '#111620',
          800: '#161b22',
          700: '#21262d',
          600: '#30363d',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981', // Crisp neon emerald
          600: '#059669',
          950: '#022c22',
        },
        lime: {
          300: '#bef264',
          400: '#a3e635', // Bright lime accent
          500: '#84cc16',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'emerald-glow': '0 0 25px rgba(16, 185, 129, 0.4)',
        'emerald-glow-lg': '0 0 45px rgba(16, 185, 129, 0.65)',
        'lime-glow': '0 0 25px rgba(163, 230, 53, 0.35)',
        'cyber-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar-sweep': 'radar 3s linear infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}

