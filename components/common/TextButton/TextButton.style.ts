import styled, { css } from "styled-components";
import { TypographyCss } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";

interface TextButtonStyleProps {
  $isActive?: boolean;
  $hasIcon?: boolean;
}

const getTextButtonStyle = ({ $isActive, $hasIcon }: TextButtonStyleProps) => {
  const COMMON_CSS = css`
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 12px;
    cursor: pointer;

    border: 1px solid ${$isActive ? COLORS.BLUE_500 : COLORS.GRAYSCALE_200};
    color: ${$isActive ? COLORS.BLUE_500 : COLORS.GRAYSCALE_600};
    background: ${$isActive ? COLORS.BLUE_50 : COLORS.BASE_WHITE};
    ${TypographyCss.H4Md};

    &:hover {
      color: ${COLORS.BLUE_500};
      border: 1px solid ${COLORS.BLUE_500};
      background: ${COLORS.BLUE_200};
    }

    @media (max-width: 360px) {
      padding: ${$hasIcon ? "12px 14px" : "12px 16px"};
    }

    @media (max-width: 375px) and (min-width: 361px) {
      padding: ${$hasIcon ? "12px 12px 12px 16px" : "12px 20px"};
    }

    @media (max-width: 390px) and (min-width: 375px) {
      padding: ${$hasIcon ? "12px 17px 12px 16px" : "12px 20px"};
    }

    @media (max-width: 412px) and (min-width: 390px) {
      padding: ${$hasIcon ? "12px 20px 12px 16px" : "12px 20px"};
    }

    @media (max-width: 426px) and (min-width: 412px) {
      padding: ${$hasIcon ? "12px 24px 12px 16px" : "12px 20px"};
    }
  `;

  return css`
    ${COMMON_CSS};
  `;
};

export const TextButton = styled.button<TextButtonStyleProps>`
  ${({ $isActive, $hasIcon }) =>
    getTextButtonStyle({ $isActive: $isActive, $hasIcon: $hasIcon })}

  display: flex;
  padding: 12px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid ${COLORS.GRAYSCALE_200};

  &:hover {
    background-color: ${COLORS.BLUE_50};
    border: 1px solid ${COLORS.BLUE_500};
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    border: 1px solid ${COLORS.BLUE_500};
    background-color: ${COLORS.BLUE_50};
  `}
`;
