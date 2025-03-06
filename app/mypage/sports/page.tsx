"use client";

import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header/Header";
import { queryClient } from "@/components/common/ReactQueryProvider";
import TextButton from "@/components/common/TextButton";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { COLORS } from "@/constants/Theme";
import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import { useWorkoutTypes } from "@/hooks/queries/useWorkoutTypes";
import { setWorkoutPreferences } from "@/services/mypage/setWorkoutPreferences";
import { StepProps } from "@/types/step";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import * as S from "./style";

interface WorkoutType {
  code: string;
  name: string;
}

const SportsPreference = ({ nextStep }: StepProps) => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const isMypageSports = pathname === "/mypage/sports";
  const isSignup = pathname === "/auth/signup";

  const { data: userInfo, refetch } = useMyPageInfo();
  const { data: workoutTypes } = useWorkoutTypes();

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

  const buttonClickHandler = async () => {
    if (isMypageSports) {
      try {
        const preferredWorkoutTime = userInfo?.preferredWorkoutTime ?? null;
        const favoritePlaces = userInfo?.favoritePlaces ?? null;

        const requestBody = {
          preferredWorkoutTime,
          favoriteWorkouts: selectedSports,
          favoritePlaces,
        };

        await setWorkoutPreferences(requestBody);

        await queryClient.refetchQueries({
          queryKey: ["myPageInfo"],
          type: "active",
        });

        router.back();
      } catch (error) {
        console.error(error);
        alert("운동 선호 정보를 수정하는데 실패했습니다.");
      }
    }
  };

  return (
    <>
      <Header />
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
      </S.SportsPreferenceWrapper>
      <S.ButtonContainer>
        <Button
          disabled={selectedSports.length === 0}
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={buttonClickHandler}
          style={{
            maxWidth: "410px",
            height: "53px",
          }}
        >
          {isMypageSports ? "변경 완료" : "다음"}
        </Button>
      </S.ButtonContainer>
    </>
  );
};

export default SportsPreference;
