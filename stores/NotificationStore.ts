import { create } from "zustand";

interface NotificationStore {
  notification: { type: string | null; id?: number | null };
  addNotification: (notification: { type: string | null; id?: number }) => void;
  resetNotification: () => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notification: { type: null },
  addNotification: (notification) => set({ notification }),
  resetNotification: () => set({ notification: { type: null, id: null } }),
}));
