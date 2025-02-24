import { useTokenStore } from "@/stores/tokenStore";
import { useUserInfoStore } from "@/stores/userInfoStore";
import axios from "axios";

interface SetProfilePayload {
  introduction: string | null;
  openChatUrl: string | null;
}

export const setOpenchatLink = async (newOpenChatUrl: string) => {
  try {
    const token = useTokenStore.getState().token;
    if (!token) {
      throw new Error("로그인 토큰이 없습니다. 다시 로그인해주세요.");
    }

    const currentUserInfo = useUserInfoStore.getState().userInfo;

    const introductionValue = currentUserInfo?.introduction ?? null;

    const openChatUrlValue = newOpenChatUrl || null;

    const payload: SetProfilePayload = {
      introduction: introductionValue,
      openChatUrl: openChatUrlValue,
    };

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
    console.error("오픈 채팅 링크 등록 실패:", error);
    throw error;
  }
};
