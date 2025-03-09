import { create } from "zustand";

interface EditProfileStore {
  isEdit: boolean;
  addIsEdit: (idEdit: boolean) => void;
  resetEdit: () => void;
}

export const useEditProfileStore = create<EditProfileStore>((set) => ({
  isEdit: false,
  addIsEdit: (isEdit) => {
    set(() => ({ isEdit }));
  },
  resetEdit: () => set({ isEdit: false }),
}));
