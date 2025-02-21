import { redirect } from "next/navigation";

export async function deleteAccount(token: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (response.status === 204) {
    redirect("/auth/login");
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }
}
