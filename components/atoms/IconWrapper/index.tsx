import React from "react";
import { IconWrapper as StyledIconWrapper } from "./IconWrapper.style";

interface IconWrapperProps {
  children: React.ReactNode;
  isPlusIcon?: boolean;
}

const IconWrapper = ({ isPlusIcon = false, children }: IconWrapperProps) => {
  return (
    <StyledIconWrapper isPlusIcon={isPlusIcon}>{children}</StyledIconWrapper>
  );
};

export default IconWrapper;
