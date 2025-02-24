import { PreferredWorkoutTime } from "@/types/user";

export const WorkoutTimeLabels: Record<PreferredWorkoutTime, string> = {
  WEEKDAY_MORNING: "평일 아침",
  WEEKDAY_AFTERNOON: "평일 오후",
  WEEKDAY_EVENING: "평일 저녁",
  WEEKEND_MORNING: "주말 아침",
  WEEKEND_AFTERNOON: "주말 오후",
  WEEKEND_EVENING: "주말 저녁",
};

export const GROUP_TYPES = {
  REGION: "동네",
  WORKOUT: "운동",
  TIME: "시간",
};
