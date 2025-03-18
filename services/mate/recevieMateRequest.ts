import { api } from "../axiosInterceptor";

/**
 * @param receiverId
 * @description
 */

export async function recevieMateRequest(receiverId: number) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/${receiverId}/accept`;

  try {
    const response = await api.post(url, {});

    return response.status;
  } catch (error) {
    throw error;
  }
}
