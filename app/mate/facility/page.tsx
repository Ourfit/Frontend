"use client";

import OurfitLogo from "@/assets/images/ourfit-logo.svg";
import { Typography } from "@/components/atoms/Typography";
import * as TS from "@/components/auth/signup/steps/TimePreference/TimePreference.style";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header/Header";
import Placeholder from "@/components/common/Placeholder/Placeholder";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { COLORS } from "@/constants/Theme";
import { useMateInfo } from "@/hooks/queries/useMateInfo";

import { queryClient } from "@/components/common/ReactQueryProvider";
import { useUpdateMatePlace } from "@/hooks/queries/useUpdateMatePlace";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import * as S from "./style";

interface FacilityItem {
  id: string;
  name: string;
  address: string;
}

export default function SportFacility() {
  const [facilityValue, setFacilityValue] = useState("");
  const [searchResults, setSearchResults] = useState<FacilityItem[]>([]);
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(
    null,
  );

  const router = useRouter();

  const { data: mateInfo, isLoading } = useMateInfo();
  const { mutate: updatePlaceMutate } = useUpdateMatePlace(mateInfo.mateId);

  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!facilityValue.trim()) {
      setSearchResults([]);
      return;
    }

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(async () => {
      try {
        console.log("Searching for:", facilityValue);

        const res = await fetch(
          `/api/kakaoPlaceSearch?query=${encodeURIComponent(facilityValue)}`,
        );
        if (!res.ok) {
          console.error("API 요청 실패", res.status);
          setSearchResults([]);
          return;
        }
        const data = await res.json();

        if (data.documents) {
          const facilities = data.documents.map((doc: any) => ({
            id: doc.id,
            name: doc.place_name,
            address: doc.road_address_name || doc.address_name,
          }));
          setSearchResults(facilities);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("fetch error:", error);
        setSearchResults([]);
      }
    }, 1000);

    return () => {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    };
  }, [facilityValue]);

  const handleSelectFacility = (facility: FacilityItem) => {
    setSelectedFacility(facility);

    updatePlaceMutate(
      {
        placeName: facility.name,
        address: facility.address,
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
              key={result.id}
              onClick={() => handleSelectFacility(result)}
            >
              <OurfitLogo width="40" height="40" color="#004DFF" />
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
