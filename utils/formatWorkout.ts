const DAY_TO_KOR: Record<string, string> = {
  MONDAY: "월",
  TUESDAY: "화",
  WEDNESDAY: "수",
  THURSDAY: "목",
  FRIDAY: "금",
  SATURDAY: "토",
  SUNDAY: "일",
};

export function toKoreanDay(day: string): string {
  return DAY_TO_KOR[day] || day;
}

export function toKoreanTime(timeStr: string): string {
  const [hh] = timeStr.split(":");
  let hour = Number(hh);
  let ampm = "오전";

  if (hour === 0) {
    hour = 12;
  } else if (hour === 12) {
    ampm = "오후";
  } else if (hour > 12) {
    ampm = "오후";
    hour -= 12;
  }
  return `${ampm} ${hour}시`;
}
