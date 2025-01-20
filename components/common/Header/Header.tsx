"use client";

import ChevronLeft from "@/assets/images/chevron-left.svg";
import Location from "@/assets/images/location.svg";
import OurfitLogo from "@/assets/images/ourfit-logo.svg";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import { usePathname, useRouter } from "next/navigation";
import * as S from "./Header.style";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const pageNames: Record<string, string> = {
    "/challenge": "챌린지",
    "/mate": "메이트",
    "/alarm": "알림",
    "/mypage": "설정",
    "/mypage/openchat": "오픈 채팅 관리",
  };

  const isHome = pathname === "/";
  const isSubPage = pathname.split("/").length - 1 === 1;

  return (
    <>
      {isHome ? (
        <S.HeaderContainer $paddingLeft="20px" $paddingRight="20px">
          <OurfitLogo style={{ width: "60px", height: "28.966px" }} />
          <S.LocationContainer>
            <Location style={{ width: "24px", height: "24px" }} />
            <p>송파구 신천동</p>
          </S.LocationContainer>
        </S.HeaderContainer>
      ) : isSubPage ? (
        <S.HeaderContainer $paddingLeft="0" $paddingRight="12px">
          <div
            style={{
              paddingLeft: "20px",
              display: "flex",
              alignItems: "center",
            }}
          ></div>
          <Typography.H1Sb color={COLORS.GRAYSCALE_900}>
            {pageNames[pathname] || "페이지"}
          </Typography.H1Sb>
        </S.HeaderContainer>
      ) : (
        <S.HeaderContainer $paddingLeft="0" $paddingRight="12px">
          <div
            style={{ padding: "12px", display: "flex", alignItems: "center" }}
          >
            <ChevronLeft
              style={{ display: "block" }}
              onClick={() => window.history.back()}
            />
          </div>
          <Typography.H2Sb color={COLORS.GRAYSCALE_900}>
            {pageNames[pathname] || "Text"}
          </Typography.H2Sb>
        </S.HeaderContainer>
      )}
    </>
  );
}
