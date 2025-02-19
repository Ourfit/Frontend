import styled, { css } from "styled-components";
import { TypographyCss } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";

interface TextButtonStyleProps {
  $isActive?: boolean;
  $hasIcon?: boolean;
}

const COMMON_CSS = css`
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  cursor: pointer;
  ${TypographyCss.H4Md};

  &:hover {
    color: ${COLORS.BLUE_500};
    border: 1px solid ${COLORS.BLUE_500};
    background: ${COLORS.BLUE_200};
  }
`;

export const TextButton = styled.button<TextButtonStyleProps>`
  ${COMMON_CSS};
  padding: ${({ $hasIcon }) => ($hasIcon ? "12px 12px" : "12px 16px")};

  border: 1px solid ${({ $isActive }) => ($isActive ? COLORS.BLUE_500 : COLORS.GRAYSCALE_200)};
  color: ${({ $isActive }) => ($isActive ? COLORS.BLUE_500 : COLORS.GRAYSCALE_600)};
  background: ${({ $isActive }) => ($isActive ? COLORS.BLUE_50 : COLORS.BASE_WHITE)};

  @media (max-width: 360px) {
    padding: ${({ $hasIcon }) => ($hasIcon ? "12px 12px" : "12px 16px")};
  }

  @media (max-width: 375px) and (min-width: 361px) {
    padding: ${({ $hasIcon }) => ($hasIcon ? "12px 12px 12px 16px" : "12px 20px")};
  }

  @media (max-width: 390px) and (min-width: 375px) {
    padding: ${({ $hasIcon }) => ($hasIcon ? "12px 12px 12px 16px" : "12px 20px")};
  }

  @media (max-width: 412px) and (min-width: 390px) {
    padding: ${({ $hasIcon }) => ($hasIcon ? "12px 16px 12px 16px" : "12px 20px")};
  }

  @media (min-width: 412px) {
    padding: ${({ $hasIcon }) => ($hasIcon ? "12px 24px 12px 18px" : "12px 20px")};
  }
`;