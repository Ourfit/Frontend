import { TypographyCss } from "@/components/atoms/Typography";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { COLORS } from "@/constants/Theme";
import styled, { css } from "styled-components";

interface ButtonStyleProps {
  size?: (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
  variant?: (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
  disabled?: boolean;
}

const getButtonStyle = ({ size, variant, disabled }: ButtonStyleProps) => {
  const COMMON_CSS = css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${disabled ? "default" : "pointer"};
    border: none;
  `;

  const sizeCss = {
    [BUTTON_SIZES.LARGE]: css`
      width: 100%;
      height: 54px;
      padding: 0 20px;
      border-radius: 16px;
      gap: 23px;
      ${TypographyCss.H4Sb};
    `,
    [BUTTON_SIZES.MEDIUM]: css`
      width: 167px;
      height: 54px;
      padding: 0 20px;
      border-radius: 16px;
      gap: 4px;
      ${TypographyCss.H4Sb}
    `,
    [BUTTON_SIZES.EXTRA_SMALL]: css`
      padding: 10px 14px;
      border-radius: 12px;
      gap: 4px;
      ${TypographyCss.H5Md};
    `,
  };

  const variantCss = {
    [BUTTON_VARIANTS.PRIMARY]: css`
      background-color: ${disabled ? COLORS.GRAYSCALE_300 : COLORS.BLUE_500};
      color: ${COLORS.BASE_WHITE};
      border: none;

      &:hover {
        background-color: ${disabled ? COLORS.GRAYSCALE_300 : COLORS.BLUE_700};
      }
    `,
    [BUTTON_VARIANTS.SECONDARY]: css`
      background-color: ${COLORS.BASE_WHITE};
      color: ${COLORS.GRAYSCALE_800};
      border: 1px solid ${COLORS.GRAYSCALE_200};

      &:hover {
        border-color: ${COLORS.BLUE_500};
        color: ${COLORS.BLUE_500};
        background-color: ${disabled
          ? COLORS.GRAYSCALE_300
          : COLORS.BASE_WHITE};
      }
    `,

    outline: css`
      background-color: ${COLORS.BASE_WHITE};
      color: ${COLORS.GRAYSCALE_800};
      border: 1px solid ${COLORS.GRAYSCALE_200};
    `,
  };

  return css`
    ${COMMON_CSS};
    ${size && sizeCss[size]};
    ${variant && variantCss[variant]};
  `;
};

export const Button = styled.button<ButtonStyleProps>`
  ${({ size, variant, disabled }) =>
    getButtonStyle({ size, variant, disabled })}
`;

export const IconWrapper = styled.span`
  display: flex;

  & > svg {
    width: 20px;
    height: 20px;
  }
`;
