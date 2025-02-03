import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 8px;
  gap: 16px;
`;

export const MonthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const NumberContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const MonthContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const PeriodContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 30%;
`;

export const CalendarContentWrapper = styled.div`
  display: flex;
  margin-top: 5%;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 20px;
  color: ${COLORS.GRAYSCALE_700};
  background-color: ${COLORS.BASE_WHITE};
  border: 1px solid ${COLORS.GRAYSCALE_200};
`;

export const NumberContent = styled.div<{ $isSelected: boolean }>`
  display: flex;
  padding: 12px 20px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid
    ${(props) => (props.$isSelected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_200)};
  background: ${(props) =>
    props.$isSelected ? COLORS.BLUE_50 : COLORS.BASE_WHITE};
  cursor: pointer;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
  color: ${(props) =>
    props.$isSelected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_600};
  transition: background-color 0.3s ease;
`;

export const Select = styled.select<{ $isSelected: boolean }>`
  display: flex;
  width: 100%;
  height: 52px;
  padding: 0px 20px;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid
    ${(props) => (props.$isSelected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_200)};
  background: ${(props) =>
    props.$isSelected ? COLORS.BLUE_50 : COLORS.BASE_WHITE};
  cursor: pointer;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
  color: ${(props) =>
    props.$isSelected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_600};
  transition: background-color 0.3s ease;
`;

export const PeriodSelect = styled.select<{ $isSelected: boolean }>`
  display: flex;
  width: 100%;
  height: 52px;
  padding: 0px 20px;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  border: 1px solid
    ${(props) => (props.$isSelected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_200)};
  background: ${(props) =>
    props.$isSelected ? COLORS.BLUE_50 : COLORS.BASE_WHITE};
  cursor: pointer;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
  color: ${(props) =>
    props.$isSelected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_600};
  transition: background-color 0.3s ease;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: ${COLORS.BLUE_500};
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    background-color: ${COLORS.GRAYSCALE_300};
    cursor: not-allowed;
  }
`;
