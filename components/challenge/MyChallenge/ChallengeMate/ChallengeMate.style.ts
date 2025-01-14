import styled from "styled-components";
import { COLORS } from "@/constants/Theme";

export const ChallengeMateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  background-color: ${COLORS.BASE_WHITE};
  width: 316px;
  height: 390px;
  padding: 20px 24px;
  /* filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.06)); */
`;

export const MateInformationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MateProfileWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const MateProfileImage = styled.img`
  background-color: lightgray;
  height: 40px;
  width: 40px;
  border-radius: 100%;
`;

export const ProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MateNickname = styled.p`
  color: ${COLORS.GRAYSCALE_900};
`;

export const MateInfo = styled.p`
  color: ${COLORS.GRAYSCALE_600};
`;

export const MateLevelBadge = styled.div`
  background-color: ${COLORS.BLUE_50};
  border-radius: 10px;
  color: ${COLORS.BLUE_500};
  padding: 7px 10px;
  align-self: center;
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${COLORS.GRAYSCALE_100};
`;

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
  width: 100%;
  gap: 16px;
`;

export const NochallengeText = styled.p`
  color: ${COLORS.GRAYSCALE_500};
`;
