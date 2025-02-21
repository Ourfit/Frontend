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
      addToken: (newToken) => set(() => ({ token: newToken })),
      clearToken: () => {
        set({ token: null });
        sessionStorage.removeItem("accessToken");
      },
    }),
    {
      name: "accessToken",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
