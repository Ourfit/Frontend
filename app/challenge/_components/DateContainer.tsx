import * as S from "./DateContainer.style";
import { CALENDAR_BADGE, CalendarBadge } from "@/constants/Calendar";
import XIcon from "@/assets/images/xfail.svg";
import { dateFormat } from "@/utils/monthList";

interface DateContainerProps {
  day: Date;
  isRegistration?: boolean;
  clickedDate: Date | null;
  handleClickDate: (day: Date) => void;
  nowDate: Date;
  data?: { [key: string]: CalendarBadge } | null;
}

export default function DateContainer({
  day,
  isRegistration,
  clickedDate,
  handleClickDate,
  nowDate,
  data,
}: DateContainerProps) {
  const sameDay = new Date().toDateString() === day.toDateString();
  const afterToday =
    isRegistration && new Date() <= new Date(day.toDateString());
  const clicked =
    clickedDate?.getMonth() === day.getMonth() &&
    clickedDate?.getDate() === day.getDate();

  const TYPE = data && data[dateFormat(day)];

  return (
    <S.DateWrapper
      $afterToday={afterToday}
      onClick={() => afterToday && handleClickDate(day)}
    >
      {nowDate.getMonth() === day.getMonth() && (
        <S.Date $sameDay={sameDay} $isRegistration={isRegistration}>
          {sameDay && !clickedDate && isRegistration && (
            <S.Highlight>{day.getDate()}</S.Highlight>
          )}
          {clicked && <S.Highlight>{day.getDate()}</S.Highlight>}
          {TYPE === CALENDAR_BADGE.COMPLETE && <S.Complete>💪🏻</S.Complete>}
          {TYPE === CALENDAR_BADGE.FAIL && (
            <S.Fail>
              <XIcon />
            </S.Fail>
          )}
          {TYPE === CALENDAR_BADGE.EXPECTED && (
            <S.Expected $sameDay={sameDay}>{day.getDate()}</S.Expected>
          )}
          {day.getDate()}
        </S.Date>
      )}
    </S.DateWrapper>
  );
}
