import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";

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
}

/**
 * @param pageParam
 * @param preferenceTimes
 * @param workoutTypes
 * @param size
 */
export async function fetchMates({
  pageParam = 1,
  preferenceTimes,
  workoutTypes,
  size = 10,
}: {
  pageParam?: number;
  preferenceTimes?: string[];
  workoutTypes?: string[];
  size?: number;
}): Promise<MateListResponse> {
  const token = useTokenStore.getState().token;
  if (!token) {
    throw new Error("인증 토큰이 없습니다. 로그인하세요.");
  }

  try {
    const { data } = await axios.get<MateApiResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/mates`,
      {
        params: {
          preferenceTimes,
          workoutTypes,
          page: pageParam,
          size,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );
    console.log("✅ API 응답 성공:", data);
    return data.data;
  } catch (error) {
    console.error("❌ fetchMates API 실패:", error);
    throw error;
  }
}
