import { create } from "zustand";

interface Mate {
  id: number;
  name: string;
  gender: string;
  age: number;
  description: string;
  profileImage: string;
  tags: string[];
  preferencesFacility: { name: string; address: string }[];
  preferencesTime: { title: string; range: string };
  openchatLink: string;
}

interface MateStore {
  mates: Mate[];
  addMate: (mate: Mate) => void;
}

export const useMateInfoStore = create<MateStore>((set) => ({
  mates: [
    {
      id: 1,
      name: "주녕이",
      gender: "남",
      age: 26,
      description:
        "저랑 주말 저녁에 같이 헬스하실 분! 포기하지 말고 같이 도전해서 목표를 이뤄봅시다 👊🏻",
      profileImage: "/next.svg",
      tags: ["헬스", "주말 저녁"],
      preferencesFacility: [
        {
          name: "에이쁠짐 성수점",
          address: "서울 송파구 올림픽로35가길 11 지하1층 001호",
        },
        {
          name: "에이쁠짐 홍대점",
          address: "서울 마포구 양화로12길 34 2층 201호",
        },
      ],
      preferencesTime: { title: "주말 아침", range: "오전 9시 ~ 오전 11시" },
      openchatLink: "https://open.kakao.com/o/gjvKMQah",
    },
    {
      id: 2,
      name: "운동 고수",
      gender: "여",
      age: 28,
      description: "필라테스를 함께 하실 분을 찾고 있어요! 💪",
      profileImage: "/next.svg",
      tags: ["필라테스", "평일 저녁"],
      preferencesFacility: [
        {
          name: "에이쁠짐 잠실점",
          address: "서울 송파구 올림픽로35가길 11 지하1층 001호",
        },
        {
          name: "에이쁠짐 홍대점",
          address: "서울 마포구 양화로12길 34 2층 201호",
        },
      ],
      preferencesTime: { title: "주말 저녁", range: "오후 7시 ~ 오후 9시" },
      openchatLink: "https://open.kakao.com/o/gjvKMQah",
    },
  ],
  addMate: (mate) => set((state) => ({ mates: [...state.mates, mate] })),
}));
