import axios from "axios";

export async function getRegions(region: string) {
  const data = await fetch("/api/x-api-key").then((res) => res.json());

  if (!data) {
    throw new Error("API key is undefined");
  }

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/regions?q=${region}`,
      {
        headers: {
          "X-Ourfit-Api-Key": data.apiKey,
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
