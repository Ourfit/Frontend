"use client";
import AfternoonIcon from "@/assets/images/afternoon.svg";
import EveningIcon from "@/assets/images/evening.svg";
import MorningIcon from "@/assets/images/morning.svg";
import { Typography } from "@/components/atoms/Typography";
import Header from "@/components/common/Header/Header";
import Placeholder from "@/components/common/Placeholder/Placeholder";
import { useSearchMates } from "@/hooks/queries/useSearchMates";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { JSX, useState } from "react";
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

  const iconMapping: Record<string, JSX.Element> = {
    morning: <MorningIcon />,
    afternoon: <AfternoonIcon />,
    evening: <EveningIcon />,
  };

  function getTimeSlot(
    timeKey: string,
  ): "morning" | "afternoon" | "evening" | "" {
    if (timeKey.includes("MORNING")) return "morning";
    if (timeKey.includes("AFTERNOON")) return "afternoon";
    if (timeKey.includes("EVENING")) return "evening";
    return "";
  }

  const [inputValue, setInputValue] = useState("");

  const debouncedInput = useDebounce(inputValue, 300);
  const shouldSearch = debouncedInput.trim().length > 0;
  const router = useRouter();

  const { data: searchData } = useSearchMates({
    nickname: shouldSearch ? debouncedInput : "",
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
            ? allMates.map((mate) => {
                const timeSlot = getTimeSlot(mate.preferredWorkoutTime);

                return (
                  <S.MateListItem
                    key={mate.id}
                    onClick={() =>
                      router.push(
                        `/mate/mateprofile/${encodeURIComponent(mate.id)}`,
                      )
                    }
                  >
                    <S.MateProfileImageWrapper>
                      <S.ProfileImage
                        src={mate.profileUrl}
                        alt={mate.nickname}
                      />
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

                      <S.PreferenceTags>
                        {mate.favoriteWorkouts.map((workout, index) => (
                          <S.Tag key={workout.code}>
                            <Typography.H6Md color="#6C727F">
                              {workout.name}
                            </Typography.H6Md>
                          </S.Tag>
                        ))}
                        <S.TimeTag>
                          {timeSlot &&
                            iconMapping[timeSlot] &&
                            iconMapping[timeSlot]}

                          <Typography.H6Md color="#6C727F">
                            {timeMapping[mate.preferredWorkoutTime]}
                          </Typography.H6Md>
                        </S.TimeTag>
                      </S.PreferenceTags>
                    </S.MateInfoWrapper>
                  </S.MateListItem>
                );
              })
            : null}
        </S.MateList>
      </S.SearchContainer>
    </>
  );
}
