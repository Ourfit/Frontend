"use client";

import { Typography } from "@/components/atoms/Typography";
import * as TS from "@/components/auth/signup/steps/TimePreference/TimePreference.style";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header/Header";
import Placeholder from "@/components/common/Placeholder/Placeholder";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { COLORS } from "@/constants/Theme";
import { useMateInfo } from "@/hooks/queries/useMateInfo";

import DefaultProfileImg from "@/components/common/DefaultProfileImg/DefaultProfileImg";
import { queryClient } from "@/components/common/ReactQueryProvider";
import { usePlacesSearch } from "@/hooks/queries/usePlacesSearch";
import { useUpdateMatePlace } from "@/hooks/queries/useUpdateMatePlace";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import * as S from "./style";

interface FacilityItem {
  addressName: string;
  roadAddressName: string;
  placeName: string;
  distance: number;
}

export default function SportFacility() {
  const [facilityValue, setFacilityValue] = useState("");
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(
    null,
  );

  const router = useRouter();

  const { data: mateInfo, isLoading } = useMateInfo();
  const mateId = mateInfo?.mateId;
  const { mutate: updatePlaceMutate } = useUpdateMatePlace(mateId);

  const { data: searchResults } = usePlacesSearch(facilityValue);

  const handleSelectFacility = (facility: FacilityItem) => {
    setSelectedFacility(facility);

    updatePlaceMutate(
      {
        placeName: facility.placeName,
        address: facility.addressName,
      },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ["mateInfo"] });
          router.push("/mate");
        },
        onError: (err: Error) => {
          console.error("운동 시간 수정 실패", err);
        },
      },
    );
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
              key={result.placeName}
              onClick={() => handleSelectFacility(result)}
            >
              <S.ImageWrapper>
                <DefaultProfileImg size={20} />
              </S.ImageWrapper>
              <S.FacilityInfo>
                <Typography.H4Sb>{result.placeName}</Typography.H4Sb>
                <Typography.H5Md color="#8A92A3">
                  {result.addressName}
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
