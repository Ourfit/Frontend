import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";

export default async function getMates(
  pageParam: number,
  actionTypes?: string,
) {
  const { token } = useTokenStore.getState();

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/me/history`,
      {
        params: { actionTypes, page: pageParam },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    console.log(response);

    return response.data;
  } catch (err) {
    throw err;
  }
}
