export async function getTokens(oAuthId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/tokens`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oAuthId }),
    },
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export async function refreshAccessToken(
  accessToken: string,
  refreshToken: string,
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/tokens/refresh`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken, refreshToken }),
    },
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
