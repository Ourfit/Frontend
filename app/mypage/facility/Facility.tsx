"use client";

import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";
import { useState } from "react";
import * as S from "./style";

export default function Facility() {
  const [selectedPreferenceFacilities, setSelectedPreferenceFacilities] =
    useState([]);

  return (
    <>
      <S.PreferenceFacilityWrapper>
        <S.PreferenceHeader>
          <S.PreferenceTitle>
            선호 운동 시설
            <Typography.H3Bd style={{ marginLeft: "4px", color: "#004DFF" }}>
              {selectedPreferenceFacilities.length}
            </Typography.H3Bd>
          </S.PreferenceTitle>
          <Link href="/mypage/facility">
            <S.PreferenceEdit>편집</S.PreferenceEdit>
          </Link>
        </S.PreferenceHeader>
        <S.PreferencePlaceWrapper2>
          <Typography.H4Md color="#8A92A3">
            아직 선택한 시설이 없습니다.
          </Typography.H4Md>
        </S.PreferencePlaceWrapper2>
      </S.PreferenceFacilityWrapper>
    </>
  );
}
