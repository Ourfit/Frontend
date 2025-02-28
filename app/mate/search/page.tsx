"use client";
import { Typography } from "@/components/atoms/Typography";
import Header from "@/components/common/Header/Header";
import Placeholder from "@/components/common/Placeholder/Placeholder";
import { useSearchMates } from "@/hooks/queries/useSearchMates";
import { useRouter } from "next/navigation";
import { useDeferredValue, useState } from "react";
import * as S from "./style";

export default function SearchPage() {
  const timeMapping: Record<string, string> = {
    WEEKDAY_MORNING: "평일 아침",
    WEEKDAY_AFTERNOON: "평일 낮",
    WEEKDAY_EVENING: "평일 저녁",
    WEEKEND_MORNING: "주말 아침",
    WEEKEND_AFTERNOON: "주말 낮",
    WEEKEND_EVENING: "주말 저녁",
  };

  const [inputValue, setInputValue] = useState("");

  const deferredInput = useDeferredValue(inputValue);
  const shouldSearch = deferredInput.trim().length > 0;
  const router = useRouter();

  const { data: searchData } = useSearchMates({
    nickname: shouldSearch ? deferredInput : "",
    size: 10,
  });

  const allMates = shouldSearch
    ? (searchData?.pages.flatMap((page) => page.content) ?? [])
    : [];

  return (
    <>
      <Header />
      <S.SearchContainer>
        <S.PlaceHolderWrapper>
          <Placeholder
            text="메이트의 닉네임을 검색해보세요."
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </S.PlaceHolderWrapper>
        <S.MateList>
          {allMates.length > 0
            ? allMates.map((mate) => (
                <S.MateListItem
                  key={mate.id}
                  onClick={() =>
                    router.push(
                      `/mate/mateprofile/${encodeURIComponent(mate.id)}`,
                    )
                  }
                >
                  <S.MateProfileImageWrapper>
                    <S.ProfileImage src={mate.profileUrl} alt={mate.nickname} />
                  </S.MateProfileImageWrapper>

                  <S.MateInfoWrapper>
                    <S.ProfileInfo>
                      <S.ProfileInfoTitle>
                        <Typography.H3Sb>{mate.nickname}</Typography.H3Sb>
                        <Typography.H6Md color="#6C727F">
                          {mate.gender}, {mate.age}세
                        </Typography.H6Md>
                      </S.ProfileInfoTitle>
                      <S.ProfileText>
                        <Typography.H6Md color="#8A92A3">
                          {mate.introduction}
                        </Typography.H6Md>
                      </S.ProfileText>
                    </S.ProfileInfo>

                    <S.PreferenceTags></S.PreferenceTags>
                  </S.MateInfoWrapper>
                </S.MateListItem>
              ))
            : null}
        </S.MateList>
      </S.SearchContainer>
    </>
  );
}
