import { PageResponse } from "./pagination";
import { PreferredWorkoutTime } from "./user";

export interface MateInfo {
  id: number;
  profileUrl: string;
  nickname: string;
  gender: "M" | "F";
  age: number;
  skillLevel: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  introduction: string;
  preferredWorkoutTime: PreferredWorkoutTime;
  favoriteWorkouts: {
    code: string;
    name: string;
  }[];
}

export interface Mates extends PageResponse {
  content: MateInfo[];
}

export interface MateHistory {
  id: number;
  mateId: number;
  actionType: "APPLY" | "ACCEPT" | "UNMATE";
  isRead: boolean;
  actorId: number;
  actorNickname: string;
  targetId: number;
  targetNickname: string;
  createdAt: string;
}
