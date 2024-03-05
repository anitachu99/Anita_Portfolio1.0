/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.{html,js}'],
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
    require('flowbite/plugin')
  ],
}

