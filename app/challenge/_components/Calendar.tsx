import React from "react";
import * as S from "./Calendar.style";

interface CalendarProps {
  selectedDate: string;
}

export default function Calendar({ selectedDate }: CalendarProps) {
  const today = new Date();
  const nowDate = new Date(selectedDate);

  const monthList = (nowDate: Date) => {
    const nowYear = nowDate.getFullYear();
    const nowMonth = nowDate.getMonth();

    const dayOneWeek = new Date(nowYear, nowMonth, 1).getDay();
    const dayLastWeek = new Date(nowYear, nowMonth + 1, 0).getDay();

    const result: Date[] = [];
    const prevMonthEnd = new Date(nowYear, nowMonth, 0).getDate();
    const nowMonthEnd = new Date(nowYear, nowMonth + 1, 0).getDate();

    for (let i = dayOneWeek - 1; i >= 0; i--) {
      result.push(new Date(nowYear, nowMonth - 1, prevMonthEnd - i));
    }

    for (let i = 1; i <= nowMonthEnd; i++) {
      result.push(new Date(nowYear, nowMonth, i));
    }

    for (let i = 1; i < 7 - dayLastWeek; i++) {
      result.push(new Date(nowYear, nowMonth + 1, i));
    }

    return result;
  };

  const allDay: Date[] = monthList(nowDate);

  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <S.CalendarContainer>
      {weeks.map((week) => (
        <S.WeekContainer key={week}>{week}</S.WeekContainer>
      ))}
      {allDay.map((day: Date) => (
        <S.DateContainer
          key={day.getTime()}
          $sameDay={today.toDateString() === day.toDateString()}
        >
          <p>{day.getDate()}</p>
        </S.DateContainer>
      ))}
    </S.CalendarContainer>
  );
}
