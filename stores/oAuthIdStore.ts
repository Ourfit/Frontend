import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface OAuthIdStore {
  oAuthId: string | null;
  code: string | null;
  addOAuthId: (oAuthId: string, code: string) => void;
  clearOAuthId: () => void;
}

export const useOAuthIdStore = create(
  persist<OAuthIdStore>(
    (set) => ({
      oAuthId: "",
      code: "",
      addOAuthId: (oAuthId, code) => set(() => ({ oAuthId, code })),
      clearOAuthId: () => {
        set({ oAuthId: null, code: null });
        sessionStorage.removeItem("oAuthId");
      },
    }),
    {
      name: "oAuthId",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
