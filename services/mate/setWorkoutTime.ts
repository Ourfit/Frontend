import { api } from "../axiosInterceptor";

export interface UpdateMateTimePayload {
  workoutDays: string[];
  startAt: string;
  endAt: string;
}

export const updateMateTime = async (
  mateId: number,
  payload: UpdateMateTimePayload,
) => {
  try {
    const response = await api.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/${mateId}/workouts/times`,
      payload,
    );
    return response.data;
  } catch (error) {
    console.error("updateMateTime 실패", error);
    throw error;
  }
};
