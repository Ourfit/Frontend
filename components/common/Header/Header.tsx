"use client";

import ChevronLeft from "@/assets/images/chevron-left.svg";
import Location from "@/assets/images/location.svg";
import OurfitLogo from "@/assets/images/ourfit-logo.svg";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import { usePathname } from "next/navigation";
import * as S from "./Header.style";

interface HeaderProps {
  isEditingProfile?: boolean;
  hasBackButton?: boolean;
  isChallenge?: boolean;
}

export default function Header({
  isEditingProfile,
  isChallenge,
  hasBackButton = true,
}: HeaderProps) {
  const pathname = usePathname();

  const pageNames: Record<string, string> = {
    "/challenge": "챌린지",
    "/challenge/registration": "챌린지 등록",
    "/mate": "메이트",
    "/alarm": "알림",
    "/mypage": "설정",
    "/mypage/openchat": "오픈 채팅 관리",
    "/mate/facility": "운동 시설",
    "/mate/time": "운동 시간",
    "/mate/mateprofile": "프로필",
    "/mypage/mate-history": "메이트 내역 관리",
  };

  const isHome = pathname === "/";
  const isSubPage = pathname.split("/").length - 1 === 1;
  const hasBottomBorder = pathname === "/challenge/registration";

  const isProfilePage = pathname.startsWith("/mate/mateprofile/");

  return (
    <>
      {isChallenge ? (
        <S.HeaderContainer
          $paddingLeft="20px"
          $paddingRight="20px"
          $justifyContent="space-between"
        >
          <Typography.H1Sb>챌린지</Typography.H1Sb>
        </S.HeaderContainer>
      ) : isHome ? (
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
      ) : isSubPage && isEditingProfile === true ? (
        <S.HeaderContainer $paddingLeft="0" $paddingRight="12px">
          <div
            style={{ padding: "12px", display: "flex", alignItems: "center" }}
          >
            <ChevronLeft
              style={{ display: "block" }}
              onClick={() => window.history.back()}
            />
          </div>
          <Typography.H1Sb color={COLORS.GRAYSCALE_900}>
            {"프로필 편집"}
          </Typography.H1Sb>
        </S.HeaderContainer>
      ) : hasBackButton ? (
        <S.HeaderContainer
          $paddingLeft="0"
          $paddingRight="12px"
          style={{ borderBottom: `1px solid ${COLORS.GRAYSCALE_100}` }}
        >
          <S.IconWrapper>
            <ChevronLeft
              style={{ display: "block" }}
              onClick={() => window.history.back()}
            />
          </S.IconWrapper>
          <Typography.H2Sb color={COLORS.GRAYSCALE_900}>
            {pageNames[pathname]}
          </Typography.H2Sb>
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
            {pageNames[pathname] || (isProfilePage ? "프로필" : "text")}
          </Typography.H2Sb>
        </S.HeaderContainer>
      )}
    </>
  );
}
