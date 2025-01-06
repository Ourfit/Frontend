"use client";

import React from "react";
import * as S from "./TextButton.style";
import IconWrapper from "@/components/atoms/IconWrapper";

interface TextButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
  isPlusIcon?: boolean;
  onClick?: () => void;
}

const TextButton = ({
  icon,
  isPlusIcon,
  isActive,
  children,
  onClick,
}: TextButtonProps) => {
  return (
    <S.TextButton $isActive={isActive} onClick={onClick}>
      {icon && <IconWrapper isPlusIcon={isPlusIcon}>{icon}</IconWrapper>}
      {children}
    </S.TextButton>
  );
};

export default TextButton;
