import { create } from "zustand";

interface FilterType {
  time: string | null;
  sports: string[] | null;
}

interface MateFilterStore {
  filter: FilterType;
  addFilter: (filter: FilterType) => void;
}

export const useMateFilterStore = create<MateFilterStore>((set) => ({
  filter: { time: null, sports: null },
  addFilter: (filter) => set({ filter }),
}));
