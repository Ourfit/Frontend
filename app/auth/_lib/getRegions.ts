export async function getRegions(region: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/vi/regions?q=${region}&X-Ourfit-Api-Key=${process.env.NEXT_PUBLIC_X_OURFIT_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
