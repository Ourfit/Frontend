export type PreferredWorkoutTime =
  | "WEEKDAY_MORNING"
  | "WEEKDAY_AFTERNOON"
  | "WEEKDAY_EVENING"
  | "WEEKEND_MORNING"
  | "WEEKEND_AFTERNOON"
  | "WEEKEND_EVENING";

export interface User {
  id: number;
  oAuthProvider: string;
  profileUrl: string;
  email: string;
  nickname: string;
  gender: "M" | "F";
  region1: string;
  region2: string;
  region3: string;
  skillLevel: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  introduction: string;
  openChatUrl: string;
  preferredWorkoutTime: PreferredWorkoutTime;
  favoriteWorkouts: {
    code: string;
    name: string;
  }[];
  favoritePlaces: {
    placeName: string;
    address: string;
  }[];
  createdAt: string;
  nicknameUpdatedAt: string;
}
