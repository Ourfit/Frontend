import styled from "styled-components";
import { COLORS } from "@/constants/Theme";

export const ChallengeInfo = styled.div`
  width: 100%;
  height: 64px;
  border-radius: 16px;
  background-color: ${COLORS.BLUE_50};
  border: 1px solid ${COLORS.BLUE_200};
  padding: 12px 16px;
  display: flex;
  gap: 14px;
`;

export const IconBox = styled.div`
  background-color: ${COLORS.BASE_WHITE};
  width: 40px;
  height: 40px;
  border-radius: 13.33px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChallengeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PreventDate = styled.p`
  color: ${COLORS.BLUE_300};
`;

export const ChallengeStatus = styled.p`
  color: ${COLORS.BLUE_500};
`;
