"use client";

import styled from "styled-components";

// 헤더의 최상위 컨테이너
export const HeaderContainer = styled.header`
  width: 100%;
  height: 48px;
  background-color: rgba(255, 0, 0, 0.48);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; //Frame 레이아웃 기준으로 배치
  top: 49px;
  z-index: 1000;
`;

// 헤더 안의 텍스트
export const HeaderTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
`;
