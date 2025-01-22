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
  font-family: ${({theme}) => theme.text.normal.fontFamily};
  font-size: ${({theme}) => theme.text.normal.fontSize};
  line-height: 1.5;

  color-scheme: light dark;
  color: #242424;
  background-color: rgba(255, 255, 255, 0.87);

  
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
}

#root {
  width: 100%;
  margin: 0 auto;
}
`

export default GlobalStyles;