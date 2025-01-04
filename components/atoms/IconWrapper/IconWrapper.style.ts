import styled from "styled-components";

interface IconWrapperProps {
  isPlusIcon?: boolean;
}

export const IconWrapper = styled.span<IconWrapperProps>`
  display: flex;

  & > svg {
    width: ${({ isPlusIcon }) => (isPlusIcon ? "16px" : "20px")};
    height: ${({ isPlusIcon }) => (isPlusIcon ? "16px" : "20px")};
  }
`;
