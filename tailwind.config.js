export default {
  darkMode: "class", // or 'media' or 'class'
  safelist: [
    {
      pattern: /(bg|stroke|fill)-pamred-(100|200|300|400)/,
    },
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
        "10xl": "110rem",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        grayshit: {
          100: "#303030",
          200: "#232323",
          300: "#202020",
          400: "#171717",
          500: "#090909",
          600: "#020202",
        },
        pamred: {
          100: "#D32F2F",
          200: "#a12222",
          300: "#6e1515",
          400: "#6e0808",
        },
      },
      translate: {
        110: "30rem",
        120: "40rem",
        "-110": "-30rem",
        "-120": "-40rem",
      },
      margin: {
        110: "30rem",
        120: "40rem",
        130: "50rem",
        140: "60rem",
        "-110": "-30rem",
        "-120": "-40rem",
      },
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      25: 25,
      30: 30,
      40: 40,
      45: 45,
      50: 50,
      75: 75,
      100: 100,
      auto: "auto",
    },
  },
  plugins: [],
};
