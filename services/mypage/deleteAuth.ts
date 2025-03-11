import { api } from "@/services/axiosInterceptor";
import { useTokenStore } from "@/stores/tokenStore";
import { useUserInfoStore } from "@/stores/userInfoStore";
import { redirect } from "next/navigation";

export async function deleteAccount() {
  const { clearToken } = useTokenStore.getState();

  try {
    const response = await api.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me`,
    );

    if (response.status === 204) {
      clearToken();
      redirect("/auth/login");
    }
  } catch (err) {
    throw err;
  }
}

export async function deleteToken() {
  const { clearToken } = useTokenStore.getState();
  const { clearUserInfo } = useUserInfoStore.getState();

  try {
    const response = await api.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/tokens`,
    );

    if (response.status === 204) {
      clearToken();
      clearUserInfo();
      redirect("/auth/login");
    }
  } catch (err) {
    throw err;
  }
}
