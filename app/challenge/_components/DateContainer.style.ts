import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

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
