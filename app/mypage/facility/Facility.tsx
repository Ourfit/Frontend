"use client";

import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as S from "./style";

interface FacilityData {
  id: number;
  name: string;
  address: string;
}

interface FacilityProps {
  selectedPreferenceFacility: FacilityData | null;
  handleNavigate: (facility: FacilityData) => void;
}

export default function Facility({
  selectedPreferenceFacility,
  handleNavigate,
}: FacilityProps) {
  const [selectedPreferenceFacilities, setSelectedPreferenceFacilities] =
    useState<FacilityData[]>([]);

  useEffect(() => {
    const storedFacilities = localStorage.getItem(
      "selectedPreferenceFacilities",
    );
    if (storedFacilities) {
      setSelectedPreferenceFacilities(JSON.parse(storedFacilities));
    }
  }, []);

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
          {selectedPreferenceFacilities.length > 0 ? (
            selectedPreferenceFacilities.map((facility) => (
              <S.PreferencePlaceInfo key={facility.id}>
                <S.PreferencePlaceName>{facility.name}</S.PreferencePlaceName>
                <S.PreferencePlaceAddress>
                  {facility.address}
                </S.PreferencePlaceAddress>
              </S.PreferencePlaceInfo>
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
