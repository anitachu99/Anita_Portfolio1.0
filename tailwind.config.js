/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost"],
      },
      backgroundImage: {
        'skyImage': "url(/static/images/white-clouds-blue-background.jpg)",
      },
      animation: {
        'bounce-slow': 'bounce 1.5s linear infinite',
      }
    },
  },
  plugins: [],
}

