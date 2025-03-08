import { api } from "@/services/axiosInterceptor";

export default async function getUserMe() {
  try {
    const response = await api(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me`,
    );

    if (response.data.message === "OK") return response.data.data;
  } catch (err) {
    throw err;
  }
}
