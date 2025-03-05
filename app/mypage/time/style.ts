import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const PreferenceSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  height: auto;
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
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 73px;

  padding: 16px 20px;
  box-sizing: border-box;

  border-radius: 16px;
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
