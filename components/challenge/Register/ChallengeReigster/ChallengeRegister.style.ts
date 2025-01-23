import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const ChallengeRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100svh - 48px - 69px);
  margin: 0 20px;
`;

export const ExplainContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 48px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
`;

export const HighlightedText = styled.span`
  background: linear-gradient(90deg, #163bff, #bc42c3);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const RegisterConditionWrapper = styled.div`
  border-radius: 24px;
  background-color: ${COLORS.GRAYSCALE_100};
  padding: 24px;
  width: 100%;
`;

export const ConditionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ConditionText = styled.div`
  display: flex;
  gap: 8px;
`;

export const StartButtonWrapper = styled.div`
  margin-bottom: 28px;
`;
