"use client";

import { Typography } from "@/components/atoms/Typography";
import { TIME_MAPPING } from "@/constants/Time";
import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import Link from "next/link";
import * as S from "./style";

export default function Time() {
  const { data: userInfo } = useMyPageInfo();

  const preferenceKey = userInfo?.preferredWorkoutTime;
  return (
    <S.PreferenceTimeWrapper>
      <S.PreferenceHeader>
        <S.PreferenceTitle>
          선호 운동 시간
          <Typography.H3Bd
            style={{ marginLeft: "4px", color: "#004DFF" }}
          ></Typography.H3Bd>
        </S.PreferenceTitle>
        <Link href="/mypage/time">
          <S.PreferenceEdit>편집</S.PreferenceEdit>
        </Link>
      </S.PreferenceHeader>
      <S.PreferenceTime>
        <S.PreferenceTimeTitle>
          {preferenceKey ? TIME_MAPPING[preferenceKey] : "선호 시간 없음"}
        </S.PreferenceTimeTitle>
        <S.PreferenceTimeRange>오전 9시 ~ 오전 11시</S.PreferenceTimeRange>
      </S.PreferenceTime>
    </S.PreferenceTimeWrapper>
  );
}
