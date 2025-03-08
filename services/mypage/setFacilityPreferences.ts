import { api } from "../axiosInterceptor";

export interface FacilityPreferencesPayload {
  preferredWorkoutTime: string | null;
  favoriteWorkouts: string[] | null;
  favoritePlaces:
    | {
        placeName: string;
        address: string;
      }[]
    | null;
}

export async function setFacilityPreference(
  payload: FacilityPreferencesPayload,
) {
  const { data } = await api.put(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me/workout-preferences`,
    payload,
  );
  return data;
}
