export async function getMates() {
  const params = {};

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/mates`,
  );

  if (!response.ok) {
    throw new Error("fetch error");
  }

  return response.json();
}
