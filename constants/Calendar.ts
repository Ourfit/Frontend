export const CALENDAR_BADGE = {
  COMPLETE: "complete",
  FAIL: "fail",
  EXPECTED: "expected",
} as const;

export type CalendarBadge =
  (typeof CALENDAR_BADGE)[keyof typeof CALENDAR_BADGE];

export type RecordType = {
  id: number;
  isCompleted: boolean;
  recordDate: string;
};

export const WEEKS = ["일", "월", "화", "수", "목", "금", "토"];
