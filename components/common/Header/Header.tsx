"use client";

import ChevronLeft from "@/assets/images/chevron-left.svg";
import Location from "@/assets/images/location.svg";
import OurfitLogo from "@/assets/images/ourfit-logo.svg";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import { usePathname } from "next/navigation";
import * as S from "./Header.style";

interface HeaderProps {
  title?: string;
  onClick?: () => void;
}

export default function Header({ title, onClick }: HeaderProps) {
  const pathname = usePathname();

  const pageNames: Record<string, string> = {
    "/challenge": "챌린지",
    "/mate": "메이트",
    "/alarm": "알림",
    "/mypage": "설정",
    "/mypage/openchat": "오픈 채팅 관리",
  };

  const isHome = pathname === "/";

  return (
    <>
      {isHome ? (
        <S.HeaderContainer
          $paddingLeft="20px"
          $paddingRight="20px"
          $justifyContent="space-between"
        >
          <OurfitLogo style={{ width: "60px", height: "28.966px" }} />
          <S.LocationContainer>
            <Location style={{ width: "24px", height: "24px" }} />
            <Typography.H3Sb>송파구 신천동</Typography.H3Sb>
          </S.LocationContainer>
        </S.HeaderContainer>
      ) : (
        <S.HeaderContainer $paddingLeft="0" $paddingRight="12px">
          <div
            style={{ padding: "12px", display: "flex", alignItems: "center" }}
          >
            <ChevronLeft
              style={{ display: "block" }}
              onClick={() => (onClick ? onClick() : window.history.back())}
            />
          </div>
          <Typography.H2Sb color={COLORS.GRAYSCALE_900}>
            {title || pageNames[pathname]}
          </Typography.H2Sb>
        </S.HeaderContainer>
      )}
    </>
  );
}
