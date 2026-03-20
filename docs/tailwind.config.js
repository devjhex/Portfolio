export default {
  content: [
    "/index.html",
  ],
  theme: {
    screens: {
        md: '820px',
      },
    extend: {
      colors: { 
        "primaryBlack": "#000000",
        "primaryWhite": "#FFFFFF",
        "brandColor": "#070708",
        "text300": "#AFB0B6",
        "text200": "#E6E6E6"
      }
    },
    fontFamily: {
        body: ["Gantari", "ui-sans-serif", "system-ui"],
        display: ["Manrope", "ui-sans-serif", "system-ui"],
      },
  },
  plugins: [],
}