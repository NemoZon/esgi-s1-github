/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        'purple': '#6533FF',
        'yellow': '#FBE4AB',
      },
      spacing: {
        '26px': '26px',
        '154px': '154px',
        '160px': '160px',
        '258px': '258px',
        '502px': '502px',
      },
      content: {
        'arrow': '_>', 
      }
    },
  },
  plugins: [],
}

