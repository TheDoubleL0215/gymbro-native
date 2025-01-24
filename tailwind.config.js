/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'text': '#eae8ef',
        'background': '#09090B',
        'primary': '#FAFAFA',
        'secondary': '#27272a',
        'border': '#27272A',
      },
    },

  },
  plugins: [],
}