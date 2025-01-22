import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  spacing: [0, 4, 8, 16, 32, 64],
  typography: {
    fontSize: 20,
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
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
