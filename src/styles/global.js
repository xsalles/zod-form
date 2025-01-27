import { createGlobalStyle } from "styled-components";
import Montserrat from "../assets/fonts/Montserrat-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle`


html {
  display: flex;
  align-items: center;
}

  body {
    background-color: #FFFFFF;
  }

   * {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  
  a {
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }
`;