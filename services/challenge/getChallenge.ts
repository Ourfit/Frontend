import { api } from "@/services/axiosInterceptor";

export default async function getChallenge() {
  try {
    const response = await api(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/challenges/me`,
    );

    return response.data;
  } catch (err) {
    throw err;
  }
}
