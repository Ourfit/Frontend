"use client";

import styled from "styled-components";

export const FrameContainer = styled.div<{
  $bgColorGray?: boolean;
}>`
  background-color: ${({ $bgColorGray = false }) =>
    $bgColorGray ? "#F6F6F8" : "#ffffff"};

  width: 100%;
  max-width: 450px;
  height: 100svh;
  padding-top: 48px;
  box-sizing: border-box;
  position: relative;
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

  height: calc(100% - 68px);
`;
