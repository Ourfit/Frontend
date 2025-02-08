import React, { useEffect, useState } from "react";
import * as S from "./Calendar.style";

interface CalendarProps {
  selectedDate: string;
  onSelectionChange: (date: Date | null) => void;
}

export default function Calendar({
  selectedDate,
  onSelectionChange,
}: CalendarProps) {
  const nowDate = new Date(selectedDate);
  const [clickedDate, setClickedDate] = useState<Date | null>(null);

  useEffect(() => {
    setClickedDate(null);
  }, [selectedDate]);

  const monthList = (nowDate: Date) => {
    const nowYear = nowDate.getFullYear();
    const nowMonth = nowDate.getMonth();

    const dayOneWeek = new Date(nowYear, nowMonth, 1).getDay();
    const dayLastWeek = new Date(nowYear, nowMonth + 1, 0).getDay();

    const result: Date[] = [];
    const prevMonthEnd = new Date(nowYear, nowMonth, 0).getDate();
    const nowMonthEnd = new Date(nowYear, nowMonth + 1, 0).getDate();

    const adjustedDayOneWeek = dayOneWeek === 0 ? 6 : dayOneWeek - 1;
    const adjustedDayLastWeek = dayLastWeek === 0 ? 6 : dayLastWeek - 1;

    for (let i = adjustedDayOneWeek - 1; i >= 0; i--) {
      result.push(new Date(nowYear, nowMonth - 1, prevMonthEnd - i));
    }

    for (let i = 1; i <= nowMonthEnd; i++) {
      result.push(new Date(nowYear, nowMonth, i));
    }

    for (let i = 1; i < 7 - adjustedDayLastWeek; i++) {
      result.push(new Date(nowYear, nowMonth + 1, i));
    }

    return result;
  };

  const allDay: Date[] = monthList(nowDate);

  const weeks = ["월", "화", "수", "목", "금", "토", "일"];

  const handleClickDate = (day: Date) => {
    setClickedDate(day);
    onSelectionChange(day);
  };

  return (
    <S.CalendarContainer $clickedDate={!!clickedDate}>
      <S.WeekContainer>
        {weeks.map((week) => (
          <S.WeekWrapper key={week}>{week}</S.WeekWrapper>
        ))}
      </S.WeekContainer>
      <S.DateContainer>
        {allDay.map((day: Date) => {
          const sameDay = new Date().toDateString() === day.toDateString();
          const afterToday = new Date() <= new Date(day.toDateString());

          return (
            <S.DateWrapper
              key={day.getTime()}
              $afterToday={afterToday}
              onClick={() => handleClickDate(day)}
            >
              {nowDate.getMonth() === day.getMonth() && (
                <S.Date $sameDay={sameDay} $clickedDate={!!clickedDate}>
                  {sameDay && !clickedDate && (
                    <S.Highlight>{day.getDate()}</S.Highlight>
                  )}
                  {clickedDate?.getDate() === day.getDate() && (
                    <S.Highlight>{day.getDate()}</S.Highlight>
                  )}
                  {day.getDate()}
                </S.Date>
              )}
            </S.DateWrapper>
          );
        })}
      </S.DateContainer>
    </S.CalendarContainer>
  );
}
