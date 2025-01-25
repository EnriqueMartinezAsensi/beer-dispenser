import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Karla';
  src: local('Karla'), url(/fonts/Karla-VariableFont_wght.ttf) format(truetype);
}
@font-face {
  font-family: 'MarkaziText';
  src: local('MarkaziText'), url(/fonts/MarkaziText-VariableFont_wght.ttf) format(truetype);
}

:root {
  font-family: ${({ theme }) => theme.text.normal.fontFamily};
  font-size: ${({ theme }) => theme.text.normal.fontSize};
  line-height: 1.5;

  
  color: #333333;
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  display: flex;
  place-items: start;
  min-width: 350px;
  min-height: 100vh;
  color: #333333;
}

#root {
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-color: #eee;
}
`;

export default GlobalStyles;
