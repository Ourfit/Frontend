"use client";

import { Typography } from "@/components/atoms/Typography";
import React from "react";
import * as S from "../style";
import Link from "next/link";

interface TimeProps {
  preferences: string[];
}

export default function Time({ preferences}: TimeProps) {
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
        <S.PreferenceTimeTitle>주말 아침</S.PreferenceTimeTitle>
        <S.PreferenceTimeRange>오전 9시 ~ 오전 11시</S.PreferenceTimeRange>
      </S.PreferenceTime>
    </S.PreferenceTimeWrapper>
  );
}
