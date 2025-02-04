import * as RS from "../registration/RegistrationStep/Title/RegistrationStepTitle.style";
import RegistrationStepContent4 from "../registration/RegistrationStep/Content/RegistrationStepContent4";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import * as S from "./ChallengeCalendar.style";

interface ChallengeCalendarProps {
  onNext: () => void;
  onSelectionChange: (date: Date | null) => void;
}

export const ChallengeCalendar = ({
  onNext,
  onSelectionChange,
}: ChallengeCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleDateSelection = (date: Dayjs | null) => {
    if (!selectedDate || selectedDate !== date) {
      setSelectedDate(date);
      onSelectionChange(date ? date.toDate() : null);
    }
  };

  const isButtonDisabled = selectedDate === null;

  return (
    <S.RecordContainer>
      <RegistrationStepContent4
        onNext={onNext}
        onSelectionChange={handleDateSelection}
        disabled={isButtonDisabled}
      />
    </S.RecordContainer>
  );
};
