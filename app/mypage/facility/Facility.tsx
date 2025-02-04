"use client";

import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import * as MS from "../style";
import * as S from "../style";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FacilityData {
  id: number;
  name: string;
  address: string;
}

export default function Facility() {
  const [selectedPreferenceFacilities, setSelectedPreferenceFacilities] = useState<FacilityData[]>([]);

  useEffect(() => {
    const storedFacilities = localStorage.getItem("selectedPreferenceFacilities");
    if (storedFacilities) {
      setSelectedPreferenceFacilities(JSON.parse(storedFacilities));
    }
  }, []);

  return (
    <>
      <MS.PreferenceHeader>
        <MS.PreferenceTitle>
          선호 운동 시설
          <Typography.H3Bd style={{ marginLeft: "4px", color: "#004DFF" }}>
            {selectedPreferenceFacilities.length}
          </Typography.H3Bd>
        </MS.PreferenceTitle>
        <Link href="/mypage/facility">
          <S.PreferenceEdit>편집</S.PreferenceEdit>
        </Link>
      </MS.PreferenceHeader>

      <MS.PreferencePlaceWrapper2>
        {selectedPreferenceFacilities.length > 0 ? (
          selectedPreferenceFacilities.map((facility) => (
            <MS.PreferencePlaceInfo key={facility.id}>
              <MS.PreferencePlaceName>{facility.name}</MS.PreferencePlaceName>
              <MS.PreferencePlaceAddress>{facility.address}</MS.PreferencePlaceAddress>
            </MS.PreferencePlaceInfo>
          ))
        ) : (
          <Typography.H4Md color="#8A92A3">
            아직 선택한 시설이 없습니다.
          </Typography.H4Md>
        )}
      </MS.PreferencePlaceWrapper2>
    </>
  );
}
