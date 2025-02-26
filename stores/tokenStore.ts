import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TokenStore {
  token: string | null;
  expiresAt: number;
  addToken: (newToken: string, expiresIn: number) => void;
  clearToken: () => void;
}

export const useTokenStore = create(
  persist<TokenStore>(
    (set) => ({
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
    }),
    {
      name: "accessToken",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
