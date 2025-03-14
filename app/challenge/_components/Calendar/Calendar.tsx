import React, { useState } from "react";
import * as S from "./Calendar.style";
import { dateFormat, monthList } from "@/utils/monthList";
import { RecordType, WEEKS } from "@/constants/Calendar";
import DateContainer from "./DateContainer";
import { useQuery } from "@tanstack/react-query";
import getHolidays from "@/services/challenge/getHolidays";

interface CalendarProps {
  selectedDate: string;
  onSelectionChange?: (date: Date | null) => void;
  isRegistration?: boolean;
  data?: RecordType[];
}

export default function Calendar({
  selectedDate,
  onSelectionChange,
  isRegistration,
  data,
}: CalendarProps) {
  const [clickedDate, setClickedDate] = useState<Date | null>(null);

  const parseDate = (dateString: string) => {
    const [year, month] = dateString.split(". ").map(Number);
    return new Date(year, month - 1, 1);
  };

  const nowDate = parseDate(selectedDate);
  const allDay: Date[] = monthList(nowDate);

  const handleClickDate = (date: Date) => {
    if (onSelectionChange) {
      setClickedDate(date);
      onSelectionChange(date);
    }
  };

  const { data: holidays, isLoading } = useQuery({
    queryKey: ["holidays", selectedDate],
    queryFn: () => getHolidays(dateFormat(nowDate).slice(0, -3)),
    staleTime: 1000 * 60 * 60 * 24 * 30,
    gcTime: 1000 * 60 * 60 * 24 * 365,
  });

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
            holidays={
              !holidays || !holidays.length || isLoading ? [] : holidays
            }
            data={data}
          />
        ))}
      </S.DateContainer>
    </S.CalendarContainer>
  );
}
