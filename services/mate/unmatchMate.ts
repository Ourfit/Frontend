import axios from "axios";
import { api } from "../axiosInterceptor";

export const unmatchMate = async (mateId: number) => {
  try {
    const response = await api.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/${mateId}`,
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
