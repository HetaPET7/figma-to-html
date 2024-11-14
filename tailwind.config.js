/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html", // You can add more paths to HTML files if needed
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths for JS/TS files if you have a JS framework
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD100",
        secondary: "#636569",
        white: "#fff",
      },
      backgroundColor: {
        primary: "#FFD100",
      },
      backgroundImage: {
        customGradient: "linear-gradient(90deg, #979899 36.87%, rgba(151, 152, 153, 0) 60.75%)"
      },
      fontFamily: {
        RalewayLight: ["RalewayLight"],
        RalewayRegular: ["RalewayRegular"],
        RalewayBold: ["RalewayBold"],
        RalewayExtraBold: ["RalewayExtraBold"],
      },
      screens: {
        'xxl': '1440px',
      }
    },
    
  },
  plugins: [],
}

