"use client";

import styled from "styled-components";

export const FrameContainer = styled.div`
  width: 390px;
  min-height: 100vh;
  padding-top: 97px; /* Header 높이(48px) + top(49px) */
  box-sizing: border-box;
  position: relative;
  background-color: #d9d9d9;
`;

// Content 스타일
export const Content = styled.div`
  margin: 0 auto;
  width: calc(390px - 40px);
  height: 100%; /* 자동 높이 */
  overflow-y: auto;
  box-sizing: border-box;
  background-color: #f6f6f6;

  //flex 배치 css
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 8px; /* 2의 배수 간격 (8px) */
`;
