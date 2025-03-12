import { TypographyCss } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const DateWrapper = styled.div<{
  $afterToday?: boolean;
}>`
  text-align: center;
  padding-bottom: 4px;
  width: 32px;
  height: 40px;
  color: ${COLORS.GRAYSCALE_600};
  box-sizing: content-box;

  cursor: ${({ $afterToday = false }) => ($afterToday ? "pointer" : "")};
`;

export const Date = styled.div<{
  $sameDay: boolean;
  $isRegistration?: boolean;
  $prevToday?: boolean;
  $isHoliday: boolean;
}>`
  ${({ $sameDay, $isRegistration }) =>
    $sameDay && !$isRegistration ? TypographyCss.H4Sb : TypographyCss.H4Md}

  position: relative;
  color: ${({ $isHoliday }) => $isHoliday && "#EF7A7A"};
  color: ${({ $sameDay, $isRegistration }) =>
    $sameDay && !$isRegistration && COLORS.BLUE_500};

  opacity: ${({ $prevToday }) => $prevToday && 0.4};
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

export const Complete = styled(Highlight)`
  border: 1.08px dashed ${COLORS.BLUE_50};
  box-sizing: border-box;
`;

export const Fail = styled(Highlight)`
  background-color: ${COLORS.GRAYSCALE_200};
  border: 1.08px dashed ${COLORS.GRAYSCALE_400};

  & > svg {
    width: 16px;
    height: 16px;
  }
`;

export const Expected = styled(Highlight)<{ $sameDay: boolean }>`
  ${({ $sameDay }) => ($sameDay ? TypographyCss.H4Sb : TypographyCss.H4Md)}

  background-color: ${COLORS.BASE_WHITE};
  border: 1.08px dashed ${COLORS.GRAYSCALE_400};
  color: ${({ $sameDay }) =>
    $sameDay ? COLORS.BLUE_500 : COLORS.GRAYSCALE_600};
`;
