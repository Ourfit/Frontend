import RegistrationStepContent4 from "../registration/RegistrationStep/Content/RegistrationStepContent4";
import { useState } from "react";
import * as S from "./ChallengeCalendar.style";
import { CalendarBadge } from "@/constants/Calendar";

interface ChallengeCalendarProps {
  onNext: () => void;
  onSelectionChange?: (date: Date | null) => void;
  data?: { [key: string]: CalendarBadge } | null;
}

export const ChallengeCalendar = ({ onNext, data }: ChallengeCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const isButtonDisabled = selectedDate === null;

  return (
    <S.RecordContainer>
      <RegistrationStepContent4
        onNext={onNext}
        onSelectionChange={setSelectedDate}
        disabled={isButtonDisabled}
        data={data}
      />
    </S.RecordContainer>
  );
};
