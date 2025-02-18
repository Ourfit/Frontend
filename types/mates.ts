import { PageResponse } from "./pagination";
import { PreferredWorkoutTime } from "./user";

export interface MateInfo {
  id: number;
  profileUrl: string;
  nickname: string;
  gender: "M" | "F";
  skillLevel: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  introduction: string;
  preferredWorkoutTime: PreferredWorkoutTime[];
  favoriteWorkouts: {
    code: string;
    name: string;
  }[];
}

export interface Mates extends PageResponse {
  content: MateInfo[];
}
