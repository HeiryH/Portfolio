/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html","./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      Animation: {
        toLeft: 'toLeft 10s linear infinite',
        toRight: 'toRight 10s linear infinite'
      },
      keyframes: {
        toLeft: {
          '0%': { left: 1700 },
          '100%': {left: -1700 },
        },
        toRight: {
          '0%': { left: -1700 },
          '100%': {left: 1700 },
        },
      },
      backgroundImage: {
         "concrete-texture" : "url('./assets/concrete-wall-texture.svg')"
      },
      fontFamily: {
          bebasNeue:['Bebas Neue', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}