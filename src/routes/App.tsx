import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/MUI/MainTheme";
import AppRoutes from "./appRoutes";
import CustomThemeProvider from "../providers/CustomThemeProvider";

export default function SignInSide() {
  return (
    <ThemeProvider theme={theme}>
      <CustomThemeProvider>
        <CssBaseline />
        <AppRoutes />
      </CustomThemeProvider>
    </ThemeProvider>
  );
}
