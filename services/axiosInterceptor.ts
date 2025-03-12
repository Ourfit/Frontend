import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";
import { refreshAccessToken } from "./getTokens";
import base64 from "base-64";

axios.defaults.withCredentials = true;

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

api.interceptors.request.use(
  async (config) => {
    const { token, addToken, clearToken } = useTokenStore.getState();
    if (token) {
      const payload = token.substring(
        token.indexOf(".") + 1,
        token.lastIndexOf("."),
      );
      const dec = JSON.parse(base64.decode(payload));

      const isTokenExpiring = Date.now() >= dec.exp * 1000 - 60 * 1000;

      if (isTokenExpiring) {
        try {
          const res = await refreshAccessToken(token);

          addToken(res.data.accessToken);

          config.headers.Authorization = `Bearer ${res.data.accessToken}`;
        } catch (err) {
          console.error("토큰 갱신 실패:", err);
          clearToken();
          window.location.replace("/auth/login");
        }
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } else {
      clearToken();
      window.location.replace("/auth/login");
    }

    return config;
  },
  (error) => Promise.reject(error),
);
