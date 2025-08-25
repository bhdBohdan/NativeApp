/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#040013",
        secondary: "#151312",
        accent: "#AB8BFF",
        light: {
          100: "#D6C6FF",
          200: "#A8B5DB",
          300: "#9CA4AB",
          400: "#7A93B3",
        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",
        },
      },
    },
  },
  plugins: [],
};
