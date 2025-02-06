"use client";

import Placeholder from "@/components/common/Placeholder/Placeholder";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { Typography } from "@/components/atoms/Typography";
import Header from "@/components/common/Header/Header";
import Button from "@/components/common/Button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { COLORS } from "@/constants/Theme";
import * as TS from "@/components/auth/signup/steps/TimePreference/TimePreference.style";
import * as S from "./style";
import Link from "next/link";

const dummyFacilities = [
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

export default function SportFacility() {
  const [facilityValue, setFacilityValue] = useState("");
  const [searchResults, setSearchResults] = useState<
    { id: number; name: string; address: string }[]
  >([]);
  const [selectedFacility, setSelectedFacility] = useState<null | {
    id: number;
    name: string;
    address: string;
  }>(null); 

  useEffect(() => {
    if (facilityValue.trim() === "") {
      setSearchResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      const filteredResults = dummyFacilities.filter((facility) =>
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
    setSelectedFacility(facility); 
    localStorage.setItem("selectedFacility", JSON.stringify(facility)); 
  };

  const pathname = usePathname();
  const isMypageFacility = pathname === "/mypage/facility";

  return (
    <>
      {isMypageFacility ? "" : <Header />}
      <S.facilityContainer>
        <S.facilityContent>
          <S.facilityTitle>
            <Typography.H1Sb>
              {isMypageFacility ? (
                <>
                  <span>선호하는</span>
                </>
              ) : (
                <span style={{ color: COLORS.BLUE_500 }}>함께 운동하는</span>
              )}
              <br />
              {isMypageFacility ? (
                <>
                  <span style={{ color: COLORS.BLUE_500 }}>운동 시설</span>
                  <span>을 선택해주세요!</span>
                </>
              ) : (
                "시설이 어디인가요?"
              )}
            </Typography.H1Sb>
          </S.facilityTitle>
          <Typography.H4Md color="#8A92A3">
            {isMypageFacility
              ? "최소 1개, 최대 3개까지 선택해주세요."
              : "같은 동네 메이트를 매치해드려요."}
          </Typography.H4Md>
        </S.facilityContent>
        <S.PlaceHolderWrapper>
          <Placeholder
            text={
              isMypageFacility ? "ex.아워핏짐 잠실" : "시설 명을 검색해주세요"
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

        {isMypageFacility && (
          <TS.ButtonContainer>
            <Link href="/mypage">
              <Button
                disabled={!selectedFacility}
                size={BUTTON_SIZES.LARGE}
                variant={BUTTON_VARIANTS.PRIMARY}
              >
                변경 완료
              </Button>
            </Link>
          </TS.ButtonContainer>
        )}
      </S.facilityContainer>
    </>
  );
}
