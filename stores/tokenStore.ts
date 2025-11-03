import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface TokenStore {
  token: string | null;
  addToken: (newToken: string) => void;
  clearToken: () => void;
}

export const useTokenStore = create(
  persist<TokenStore>(
    (set) => ({
      token: "",

      addToken: (token) => {
        set(() => ({ token }));

        if (typeof window !== "undefined") {
          document.cookie = `accessToken=${token}; path=/; max-age=${60 * 60 * 24}; SameSite=Lax`;
        }
      },
      clearToken: () => {
        set({ token: null });
        localStorage.removeItem("token");

        if (typeof window !== "undefined") {
          document.cookie = "accessToken=; path=/; max-age=0";
        }
      },
    }),
    {
      name: "token",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
