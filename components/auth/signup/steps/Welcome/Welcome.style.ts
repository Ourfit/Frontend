import styled from "styled-components";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";

export const WelComeContainer = styled.div<{ $isChallenge?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: ${({ $isChallenge }) => ($isChallenge ? "-34px" : "-24px")};

  & > svg {
    width: 152px;
    height: 152px;
  }
`;

export const WelcomeContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: center;
`;

export const GradientTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GradientText = styled(Typography.H1Sb)`
  background: linear-gradient(90deg, #163bff 0%, #bc42c3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.div`
  width: 100%;
  background-color: ${COLORS.GRAYSCALE_100};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 24px;
`;

export const Content = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${COLORS.GRAYSCALE_700};

  & > svg {
    width: 20px;
    height: 20px;
  }
`;
