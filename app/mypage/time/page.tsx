"use client";

import { WorkoutType } from "@/app/mypage/sports/page";
import AfternoonIcon from "@/assets/images/afternoon.svg";
import EveningIcon from "@/assets/images/evening.svg";
import MorningIcon from "@/assets/images/morning.svg";
import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header/Header";
import TextButton from "@/components/common/TextButton";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { TIME_PREFERENCES } from "@/constants/Signup";
import { COLORS } from "@/constants/Theme";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as S from "./style";

import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import { setTimePreference } from "@/services/mypage/setTimePreference";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEditProfileStore } from "@/stores/editProfileStore";

const ICONS = {
  MorningIcon: <MorningIcon />,
  AfternoonIcon: <AfternoonIcon />,
  EveningIcon: <EveningIcon />,
};

const TimePreference = () => {
  const [selectedTimes, setSelectedTimes] = useState<string>("");
  const { data: userInfo } = useMyPageInfo();
  const { addIsEdit } = useEditProfileStore();

  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const isMypageTime = pathname === "/mypage/time";
  const isSignup = pathname === "/auth/signup";

  const handleTimeClick = (timeKey: string) => {
    setSelectedTimes(timeKey);
  };

  const { mutate: updateTimePreference } = useMutation({
    mutationFn: async () => {
      return await setTimePreference({
        preferredWorkoutTime: selectedTimes,
        favoriteWorkouts:
          userInfo?.favoriteWorkouts?.map((w: WorkoutType) => w.code) ?? null,
        favoritePlaces: userInfo?.favoritePlaces ?? null,
      });
    },

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["myPageInfo"] });

      const previousData = queryClient.getQueryData(["myPageInfo"]);

      queryClient.setQueryData(["myPageInfo"], (oldData: any) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          preferredWorkoutTime: selectedTimes,
          favoriteWorkouts:
            oldData.favoriteWorkouts?.map((w: WorkoutType) => w.code) ?? null,
          favoritePlaces: oldData.favoritePlaces ?? null,
        };
      });

      return { previousData };
    },

    onError: (error, _variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["myPageInfo"], context.previousData);
      }
      console.error(error);
      alert("운동 선호 정보를 수정하는데 실패했습니다.");
    },

    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ["myPageInfo"] });

      if (isMypageTime) {
        addIsEdit(true);
        router.back();
      }
    },
  });

  const buttonClickHandler = () => {
    if (selectedTimes) {
      updateTimePreference();
    }
  };

  useEffect(() => {
    if (userInfo?.preferredWorkoutTime) {
      setSelectedTimes(userInfo.preferredWorkoutTime);
    }
  }, [userInfo]);

  return (
    <>
      <Header
        onClick={() => {
          addIsEdit(true);
          router.back();
        }}
      />
      <S.TimePreferenceContainer $isHeightFull={!isSignup}>
        <S.TimePreferenceWrapper>
          <S.SignupIntroContainer>
            <S.SignupIntroTitleWrapper>
              <Typography.H1Sb>선호하는</Typography.H1Sb>
              <Typography.H1Sb>
                <span style={{ color: COLORS.BLUE_500 }}>운동 시간대</span>를
                선택해주세요!
              </Typography.H1Sb>
            </S.SignupIntroTitleWrapper>
            <Typography.H4Md color={COLORS.GRAYSCALE_600}>
              "메이트 매칭 시 필요한 정보에요."
            </Typography.H4Md>
          </S.SignupIntroContainer>
          <S.InfoWrapper>
            <S.InfoContainer>
              <Typography.H4Sb>평일</Typography.H4Sb>
              <S.TextButtonWrapper>
                {TIME_PREFERENCES.WEEKDAY.map(({ key, label, icon }) => (
                  <TextButton
                    key={label}
                    icon={ICONS[icon]}
                    isActive={selectedTimes === key}
                    onClick={() => handleTimeClick(key)}
                  >
                    {label}
                  </TextButton>
                ))}
              </S.TextButtonWrapper>
            </S.InfoContainer>
            <S.InfoContainer>
              <Typography.H4Sb>주말</Typography.H4Sb>
              <S.TextButtonWrapper>
                {TIME_PREFERENCES.WEEKEND.map(({ key, label, icon }) => (
                  <TextButton
                    key={label}
                    icon={ICONS[icon]}
                    isActive={selectedTimes === key}
                    onClick={() => handleTimeClick(key)}
                  >
                    {label}
                  </TextButton>
                ))}
              </S.TextButtonWrapper>
            </S.InfoContainer>
          </S.InfoWrapper>
        </S.TimePreferenceWrapper>
        <S.ButtonContainer>
          <Button
            disabled={!selectedTimes}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            변경 완료
          </Button>
        </S.ButtonContainer>
      </S.TimePreferenceContainer>
    </>
  );
};

export default TimePreference;
