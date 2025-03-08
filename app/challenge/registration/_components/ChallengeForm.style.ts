import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const ChallengeFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 28px 20px;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ChallengeFormWrapper = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
`;

export const StepContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const FitnessSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: ${COLORS.GRAYSCALE_900};
  flex-grow: 1;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const IntroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TextButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  white-space: nowrap;
  flex-wrap: wrap;
`;
