"use client";

import LogoumbbellsIcon from "@/assets/images/LogoDumbbells.svg";
import Placeholder from "@/components/common/Placeholder/Placeholder";
import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import * as S from "@/app/mate/facility/style";
import * as MS from "./style";
import Link from "next/link";

const dummy2Facilities = [
  {
    id: 1,
    name: "아워핏짐 잠실",
    address: "서울 송파구 올림픽로35가길 11 지하1층 001호",
  },
  { id: 2, name: "아워핏짐 강남", address: "서울 강남구 강남대로 123" },
  {
    id: 3,
    name: "에이블짐 잠실",
    address: "서울 송파구 올림픽로35가길 12 5층 001호",
  },
  {
    id: 4,
    name: "에이블필라테스 잠실",
    address: "서울 송파구 올림픽로35가길 13 10층 001호",
  },
];

export default function FacilitySearch() {
  const [facilityValue, setFacilityValue] = useState("");
  const [searchResults, setSearchResults] = useState<
    {
      id: number;
      name: string;
      address: string;
    }[]
  >([]);
  const [selectedPreferenceFacilities, setSelectedPreferenceFacilities] =
    useState<
      {
        id: number;
        name: string;
        address: string;
      }[]
    >([]);

  useEffect(() => {
    if (facilityValue.trim() === "") {
      setSearchResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      const filteredResults = dummy2Facilities.filter((facility) =>
        facility.name.includes(facilityValue),
      );
      setSearchResults(filteredResults);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [facilityValue]);

  const handleSelectFacility = (facility: {
    id: number;
    name: string;
    address: string;
  }) => {
    if (selectedPreferenceFacilities.length < 3) {
      setSelectedPreferenceFacilities((prev) => [...prev, facility]);
      localStorage.setItem(
        "selectedPreferenceFacilities",
        JSON.stringify([...selectedPreferenceFacilities, facility]),
      );
    }
  };

  const handleRemoveFacility = (id: number) => {
    const updatedFacilities = selectedPreferenceFacilities.filter(
      (facility) => facility.id !== id,
    );
    setSelectedPreferenceFacilities(updatedFacilities);
    localStorage.setItem(
      "selectedPreferenceFacilities",
      JSON.stringify(updatedFacilities),
    );
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
            <MS.PreferencePlaceContainer>
              <MS.PreferencePlaceInfo2 key={facility.id}>
                <LogoumbbellsIcon
                  alt="LogoumbbellsIcon"
                  width={20}
                  height={20}
                />

                <MS.PreferencePlaceName2>
                  {facility.name}
                  <MS.PreferenceButton
                    onClick={() => handleRemoveFacility(facility.id)}
                  >
                    X
                  </MS.PreferenceButton>
                </MS.PreferencePlaceName2>
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
            <S.ResultItem
              key={result.id}
              onClick={() => handleSelectFacility(result)}
            >
              <img src="/next.svg" width="40" height="40" />
              <S.FacilityInfo>
                <Typography.H4Sb>{result.name}</Typography.H4Sb>
                <Typography.H5Md color="#8A92A3">
                  {result.address}
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
