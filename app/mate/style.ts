"use client";

import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const matePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;
`;

export const matePageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 7px;

  width: 100%;
  height: 230px;
  min-height: 230px;
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
