import { api } from "../axiosInterceptor";

export interface UpdateMatePlacePayload {
  placeName: string;
  address: string;
}

export async function updateMatePlace(
  mateId: number,
  payload: UpdateMatePlacePayload,
) {
  const response = await api.put(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/${mateId}/workouts/places`,
    payload,
  );

  return response.data;
}
