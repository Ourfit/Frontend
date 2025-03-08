import { api } from "@/services/axiosInterceptor";

export default async function deleteChallenge(id?: number) {
  if (!id) {
    throw Error("id가 없습니다.");
  }

  try {
    const response = await api.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/challenges/${id}`,
    );

    return response.status;
  } catch (err) {
    throw err;
  }
}
