/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "strong-cyan": "hsl(172, 67%, 45%)",
        "very-dark-cyan": "hsl(183, 100%, 15%)",
        "dark-cyan": "hsl(186, 14%, 43%)",
        "grayish-cyan": "hsl(184, 14%, 56%)",
        "light-cyan": "hsl(185, 41%, 84%)",
        "very-light-cyan": "hsl(189, 41%, 97%)",
      },
      fontFamily: {
        space: "Space Mono, monospace",
      },
      letterSpacing: {
        3: "5px",
      },
    },
  },
  plugins: [],
};
