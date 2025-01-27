"use client";

import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const FrameContainer = styled.div<{
  $bgColorGray?: boolean;
}>`
  width: 100%;
  max-width: 450px;
  height: ${({ $bgColorGray = false }) =>
    $bgColorGray ? "100svh" : "calc(100svh - 68px)"};
  padding-top: 48px;
  box-sizing: border-box;
  position: relative;
  background-color: ${({ $bgColorGray = false }) =>
    $bgColorGray ? COLORS.GRAYSCALE_100 : COLORS.BASE_WHITE};
`;

export const Content = styled.div<{
  $bgColorGray?: boolean;
}>`
  box-sizing: border-box;
  background-color: ${({ $bgColorGray = false }) =>
    $bgColorGray ? COLORS.GRAYSCALE_100 : COLORS.BASE_WHITE};
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  height: 100%;
`;
