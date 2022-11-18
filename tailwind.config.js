/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'first': "url('/Group_882.png')",
        'second': "url('/E-KYC@2x.png')",
        'third': "url('/PCee@2x.png')",
        'Fbox': "url('/BG-Fbox.png')",
        'evoting': "url('/e-voting/Group 18982@2x.png')"
        
      },
      fontFamily: {
        "suk": ['Prompt']
      },
    },
    
    
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}