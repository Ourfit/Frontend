import { api } from "@/services/axiosInterceptor";

export default async function getNotifications() {
  try {
    const response = await api(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/me/history?actionTypes=APPLY`,
    );

    return response.data;
  } catch (err) {
    throw err;
  }
}
