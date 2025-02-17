import React, { useState } from "react";
import * as S from "./Calendar.style";
import { monthList } from "@/utils/monthList";
import { CalendarBadge, WEEKS } from "@/constants/Calendar";
import DateContainer from "./DateContainer";

interface CalendarProps {
  selectedDate: string;
  onSelectionChange: (date: Date | null) => void;
  isRegistration?: boolean;
  data?: { [key: string]: CalendarBadge } | null;
}

export default function Calendar({
  selectedDate,
  onSelectionChange,
  isRegistration,
  data,
}: CalendarProps) {
  const [clickedDate, setClickedDate] = useState<Date | null>(null);

  const nowDate = new Date(selectedDate);
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
        {allDay.map((day: Date) => (
          <DateContainer
            key={day.getTime()}
            day={day}
            isRegistration={isRegistration}
            clickedDate={clickedDate}
            handleClickDate={handleClickDate}
            nowDate={nowDate}
            data={data}
          />
        ))}
      </S.DateContainer>
    </S.CalendarContainer>
  );
}
