/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'vb-purple': '#4A2E8A',
        'vb-blue': '#3EA8FF',
        'vb-yellow': '#FFD700',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 3',
        'gentle-blink': 'gentle-blink 1s ease-in-out 3',
      },
      keyframes: {
        'gentle-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}