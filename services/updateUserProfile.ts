import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";

interface UpdateProfilePayload {
  introduction: string | null;
  openChatUrl: string | null;
}

export const updateUserProfile = async (payload: UpdateProfilePayload) => {
  try {
    const token = useTokenStore.getState().token;
    if (!token) {
      throw new Error("로그인 토큰이 없습니다. 다시 로그인해주세요.");
    }

    await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me/profile`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );
  } catch (error) {
    console.error("프로필 업데이트 실패:", error);
    throw error;
  }
};
