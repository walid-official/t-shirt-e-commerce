/** @type {import('tailwindcss').Config} */
// import bannnerImage from "./src/assets/images/banner.jpg"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('/src/assets/images/mosque.jpg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

