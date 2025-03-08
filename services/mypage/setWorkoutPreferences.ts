import { api } from "../axiosInterceptor";

export interface WorkoutPreferencesPayload {
  preferredWorkoutTime: string | null;
  favoriteWorkouts: string[] | null;
  favoritePlaces:
    | {
        placeName: string;
        address: string;
      }[]
    | null;
}

export async function setWorkoutPreferences(
  payload: WorkoutPreferencesPayload,
) {
  const { data } = await api.put(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me/workout-preferences`,
    payload,
  );
  return data;
}
