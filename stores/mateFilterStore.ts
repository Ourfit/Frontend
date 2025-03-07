import { create } from "zustand";

interface FilterType {
  time: string | null;
  sports: string[];
}

interface MateFilterStore {
  filter: FilterType;
  addFilter: (filter: FilterType) => void;
  resetFilter: () => void;
}

export const useMateFilterStore = create<MateFilterStore>((set) => ({
  filter: { time: null, sports: [] },
  addFilter: (filter) => set({ filter }),
  resetFilter: () => set({ filter: { time: null, sports: [] } }),
}));
