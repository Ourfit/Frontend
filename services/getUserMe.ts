import { api } from "@/services/axiosInterceptor";

export default async function getUserMe() {
  try {
    const response = await api(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me`,
    );

    return response.data;
  } catch (err) {
    throw err;
  }
}
