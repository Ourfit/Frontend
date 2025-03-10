import { api } from "../axiosInterceptor";

export const getMypageInfo = async () => {
  try {
    const response = await api(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me`,
    );

    return response.data.data;
  } catch (error) {
    console.error("마이페이지 정보 조회 실패:", error);
    throw error;
  }
};
