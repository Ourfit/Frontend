import { PreferredWorkoutTime } from "@/types/user";

export const WorkoutTimeLabels: Record<PreferredWorkoutTime, string> = {
  WEEKDAY_MORNING: "평일 아침",
  WEEKDAY_AFTERNOON: "평일 낮",
  WEEKDAY_EVENING: "평일 저녁",
  WEEKEND_MORNING: "주말 아침",
  WEEKEND_AFTERNOON: "주말 낮",
  WEEKEND_EVENING: "주말 저녁",
};

export const GROUP_TYPES = {
  REGION: "동네",
  WORKOUT: "운동",
  TIME: "시간",
} as const;

export const skillLevelMap: Record<string, string> = {
  BEGINNER: "운동초보",
  INTERMEDIATE: "운동중수",
  ADVANCED: "운동고수",
};
