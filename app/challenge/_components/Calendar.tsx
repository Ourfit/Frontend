import React, { useState } from "react";
import * as S from "./Calendar.style";
import { monthList } from "@/utils/monthList";

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
              onClick={() => afterToday && handleClickDate(day)}
            >
              {nowDate.getMonth() === day.getMonth() && (
                <S.Date $sameDay={sameDay} $clickedDate={!!clickedDate}>
                  {sameDay && !clickedDate && (
                    <S.Highlight>{day.getDate()}</S.Highlight>
                  )}
                  {clickedDate?.getMonth() === day.getMonth() &&
                    clickedDate?.getDate() === day.getDate() && (
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
