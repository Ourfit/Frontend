"use client";

import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const HeaderContainer = styled.header<{
  $paddingLeft: string;
  $paddingRight: string;
  $justifyContent?: string;
}>`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding-right: ${(props) => props.$paddingRight};
  padding-left: ${(props) => props.$paddingLeft};
  position: absolute;
  justify-content: ${({ $justifyContent = "flex-start" }) => $justifyContent};
  top: 0;

  & svg {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > svg {
    color: ${COLORS.GRAYSCALE_900};
    width: 20px;
    height: 20px;
  }
`;
