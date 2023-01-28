/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'authorbg': "url('/src/assets/pics/profilepage/authorbg.svg')",
      }
    },
  },
  plugins: [],
};
