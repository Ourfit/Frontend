import { Typography } from "@/components/atoms/Typography";
import * as S from "./StartDate.style";
import { COLORS } from "@/constants/Theme";
import { useState } from "react";
import ChevronDown from "@/assets/images/chevron-down.svg";
import moment from "moment";
import Button from "@/components/common/Button";
import { REGISTER_STEPS_LABEL } from "@/constants/ChallengeSettings";
import { ChallengeRegisterStepProps } from "@/types/step";

const StartDate = ({ nextStep }: ChallengeRegisterStepProps) => {
  const [date, setDate] = useState(new Date());

  const handleMonthYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [year, month] = e.target.value.split(".").map(Number);
    const newDate = new Date(date);
    newDate.setFullYear(year);
    newDate.setMonth(month - 1);
    setDate(newDate);
  };

  const generateMonthYearOptions = () => {
    const options = [];
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // 현재 달 (1-based)

    for (let year = currentYear; year <= currentYear + 1; year++) {
      const startMonth = year === currentYear ? currentMonth : 1;
      const endMonth = year === currentYear + 1 ? 12 : 12;

      for (let month = startMonth; month <= endMonth; month++) {
        options.push(`${year}.${" "}${month.toString().padStart(2, "0")}`);
      }
    }
    return options;
  };

  return (
    <>
      <S.TextWrapper>
        <Typography.H1Sb color={COLORS.GRAYSCALE_900}>
          <S.HighlightedText>언제부터&nbsp;</S.HighlightedText>
          시작할까요?
        </Typography.H1Sb>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          챌린지의 시작 기간은 나중에 수정할 수 없어요.
        </Typography.H4Md>
      </S.TextWrapper>
      <S.StyledCalendarWrapper>
        <S.NavigationWrapper>
          <select
            value={`${date.getFullYear()}.${" "}${(date.getMonth() + 1)
              .toString()
              .padStart(2, "0")}`}
            onChange={handleMonthYearChange}
          >
            {generateMonthYearOptions().map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown width={12} height={12} stroke={COLORS.GRAYSCALE_700} />
        </S.NavigationWrapper>
        <S.StyledCalendar formatDay={(_, date) => moment(date).format("D")} />
      </S.StyledCalendarWrapper>
      <S.NextButtonWrapper>
        <Button
          size="l"
          variant="primary"
          disabled={false}
          onClick={() => nextStep(REGISTER_STEPS_LABEL.START_DATE, date)}
        >
          다음
        </Button>
      </S.NextButtonWrapper>
    </>
  );
};

export default StartDate;
