
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          'other': {'min': '340px', 'max': '1200px'},
        },
        colors: {
          darkbg:"#1E293B",
          lightbg:"#F9FAFB",
          textC:"#374151",
        },
      },
    },
    plugins: [],
    darkMode: 'class',
  }