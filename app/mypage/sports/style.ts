import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const PreferenceSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 28px 20px;
  box-sizing: border-box;

  width: 100%;
  height: auto;
`;

export const SportsPreferenceWrapper = styled.div<{
  $isHeightFull?: boolean;
}>`
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  gap: 32px;
  color: ${COLORS.GRAYSCALE_900};
  flex-grow: ${({ $isHeightFull = true }) => ($isHeightFull ? "1" : "auto")};
  padding: 48px 20px 0px 20px;
  box-sizing: border-box;
`;

export const SignupIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SignupIntroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 410px;
  justify-content: center;
  align-items: center;
  margin-top: auto;

  padding: 12px 0px 20px 0px;
`;

export const ButtonWrapper = styled.div`
  box-sizing: border-box;
  width: 65px;
`;

export const TextButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  white-space: nowrap;
  flex-wrap: wrap;
`;

export const PreferenceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 24px;
`;

export const PreferenceTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 24px;

  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.16px;
`;

export const PreferenceEdit = styled.div`
  width: 39px;
  height: 20px;

  font-size: 13px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.13px;

  color: ${COLORS.BLUE_500};
  cursor: pointer;
`;

export const PreferenceContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  width: 100%;
  height: 41px;
`;

export const PreferenceBadge = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  width: auto;
  height: 41px;

  padding: 10px 16px 10px 10px;

  border-radius: 12px;
  border: 1px solid ${COLORS.GRAYSCALE_200};
`;
