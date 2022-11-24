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
        'third1': "url('/PCee@2x.png')",
        'third2': "url('/home/PCee mobile@2x.png')",
        'Fbox': "url('/BG-Fbox.png')",
        'f1evoting': "url('/e-voting/Group 18982@2x.png')",
        'f2evoting': "url('/e-voting/E-Voting_mobile Cover@2x.png')",
        'evoting2': "url('/e-voting/E-Voting 1@2x.png')",
        'evoting3': "url('/e-voting/Group 18988@2x.png')",
        'ekyc1': "url('/ekyc/Group 18732@2x.png')",
        'ekyc2': "url('/ekyc/E-KYC_mobile Cover@2x.png')",
        
      },
      fontFamily: {
        "suk": ['Prompt']
      },
    },
    variants: {
      extend: {
        visibility: ["group-1-hover"],
        visibility: ["group-2-hover"],
      },
     },
    
    
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    
  ],
}