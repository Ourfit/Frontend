import customFetch from "@/services/customFetch";
import { useTokenStore } from "@/stores/tokenStore";
import { redirect } from "next/navigation";

export async function deleteAccount() {
  const { clearToken } = useTokenStore.getState();

  const response = await customFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me`,
    {
      method: "DELETE",
    },
  );

  if (response.status === 204) {
    clearToken();
    redirect("/auth/login");
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }
}

export async function deleteToken() {
  const { clearToken } = useTokenStore.getState();

  const response = await customFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/tokens`,
    {
      method: "DELETE",
    },
  );

  if (response.status === 204) {
    clearToken();
    redirect("/auth/login");
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }
}
