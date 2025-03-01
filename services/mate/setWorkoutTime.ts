import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";

export interface UpdateMateTimePayload {
  workoutDays: string[];
  startAt: string;
  endAt: string;
}

export const updateMateTime = async (
  mateId: number,
  payload: UpdateMateTimePayload,
) => {
  const token = useTokenStore.getState().token;

  if (!token) {
    throw new Error("인증 토큰이 없습니다. 로그인하세요.");
  }

  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/${mateId}/workouts/times`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    console.error("updateMateTime 실패", error);
    throw error;
  }
};
