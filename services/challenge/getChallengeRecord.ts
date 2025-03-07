import { api } from "@/services/axiosInterceptor";

export default async function getChallengeRecord(
  yearMonth: string,
  challengeId?: number,
) {
  try {
    if (!challengeId) throw Error("id가 없습니다.");

    const response = await api(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/challenges/${challengeId}/records/${yearMonth}`,
    );

    return response.data.data;
  } catch (err) {
    throw err;
  }
}
