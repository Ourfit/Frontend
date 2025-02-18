export async function getUserMe() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me`,
  );

  if (!response.ok) {
    throw new Error("fetch error");
  }

  return response.json();
}
