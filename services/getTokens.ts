export async function getTokens(oAuthId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/tokens`,
    {
      method: "POST",
      body: JSON.stringify({ oAuthId }),
    },
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export async function getRefreshToken() {
  const accessToken = sessionStorage.getItem("accessToken");
  const refreshToken = sessionStorage.getItem("refreshToken");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/tokens`,
    {
      method: "POST",
      body: JSON.stringify({
        accessToken,
        refreshToken,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
