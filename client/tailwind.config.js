/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mono': "'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace",
        "viet": "'Be Vietnam Pro', sans-serif"
      },
      colors: {
        'blue-primary': "#0a192f",
        'blue-light': "rgba(10, 25, 47, .85)",
        'color-links': "#ccd6f6",
        'green': "#64ffda"
      },
      height: {
        'min1': '1px',
        '102': "450px",
        '100': "400px",
      },
      maxHeight: {
        '100': "400px"
      },
      width: {
        '102': "450px",
        '100': "400px",
        '105': "550px"
      },
      backdropBlur: {
        '10': 'blur(10px)', // Puedes personalizar el valor del desenfoque según tus necesidades
      },
    },
  },
  plugins: [],
}

