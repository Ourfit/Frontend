import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export const BannerContainer = styled.div<{ $isChallenge?: boolean }>`
  width: 100%;
  background-color: ${COLORS.BLUE_50};
  padding: ${({ $isChallenge }) => ($isChallenge ? "12px 16px" : "15px 16px")};
  border-radius: ${({ $isChallenge }) => ($isChallenge ? "16px" : "12px")};
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 auto;
  cursor: ${({ $isChallenge }) => ($isChallenge ? "auto" : "pointer")};

  border: ${({ $isChallenge }) =>
    $isChallenge ? `1px solid ${COLORS.BLUE_200}` : "auto"};

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

export const IconWrapper = styled.div<{ $isChallenge?: boolean }>`
  background-color: ${COLORS.BASE_WHITE};
  width: ${({ $isChallenge }) => ($isChallenge ? "40px" : "36px")};
  height: ${({ $isChallenge }) => ($isChallenge ? "40px" : "36px")};
  border-radius: ${({ $isChallenge }) => ($isChallenge ? "13.33px" : "12px")};
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: ${({ $isChallenge }) => ($isChallenge ? "20px" : "24px")};
    height: ${({ $isChallenge }) => ($isChallenge ? "20px" : "24px")};
    color: ${COLORS.BLUE_500};
  }
`;

export const NotificationContent = styled.div<{ $isChallenge?: boolean }>`
  display: flex;
  flex-direction: column;

  & > span {
    &:first-child {
      color: ${({ $isChallenge }) =>
        $isChallenge ? COLORS.BLUE_300 : COLORS.BLUE_900};
    }

    &:last-child {
      color: ${COLORS.BLUE_500};
    }
  }
`;
