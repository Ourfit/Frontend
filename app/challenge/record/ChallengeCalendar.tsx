import RegistrationStepContent4 from "../registration/RegistrationStep/Content/RegistrationStepContent4";
import { useState } from "react";
import * as S from "./ChallengeCalendar.style";
import { CALENDAR_BADGE as BADGE, CalendarBadge } from "@/constants/Calendar";

interface ChallengeCalendarProps {
  onNext: () => void;
  onSelectionChange?: (date: Date | null) => void;
}

export const ChallengeCalendar = ({ onNext }: ChallengeCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const dateList: { [key: string]: CalendarBadge } = {
    "2025-02-03": BADGE.COMPLETE,
    "2025-02-05": BADGE.COMPLETE,
    "2025-02-07": BADGE.FAIL,
    "2025-02-09": BADGE.EXPECTED,
    "2025-02-10": BADGE.FAIL,
    "2025-02-12": BADGE.COMPLETE,
    "2025-02-14": BADGE.COMPLETE,
    "2025-02-17": BADGE.FAIL,
    "2025-02-19": BADGE.COMPLETE,
    "2025-02-21": BADGE.COMPLETE,
    "2025-02-24": BADGE.EXPECTED,
    "2025-02-26": BADGE.EXPECTED,
    "2025-02-28": BADGE.EXPECTED,
    "2025-03-02": BADGE.EXPECTED,
    "2025-03-08": BADGE.EXPECTED,
  };

  // const handleDateSelection = (date: Date | null) => {
  //   if (!selectedDate || selectedDate !== date) {
  //     setSelectedDate(date);
  //     onSelectionChange(date ? date.toDate() : null);
  //   }
  // };

  const isButtonDisabled = selectedDate === null;

  return (
    <S.RecordContainer>
      <RegistrationStepContent4
        onNext={onNext}
        onSelectionChange={setSelectedDate}
        disabled={isButtonDisabled}
        data={dateList}
      />
    </S.RecordContainer>
  );
};
