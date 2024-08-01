/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      'kspeed': {
        '50': '#f0faff',
        '100': '#e0f3fe',
        '200': '#b9e9fe',
        '300': '#7cd8fd',
        '400': '#36c6fa',
        '500': '#0cafeb',
        '600': '#008fcc',
        '700': '#0170a3',
        '800': '#065e86',
        '900': '#0b4e6f',
        '950': '#07324a',
      },
    },
    extend: {
      colors: {
        'kspeed': {
          50: "#f0faff",
          100: "#e0f3fe",
          200: "#b9e9fe",
          300: "#7cd8fd",
          400: "#36c6fa",
          500: "#0cafeb",
          600: "#008dc9",
          700: "#0170a3",
          800: "#065e86",
          900: "#0b4e6f",
          950: "#07324a",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
