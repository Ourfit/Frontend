"use client";

import React from "react";
import * as S from "./Button.style";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  size?: (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
  variant?: (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  disabled = false,
  size,
  variant,
  icon,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <S.Button
      $size={size}
      $variant={variant}
      $disabled={disabled}
      onClick={onClick}
    >
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      {children}
    </S.Button>
  );
};

export default Button;
