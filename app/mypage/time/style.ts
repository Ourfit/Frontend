import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const TimePreferenceContainer = styled.div<{
  $isHeightFull?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 36px;
  height: ${({ $isHeightFull = true }) => ($isHeightFull ? "100%" : "auto")};

  padding: 48px 20px 0px 20px;
  box-sizing: border-box;

  align-items: center;
`;

export const TimePreferenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  color: ${COLORS.GRAYSCALE_900};
  flex-grow: 1;

  width: 100%;
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

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const TextButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  color: ${COLORS.GRAYSCALE_600};
  white-space: nowrap;
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

export const PreferenceTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px 20px;
  box-sizing: border-box;

  width: 100%;
  height: auto;
`;

export const PreferenceTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  max-width: 120px;
  height: 45px;

  gap: 4px;

  padding: 12px 20px 12px 16px;
  box-sizing: border-box;

  border-radius: 12px;
  border: 1px solid ${COLORS.GRAYSCALE_200};
`;

export const PreferenceTimeTitle = styled.strong`
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.14px;
`;

export const PreferenceTimeRange = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.12px;

  color: ${COLORS.GRAYSCALE_600};
`;
