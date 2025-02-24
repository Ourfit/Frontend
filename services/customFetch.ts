import { useTokenStore } from "@/stores/tokenStore";

interface CustomFetchOptions extends RequestInit {
  headers?: HeadersInit;
}

export default async function customFetch(
  url: string,
  options: CustomFetchOptions = {},
): Promise<Response> {
  const { token, expiresAt, refreshAccessToken } = useTokenStore.getState();
  let updatedAccessToken: string | undefined;

  const isTokenExpiring = Date.now() >= expiresAt - 60 * 1000;

  if (isTokenExpiring) {
    updatedAccessToken = await refreshAccessToken();
  }

  const accessToken = updatedAccessToken || token;

  const finalOptions = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await fetch(url, finalOptions);

  return response;
}
