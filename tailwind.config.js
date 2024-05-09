/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'vsm': '460px',
        '3xl': '1800px',
      },
      cursor: {
        default: 'url(../assets/mouse_cursor.png), default'
      },
    },
  },
  plugins: [require("daisyui")],
}