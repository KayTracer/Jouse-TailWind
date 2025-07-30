// tailwind.config.js
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      keyframes: {
        "subir-rg": {
          "0%": { tranform: "translate(-50%, 0%)" },
          "100%": { tranform: "trnaslate(-50%, -80%" },
        },
      },
    },
    fontFamily: {
      avenir: ["Avenir", "sans-serif"],
    },
  },
  plugins: [],
};
