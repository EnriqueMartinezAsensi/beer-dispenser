const karla = "Karla, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace";

const theme = {
  colors: {
    common: {
      black: `#333333`,
      grey: `lightgrey`,
      white: `white`,
      transparent: `transparent`,
    },
    primary: {
      main: `#feca0a`,
      text: `#333333`,
    },
    secondary: {
      main: `#E2E2E2`,
      text: `#333333`,
    },
    button: {
      normal: {
        background: `#feca0a`,
        text: `#333333`,
      },
      click: {
        background: `#BDBDBD`,
        text: `#F5F5F5`,
      },
      disabled: {
        background: `#ef5350`,
        text: `#333333`,
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
      fontSize: "24pt",
      fontWeight: 600,
    },
  },
  radiuses: {
    medium: `12`,
  },
  transitions: {
    normal: `0.3`,
  },
  media: {
    first: 1020,
  },
};

export default theme;
