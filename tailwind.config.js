/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./the-process/index.html",
    "./case-study/index.html",
    "./pricing-transparency/index.html",
    "./do-you-need-custom-software/index.html",
    "./outgrown-your-spreadsheet/index.html",
    "./coming-home/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The site's ground and voice (Nov 2026): obsidian replaced the dark stone steps,
        // bone replaced white. Stone 100 to 700 stay for text greys and lines.
        obsidian: {
          DEFAULT: '#0D0D0D',   // ground, was stone-900
          deep: '#060606',      // deep bands and backdrops, was stone-950
          raised: '#1A1A1A',    // cards, borders, scrollbar track, was stone-800
        },
        bone: '#E3DAC9',
        terracotta: {
          light: '#D98A6C',
          DEFAULT: '#C97064',
          dark: '#A85847',
        },
        dusk: {
          light: '#9DB4C7',
          DEFAULT: '#7A8FA6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          '100%': { boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
