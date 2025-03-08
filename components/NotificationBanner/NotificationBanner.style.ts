import { COLORS } from "@/constants/Theme";
import styled from "styled-components";
import { Button } from "../common/Button/Button.style";

export const BannerWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export const BannerContainer = styled.div<{ $isHome?: boolean }>`
  width: 100%;
  background-color: ${COLORS.BLUE_50};
  padding: ${({ $isHome }) => ($isHome ? "15px 16px" : "12px 16px")};
  border-radius: ${({ $isHome }) => ($isHome ? "12px" : "16px")};
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 auto;
  cursor: ${({ $isHome }) => ($isHome ? "pointer" : "auto")};

  border: ${({ $isHome }) =>
    $isHome ? "auto" : `1px solid ${COLORS.BLUE_200}`};

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

export const IconWrapper = styled.div<{ $isHome?: boolean }>`
  background-color: ${COLORS.BASE_WHITE};
  width: ${({ $isHome }) => ($isHome ? "36px" : "40px")};
  height: ${({ $isHome }) => ($isHome ? "36px" : "40px")};
  border-radius: ${({ $isHome }) => ($isHome ? "12px" : "13.33px")};
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: ${({ $isHome }) => ($isHome ? "24px" : "20px")};
    height: ${({ $isHome }) => ($isHome ? "24px" : "20px")};
    color: ${COLORS.BLUE_500};
  }
`;

export const NotificationContent = styled.div<{ $isHome?: boolean }>`
  display: flex;
  flex-direction: column;

  & > span {
    &:first-child {
      color: ${({ $isHome }) => ($isHome ? COLORS.BLUE_900 : COLORS.BLUE_300)};
    }

    &:last-child {
      color: ${COLORS.BLUE_500};
    }
  }
`;

export const CompleteButton = styled(Button)<{ $disabled?: boolean }>`
  background-color: ${({ $disabled }) => $disabled && COLORS.BLUE_500};
  opacity: ${({ $disabled }) => $disabled && 0.7};

  &:hover {
    background-color: ${({ $disabled }) => $disabled && COLORS.BLUE_500};
    opacity: ${({ $disabled }) => $disabled && 0.7};
  }
`;
