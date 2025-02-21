import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface OAuthIdStore {
  oAuthId: string | null;
  addOAuthId: (oAuthId: string) => void;
  clearOAuthId: () => void;
}

export const useOAuthIdStore = create(
  persist<OAuthIdStore>(
    (set) => ({
      oAuthId: "",
      addOAuthId: (oAuthId) => set(() => ({ oAuthId })),
      clearOAuthId: () => {
        set({ oAuthId: null });
        sessionStorage.removeItem("oAuthId");
      },
    }),
    {
      name: "oAuthId",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
