import { useTokenStore } from "@/stores/tokenStore";

export default async function getNotifications() {
  const { token } = useTokenStore.getState();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/me/history&actionTypes=APPLY`,
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
