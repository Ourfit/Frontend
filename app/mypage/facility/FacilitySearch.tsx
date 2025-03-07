"use client";

import * as S from "@/app/mate/facility/style";
import LogoumbbellsIcon from "@/assets/images/LogoDumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import Placeholder from "@/components/common/Placeholder/Placeholder";
import { usePlacesSearch } from "@/hooks/queries/usePlacesSearch";
import { Container } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import * as MS from "./style";

export default function FacilitySearch() {
  const [facilityValue, setFacilityValue] = useState("");

  const { data: searchResults } = usePlacesSearch(facilityValue);

  const [selectedPreferenceFacilities, setSelectedPreferenceFacilities] =
    useState<
      {
        id: number;
        name: string;
        address: string;
      }[]
    >([]);

  const handleSelectFacility = (facility: {
    id: number;
    name: string;
    address: string;
  }) => {
    if (selectedPreferenceFacilities.length < 3) {
      setSelectedPreferenceFacilities((prev) => [...prev, facility]);
    }
  };

  const handleRemoveFacility = (id: number) => {
    const updatedFacilities = selectedPreferenceFacilities.filter(
      (facility) => facility.id !== id,
    );
    setSelectedPreferenceFacilities(updatedFacilities);
  };

  const pathname = usePathname();
  const isMypageFacility = pathname === "/mypage/facility";

  return (
    <>
      <S.facilityContainer2>
        <S.facilityContent>
          <S.facilityTitle>
            <Typography.H1Sb>선호하는</Typography.H1Sb>
            <Typography.H1Sb color="#004DFF">
              <br />
              운동 시설
            </Typography.H1Sb>
            <Typography.H1Sb>을 선택해주세요!</Typography.H1Sb>
          </S.facilityTitle>
          <Typography.H4Md color="#8A92A3">
            최소 1개, 최대 3개까지 선택해주세요.
          </Typography.H4Md>
        </S.facilityContent>

        {selectedPreferenceFacilities.length > 0 && (
          <S.AddText>나의 선호 시설</S.AddText>
        )}
        <MS.PreferencePlaceWrapper>
          {selectedPreferenceFacilities.map((facility) => (
            <MS.PreferencePlaceContainer key={facility.id}>
              <MS.PreferencePlaceInfo2>
                <MS.PreferenceInfoWrapper>
                  <LogoumbbellsIcon
                    alt="LogoumbbellsIcon"
                    width={20}
                    height={20}
                  />

                  <MS.PreferencePlaceName2>
                    {facility.name}
                  </MS.PreferencePlaceName2>
                </MS.PreferenceInfoWrapper>

                <MS.PreferenceButton
                  onClick={() => handleRemoveFacility(facility.id)}
                >
                  X
                </MS.PreferenceButton>
              </MS.PreferencePlaceInfo2>
            </MS.PreferencePlaceContainer>
          ))}
        </MS.PreferencePlaceWrapper>

        <S.PlaceHolderWrapper>
          <Placeholder
            text={
              isMypageFacility ? "ex. 아워핏짐 잠실" : "시설 명을 검색해주세요"
            }
            onChange={(e) => setFacilityValue(e.target.value)}
            inputValue={facilityValue}
          />
        </S.PlaceHolderWrapper>

        <S.ResultList>
          {searchResults.map((result) => (
            <S.ResultItem key={result.addressName}>
              <img src="/next.svg" width="40" height="40" />
              <S.FacilityInfo>
                <Typography.H4Sb>{result.placeName}</Typography.H4Sb>
                <Typography.H5Md color="#8A92A3">
                  {result.addressName}
                </Typography.H5Md>
              </S.FacilityInfo>
            </S.ResultItem>
          ))}
        </S.ResultList>

        <Container>
          <Link href="/mypage" passHref>
            <Button size="l" variant="primary" disabled={false}>
              변경 완료
            </Button>
          </Link>
        </Container>
      </S.facilityContainer2>
    </>
  );
}
