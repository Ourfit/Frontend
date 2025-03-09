import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";

export const setImageUrl = async (file: File) => {
  try {
    const token = useTokenStore.getState().token;
    if (!token) {
      console.error("토큰이 없습니다. 로그인하세요.");
      throw new Error("Unauthorized");
    }

    const formData = new FormData();
    formData.append("profileImage", file, file.name);

    await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me/profile-image`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );
  } catch (error) {
    console.error("프로필 이미지 변경 실패:", error);
    throw error;
  }
};
