import { DayLabel } from "@/constants/Challenge";
import { create } from "zustand";

interface ChallengeStoreType {
  id: number;
  days: DayLabel[];
}

interface ChallengeStore {
  challenge: ChallengeStoreType | null;
  addChallenge: (challenge: ChallengeStoreType) => void;
  resetChallenge: () => void;
}

export const useChallengeStore = create<ChallengeStore>((set) => ({
  challenge: null,
  addChallenge: (challenge) => {
    set(() => ({ challenge }));
  },
  resetChallenge: () => set({ challenge: null }),
}));
