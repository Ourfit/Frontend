"use client";

import * as S from "./Header.style";
import { Typography } from "@/components/atoms/Typography";
import { theme } from "@/styles/theme";
import { usePathname } from "next/navigation";
import OurfitLogo from "@/assets/images/ourfit-logo.svg";
import Location from "@/assets/images/location.svg";
import ChevronLeft from "@/assets/images/chevron-left.svg";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  const pageNames: Record<string, string> = {
    "/challenge": "챌린지",
    "/mate": "메이트",
    "/alarm": "알림",
    "/settings": "설정",
  };

  return (
    <>
      {pathname === "/" ? (
        <S.HeaderContainer $paddingLeft="20px" $paddingRight="20px">
          <Image src={OurfitLogo} alt="로고" />
          <S.LocationContainer>
            <Image src={Location} alt="위치 아이콘" />
            <p>송파구 신천동</p>
          </S.LocationContainer>
        </S.HeaderContainer>
      ) : pathname.split("/").length - 1 === 1 ? (
        <S.HeaderContainer $paddingLeft="20px" $paddingRight="12px">
          <Typography.H1Sb color={theme.colors.grayscale[900]}>
            {pageNames[pathname]}
          </Typography.H1Sb>
        </S.HeaderContainer>
      ) : (
        <S.HeaderContainer $paddingLeft="0" $paddingRight="12px">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ padding: "12px" }}>
              <Image
                src={ChevronLeft}
                alt="뒤로가기"
                style={{ display: "block" }}
              />
            </div>
            <Typography.H2Sb color={theme.colors.grayscale[900]}>
              Text
            </Typography.H2Sb>
          </div>
        </S.HeaderContainer>
      )}
    </>
  );
}
