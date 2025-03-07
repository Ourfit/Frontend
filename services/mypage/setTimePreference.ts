import { api } from "../axiosInterceptor";

export interface TimePreferencesPayload {
  preferredWorkoutTime: string | null;
  favoriteWorkouts: string[] | null;
  favoritePlaces:
    | {
        placeName: string;
        address: string;
      }[]
    | null;
}

export async function setTimePreference(payload: TimePreferencesPayload) {
  const { data } = await api.put(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me/workout-preferences`,
    payload,
  );
  return data;
}
