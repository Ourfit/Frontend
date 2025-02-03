import * as RS from "./Title/RegistrationStepTitle.style";
import RegistrationStepTitle4 from "./Title/RegistrationStepTitle4";
import RegistrationStepContent4 from "./Content/RegistrationStepContent4";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface RegistrationStep4Props {
  onNext: () => void;
  onSelectionChange: (date: Date | null) => void;
  disabled: boolean;
}

const RegistrationStep4 = ({
  onNext,
  onSelectionChange,
  disabled,
}: RegistrationStep4Props) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleDateSelection = (date: Dayjs | null) => {
    if (!selectedDate || selectedDate !== date) {
      setSelectedDate(date);
      onSelectionChange(date ? date.toDate() : null);
    }
  };
  return (
    <RS.MainContainer2>
      <RegistrationStepTitle4 onNext={onNext} />
      <RegistrationStepContent4
        onNext={onNext}
        onSelectionChange={handleDateSelection}
        disabled={disabled}
      />
    </RS.MainContainer2>
  );
};

export default RegistrationStep4;
