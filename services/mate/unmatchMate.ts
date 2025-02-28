import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";

export const unmatchMate = async (mateId: number) => {
  const token = useTokenStore.getState().token;

  if (!token) {
    throw new Error("인증 토큰이 없습니다. 로그인하세요.");
  }
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/${mateId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "메이트 해제 요청 중 오류 발생:",
        error.response?.data || error.message,
      );
      throw new Error(error.response?.data?.message || "메이트 해제 실패");
    } else {
      console.error("예상치 못한 오류 발생:", error);
      throw new Error("메이트 해제 요청 중 알 수 없는 오류가 발생했습니다.");
    }
  }
};
