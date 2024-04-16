const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      keyframes: {
        spotLightOff: {
          '0%': { transform: 'rotate(-45deg)' },
          '100%': { transform: 'rotate(-180deg)' },
        },
        spotLightOn: {
          '0%': { transform: 'rotate(-180deg)' },
          '100%': { transform: 'rotate(-45deg)' },
        }
      },
      animation: {
        spotLightOff: "spotLightOff 600ms ease-in-out",
        spotLightOn: "spotLightOn 600ms ease-in-out"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};