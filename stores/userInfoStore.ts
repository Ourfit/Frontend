"use client";

import { getMypageInfo } from "@/services/mypage/getMypageInfo";
import { create } from "zustand";

interface FavoriteWorkout {
  code: string;
  name: string;
}

interface FavoritePlace {
  placeName: string;
  address: string;
}

export interface UserInfo {
  id: number;
  oAuthProvider: string;
  profileUrl: string;
  email: string;
  nickname: string;
  gender: string;
  region1: string;
  region2: string;
  region3: string;
  skillLevel: string;
  age: number;
  introduction: string;
  openChatUrl: string;
  preferredWorkoutTime: string;
  favoriteWorkouts: FavoriteWorkout[];
  favoritePlaces: FavoritePlace[];
}

interface UserInfoStore {
  userInfo: UserInfo | null;
  fetchUserInfo: () => Promise<void>;
  clearUserInfo: () => void;
}

export const useUserInfoStore = create<UserInfoStore>((set) => ({
  userInfo: null,

  fetchUserInfo: async () => {
    try {
      const result = await getMypageInfo();
      set({ userInfo: result });

      if (result?.id) {
        localStorage.setItem("userId", String(result.id));
      }
    } catch (error) {
      console.error("유저 정보 가져오기 실패:", error);
    }
  },

  clearUserInfo: () => {
    set({ userInfo: null });
    localStorage.removeItem("userId");
  },
}));
