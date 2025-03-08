import { useEffect, useState } from "react";
import SelectBar from "@/components/common/SelectBar/SelectBar";
import { COLORS } from "@/constants/Theme";
import Calendar from "./Calendar";
import * as S from "./CalendarComponent.style";
import { useQuery } from "@tanstack/react-query";
import getChallengeRecord from "@/services/challenge/getChallengeRecord";
import { useChallengeStore } from "@/stores/challengeStore";
import { dateFormat } from "@/utils/monthList";
import { RecordType } from "@/constants/Calendar";

interface CalendarComponentProps {
  onSelectionChange?: (date: Date | null) => void;
  isRegistration?: boolean;
  handleTodayWorkout?: (record: RecordType) => void;
}

export default function CalendarComponent({
  onSelectionChange,
  isRegistration,
  handleTodayWorkout,
}: CalendarComponentProps) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const { challenge } = useChallengeStore();

  const [selectedDate, setSelectedDate] = useState<string>(
    `${year}. ${month.toString().padStart(2, "0")}`,
  );

  const { data } = useQuery({
    queryKey: ["challengeRecord", selectedDate, challenge],
    queryFn: () =>
      getChallengeRecord(selectedDate.replace(". ", "-"), challenge?.id),
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (data) {
      const today = data.find(
        (item: RecordType) => item.recordDate === dateFormat(new Date()),
      );

      if (today && handleTodayWorkout) handleTodayWorkout(today);
    }
  }, [data]);

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
