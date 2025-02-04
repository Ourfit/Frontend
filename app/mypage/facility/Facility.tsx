"use client";

import { Typography } from "@/components/atoms/Typography";
import React from "react";
import Link from "next/link"; 
import * as S from "../style";

interface Place {
  name: string;
  address: string;
}

interface FacilityProps {
  places: Place[];
}

export default function Facility({ places }: FacilityProps) {
  return (
    <S.PreferenceFacilityWrapper>
      <S.PreferenceHeader>
        <S.PreferenceTitle>
          선호 운동 시설
          <Typography.H3Bd style={{ marginLeft: "4px", color: "#004DFF" }}>
            {places.length}
          </Typography.H3Bd>
        </S.PreferenceTitle>
        <Link href="/mypage/facility">
          <S.PreferenceEdit>편집</S.PreferenceEdit>
        </Link>
      </S.PreferenceHeader>

      <S.PreferencePlaceWrapper>
        {places.map((place) => (
          <S.PreferencePlaceInfo key={place.name}>
            <S.PreferencePlaceName>{place.name}</S.PreferencePlaceName>
            <S.PreferencePlaceAddress>{place.address}</S.PreferencePlaceAddress>
          </S.PreferencePlaceInfo>
        ))}
      </S.PreferencePlaceWrapper>
    </S.PreferenceFacilityWrapper>
  );
}
