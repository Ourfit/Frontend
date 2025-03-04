import { api } from "../axiosInterceptor";

/**
 * @param receiverId - 메이트 신청을 받을 사용자 ID -> 동적 url로 넘긴거 이용했어용
 * @description
 */
export async function sendMateRequest(receiverId: number) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/${receiverId}`;

  try {
    const response = await api.post(url, {});

    console.log("✅ 메이트 신청 API 응답 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ 메이트 신청 API 요청 실패:", error);
    throw error;
  }
}
