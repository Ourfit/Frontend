import { DayLabel } from "@/constants/Challenge";

export interface ChallengeUserInfo {
  id: number;
  nickname: string;
  age: number;
  gender: string;
  profileUrl: string;
  skillLevel: string;
  isMine?: boolean;
}

export interface Challenge {
  challengeId: number;
  dayElapsed: number;
  completionRate: number;
  remainingDays: number;
  goalWorkoutDayOfWeeks: DayLabel[];
  startAt: string;
  endAt: string;
}
