import * as S from "./DateContainer.style";
import { CALENDAR_BADGE, RecordType } from "@/constants/Calendar";
import XIcon from "@/assets/images/xfail.svg";
import { dateFormat } from "@/utils/monthList";
import { calculateDaysElapsed } from "@/utils/dateUtils";
import { useEffect, useState } from "react";

interface DateContainerProps {
  day: Date;
  isRegistration?: boolean;
  clickedDate: Date | null;
  handleClickDate: (day: Date) => void;
  nowDate: Date;
  data?: RecordType[];
}

export default function DateContainer({
  day,
  isRegistration,
  clickedDate,
  handleClickDate,
  nowDate,
  data,
}: DateContainerProps) {
  const [isHoliday, setIsHoliday] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sameDay = today.toDateString() === day.toDateString();
  const afterToday = isRegistration && today <= day;
  const prevToday = today > day;
  const clicked =
    clickedDate?.getMonth() === day.getMonth() &&
    clickedDate?.getDate() === day.getDate();
  const item = data?.find((v) => v.recordDate === dateFormat(day));

  const getHoliday = async () => {
    const response = await fetch(`/api/holiday?date=${dateFormat(day)}`);
    const json = await response.json();
    setIsHoliday(json.holiday && day.getDay() !== 6);
  };

  useEffect(() => {
    getHoliday();
  }, []);

  const getType = () => {
    if (!item) return "";
    if (item.isCompleted) return CALENDAR_BADGE.COMPLETE;
    return calculateDaysElapsed(item.recordDate || dateFormat(day)) > 0
      ? CALENDAR_BADGE.FAIL
      : CALENDAR_BADGE.EXPECTED;
  };

  const TYPE = getType();

  return (
    <S.DateWrapper
      $afterToday={afterToday}
      onClick={() => afterToday && handleClickDate(day)}
    >
      {nowDate.getMonth() === day.getMonth() && (
        <S.Date
          $sameDay={sameDay}
          $isRegistration={isRegistration}
          $prevToday={
            prevToday &&
            TYPE !== CALENDAR_BADGE.COMPLETE &&
            TYPE !== CALENDAR_BADGE.FAIL
          }
          $isHoliday={isHoliday}
        >
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
