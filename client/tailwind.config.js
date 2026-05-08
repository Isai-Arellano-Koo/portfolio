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
        '10': 'blur(10px)',
      },
      boxShadow: {
        'glow-sm': '0 0 32px -12px rgba(100, 255, 218, 0.25)',
        'card': '0 4px 24px -8px rgba(2, 12, 27, 0.6)',
        'nav-drawer': '-12px 0 40px rgba(2, 12, 27, 0.75)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}

