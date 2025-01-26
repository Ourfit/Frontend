"use client";

import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const MatchedMateContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const MateCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 390px;
  height: 255px;
  max-height: 255px;

  background-color: ${COLORS.GRAYSCALE_50};
`;

export const MateFacilityInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 169px;
  padding: 20px 20px 32px 20px;
  box-sizing: border-box;
  background-color: #ffffff;
`;

export const MateTimeWrapper = styled(MateFacilityInfoWrapper)``;

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

export const ProfileImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${COLORS.GRAYSCALE_300};
`;

export const MateInfo = styled.div`
  flex: 1;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 8px;

  cursor: pointer;
`;

export const FacilityInfo = styled.div`
  width: 100%;
  height: auto;

  max-height: 169px;
`;

export const Line = styled.div`
  width: 100%;
  height: 10px;

  background-color: ${COLORS.GRAYSCALE_50};
`;

export const TimeInfo = styled(FacilityInfo)``;

export const RegisterButton = styled.button`
  margin-top: 8px;
  padding: 8px 12px;
  background-color: ${COLORS.GRAYSCALE_200};
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
