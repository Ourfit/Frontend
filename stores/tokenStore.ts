import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TokenStore {
  token: string;
  addToken: (newToken: string) => void;
}

export const useTokenStore = create(
  persist<TokenStore>(
    (set) => ({
      token: "",
      addToken: (newToken) => set(() => ({ token: newToken })),
    }),
    {
      name: "accessToken",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
