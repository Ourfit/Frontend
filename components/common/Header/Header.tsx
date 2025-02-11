"use client";

import ChevronLeft from "@/assets/images/chevron-left.svg";
import Location from "@/assets/images/location.svg";
import OurfitLogo from "@/assets/images/ourfit-logo.svg";
import SearchIcon from "@/assets/images/search.svg";
import { Typography } from "@/components/atoms/Typography";
import { GNB_LABELS } from "@/constants/Gnb";
import { COLORS } from "@/constants/Theme";
import { usePathname, useRouter } from "next/navigation";
import * as S from "./Header.style";

interface HeaderProps {
  isEditingProfile?: boolean;
  isChallenge?: boolean;
  title?: string;
  onClick?: () => void;
}

export default function Header({
  isEditingProfile,
  isChallenge,
  title,
  onClick,
}: HeaderProps) {
  const pathname = usePathname();

  const pageNames: Record<string, string> = {
    "/challenge": "챌린지",
    "/challenge/registration": "챌린지 등록",
    "/mate": "메이트",
    "/notifications": "알림",
    "/mypage": "설정",
    "/mypage/openchat": "오픈 채팅 관리",
    "/mate/facility": "운동 시설",
    "/mate/time": "운동 시간",
    "/mate/mateprofile": "프로필",
    "/mate/search": "검색",
  };

  const isHome = pathname === "/";
  const isSubPage = pathname.split("/").length - 1 === 1;

  const isProfilePage = pathname.startsWith("/mate/mateprofile/");

  type GnbLabel = (typeof GNB_LABELS)[keyof typeof GNB_LABELS];
  const isGnbTab = Object.values(GNB_LABELS).includes(
    pageNames[pathname] as GnbLabel,
  );

  const router = useRouter();

  return (
    <>
      {isHome ? (
        <S.HeaderContainer
          $paddingLeft="20px"
          $paddingRight="20px"
          $justifyContent="space-between"
        >
          <OurfitLogo
            style={{ width: "60px", height: "28.966px", fill: COLORS.BLUE_500 }}
          />
          <S.LocationContainer>
            <Location style={{ width: "24px", height: "24px" }} />
            <Typography.H4Sb>송파구 신천동</Typography.H4Sb>
          </S.LocationContainer>
        </S.HeaderContainer>
      ) : title ? (
        <S.HeaderContainer
          $paddingLeft="0"
          $paddingRight="12px"
          style={{ borderBottom: `1px solid ${COLORS.GRAYSCALE_100}` }}
        >
          <S.IconWrapper>
            <ChevronLeft
              style={{ display: "block" }}
              onClick={() => (onClick ? onClick() : window.history.back())}
            />
          </S.IconWrapper>
          <Typography.H2Sb color={COLORS.GRAYSCALE_900}>
            {title}
          </Typography.H2Sb>
        </S.HeaderContainer>
      ) : isGnbTab || isChallenge ? (
        <S.HeaderContainer
          $paddingLeft="20px"
          $paddingRight="20px"
          $justifyContent="space-between"
        >
          <Typography.H1Sb color={COLORS.GRAYSCALE_900}>
            {isChallenge ? "챌린지" : pageNames[pathname]}
          </Typography.H1Sb>
          <SearchIcon
            style={{ width: "24px", height: "24px" }}
            fill="current"
            onClick={() => router.push("/mate/search")}
          />
        </S.HeaderContainer>
      ) : (
        <S.HeaderContainer
          $paddingLeft="0"
          $paddingRight="12px"
          style={{ borderBottom: `1px solid ${COLORS.GRAYSCALE_100}` }}
        >
          <S.IconWrapper>
            <ChevronLeft
              style={{ display: "block" }}
              onClick={() => (onClick ? onClick() : window.history.back())}
            />
          </S.IconWrapper>
          <Typography.H2Sb color={COLORS.GRAYSCALE_900}>
            {isSubPage && isEditingProfile
              ? "프로필 편집"
              : isProfilePage
                ? "프로필"
                : pageNames[pathname]}
          </Typography.H2Sb>
        </S.HeaderContainer>
      )}
    </>
  );
}
