/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueviolet: "#9747ff",
        royalblue: "#2f6ce5",
        darkslategray: {
          "100": "#3d3d3d",
          "200": "#2e2e2e",
        },
        black: "#000",
        white: "#fff",
        gainsboro: {
          "100": "#e0e0e0",
          "200": "#d8dadb",
          "300": "#d9d9db",
        },
        gray: {
          "100": "#8a8a8a",
          "200": "rgba(0, 0, 0, 0)",
        },
        whitesmoke: {
          "100": "#f7f8fa",
          "200": "#f2f2f2",
          "300": "#edeef0",
        },
        seagreen: "#008a45",
        honeydew: "#effff4",
        silver: "#b8b8b8",
        dimgray: {
          "100": "#5c5c5c",
          "200": "#525252",
        },
        darkgray: "#a9aeb8",
        mediumseagreen: "#02b875",
        tomato: "#e56135",
      },
      spacing: {},
      fontFamily: {
        "ibm-plex-sans": "'IBM Plex Sans'",
      },
      borderRadius: {
        "8xs": "5px",
        "2xl": "21px",
        xl: "20px",
        sm: "14px",
      },
    },
    fontSize: {
      base: "1rem",
      sm: "0.88rem",
      smi: "0.81rem",
      mini: "0.94rem",
      "5xl": "1.5rem",
      xs: "0.75rem",
      lg: "1.13rem",
      "3xl": "1.38rem",
      lgi: "1.19rem",
      "17xl": "2.25rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
