"use client";

import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const FrameContainer = styled.div`
  width: 100%;
  max-width: 450px;
  height: calc(100svh - 68px);
  padding-top: 48px;
  box-sizing: border-box;
  position: relative;
  background-color: ${COLORS.BASE_WHITE};
`;

export const Content = styled.div`
  box-sizing: border-box;
  background-color: ${COLORS.BASE_WHITE};
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  height: 100%;
`;
