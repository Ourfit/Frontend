import { useState } from "react";
import SelectBar from "@/components/common/SelectBar/SelectBar";
import { COLORS } from "@/constants/Theme";
import { CalendarBadge } from "@/constants/Calendar";
import Calendar from "./Calendar";
import * as S from "./CalendarComponent.style";

interface CalendarComponentProps {
  onSelectionChange: (date: Date | null) => void;
  isRegistration?: boolean;
  data?: { [key: string]: CalendarBadge } | null;
}

export default function CalendarComponent({
  onSelectionChange,
  isRegistration,
  data,
}: CalendarComponentProps) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const [selectedDate, setSelectedDate] = useState<string>(
    `${year}. ${month.toString().padStart(2, "0")}`,
  );

  return (
    <S.PeriodContentContainer>
      <S.PeriodContentWrapper>
        <SelectBar
          selectType="date"
          optionValue={selectedDate}
          setOption={setSelectedDate}
          width="101px"
          boxStyle={{
            padding: "12px",
            borderRadius: "12px",
            color: COLORS.GRAYSCALE_900,
            height: "45px",
          }}
          isCalendar={{
            startDate: !isRegistration ? new Date() : undefined,
          }}
        />
      </S.PeriodContentWrapper>
      <S.CalendarContentWrapper>
        <Calendar
          selectedDate={selectedDate}
          onSelectionChange={onSelectionChange}
          isRegistration={isRegistration}
          data={data}
        />
      </S.CalendarContentWrapper>
    </S.PeriodContentContainer>
  );
}
