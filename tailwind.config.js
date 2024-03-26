/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './templates/**/*.{html,js}',
    'node_modules/preline/dist/*.js',
],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost"],
        jostReg: ["Jost, regular"],
      },
      backgroundImage: {
        'skyImage': "url(/static/images/white-clouds-blue-background.jpg)",
      },
      colors: {
        'greyColor': '#acb4c4',
      },
      backgroundColor: {
        'skyBlue': '#429FD1',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) alternate, blink .7s",
        'bounce-slow': 'bounce 1.5s linear infinite',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
    function({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
      },
  
        /* Hide scrollbar for IE, Edge and Firefox */
        ".no-scrollbar": {
          " -ms-overflow-style": "none",  /* IE and Edge */
            "scrollbar-width": "none",  /* Firefox */
        },
      };

      addUtilities(newUtilities)
    }
  ],
}

