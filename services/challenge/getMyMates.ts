import { api } from "@/services/axiosInterceptor";

export default async function getMyMates() {
  try {
    const response = await api(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/me`,
    );

    return response.data;
  } catch (err) {
    throw err;
  }
}
