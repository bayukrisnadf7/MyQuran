/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      color:{
        primary: "#41B3A2", 
        secondary: "#F2F2F2",
        tertiary: "#F3F7EC",
        quaternary: "#0D7C66",
        dark: "#232A3C",
        medium: "#293245",
        darkPrimary: "#021526",
        white: "#FFFFFF",
      }
    }
  },
  plugins: [],
};
