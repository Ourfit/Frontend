import * as RS from "./Title/RegistrationStepTitle.style";
import RegistrationStepTitle4 from "./Title/RegistrationStepTitle4";
import RegistrationStepContent4 from "./Content/RegistrationStepContent4";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface RegistrationStep4Props {
  onNext: () => void;
  onSelectionChange: (date: Date | null) => void;
}

const RegistrationStep4 = ({ onNext, onSelectionChange }: RegistrationStep4Props) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleDateSelection = (date: Dayjs | null) => {
    if (!selectedDate || selectedDate !== date) {  // 상태 변경 전에 비교하여 불필요한 업데이트 방지
      setSelectedDate(date);
      onSelectionChange(date ? date.toDate() : null);
    }
  };
  return (
    <RS.MainContainer2>
      <RegistrationStepTitle4 onNext={onNext} />
      <RegistrationStepContent4
        onNext={onNext}
        onSelectionChange={handleDateSelection} // 날짜 선택 시 부모로 전달
      />
    </RS.MainContainer2>
  );
};

export default RegistrationStep4;
