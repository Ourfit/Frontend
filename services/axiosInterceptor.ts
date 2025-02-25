import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";
import { refreshAccessToken } from "./getTokens";
import { redirect } from "next/navigation";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

api.interceptors.request.use(
  async (config) => {
    const { token, expiresAt, addToken, clearToken } = useTokenStore.getState();
    if (token) {
      const isTokenExpiring = Date.now() >= expiresAt - 60 * 1000;

      if (isTokenExpiring) {
        try {
          const preRefreshToken = sessionStorage.getItem("refreshToken");

          if (!preRefreshToken) {
            console.error("refreshToken이 없습니다");
            clearToken();
            redirect("/auth/login");
          }

          const res = await refreshAccessToken(token, preRefreshToken);

          addToken(res.data.accessToken, res.data.accessTokenExpiresIn);

          if (res.data.refreshToken) {
            sessionStorage.setItem("refreshToken", res.data.refreshToken);
          }

          config.headers.Authorization = `Bearer ${res.data.accessToken}`;
        } catch (err) {
          console.error("토큰 갱신 실패:", err);
          clearToken();
          redirect("/auth/login");
        }
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);
