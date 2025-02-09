import React, { useState } from "react";
import * as S from "./Calendar.style";
import { monthList } from "@/utils/monthList";
import { Typography } from "@/components/atoms/Typography";
import { CalendarBadge, WEEKS } from "@/constants/Calendar";

interface CalendarProps {
  selectedDate: string;
  onSelectionChange: (date: Date | null) => void;
  isRegistration?: boolean;
  data?: { [key: string]: CalendarBadge };
}

export default function Calendar({
  selectedDate,
  onSelectionChange,
  isRegistration,
  data,
}: CalendarProps) {
  const nowDate = new Date(selectedDate);
  const [clickedDate, setClickedDate] = useState<Date | null>(null);

  const allDay: Date[] = monthList(nowDate);

  const handleClickDate = (day: Date) => {
    setClickedDate(day);
    onSelectionChange(day);
  };

  return (
    <S.CalendarContainer $clickedDate={isRegistration ? !!clickedDate : true}>
      <S.WeekContainer>
        {WEEKS.map((week) => (
          <S.WeekWrapper key={week}>{week}</S.WeekWrapper>
        ))}
      </S.WeekContainer>
      <S.DateContainer>
        {allDay.map((day: Date) => {
          const sameDay = new Date().toDateString() === day.toDateString();
          const afterToday =
            isRegistration && new Date() <= new Date(day.toDateString());
          const clicked =
            clickedDate?.getMonth() === day.getMonth() &&
            clickedDate?.getDate() === day.getDate();

          return (
            <S.DateWrapper
              key={day.getTime()}
              $afterToday={afterToday}
              onClick={() => afterToday && handleClickDate(day)}
            >
              {nowDate.getMonth() === day.getMonth() && (
                <S.Date
                  $sameDay={sameDay}
                  $clickedDate={!!clickedDate}
                  $isRegistration={isRegistration}
                >
                  {sameDay && !clickedDate && isRegistration && (
                    <S.Highlight>{day.getDate()}</S.Highlight>
                  )}
                  {clicked && <S.Highlight>{day.getDate()}</S.Highlight>}
                  {!isRegistration && sameDay ? (
                    <Typography.H4Sb>{day.getDate()}</Typography.H4Sb>
                  ) : (
                    <Typography.H4Md>{day.getDate()}</Typography.H4Md>
                  )}
                </S.Date>
              )}
            </S.DateWrapper>
          );
        })}
      </S.DateContainer>
    </S.CalendarContainer>
  );
}
