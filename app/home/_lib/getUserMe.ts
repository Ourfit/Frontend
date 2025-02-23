import { useTokenStore } from "@/stores/tokenStore";

export default async function getUserMe() {
  const { token } = useTokenStore.getState();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("fetch error");
  }

  return response.json();
}
