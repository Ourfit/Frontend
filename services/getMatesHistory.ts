import { api } from "@/services/axiosInterceptor";

export default async function getMatesHistory({
  pageParam,
  actionTypes,
  size,
}: {
  pageParam?: number;
  actionTypes?: string;
  size?: number;
}) {
  try {
    const response = await api(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/me/history`,
      {
        params: { actionTypes, page: pageParam || 0, size: size || 10 },
      },
    );

    return response.data;
  } catch (err) {
    throw err;
  }
}
