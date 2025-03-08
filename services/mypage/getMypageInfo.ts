import { useTokenStore } from "@/stores/tokenStore";
import { api } from "../axiosInterceptor";

export const getMypageInfo = async () => {
  try {
    const token = useTokenStore.getState().token;

    if (!token) {
      console.error("토큰이 없습니다. 로그인 페이지로 이동합니다.");
      throw new Error("Unauthorized");
    }

    const response = await api(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me`,
    );

    return response.data.data;
  } catch (error) {
    console.error("마이페이지 정보 조회 실패:", error);
    throw error;
  }
};
