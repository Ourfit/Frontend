import { useTokenStore } from "@/stores/tokenStore";
import axios, { AxiosError } from "axios";
import { refreshAccessToken } from "./getTokens";
import { redirect } from "next/navigation";

axios.defaults.withCredentials = true;

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

api.interceptors.request.use(
  async (config) => {
    const { token, clearToken } = useTokenStore.getState();
    if (!token) {
      clearToken();
      redirect("/auth/login");
    } else {
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

    if (errResponseStatus === 401) {
      try {
        const { token, addToken } = useTokenStore.getState();
        const res = await refreshAccessToken(token!);

        addToken(res.data.accessToken);

        prevRequest.headers = {
          ...prevRequest.headers,
          Authorization: `Bearer ${res.data.accessToken}`,
        };

        return api(prevRequest);
      } catch (err) {
        const error = err as AxiosError;
        console.error("토큰 요청 실패:", error.response?.status);
        useTokenStore.getState().clearToken();
        redirect("/auth/login");
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);
