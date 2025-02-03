"use client";

import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const matePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;

  width: 100%;
  max-width: 450px;
  height: 100%;
`;

export const matePageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 7px;

  width: 100%;
  height: 100%;
  min-height: 230px;
`;

export const TabWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 16px;
`;

export const alertTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2px;

  width: 100%;
  height: 37px;

  padding: 8px 0px 8px 20px;
  box-sizing: border-box;
`;

export const mateView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 170px;

  border: 1px dashed ${COLORS.GRAYSCALE_300};
  border-radius: 12px;

  background-color: ${COLORS.GRAYSCALE_50};
`;

export const SmallDot = styled.div<{ $top: number; $left: number }>`
  position: absolute;
  top: ${({ $top }) => ($top !== undefined ? `${$top}px` : "10px")};
  left: ${({ $left }) => ($left !== undefined ? `${$left}px` : "27%")};
  width: 4px;
  height: 4px;
  background-color: ${COLORS.BLUE_500};
  border-radius: 50%;
`;
