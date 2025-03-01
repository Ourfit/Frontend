"use client";
import AfternoonIcon from "@/assets/images/afternoon.svg";
import ChevronLeft from "@/assets/images/chevron-left.svg";
import EveningIcon from "@/assets/images/evening.svg";
import MorningIcon from "@/assets/images/morning.svg";
import { Typography } from "@/components/atoms/Typography";
import Tooltip from "@/components/common/Tooltip/Tooltip";
import { useSearchMates } from "@/hooks/queries/useSearchMates";
import { useRouter } from "next/navigation";
import { JSX, useEffect, useRef, useState } from "react";
import FilterPanel from "./FilterPanel/FilterPanel";

import * as S from "./style";

export default function ExploreMate() {
  const router = useRouter();

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

  const [showTooltip, setShowTooltip] = useState(true);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [filters, setFilters] = useState<{
    gender: string | null;
    time: string | null;
    sports: string[];
  }>({ gender: null, time: null, sports: [] });

  console.log(filters);

  const preferredTimes = filters.time ? [filters.time] : undefined;
  const workoutTypes = filters.sports.length > 0 ? filters.sports : undefined;

  // useInfiniteQuery 훅
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSearchMates({
      gender: filters.gender || undefined,
      preferredTimes,
      workoutTypes,
      size: 10,
    });

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const mates = data?.pages.flatMap((page) => page.content) ?? [];

  console.log(mates);

  const isFilterApplied =
    !!filters.gender || !!filters.time || filters.sports.length > 0;

  const handleFilterApply = (newFilters: {
    gender: string | null;
    time: string | null;
    sports: string[];
  }) => {
    setFilters(newFilters);

    setShowFilterPanel(false);
  };

  const handleFilterClick = () => {
    setShowTooltip(false);
    setShowFilterPanel(!showFilterPanel);
  };

  const filterCount =
    (filters.gender ? 1 : 0) + (filters.time ? 1 : 0) + filters.sports.length;

  return (
    <S.ExploreMateContainer>
      {/* 필터 버튼 */}
      <S.FilterWrapper>
        <S.MateFilterTrigger
          $isFilterApplied={isFilterApplied}
          onClick={handleFilterClick}
        >
          <Typography.H5Sb color={isFilterApplied ? "#004DFF" : "#8A92A3"}>
            필터 {filterCount > 0 && `+${filterCount}`}
          </Typography.H5Sb>
          <ChevronLeft
            style={{
              transform: "rotate(270deg)",
              color: isFilterApplied ? "#004DFF" : "#8A92A3",
            }}
            width="16px"
            height="16px"
          />
        </S.MateFilterTrigger>
        {showTooltip && (
          <Tooltip
            text="원하는 메이트 조건을 설정해보세요!"
            position="left"
            left={99}
          />
        )}
      </S.FilterWrapper>

      {/* 필터 패널 */}
      {showFilterPanel && (
        <FilterPanel
          onClose={() => setShowFilterPanel(false)}
          onApply={handleFilterApply}
        />
      )}

      {/* 실제 메이트 리스트 */}
      <S.MateList>
        {mates.map((mate) => {
          const timeSlot = getTimeSlot(mate.preferredWorkoutTime);

          return (
            <S.MateListItem
              key={mate.id}
              onClick={() =>
                router.push(`/mate/mateprofile/${encodeURIComponent(mate.id)}`)
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
                <S.PreferenceTags>
                  {mate.favoriteWorkouts.map((workout) => (
                    <S.Tag key={workout.code}>
                      <Typography.H6Md color="#6C727F">
                        {workout.name}
                      </Typography.H6Md>
                    </S.Tag>
                  ))}

                  <S.TimeTag>
                    {timeSlot && iconMapping[timeSlot] && iconMapping[timeSlot]}

                    <Typography.H6Md color="#6C727F">
                      {timeMapping[mate.preferredWorkoutTime]}
                    </Typography.H6Md>
                  </S.TimeTag>
                </S.PreferenceTags>
              </S.MateInfoWrapper>
            </S.MateListItem>
          );
        })}
      </S.MateList>

      <div ref={loadMoreRef} style={{ height: 1 }} />
    </S.ExploreMateContainer>
  );
}
