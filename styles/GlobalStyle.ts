"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-width: 390px; 
    min-height: 100svh;
    border: 1px solid gray; 
    align-items: center;
    overflow: hidden; 
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
