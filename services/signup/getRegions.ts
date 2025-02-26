import axios from "axios";

export async function getRegions(region: string) {
  const apiKey = process.env.NEXT_PUBLIC_X_OURFIT_API_KEY;

  if (!apiKey) {
    throw new Error("API key is undefined");
  }

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/regions?q=${region}`,
      {
        headers: {
          "X-Ourfit-Api-Key": apiKey,
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
