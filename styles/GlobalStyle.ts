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
    width: 390px;/* 기본 넓이 설정 */
    max-width: 390px; 
    height: 844px; /* 기본 높이 설정 */
    min-height: 100vh;
    border: 1px solid gray; 
    align-items: center;
    overflow: hidden; /* 필요 시 스크롤 숨김 */
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
