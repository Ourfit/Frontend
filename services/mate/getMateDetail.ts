import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";

interface MateDetailApiResponse {
  message: string;
  data: MateDetail;
}

export interface MateDetail {
  id: number;
  oAuthProvider: string;
  profileUrl: string;
  email: string;
  nickname: string;
  gender: string;
  age: number;
  region1: string;
  region2: string;
  region3: string;
  skillLevel: string;
  introduction: string;
  openChatUrl: string;
  preferredWorkoutTime: string;

  favoriteWorkouts: {
    code: string;
    name: string;
  }[];

  favoritePlaces: {
    placeName: string;
    address: string;
  }[];
}

/**
 *
 * @param userId
 */
export async function getMateDetail(userId: number): Promise<MateDetail> {
  const token = useTokenStore.getState().token;
  if (!token) throw new Error("인증 토큰이 없습니다. 로그인하세요.");

  try {
    const response = await axios.get<MateDetailApiResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );
    return response.data.data;
  } catch (error) {
    console.error("❌ getMateDetail API 요청 실패:", error);
    throw error;
  }
}
