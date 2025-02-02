"use client";

import styled from "styled-components";

export const FrameContainer = styled.div`
  width: 100%;
  max-width: 390px;
  height: calc(100svh - 68px);
  padding-top: 48px;
  box-sizing: border-box;
  position: relative;
  background-color: #ffffff;
`;

export const Content = styled.div<{
  $bgColorGray?: boolean;
}>`
  box-sizing: border-box;
  background-color: ${({ $bgColorGray = false }) =>
    $bgColorGray ? "#F6F6F8" : "#ffffff"};
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  height: 100%;
`;
