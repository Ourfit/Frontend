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
