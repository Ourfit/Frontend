"use client";

import styled from "styled-components";

export const FrameContainer = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100%;
  min-height: 100svh;
  padding-top: 48px;
  box-sizing: border-box;
  position: relative;
  background-color: #d9d9d9;
`;

export const Content = styled.div`
  box-sizing: border-box;
  background-color: #f6f6f6;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100svh - 117px);
`;
