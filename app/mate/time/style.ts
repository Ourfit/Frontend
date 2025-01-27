"use client";

import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 100%;
  height: 100%;
`;

export const TimeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 24px;

  width: 100%;
  height: 229px;

  padding: 32px 20px 40px 20px;
  box-sizing: border-box;
`;

export const DetailWeekInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 276px;
  height: 106px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;

  width: auto;
`;

export const DayOfWeeksBox = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 53px;
  height: 45px;

  padding: 12px 20px;
  box-sizing: border-box;

  border: 1px solid
    ${({ $isSelected }) =>
      $isSelected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_200};
  border-radius: 12px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? COLORS.BLUE_50 : "#ffffff"};
  color: ${({ $isSelected }) =>
    $isSelected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_600};
`;

export const DetailInfo = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 52px;

  &:first-child {
    width: 140px;
  }
`;

export const DayOfTheWeekInfo = styled(TimeInfo)`
  height: 251px;
`;

export const Content = styled.div`
  width: 100%;
  height: 480px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 93px;

  padding: 12px 0px 28px 0px;
`;

export const HighlightedText = styled.span`
  color: #004dff;
`;
