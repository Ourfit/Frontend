import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const PreferenceFacilityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px 20px;
  box-sizing: border-box;

  width: 100%;
  height: auto;
  color: ${COLORS.GRAYSCALE_900};
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

export const PreferencePlaceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  padding: 0px 20px;
  width: 100%;
  gap: 8px;
`;

export const PreferencePlaceWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  gap: 16px;
`;

export const PreferencePlaceContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  gap: 8px;
  align-items: center;
`;

export const PreferencePlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 73px;
  padding: 16px 20px;
  border-radius: 16px;
  box-sizing: border-box;
  border: 1px solid ${COLORS.GRAYSCALE_200};
`;

export const PreferencePlaceName = styled.strong`
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.14px;
`;

export const PreferencePlaceName2 = styled.strong`
  color: ${COLORS.BLUE_500};
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.13px;
`;

export const PreferencePlaceAddress = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.12px;

  color: ${COLORS.GRAYSCALE_600};
`;

export const PreferencePlaceInfo2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 10px;
  align-items: center;
  gap: 4px;

  border-radius: 12px;
  background: ${COLORS.BLUE_50};
`;

export const PreferenceInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
`;

export const PreferenceButton = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  color: #8aadff;
  background: ${COLORS.BLUE_50};
`;
