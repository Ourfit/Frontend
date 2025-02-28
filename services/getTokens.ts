import axios from "axios";

export async function getTokens(oAuthId: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/tokens`,
      { oAuthId },
    );
    return response.data;
  } catch (error) {
    console.error("토큰 요청 실패:", error);
    throw new Error();
  }
}

export async function refreshAccessToken(accessToken: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/tokens/refresh`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
