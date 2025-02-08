import { useState } from "react";
import * as RS from "../Content/RegistrationStepContent.style";
import SelectBar from "@/components/common/SelectBar/SelectBar";
import Calendar from "@/app/challenge/_components/Calendar";
import { COLORS } from "@/constants/Theme";

interface RegistrationStepContent4Props {
  onNext: () => void;
  onSelectionChange: (date: Date | null) => void;
  disabled: boolean;
}

const RegistrationStepContent4 = ({
  onSelectionChange,
}: RegistrationStepContent4Props) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const [selectedDate, setSelectedDate] = useState<string>(
    `${year}. ${month.toString().padStart(2, "0")}`,
  );
  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // useEffect(() => {
  //   onSelectionChange(selectedDate);
  //   setIsButtonDisabled(selectedDate === null);
  // }, [selectedDate, onSelectionChange]);

  return (
    <RS.PeriodContentContainer>
      <RS.PeriodContentWrapper>
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
        />
      </RS.PeriodContentWrapper>
      <RS.CalendarContentWrapper>
        <Calendar
          selectedDate={selectedDate}
          onSelectionChange={onSelectionChange}
        />
      </RS.CalendarContentWrapper>
    </RS.PeriodContentContainer>
  );
};

export default RegistrationStepContent4;
