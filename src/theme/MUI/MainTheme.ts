import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  spacing: [0, 4, 8, 16, 32, 64],
  typography: {
    fontSize: 20,
  },
  palette: {
    primary: {
      main: "#DC0019",
    },
    secondary: {
      main: "#00DCC3",
    },
    error: {
      main: orange.A400,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
