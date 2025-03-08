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
      },
      clearToken: () => {
        set({ token: null });
        localStorage.removeItem("token");
      },
    }),
    {
      name: "token",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
