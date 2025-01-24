import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/MUI/MainTheme";
import AppRoutes from "./appRoutes";
import CustomThemeProvider from "../providers/CustomThemeProvider";
import GlobalStyles from "../theme/styledTheme/GlobalStyles";

export default function SignInSide() {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
      <GlobalStyles />
    </CustomThemeProvider>
  );
}
