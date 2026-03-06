/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'logout': '#F10A0A',
        'orange': '#FF5B19',
        'backg': '#EEEEEE',
        'dark': '#181818',
        'write': '#7F7F7F',
      },
      fontFamily: {
        'inter': ['Inter'],
      },
    },
  },
  plugins: [],
}