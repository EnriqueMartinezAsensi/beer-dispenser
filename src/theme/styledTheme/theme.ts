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
      main: `#feca0a`,
      text: `white`,
    },
    secondary: {
      main: `#BDBDBD`,
      text: `#242424`,
    },
    button: {
      normal: {
        background: `#feca0a`,
        text: `black`,
      },
      click: {
        background: `#BDBDBD`,
        text: `#F5F5F5`,
      },
      disabled: {
        background: `#ef5350`,
        text: `black`,
      },
    },
  },
  text: {
    title: {
      fontFamily: karla,
      fontSize: "60pt",
    },
    subtitle: {
      fontFamily: karla,
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
  media: {
    first: 1020,
  },
};

export default theme;
