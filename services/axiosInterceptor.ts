import { useTokenStore } from "@/stores/tokenStore";
import axios, { AxiosError } from "axios";
import { refreshAccessToken } from "./getTokens";
import { redirect } from "next/navigation";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

api.interceptors.request.use(
  (config) => {
    const { token } = useTokenStore.getState();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const errResponseStatus = error.response.status;
    const prevRequest = error.config;
    const errMsg = error.response.data.msg;

    if (errResponseStatus === 401 && errMsg === "Invalid or expired token") {
      try {
        const preRefreshToken = sessionStorage.getItem("refreshToken");
        const {
          token: accessToken,
          clearToken,
          addToken,
        } = useTokenStore.getState();

        if (!preRefreshToken) {
          console.error("refreshToken이 없습니다");
          clearToken();
          redirect("/auth/login");
        }

        const res = await refreshAccessToken(accessToken!, preRefreshToken!);

        addToken(res.data.accessToken);
        sessionStorage.setItem("refreshToken", res.data.refreshToken);

        prevRequest.headers = {
          ...prevRequest.headers,
          Authorization: `Bearer ${res.data.accessToken}`,
        };

        return api(prevRequest);
      } catch (err) {
        const error = err as AxiosError;
        console.error("토큰 요청 실패:", error.response?.status);
        if (error.response?.status === 400 || error.response?.status === 401) {
          useTokenStore.getState().clearToken();
          redirect("/auth/login");
        }
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);
