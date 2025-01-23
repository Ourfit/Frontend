import { COLORS } from "@/constants/Theme";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TypographyCss } from "@/components/atoms/Typography";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`;

export const HighlightedText = styled.span`
  color: ${COLORS.BLUE_500};
`;

export const StyledCalendarWrapper = styled.div`
  margin-top: 16px;
`;

export const NavigationWrapper = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;

  select {
    width: 101px;
    height: 45px;
    border-radius: 12px;
    padding: 12px;
    border: 1.4px solid ${COLORS.GRAYSCALE_200};
    appearance: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ${TypographyCss.H4Md}
  }

  select::-webkit-scrollbar {
    display: none;
  }

  select:focus {
    outline: none;
  }

  svg {
    position: absolute;
    right: 12px;
    pointer-events: none;
  }
`;

export const StyledCalendar = styled(Calendar)`
  margin-top: 12px;
  padding: 20px 8px 8px 8px;
  background-color: ${COLORS.BASE_WHITE};
  border: 1px solid ${COLORS.GRAYSCALE_200};
  border-radius: 20px;
  .react-calendar__navigation {
    display: none; /* 기본 네비게이션 숨김 */
  }

  .react-calendar__month-view__weekdays {
    padding: 0 20px;
  }

  .react-calendar__month-view__days {
    padding: 0 20px;
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    ${TypographyCss.H4Md}
    color: ${COLORS.GRAYSCALE_700};
  }

  .react-calendar__tile--now {
    background-color: ${COLORS.BLUE_500};
    border-radius: 50%;
    abbr {
      color: ${COLORS.BASE_WHITE};
    }
  }

  .react-calendar__tile {
    padding: 5.5px 9px;
    .react-calendar__month-view__days__day {
      ${TypographyCss.H4Md}
    }
  }
`;

export const NextButtonWrapper = styled.div`
  position: absolute;
  bottom: 28px;
  width: 100%;
`;
