import { api } from "./axiosInterceptor";

interface WorkoutType {
  code: string;
  name: string;
}

interface WorkoutTypeResponse {
  message: string;
  data: WorkoutType[];
}

export async function fetchWorkoutTypes(): Promise<WorkoutType[]> {
  try {
    const { data } = await api<WorkoutTypeResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/workout-types`,
    );

    console.log("✅ 운동 종류 API 응답 성공:", data);
    return data.data;
  } catch (error) {
    console.error("❌ 운동 종류 API 요청 실패:", error);
    throw error;
  }
}
