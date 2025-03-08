import { TypographyCss } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Deadline = styled.div`
  display: flex;
  gap: 4px;
`;

export const Dday = styled.div`
  ${TypographyCss.H5Sb}

  color: ${COLORS.GRAYSCALE_900};
  background-color: ${COLORS.GRAYSCALE_100};
  padding: 6px 12px;
  border-radius: 40px;
`;

export const RingContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressRing = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProgressCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${COLORS.GRAYSCALE_100};
  position: absolute;
`;

export const RingFill = styled.div<{ $progress: number }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ $progress }) =>
    `conic-gradient(${COLORS.BLUE_500} ${$progress}%, ${COLORS.GRAYSCALE_100} ${$progress}%)`};
  position: absolute;
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.BASE_WHITE};
  background-color: ${COLORS.BLUE_500};

  & > svg {
    width: 10px;
    height: 10px;
  }
`;

export const RingMask = styled.div`
  width: 91.5%;
  height: 91.5%;
  border-radius: 50%;
  background: white;
  position: absolute;
`;

export const ProgressText = styled.div<{ $isNatural: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  font-size: 28px;
  font-weight: bold;
  line-height: 120%;
  letter-spacing: -1%;

  ${({ $isNatural = false }) => $isNatural && TypographyCss.H1Bd}
  color: ${COLORS.GRAYSCALE_900};
`;

export const DayContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 14px 20px;
  border-radius: 12px;
  background-color: ${COLORS.GRAYSCALE_100};
  color: ${COLORS.GRAYSCALE_700};
`;
