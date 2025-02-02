import { useState, useEffect } from "react";
import * as RS from "../Content/RegistrationStepContent.style";

interface RegistrationStepContent3Props {
  onNext: () => void;
  onSelectionChange: (isSelected: boolean) => void;
}

const RegistrationStepContent3 = ({
  onNext,
  onSelectionChange,
}: RegistrationStepContent3Props) => {
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  useEffect(() => {
    onSelectionChange(selectedMonth !== ""); 
    console.log('선택된 문자: ', selectedMonth); 
  }, [selectedMonth, onSelectionChange]);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <RS.MonthWrapper>
      <RS.MonthContentWrapper>
        <RS.Select
          id="month-select"
          value={selectedMonth}
          onChange={handleMonthChange}
          $isSelected={selectedMonth !== ""}
        >
          <option value="">00개월</option>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
            <option key={month} value={month.toString()}>
              {month}개월
            </option>
          ))}
        </RS.Select>
      </RS.MonthContentWrapper>
    </RS.MonthWrapper>
  );
};

export default RegistrationStepContent3;
