import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";

export const getMateInfo = async () => {
  const token = useTokenStore.getState().token;

  if (!token) {
    throw new Error("인증 토큰이 없습니다. 로그인하세요.");
  }

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    },
  );

  return data;
};
