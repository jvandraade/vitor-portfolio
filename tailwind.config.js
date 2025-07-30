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
        // Paleta Minecraft + AXK
        'aqua-green': '#00D5B7',      // Verde água AXK
        'forest-green': '#228B22',    // Verde floresta
        'gold': '#FFD700',            // Dourado Minecraft
        'baby-blue': '#01BFBA',       // Azul bebê AXK
        'absolute-black': '#000000',   // Base preta

        // Adaptações para tema claro
        light: {
          bg: '#FFFFFF',
          'bg-secondary': '#F8F9FA',
          text: '#1A1A1A',
          'text-secondary': '#6B7280',
        },
        dark: {
          bg: '#000000',
          'bg-secondary': '#1A1A1A',
          text: '#FFFFFF',
          'text-secondary': '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'carousel': 'carousel 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 213, 183, 0.3)',
        'glow-gold': '0 0 20px rgba(255, 215, 0, 0.3)',
        'minecraft': '0 4px 0 #1a5f1a, 0 8px 15px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}
