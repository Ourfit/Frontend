import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const ProfileBadge = styled.div`
  position: relative;
`;

export const ProfileImageWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const IconWrapper = styled.div`
  background-color: ${COLORS.BLUE_500};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 12px;
    height: 12px;
    color: #ffffff;
  }
`;
