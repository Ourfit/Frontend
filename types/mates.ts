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
  actionType: "APPLY" | "ACCEPT" | "UNMATE" | "RECEIVE";
  roleType: "ACTOR" | "TARGET";
  isRead: boolean;
  actorId: number;
  actorNickname: string;
  actorProfileImageUrl: string;
  targetId: number;
  targetNickname: string;
  targetProfileImageUrl: string;
  createdAt: string;
}
