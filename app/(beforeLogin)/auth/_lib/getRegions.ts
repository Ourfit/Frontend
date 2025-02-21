export async function getRegions(region: string) {
  const headers = new Headers();
  const apiKey = process.env.NEXT_PUBLIC_X_OURFIT_API_KEY;

  if (!apiKey) {
    throw new Error("API key is undefined");
  }

  headers.append("X-Ourfit-Api-Key", apiKey);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/regions?q=${region}`,
    { headers, cache: "force-cache" },
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
