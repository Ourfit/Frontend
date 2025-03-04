import { api } from "../axiosInterceptor";

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
  try {
    const response = await api<MateDetailApiResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/${userId}`,
    );
    return response.data.data;
  } catch (error) {
    console.error("❌ getMateDetail API 요청 실패:", error);
    throw error;
  }
}
