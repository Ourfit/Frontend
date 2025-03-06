import { api } from "./axiosInterceptor";

interface UpdateProfilePayload {
  introduction: string | null;
  openChatUrl: string | null;
}

export const updateUserProfile = async (payload: UpdateProfilePayload) => {
  try {
    await api.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me/profile`,
      payload,
    );
  } catch (error) {
    console.error("프로필 업데이트 실패:", error);
    throw error;
  }
};
