import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";

export interface UpdateMatePlacePayload {
  placeName: string;
  address: string;
}

export async function updateMatePlace(
  mateId: number,
  payload: UpdateMatePlacePayload,
) {
  const token = useTokenStore.getState().token;
  if (!token) {
    throw new Error("인증 토큰이 없습니다.");
  }

  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/${mateId}/workouts/places`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
}
