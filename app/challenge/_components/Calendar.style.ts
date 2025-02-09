import { TypographyCss } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const CalendarContainer = styled.div<{
  $clickedDate?: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;

  opacity: ${({ $clickedDate = false }) => !$clickedDate && 0.8};
`;

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 4px 20px;
  place-items: center;
`;

export const WeekWrapper = styled.div`
  ${TypographyCss.H4Md}

  color: ${COLORS.GRAYSCALE_700};
  width: 30px;
  height: 30px;
  text-align: center;
`;

export const DateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 8px;
  padding: 0 20px;
  place-items: center;
`;

export const DateWrapper = styled.div<{
  $afterToday?: boolean;
}>`
  text-align: center;
  padding-bottom: 4px;
  width: 32px;
  height: 40px;
  color: ${COLORS.GRAYSCALE_500};
  box-sizing: content-box;

  cursor: ${({ $afterToday = false }) => ($afterToday ? "pointer" : "")};
`;

export const Date = styled.div<{
  $sameDay: boolean;
  $clickedDate?: boolean;
  $isRegistration?: boolean;
}>`
  position: ${({ $sameDay, $clickedDate }) =>
    ($sameDay || $clickedDate) && "relative"};

  color: ${({ $sameDay, $isRegistration }) =>
    $sameDay && !$isRegistration && COLORS.BLUE_500};
`;

export const Highlight = styled.div`
  position: absolute;
  background-color: ${COLORS.BLUE_500};
  width: 28px;
  height: 28px;
  top: -3.5px;
  left: calc(50% - 14px);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.BASE_WHITE};
`;
