/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'input-serif': ['input-serif', 'serif'],
        'museo-sans': ['museo-sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
