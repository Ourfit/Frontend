import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
