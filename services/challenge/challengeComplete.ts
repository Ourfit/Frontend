import { api } from "../axiosInterceptor";

export async function challengeComplete(
  intensityLevel: number,
  challengeId?: number,
) {
  try {
    if (!challengeId) throw Error("id가 없습니다.");

    const response = await api.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/challenges/${challengeId}/records`,
      {
        intensityLevel,
      },
    );

    return response.status;
  } catch (err) {
    throw err;
  }
}
