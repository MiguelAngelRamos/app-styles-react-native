/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'rale-black': ['Raleway-Black', 'sans-serif'],
        'rale-light': ['Raleway-Light', 'sans-serif'],
        'rale-medium': ['Raleway-Medium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}