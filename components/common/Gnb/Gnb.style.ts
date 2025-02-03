"use client";

import { TypographyCss } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const GnbContainer = styled.div`
  position: sticky;
  bottom: 0;

  width: 100%;
  height: 68px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  padding: 8px 12px 16px 12px;
  align-items: center;
  border-top: 1px solid ${COLORS.GRAYSCALE_50};
  background: ${COLORS.BASE_WHITE};
`;

export const GnbTabWrapper = styled.div<{ $isActive: boolean }>`
  ${TypographyCss.H7Sb};

  width: 64px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: ${({ $isActive }) => ($isActive ? "#163BFF" : "#d8dbe4")};
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
  }
`;
