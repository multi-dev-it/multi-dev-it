tailwind.config = {
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1180px',
      },
      colors: {
        navLink: "#022F5D",
        primary: "#04A379",
        heading: "#192D35",
        paragraph: "#5D6F7D",
        btncolor : "rgba(4, 163, 121, 0.2)"
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        Roboto: "'Roboto', sans-serif",
        nunito: "'Nunito', sans-serif;",
      },
      maxWidth: {
        'container' : '1180px'
      },
      padding: {
        'section-gap': '100px 0',
        container: "1180px",
      },
    },
  },
};
