"use client";

import { Typography } from "@/components/atoms/Typography";
import Header from "@/components/common/Header/Header";
import Placeholder from "@/components/common/Placeholder/Placeholder";
import { useEffect, useState } from "react";
import * as S from "./style";

const dummyFacilities = [
  {
    id: 1,
    name: "아워핏짐 잠실",
    address: "서울 송파구 올림픽로35가길 11 지하1층 001호",
  },
  { id: 2, name: "아워핏짐 강남", address: "서울 강남구 강남대로 123" },
];

export default function SportFacility() {
  const [facilityValue, setFacilityValue] = useState("");
  const [searchResults, setSearchResults] = useState<
    { id: number; name: string; address: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  /* 카카오톡 API 연동 및 시설 검색 시 debounce 적용 고려*/
  // Debounce가 적용됬다 치고 임의로 구현현
  useEffect(() => {
    if (facilityValue.trim() === "") {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    const timeout = setTimeout(() => {
      // 더미 데이터 필터링
      const filteredResults = dummyFacilities.filter((facility) =>
        facility.name.includes(facilityValue),
      );
      setSearchResults(filteredResults);
      setIsLoading(false);
    }, 1000); // 1초 지연

    return () => clearTimeout(timeout);
  }, [facilityValue]);

  const handleSelectFacility = (facility: {
    id: number;
    name: string;
    address: string;
  }) => {
    localStorage.setItem("selectedFacility", JSON.stringify(facility)); // 장소 저장
  };

  return (
    <>
      <Header />
      <S.facilityContainer>
        <S.facilityContent>
          <S.facilityTitle>
            <Typography.H1Sb>
              <S.HighlightedText>함께 운동하는</S.HighlightedText> <br /> 시설이
              어디인가요?
            </Typography.H1Sb>
          </S.facilityTitle>
          <Typography.H4Md color="#8A92A3">
            같은 동네 메이트를 매치해드려요.
          </Typography.H4Md>
        </S.facilityContent>
        <S.PlaceHolderWrapper>
          <Placeholder
            text="시설 명을 검색해주세요."
            onChange={(e) => setFacilityValue(e.target.value)}
            value={facilityValue}
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
      </S.facilityContainer>
    </>
  );
}
