const text = {
  m: "0px 0 10px 0",
  fontFamily: 'heading',
}


export default {
  breakpoints: ['310px', '540px', "990px", '1200px', '1650px'],
  colors: {
    primary: "#006bad", //primary Blue color
    secondary: "#cb0f22", //secondary red color
    light: "#f9f9f9",  //light white color
    menuBlue: "#021bdd",
    darkGray: "#222222",
    menuMb: "#263444"//dark gray of menu
  },
  fonts: {
    body: 'Poppins, sans-serif',
    monospace: 'Poppins, sans-serif',
    heading: 'century gothic',
    spanText: "Fira Sans, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  styles: {
    root: {
      margin: "0px"
    },
    h1: {
      fontSize: [null, 23, 28, 28, 36, 40],
      ...text,
    },
    h2: {
      fontSize: [null, 20, 20, 20, 32, 36],
      ...text,
    },
    h3: {
      fontSize: [null, 20, 20, 20, 32, 34],
      ...text,
    },
    h4: {
      fontSize: [null, 18, 18, 18, 30, 32],
      ...text,
    },
    p: {
      fontSize: [null, 13, 16, 16, 18, 20],
      fontFamily: "body",
      m: "0px 0 5px 0",
    },
    span: {
      fontFamily: "body",
      m: "0px 0 5px 0",
    },
    button: {
    },
  },
}