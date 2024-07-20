/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#6881ff', 
        'blue' : '#101C5C',
        'purple': '#6A35FF',

      },
    },
  },
  plugins: [],
}