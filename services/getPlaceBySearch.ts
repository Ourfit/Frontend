import { api } from "./axiosInterceptor";

interface PlacesResponse {
  data: {
    addressName: string;
    roadAddressName: string;
    placeName: string;
    distance: number;
  }[];
  message: string;
}

export async function getPlacesBySearch(query: string) {
  if (!query) return [];

  try {
    const response = await api<PlacesResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/regions/places`,
      {
        params: { q: query },
      },
    );

    return response.data?.data ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
