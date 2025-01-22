import theme from "../../theme/styledTheme/theme";

import { ThemeProvider } from "styled-components";

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
