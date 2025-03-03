"use client";

import ChevronLeft from "@/assets/images/chevron-left.svg";
import Compass from "@/assets/images/compass.svg";
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
  isSignup?: boolean;
  title?: string;
  onClick?: () => void;
  region?: string;
}

export default function Header({
  isEditingProfile,
  isChallenge,
  isSignup,
  title,
  onClick,
  region,
}: HeaderProps) {
  const pathname = usePathname();

  const pageNames: Record<string, string> = {
    "/challenge": "챌린지",
    "/challenge/registration": "챌린지 등록",
    "/mate": "메이트",
    "/notifications": "알림",
    "/mypage": "설정",
    "/mypage/openchat": "오픈 채팅 관리",
    "/mypage/sports": "선호 운동 편집",
    "/mypage/facility": "선호 시설 편집",
    "/mypage/time": "선호 시간 편집",
    "/mate/facility": "운동 시설",
    "/mate/time": "운동 시간",
    "/mate/mateprofile": "프로필",
    "/mate/search": "검색",
    "/mate/explore": "탐색",
  };

  const isHome = pathname === "/";
  const isSubPage = pathname.split("/").length - 1 === 1;

  const isSearchPage = pathname === "/mate/search";
  const isExplorePage = pathname === "/mate/explore";
  const isChellengePage = pathname === "/challenge";
  const isSettingsPage = pathname.startsWith("/mypage");
  const isProfilePage = pathname.startsWith("/mate/mateprofile/");
  const isNotificationPage = pathname === "/notifications";

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
            <Compass style={{ width: "18px", height: "18px" }} />
            <Typography.H4Sb>{region}</Typography.H4Sb>
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
              onClick={() => {
                if (onClick) onClick();
                else if (window.history.length > 1) {
                  window.history.back();
                } else {
                  window.location.href = "/";
                }
              }}
            />
          </S.IconWrapper>
          <Typography.H2Sb color={COLORS.GRAYSCALE_900}>
            {title}
          </Typography.H2Sb>
        </S.HeaderContainer>
      ) : isGnbTab || isChallenge || isSearchPage ? (
        <S.HeaderContainer
          $paddingLeft="20px"
          $paddingRight="20px"
          $justifyContent="space-between"
        >
          <Typography.H1Sb color={COLORS.GRAYSCALE_900}>
            {isChallenge
              ? "챌린지"
              : isSearchPage
                ? "검색"
                : pageNames[pathname]}
          </Typography.H1Sb>
          {!isSettingsPage &&
            !isSearchPage &&
            !isChellengePage &&
            !isNotificationPage && (
              <SearchIcon
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                stroke={"#0A0A0A"}
                onClick={() => router.push("/mate/search")}
              />
            )}
        </S.HeaderContainer>
      ) : (
        <S.HeaderContainer
          $paddingLeft="0"
          $paddingRight="12px"
          style={{
            borderBottom: isSignup ? "" : `1px solid ${COLORS.GRAYSCALE_100}`,
          }}
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
