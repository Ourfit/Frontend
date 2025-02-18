export type PreferredWorkoutTime =
  | "WEEKDAY_MORNING"
  | "WEEKDAY_AFTERNOON"
  | "WEEKDAY_EVENING"
  | "WEEKEND_MORNING"
  | "WEEKEND_AFTERNOON"
  | "WEEKEND_EVENING";

export interface User {
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
  favoritePlaces: {
    placeName: string;
    address: string;
  }[];
  createdAt: string;
  nicknameUpdatedAt: string;
}
