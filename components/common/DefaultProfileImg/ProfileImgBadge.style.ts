import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const ProfileBadge = styled.div`
  position: relative;
`;

export const ProfileImageWrapper = styled.div<{ $size?: number }>`
  width: ${({ $size }) => ($size ? `${$size}px` : "48px")};
  height: ${({ $size }) => ($size ? `${$size}px` : "48px")};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid ${COLORS.GRAYSCALE_100};

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const IconWrapper = styled.div<{ $size?: number; $iconSize?: number }>`
  background-color: ${COLORS.BLUE_500};
  width: ${({ $size }) => ($size ? `${$size}px` : "18px")};
  height: ${({ $size }) => ($size ? `${$size}px` : "18px")};
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: ${({ $iconSize }) => ($iconSize ? `${$iconSize}px` : "12px")};
    height: ${({ $iconSize }) => ($iconSize ? `${$iconSize}px` : "12px")};
    color: #ffffff;
  }
`;
