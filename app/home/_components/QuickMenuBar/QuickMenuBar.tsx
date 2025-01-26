import { usePathname, useRouter } from "next/navigation";
import * as S from "./QuickMenuBar.style";

const QUICK_MENUS = [
  {
    label: "메이트 찾기",
    path: "/mate",
    icon: "",
  },
  {
    label: "오픈채팅",
    path: "/mypage/openchat",
    icon: "/",
  },
  {
    label: "운동 기록",
    path: "/challenge",
    icon: "",
  },
  {
    label: "내 프로필",
    path: "/mypage",
    icon: "",
  },
];

export default function QuickMenuBar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuClick = (path: string) => {
    if (pathname !== path) {
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
          <S.MenuIcon />
          {menu.label}
        </S.MenuWrapper>
      ))}
    </S.QuickMenuContainer>
  );
}
