import { useState, useEffect } from "react";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import * as RS from "../Content/RegistrationStepContent.style";

interface RegistrationStepContent4Props {
  onNext: () => void;
  onSelectionChange: (date: Dayjs | null) => void;  // 변경: isSelected -> date
}

const RegistrationStepContent4 = ({ onNext, onSelectionChange }: RegistrationStepContent4Props) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // 날짜 선택 여부와 선택된 날짜를 부모 컴포넌트에 전달
  useEffect(() => {
    onSelectionChange(selectedDate);  // 변경: isSelected에서 selectedDate로
    setIsButtonDisabled(selectedDate === null);  // 선택된 날짜 없으면 버튼 비활성화
  }, [selectedDate, onSelectionChange]);

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);  // 새로운 날짜 선택 시 상태 업데이트
    console.log("새로운 날짜 선택: ", date?.format("YYYY-MM-DD"));
  };

  return (
    <RS.MonthWrapper>
      <RS.SelectWrapper>
        <RS.Select
          $isSelected={selectedDate !== null}
          onChange={(e) => {
            const selectedMonth = parseInt(e.target.value);
            const newDate = dayjs().month(selectedMonth - 1);
            setSelectedDate(newDate);  // 월만 선택 시, 그에 맞는 날짜 설정
            console.log("선택된 월: ", newDate.format("YYYY-MM"));
          }}
        >
          <option value="">월</option>
          {[...Array(12)].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}월
            </option>
          ))}
        </RS.Select>
      </RS.SelectWrapper>

      <RS.CalendarContentWrapper>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar value={selectedDate} onChange={handleDateChange} />
        </LocalizationProvider>
      </RS.CalendarContentWrapper>
    </RS.MonthWrapper>
  );
};

export default RegistrationStepContent4;
