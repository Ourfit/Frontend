"use client";

import LogoumbbellsIcon from "@/assets/images/LogoDumbbells.svg";
import XIcon from "@/assets/images/x.svg";
import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import Placeholder from "@/components/common/Placeholder/Placeholder";
import { queryClient } from "@/components/common/ReactQueryProvider";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import { usePlacesSearch } from "@/hooks/queries/usePlacesSearch";
import { setFacilityPreference } from "@/services/mypage/setFacilityPreferences";
import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { WorkoutType } from "../sports/page";
import * as MS from "./style";
import DefaultProfileImg from "@/components/common/DefaultProfileImg/DefaultProfileImg";

type FacilityRequestBody = {
  preferredWorkoutTime: string | null;
  favoriteWorkouts: { code: string; name: string }[] | null;
  favoritePlaces: { placeName: string; address: string }[] | null;
};

export default function FacilitySearch() {
  const [facilityValue, setFacilityValue] = useState("");
  const router = useRouter();

  const { data: searchResults } = usePlacesSearch(facilityValue);
  const { data: userInfo } = useMyPageInfo();

  const [selectedPreferenceFacilities, setSelectedPreferenceFacilities] =
    useState<
      {
        placeName: string;
        address: string;
      }[]
    >([]);

  const handleSelectFacility = (facility: {
    placeName: string;
    address: string;
  }) => {
    const alreadySelected = selectedPreferenceFacilities.some(
      (f) =>
        f.placeName === facility.placeName && f.address === facility.address,
    );

    if (alreadySelected) {
      return;
    }

    if (selectedPreferenceFacilities.length < 3) {
      setSelectedPreferenceFacilities((prev) => [...prev, facility]);
    } else {
      return;
    }
  };

  const handleRemoveFacility = (placeName: string) => {
    const updatedFacilities = selectedPreferenceFacilities.filter(
      (facility) => facility.placeName !== placeName,
    );
    setSelectedPreferenceFacilities(updatedFacilities);
  };

  const { mutate: updateFacilityPreference } = useMutation<
    void,
    unknown,
    FacilityRequestBody,
    any
  >({
    mutationFn: () =>
      setFacilityPreference({
        preferredWorkoutTime: userInfo?.preferredWorkoutTime ?? null,
        favoriteWorkouts:
          userInfo?.favoriteWorkouts?.map((w: WorkoutType) => w.code) ?? null,
        favoritePlaces: selectedPreferenceFacilities,
      }),

    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: ["myPageInfo"] });

      const previousData = queryClient.getQueryData(["myPageInfo"]);

      queryClient.setQueryData(["myPageInfo"], (oldData: any) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          preferredWorkoutTime: newData.preferredWorkoutTime,
          favoriteWorkouts: newData.favoriteWorkouts,
          favoritePlaces: newData.favoritePlaces,
        };
      });

      return { previousData };
    },

    onError: (error, _, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["myPageInfo"], context.previousData);
      }
      alert("운동 시설 정보를 수정하는데 실패했습니다.");
      console.error(error);
    },

    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ["myPageInfo"] });
      router.back();
    },
  });

  const buttonClickHandler = () => {
    if (selectedPreferenceFacilities.length > 0) {
      const requestBody: FacilityRequestBody = {
        preferredWorkoutTime: userInfo?.preferredWorkoutTime ?? null,
        favoriteWorkouts: userInfo?.favoriteWorkouts ?? null,
        favoritePlaces: selectedPreferenceFacilities,
      };
      updateFacilityPreference(requestBody);
    }
  };

  const pathname = usePathname();
  const isMypageFacility = pathname === "/mypage/facility";

  useEffect(() => {
    if (userInfo?.favoritePlaces) {
      setSelectedPreferenceFacilities(userInfo.favoritePlaces);
    }
  }, [userInfo]);

  return (
    <>
      <MS.facilityNewContainer>
        <MS.facilityContent>
          <MS.facilityTitle>
            <Typography.H1Sb>선호하는</Typography.H1Sb>
            <Typography.H1Sb color="#004DFF">
              <br />
              운동 시설
            </Typography.H1Sb>
            <Typography.H1Sb>을 선택해주세요!</Typography.H1Sb>
          </MS.facilityTitle>
          <Typography.H4Md color="#8A92A3">
            최소 1개, 최대 3개까지 선택해주세요.
          </Typography.H4Md>
        </MS.facilityContent>

        {selectedPreferenceFacilities.length > 0 && (
          <MS.AddText>나의 선호 시설</MS.AddText>
        )}
        <MS.PreferencePlaceWrapper>
          {selectedPreferenceFacilities.map((facility) => (
            <MS.PreferencePlaceContainer key={facility.placeName}>
              <MS.PreferencePlaceInfo2>
                <MS.PreferenceInfoWrapper>
                  <LogoumbbellsIcon
                    alt="LogoumbbellsIcon"
                    width={20}
                    height={20}
                  />

                  <Typography.H5Sb color="#004DFF">
                    {facility.placeName}
                  </Typography.H5Sb>
                </MS.PreferenceInfoWrapper>

                <MS.PreferenceButton
                  onClick={() => handleRemoveFacility(facility.placeName)}
                >
                  <XIcon color="#8AADFF" />
                </MS.PreferenceButton>
              </MS.PreferencePlaceInfo2>
            </MS.PreferencePlaceContainer>
          ))}
        </MS.PreferencePlaceWrapper>

        <MS.PlaceHolderWrapper>
          <Placeholder
            text={
              isMypageFacility ? "ex. 아워핏짐 잠실" : "시설 명을 검색해주세요"
            }
            onChange={(e) => setFacilityValue(e.target.value)}
            inputValue={facilityValue}
          />
        </MS.PlaceHolderWrapper>

        <MS.ResultList>
          {searchResults.map((result) => (
            <MS.ResultItem
              key={result.addressName}
              onClick={() =>
                handleSelectFacility({
                  placeName: result.placeName,
                  address: result.addressName,
                })
              }
            >
              <MS.ImageWrapper>
                <DefaultProfileImg size={20} />
              </MS.ImageWrapper>
              <MS.FacilityInfo>
                <Typography.H4Sb>{result.placeName}</Typography.H4Sb>
                <Typography.H5Md color="#8A92A3">
                  {result.addressName}
                </Typography.H5Md>
              </MS.FacilityInfo>
            </MS.ResultItem>
          ))}
        </MS.ResultList>

        <MS.ButtonContainer>
          <Button
            disabled={selectedPreferenceFacilities.length === 0}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            변경완료
          </Button>
        </MS.ButtonContainer>
      </MS.facilityNewContainer>
    </>
  );
}
