const boxShadow = require("./styles/boxShadow.json");
const colors = require("./styles/colors.json");
const fontFamily = require("./styles/fontFamily.json");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./providers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { boxShadow, colors, fontFamily },
  variants: {},
  plugins: [],
};
