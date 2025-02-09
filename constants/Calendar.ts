export const CALENDAR_BADGE = {
  COMPLETE: "complete",
  FAIL: "fail",
  EXPECTED: "expected",
} as const;

export type CalendarBadge =
  (typeof CALENDAR_BADGE)[keyof typeof CALENDAR_BADGE];

export const WEEKS = ["월", "화", "수", "목", "금", "토", "일"];
