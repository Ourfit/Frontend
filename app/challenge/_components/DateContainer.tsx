import { Typography } from "@/components/atoms/Typography";
import * as S from "./DateContainer.style";
import { CalendarBadge } from "@/constants/Calendar";

interface DateContainerProps {
  day: Date;
  isRegistration?: boolean;
  clickedDate: Date | null;
  handleClickDate: (day: Date) => void;
  nowDate: Date;
  data?: { [key: string]: CalendarBadge };
}

export default function DateContainer({
  day,
  isRegistration,
  clickedDate,
  handleClickDate,
  nowDate,
}: DateContainerProps) {
  const sameDay = new Date().toDateString() === day.toDateString();
  const afterToday =
    isRegistration && new Date() <= new Date(day.toDateString());
  const clicked =
    clickedDate?.getMonth() === day.getMonth() &&
    clickedDate?.getDate() === day.getDate();

  return (
    <S.DateWrapper
      $afterToday={afterToday}
      onClick={() => afterToday && handleClickDate(day)}
    >
      {nowDate.getMonth() === day.getMonth() && (
        <S.Date
          $sameDay={sameDay}
          $clickedDate={!!clickedDate}
          $isRegistration={isRegistration}
        >
          {sameDay && !clickedDate && isRegistration && (
            <S.Highlight>{day.getDate()}</S.Highlight>
          )}
          {clicked && <S.Highlight>{day.getDate()}</S.Highlight>}
          {!isRegistration && sameDay ? (
            <Typography.H4Sb>{day.getDate()}</Typography.H4Sb>
          ) : (
            <Typography.H4Md>{day.getDate()}</Typography.H4Md>
          )}
        </S.Date>
      )}
    </S.DateWrapper>
  );
}
