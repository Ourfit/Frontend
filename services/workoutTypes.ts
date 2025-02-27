import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";

interface WorkoutType {
  code: string;
  name: string;
}

interface WorkoutTypeResponse {
  message: string;
  data: WorkoutType[];
}

export async function fetchWorkoutTypes(): Promise<WorkoutType[]> {
  const token = useTokenStore.getState().token;
  if (!token) {
    throw new Error("인증 토큰이 없습니다. 로그인하세요.");
  }
  try {
    const { data } = await axios.get<WorkoutTypeResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/workout-types`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );

    console.log("✅ 운동 종류 API 응답 성공:", data);
    return data.data;
  } catch (error) {
    console.error("❌ 운동 종류 API 요청 실패:", error);
    throw error;
  }
}
