import styled from "styled-components";
import { COLORS } from "@/constants/Theme";

export const ChallengeSituation = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const NoChallengeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 274px;
  gap: 16px;
`;

export const ChallengeInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeadlineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeadlineTextWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const DdayBox = styled.div`
  padding: 6px 12px;
  background-color: ${COLORS.GRAYSCALE_100};
  border-radius: 40px;
`;

export const CircleContainer = styled.div`
  width: 140px;
  height: 140px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${COLORS.GRAYSCALE_100};
`;

export const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  clip: rect(0, 140px, 140px, 70px); /* 원의 절반 */
`;

export const Fill = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.BLUE_500}; /* 진행률 색상 */
  clip-path: circle(50%);
  transform: rotate(0deg); /* 초기값 */
  transform-origin: center; /* 원의 중심을 기준 */
`;

export const InsideWrapper = styled.div`
  width: 128px;
  height: 128px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${COLORS.BASE_WHITE};
`;

export const InsideText = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Percentage = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const ExerciseDay = styled.div`
  margin-top: 34px;
  border-radius: 12px;
  background-color: ${COLORS.GRAYSCALE_100};
  padding: 14px 20px;
  display: flex;
  gap: 8px;
`;

export const HighlightedText = styled.span`
  color: ${COLORS.BLUE_500};
`;
