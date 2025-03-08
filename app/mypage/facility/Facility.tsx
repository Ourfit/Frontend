"use client";

import { Typography } from "@/components/atoms/Typography";
import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import Link from "next/link";
import * as S from "./style";

interface placeInfoProps {
  placeName: string;
  address: string;
}

export default function Facility() {
  const { data: userInfo } = useMyPageInfo();
  const favoritePlaces = userInfo?.favoritePlaces ?? [];

  return (
    <>
      <S.PreferenceFacilityWrapper>
        <S.PreferenceHeader>
          <S.PreferenceTitle>
            선호 운동 시설
            <Typography.H3Bd style={{ marginLeft: "4px", color: "#004DFF" }}>
              {favoritePlaces.length}
            </Typography.H3Bd>
          </S.PreferenceTitle>
          <Link href="/mypage/facility">
            <S.PreferenceEdit>편집</S.PreferenceEdit>
          </Link>
        </S.PreferenceHeader>
        <S.PreferencePlaceWrapper2>
          {favoritePlaces.length > 0 ? (
            favoritePlaces.map((place: placeInfoProps) => (
              <S.PreferencePlaceItem key={place.placeName}>
                <Typography.H4Sb color="#27282D">
                  {place.placeName}
                </Typography.H4Sb>
                <Typography.H6Md color="#8A92A3">
                  {place.address}
                </Typography.H6Md>
              </S.PreferencePlaceItem>
            ))
          ) : (
            <Typography.H4Md color="#8A92A3">
              아직 선택한 시설이 없습니다.
            </Typography.H4Md>
          )}
        </S.PreferencePlaceWrapper2>
      </S.PreferenceFacilityWrapper>
    </>
  );
}
