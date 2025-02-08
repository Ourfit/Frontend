import { useState, useEffect } from "react";
import * as RS from "../Content/RegistrationStepContent.style";
import SelectBar from "@/components/common/SelectBar/SelectBar";

interface RegistrationStepContent3Props {
  onNext: () => void;
  onSelectionChange: (isSelected: boolean) => void;
}

const RegistrationStepContent3 = ({
  onSelectionChange,
}: RegistrationStepContent3Props) => {
  const [selectedMonth, setSelectedMonth] = useState<string>("00개월");

  useEffect(() => {
    onSelectionChange(selectedMonth !== "00개월");
  }, [selectedMonth, onSelectionChange]);

  return (
    <RS.MonthWrapper>
      <RS.MonthContentWrapper>
        <SelectBar
          selectType="month"
          optionValue={selectedMonth}
          setOption={setSelectedMonth}
        />
      </RS.MonthContentWrapper>
    </RS.MonthWrapper>
  );
};

export default RegistrationStepContent3;
