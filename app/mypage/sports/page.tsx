"use client";

import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header/Header";
import { queryClient } from "@/components/common/ReactQueryProvider";
import TextButton from "@/components/common/TextButton";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { COLORS } from "@/constants/Theme";
import { useMateDetail } from "@/hooks/queries/useMateDetails";
import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import { useWorkoutTypes } from "@/hooks/queries/useWorkoutTypes";
import { setWorkoutPreferences } from "@/services/mypage/setWorkoutPreferences";
import { useEditProfileStore } from "@/stores/editProfileStore";
import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as S from "./style";

export interface WorkoutType {
  code: string;
  name: string;
}

const SportsPreference = () => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [initialValue, setInitialValue] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const isMypageSports = pathname === "/mypage/sports";
  const isSignup = pathname === "/auth/signup";

  const { data: userInfo } = useMyPageInfo();
  const { data: mydataInfo } = useMateDetail(userInfo?.id);
  const { data: workoutTypes } = useWorkoutTypes();
  const { addIsEdit } = useEditProfileStore();

  const handleSportClick = (sport: string) => {
    setSelectedSports((prev) => {
      if (prev.includes(sport)) {
        return prev.filter((item) => item !== sport);
      } else if (prev.length < 3) {
        return [...prev, sport];
      } else {
        return prev;
      }
    });
  };

  const { mutate: updateWorkoutPreferences } = useMutation({
    mutationFn: async (requestBody: {
      preferredWorkoutTime: string | null;
      favoriteWorkouts: string[];
      favoritePlaces:
        | {
            placeName: string;
            address: string;
          }[]
        | null;
    }) => {
      return await setWorkoutPreferences(requestBody);
    },

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

    onError: (error, _newData, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["myPageInfo"], context.previousData);
      }
      alert("운동 선호 정보를 수정하는데 실패했습니다.");
      console.error(error);
    },

    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ["myPageInfo"] });
      await queryClient.refetchQueries({
        queryKey: ["mateDetail", mydataInfo?.id],
        exact: true,
      });

      addIsEdit(true);
      router.back();
    },
  });

  const buttonClickHandler = () => {
    const requestBody = {
      preferredWorkoutTime: userInfo?.preferredWorkoutTime ?? null,
      favoriteWorkouts: selectedSports,
      favoritePlaces: userInfo?.favoritePlaces ?? null,
    };

    updateWorkoutPreferences(requestBody);
  };

  const isEqual = () => {
    if (selectedSports.length !== initialValue.length) return false;
    return selectedSports.sort().toString() === initialValue.sort().toString();
  };

  useEffect(() => {
    if (userInfo?.favoriteWorkouts) {
      setSelectedSports(
        userInfo.favoriteWorkouts.map((v: WorkoutType) => v.code),
      );
      setInitialValue(
        userInfo.favoriteWorkouts.map((v: WorkoutType) => v.code),
      );
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
      <S.SportsPreferenceWrapper $isHeightFull={!isSignup}>
        <S.SignupIntroContainer>
          <S.SignupIntroTitleWrapper>
            <Typography.H1Sb>
              선호하는 <span style={{ color: COLORS.BLUE_500 }}>운동</span>을
              선택해주세요!
            </Typography.H1Sb>
          </S.SignupIntroTitleWrapper>
          <Typography.H4Md color={COLORS.GRAYSCALE_600}>
            최소 1개, 최대 3개까지 선택해주세요.
          </Typography.H4Md>
        </S.SignupIntroContainer>
        <S.InfoContainer>
          <S.TextButtonWrapper>
            {workoutTypes?.map((workout: WorkoutType) => (
              <TextButton
                key={workout.code}
                isActive={selectedSports.includes(workout.code)}
                onClick={() => handleSportClick(workout.code)}
              >
                <Typography.H4Md>{workout.name}</Typography.H4Md>
              </TextButton>
            ))}
          </S.TextButtonWrapper>
        </S.InfoContainer>
        <S.ButtonContainer>
          <Button
            disabled={selectedSports.length === 0 || isEqual()}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            변경완료
          </Button>
        </S.ButtonContainer>
      </S.SportsPreferenceWrapper>
    </>
  );
};

export default SportsPreference;
