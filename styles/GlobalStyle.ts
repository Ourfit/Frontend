"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html {
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
  }
  
  body {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
