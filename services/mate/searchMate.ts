import { useTokenStore } from "@/stores/tokenStore";
import { api } from "../axiosInterceptor";

interface MateApiResponse {
  message: string;
  data: MateListResponse;
}

export interface MateListResponse {
  content: MateItem[];
  totalPages: number;
  pageable: {
    pageNumber: number;
  };
}

export interface MateItem {
  id: number;
  nickname: string;
  age: number;
  gender: string;
  profileUrl: string;
  introduction: string;
  favoriteWorkouts: { code: string; name: string }[];
  preferredWorkoutTime: string;
}

/**
 * @param pageParam
 * @param gender
 * @param preferredTimes
 * @param workoutTypes
 * @param size
 */
export async function fetchMates({
  pageParam = 0,
  nickname,
  gender,
  preferredTimes,
  workoutTypes,
  size = 10,
}: {
  pageParam?: number;
  nickname?: string;
  gender?: string;
  preferredTimes?: string[];
  workoutTypes?: string[];
  size?: number;
}): Promise<MateListResponse> {
  const token = useTokenStore.getState().token;
  if (!token) {
    throw new Error("인증 토큰이 없습니다. 로그인하세요.");
  }

  try {
    const preferredTimesParam = preferredTimes?.join(",");
    const workoutTypesParam = workoutTypes?.join(",");

    const { data } = await api<MateApiResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/mates`,
      {
        params: {
          nickname,
          gender,
          preferredTimes: preferredTimesParam,
          workoutTypes: workoutTypesParam,
          page: pageParam,
          size,
        },
      },
    );
    console.log("✅ API 응답 성공:", data);
    return data.data;
  } catch (error) {
    console.error("❌ fetchMates API 실패:", error);
    throw error;
  }
}
