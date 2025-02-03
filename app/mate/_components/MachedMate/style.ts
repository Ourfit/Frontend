"use client";

import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const MatchedMateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  max-width: 450px;
  height: 100%;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  gap: 16px;
`;

export const MateCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 450px;
  height: 255px;
  max-height: 255px;

  background-color: ${COLORS.GRAYSCALE_50};
`;

export const MateFacilityInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  max-width: 450px;
  height: auto;
  min-height: 169px;
  padding: 20px 20px 32px 20px;
  box-sizing: border-box;
  background-color: #ffffff;
`;

export const MateTimeWrapper = styled(MateFacilityInfoWrapper)`
  height: 257px;
  min-height: 257px;
`;

export const MateCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 12px;

  width: 350px;
  height: 207px;
  padding: 24px 20px;
  box-sizing: border-box;

  border-radius: 20px;

  background-color: #ffffff;
`;

export const MateCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const MateCardContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  gap: 20px;

  width: 302px;
  height: 111px;
`;

export const MateCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 4px;

  width: 302px;
  height: 51px;
`;

export const MateDetailInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 4px;

  width: 302px;
  height: 27px;
`;

export const daysLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 57px;
  height: 32px;

  border-radius: 40px;
  padding: 0px 12px;

  box-sizing: border-box;
  background-color: ${COLORS.GRAYSCALE_100};

  font-size: 13px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.13px;
  color: ${COLORS.GRAYSCALE_900};
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;

  background-color: ${COLORS.GRAYSCALE_300};

  &:not(:first-child) {
    margin-left: -15px;
  }
`;

export const MateInfo = styled.div`
  flex: 1;
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  gap: 8px;

  width: 100%;
`;

export const FacilityInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 16px;

  width: 100%;
  height: auto;
`;

export const FacilityInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 4px;

  width: 100%;
  height: 48px;
`;

export const FacilityInfoHeaderTitle = styled.div<{ $hasData: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $hasData }) =>
    $hasData ? "space-between" : "flex-start"};
  align-items: center;

  width: 100%;
  height: 24px;
`;

export const TimeInfoHeaderTitle = styled(FacilityInfoHeaderTitle)``;

export const FacilityCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 2px;

  width: 100%;
  height: 73px;

  padding: 16px 20px;
  box-sizing: border-box;

  border: 1px solid ${COLORS.GRAYSCALE_200};
  border-radius: 16px;
  background-color: #ffffff;
`;

export const TimeCard = styled(FacilityCard)``;

export const TimeInfoHeader = styled(FacilityInfoHeader)``;

export const Line = styled.div`
  width: 100%;
  height: 10px;

  background-color: ${COLORS.GRAYSCALE_50};
`;

export const TimeInfo = styled(FacilityInfo)``;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 50px;

  gap: 12px;
`;

export const StyledButton = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 16px;
  border: 1px solid #dcdcdc;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #545862;

  &:last-child {
    background-color: #004dff;
    color: #ffffff;
  }

  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.16px;
`;

export const ModalAlert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 180px;
  height: 81px;

  gap: 12px;
`;

export const ModalAlertHeader = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

export const HighlightText = styled.span`
  color: #fa6767;
`;

export const ModalAlertContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 42px;
`;
