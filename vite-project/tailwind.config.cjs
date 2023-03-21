/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img1': "url('./src/assets/bannerImages/SliderImage1.jpg')",
        'banner-img1': "url('./src/assets/bannerImages/SliderImage1.jpg')",
        'banner-img2': "url('./src/assets/bannerImages/SliderImage2.jpg')",
      }
    },
  },
  plugins: [],
}
