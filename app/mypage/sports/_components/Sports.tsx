import Dumbbells from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import { usePathname } from "next/navigation";
import React from "react";
import * as S from "../../style";
import Link from "next/link";

interface SportsProps {
  preferences: string[];
}

export default function Sports({ preferences }: SportsProps) {
  const pathname = usePathname();
  const isMypageSports = pathname === "/mypage/sports";

  return (
    <S.PreferenceSectionWrapper>
      <S.PreferenceHeader>
        <S.PreferenceTitle>
          선호 운동
          <Typography.H3Bd style={{ marginLeft: "4px", color: "#004DFF" }}>
            {preferences.length}
          </Typography.H3Bd>
        </S.PreferenceTitle>
        <Link href="/mypage/sports">
          <S.PreferenceEdit>편집</S.PreferenceEdit>
        </Link>
      </S.PreferenceHeader>

      <S.PreferenceContent>
        {preferences.map((sport) => (
          <S.PreferenceBadge key={sport}>
            <Dumbbells />
            <span>{sport}</span> {/* 배지 옆에 운동 이름 표시 */}
          </S.PreferenceBadge>
        ))}
      </S.PreferenceContent>
    </S.PreferenceSectionWrapper>
  );
}
