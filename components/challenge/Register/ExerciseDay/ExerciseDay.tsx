import { Typography } from "@/components/atoms/Typography";
import * as S from "./ExerciseDay.style";
import { COLORS } from "@/constants/Theme";
import TextButton from "@/components/common/TextButton";
import Button from "@/components/common/Button";
import { ChallengeRegisterStepProps } from "@/types/step";
import { useState } from "react";
import { REGISTER_STEPS_LABEL } from "@/constants/ChallengeSettings";

const ExerciseDay = ({ nextStep }: ChallengeRegisterStepProps) => {
  const [selectedWeek, setSelectedWeek] = useState<string[]>([]);

  const handleWeekClick = (day: string) => {
    setSelectedWeek((prev) => {
      if (prev.includes(day)) {
        return prev.filter((item) => item !== day);
      } else if (prev.length < 3) {
        return [...prev, day];
      } else {
        return prev;
      }
    });
  };

  return (
    <>
      <S.TextWrapper>
        <Typography.H1Sb color={COLORS.GRAYSCALE_900}>
          매주<S.HighlightedText>&nbsp;어떤 요일</S.HighlightedText>에
          운동할까요?
        </Typography.H1Sb>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          앞서 설정한 횟수만큼 요일을 선택해주세요.
        </Typography.H4Md>
      </S.TextWrapper>
      <S.ExercisePeriodWrapper>
        <S.TextButtonContainer>
          {["월", "화", "수"].map((day) => (
            <TextButton
              key={day}
              isActive={selectedWeek.includes(day)}
              onClick={() => handleWeekClick(day)}
            >
              {day}
            </TextButton>
          ))}
        </S.TextButtonContainer>
        <S.TextButtonContainer>
          {["목", "금", "토", "일"].map((day) => (
            <TextButton
              key={day}
              isActive={selectedWeek.includes(day)}
              onClick={() => handleWeekClick(day)}
            >
              {day}
            </TextButton>
          ))}
        </S.TextButtonContainer>
      </S.ExercisePeriodWrapper>
      <S.NextButtonWrapper>
        <Button
          size="l"
          variant="primary"
          disabled={selectedWeek.length === 0}
          onClick={() =>
            nextStep(REGISTER_STEPS_LABEL.EXERCISE_DAY, selectedWeek)
          }
        >
          다음
        </Button>
      </S.NextButtonWrapper>
    </>
  );
};

export default ExerciseDay;
