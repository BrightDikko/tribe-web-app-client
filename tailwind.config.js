/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        heartbeat: 'heartbeat 10s infinite',
      },
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '13%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.1)' },
          '17%': { transform: 'scale(1)' },
          '19%': { transform: 'scale(1.1)' },
          '21%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1)' },
          '55%': { transform: 'scale(1) rotate(270deg)' },
          '80%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1)' },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}