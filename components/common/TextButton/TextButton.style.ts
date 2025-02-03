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
    padding: ${$hasIcon ? "12px 20px 12px 16px" : "12px 20px"};
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
  `;

  return css`
    ${COMMON_CSS};
  `;
};

export const TextButton = styled.button<TextButtonStyleProps>`
  ${({ $isActive, $hasIcon }) =>
    getTextButtonStyle({ $isActive: $isActive, $hasIcon: $hasIcon })}
`;
