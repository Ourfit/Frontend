import NotificationBanner from "@/components/NotificationBanner/NotificationBanner";
import CalendarComponent from "../Calendar/CalendarComponent";
import * as S from "../../style";
import { useState } from "react";
import { RecordType } from "@/constants/Calendar";

export default function ChallengeRecord() {
  const [todayRecord, setTodayRecord] = useState<RecordType | null>(null);

  const handleTodayWorkout = (record: RecordType) => {
    if (record) {
      setTodayRecord(record);
    }
  };

  return (
    <>
      <NotificationBanner isRecord todayRecord={todayRecord} />
      <S.CalendarWrapper>
        <CalendarComponent handleTodayWorkout={handleTodayWorkout} />
      </S.CalendarWrapper>
    </>
  );
}
