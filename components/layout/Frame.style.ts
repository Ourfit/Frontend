"use client";

import styled from "styled-components";

export const FrameContainer = styled.div`
  width: 100%;
  max-width: 390px;
  min-height: 100vh;
  padding-top: 48px;
  box-sizing: border-box;
  position: relative;
  background-color: #d9d9d9;
`;

export const Content = styled.div`
  width: calc(100% - 40px);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  box-sizing: border-box;
  background-color: #f6f6f6;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 8px;
`;
