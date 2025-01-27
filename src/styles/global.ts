import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  display: flex;
  align-items: center;
}

  body {
    background-color: #FFFFFF;
  }

   * {
    font-family: 'Times New Roman', Times, serif;
    box-sizing: border-box;
  }
  
  
  a {
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }
`;