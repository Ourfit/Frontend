import { create } from "zustand";

interface OAuthIdStore {
  oAuthId: string;
  addOAuthId: (oAuthId: string) => void;
}

export const useOAuthIdStore = create<OAuthIdStore>((set) => ({
  oAuthId: "",
  addOAuthId: (oAuthId) => set({ oAuthId }),
}));
