const markaziText = "MarkaziText, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
const karla = "Karla, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace";

const theme = {
  colors: {
    common: {
      black: `black`,
      grey: `lightgrey`,
      darkergreen: `#333333`,
      white: `white`,
      transparent: `transparent`,
    },
    primary: {
      main: `#495E57`,
      text: `white`,
    },
    secondary: {
      main: `rgba(255, 255, 255, 0.87)`,
      text: `#242424`,
    },
    button: {
      normal:{
        background: `#F4CE14`,
        text: `black`,
      },
      click:{
        background: `#495E57`,
        text: `#F5F5F5`,
      },
      disabled: {
        background: `#EE9972`,
        text: `black`,
      }
    }
  },
  text: {
    title: {
      fontFamily: markaziText,
      fontSize: "60pt",
    },
    subtitle: {
      fontFamily: markaziText,
      fontSize: "40pt",
    },
    normal: {
      fontFamily: karla,
      fontSize: "18pt",
    },
    card: {
      fontFamily: karla,
      fontSize: "16pt",
      lineHeight: "1.5",
    },
    navigationBar: {
      fontFamily: karla,
      fontSize: "14pt",
      fontWeight: 600,
    },
  },
  radiuses: {
    medium: `16`,
  },
  transitions: {
    normal: `0.3`,
  },
  media:{
    first: 1020,
  },
};

export default theme;