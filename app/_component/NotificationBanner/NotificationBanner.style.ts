import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 350px;
  background-color: ${COLORS.BLUE_50};
  padding: 15px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 auto;
  cursor: pointer;

  & > svg {
    width: 20px;
    height: 20px;
    color: ${COLORS.GRAYSCALE_800};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  flex-grow: 1;
`;

export const IconWrapper = styled.div`
  background-color: #ffffff;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

export const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    &:first-child {
      color: ${COLORS.GRAYSCALE_900};
    }

    &:last-child {
      color: ${COLORS.BLUE_500};
    }
  }
`;
