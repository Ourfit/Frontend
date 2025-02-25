import { refreshAccessToken } from "@/services/getTokens";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TokenStore {
  token: string | null;
  expiresAt: number;
  addToken: (newToken: string, expiresIn: number) => void;
  clearToken: () => void;
  refreshAccessToken: () => Promise<string | undefined>;
}

export const useTokenStore = create(
  persist<TokenStore>(
    (set, get) => ({
      token: "",
      expiresAt: 0,

      addToken: (token, expiresIn) => {
        const expiresAt = Date.now() + expiresIn * 1000;
        set(() => ({ token, expiresAt }));
      },
      clearToken: () => {
        set({ token: null, expiresAt: 0 });
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("refreshToken");
      },

      refreshAccessToken: async () => {
        try {
          const refreshToken = sessionStorage.getItem("refreshToken");
          if (get().token && refreshToken) {
            const res = await refreshAccessToken(get().token!, refreshToken);

            get().addToken(res.data.accessToken, res.data.accessTokenExpiresIn);
            sessionStorage.setItem("refreshToken", res.data.refreshToken);

            return res.data.accessToken;
          }
        } catch (err) {
          get().clearToken();
          window.location.replace("/auth/login");
        }
      },
    }),
    {
      name: "accessToken",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
