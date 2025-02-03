"use client";
import { COLORS } from "@/constants/Theme";
import { styled } from "styled-components";

export const FilterPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 100%;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);

  width: 100%;
  max-width: 450px;
  height: 100%;

  background: #ffffff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  z-index: 9999;
  animation: slideUp 0.3s ease-in-out forwards;

  @keyframes slideUp {
    from {
      top: 100%;
    }
    to {
      top: 0;
    }
  }
`;

export const FilterPanelHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 76px;
`;

export const FilterPanelTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 4px;

  width: 100%;
  height: 48px;

  padding: 0px 20px;
  box-sizing: border-box;
`;

export const FilterPanelSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  max-height: calc(100vh - 169px);

  padding: 4px 20px 20px 20px;
  box-sizing: border-box;

  gap: 28px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const FilterFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 100%;
  max-width: 313px;
  justify-content: flex-start;
`;

export const FilterChip = styled.div<{ $selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid
    ${({ $selected }) => ($selected ? COLORS.BLUE_500 : "#e0e0e0")};
  border-radius: 12px;
  padding: 12px 20px;

  width: auto;
  height: 45px;
  box-sizing: border-box;

  white-space: nowrap;

  background-color: ${({ $selected }) =>
    $selected ? COLORS.BLUE_50 : "transparent"};

  color: ${({ $selected }) =>
    $selected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_600};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const GenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 12px;

  width: 276px;
  height: 78px;
`;

export const GenderOptionBox = styled.div`
  display: flex;
  gap: 12px;

  width: auto;
  height: 45px;
`;

export const GenderOption = styled.div<{ $selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;

  width: auto;
  height: 45px;

  border: 1px solid
    ${({ $selected }) => ($selected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_200)};
  border-radius: 12px;

  background-color: ${({ $selected }) =>
    $selected ? COLORS.BLUE_50 : "transparent"};
  color: ${({ $selected }) =>
    $selected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_600};

  padding: 12px 20px;
  box-sizing: border-box;
  white-space: nowrap;
`;

export const TimeInfoWrapper = styled(GenderWrapper)`
  height: 139px;
`;

export const TimeOptionBox = styled(GenderOptionBox)`
  flex-wrap: wrap;
  height: 100%;
`;

export const TimeOption = styled(GenderOption)`
  min-width: 80px;
  max-width: 92px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 12px;

  width: 313px;
  max-width: 313px;
  padding-bottom: 24px;
  box-sizing: border-box;
`;

export const ApplyButtonWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  max-width: 450px;
  height: 93px;

  background: #ffffff;
  padding: 12px 20px 28px 20px;
  box-sizing: border-box;
`;
