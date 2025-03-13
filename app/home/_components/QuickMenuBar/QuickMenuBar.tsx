"use client";

import ChatIcon from "@/assets/images/home-chat.svg";
import ProfileIcon from "@/assets/images/home-profile.svg";
import RecordIcon from "@/assets/images/home-record.svg";
import SearchIcon from "@/assets/images/home-search.svg";
import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import { usePathname, useRouter } from "next/navigation";
import * as S from "./QuickMenuBar.style";

const QUICK_MENUS = [
  {
    label: "메이트 찾기",
    path: "/mate/explore",
    icon: <SearchIcon />,
  },
  {
    label: "오픈채팅",
    path: "/mypage/openchat",
    icon: <ChatIcon />,
  },
  {
    label: "운동 기록",
    path: "/challenge",
    icon: <RecordIcon />,
  },
  {
    label: "내 프로필",
    path: "/mypage",
    icon: <ProfileIcon />,
  },
];

export default function QuickMenuBar() {
  const router = useRouter();
  const pathname = usePathname();

  const { data: myData } = useMyPageInfo();

  const handleMenuClick = (path: string) => {
    if (pathname !== path) {
      if (path === "/mypage" && myData?.id) {
        router.push(`/mate/mateprofile/${myData.id}`);
        return;
      }

      router.push(path);
    }
  };

  return (
    <S.QuickMenuContainer>
      {QUICK_MENUS.map((menu) => (
        <S.MenuWrapper
          key={menu.path}
          onClick={() => handleMenuClick(menu.path)}
        >
          <S.MenuIcon>{menu.icon}</S.MenuIcon>
          {menu.label}
        </S.MenuWrapper>
      ))}
    </S.QuickMenuContainer>
  );
}
