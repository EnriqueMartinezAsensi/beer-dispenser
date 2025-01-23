import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeProviderMUI } from "@mui/material/styles";
import { MemoryRouter } from "react-router-dom";
import theme from "../../theme/styledTheme/theme";
import themeMUI from "../../theme/MUI/MainTheme";

const customRender = (ui: React.ReactElement, options = {}) => {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <ThemeProviderMUI theme={themeMUI}>{ui}</ThemeProviderMUI>
      </ThemeProvider>
    </MemoryRouter>,
    options
  );
};

export * from "@testing-library/react";

export { customRender as render };
