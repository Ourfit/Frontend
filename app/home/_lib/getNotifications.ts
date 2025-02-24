import customFetch from "@/services/customFetch";

export default async function getNotifications() {
  const response = await customFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/me/history?actionTypes=APPLY`,
  );

  if (!response.ok) {
    throw new Error("fetch error");
  }

  return response.json();
}
