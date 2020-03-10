import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${props=>props.theme.colors.black};
  }
`;

export default GlobalStyle