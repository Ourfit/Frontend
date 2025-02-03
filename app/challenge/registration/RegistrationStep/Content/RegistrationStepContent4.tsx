import { useState, useEffect } from "react";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import * as RS from "../Content/RegistrationStepContent.style";

interface RegistrationStepContent4Props {
  onNext: () => void;
  onSelectionChange: (date: Dayjs | null) => void;
  disabled: boolean;
}

const RegistrationStepContent4 = ({
  onNext,
  onSelectionChange,
  disabled,
}: RegistrationStepContent4Props) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    onSelectionChange(selectedDate);
    setIsButtonDisabled(selectedDate === null);
  }, [selectedDate, onSelectionChange]);

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
    console.log("새로운 날짜 선택: ", date?.format("YYYY-MM-DD"));
  };

  return (
    <>
      <RS.PeriodContentWrapper>
        <RS.PeriodSelect
          $isSelected={selectedDate !== null}
          onChange={(e) => {
            const selectedMonth = parseInt(e.target.value);
            const newDate = dayjs().month(selectedMonth - 1);
            setSelectedDate(newDate);
            console.log("선택된 월: ", newDate.format("YYYY-MM"));
          }}
        >
          <option value="">월</option>
          {[...Array(12)].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}월
            </option>
          ))}
        </RS.PeriodSelect>
      </RS.PeriodContentWrapper>

      <RS.CalendarContentWrapper>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar value={selectedDate} onChange={handleDateChange} />
        </LocalizationProvider>
      </RS.CalendarContentWrapper>
    </>
  );
};

export default RegistrationStepContent4;
