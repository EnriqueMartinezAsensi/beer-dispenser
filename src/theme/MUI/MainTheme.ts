import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
const karla = "Karla, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace";

// A custom theme for this app
const theme = createTheme({
  spacing: [0, 4, 8, 16, 32, 64],
  typography: {
    fontSize: 14,
    fontFamily: karla,
  },
  palette: {
    primary: {
      main: "#feca0a",
    },
    secondary: {
      main: "#BDBDBD",
    },
    error: {
      main: red.A400,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
