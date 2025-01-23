import { Typography } from "@/components/atoms/Typography";
import * as S from "./ExerciseNumber.style";
import { COLORS } from "@/constants/Theme";
import TextButton from "@/components/common/TextButton";
import { useState } from "react";
import Button from "@/components/common/Button";
import { REGISTER_STEPS_LABEL } from "@/constants/ChallengeSettings";
import { ChallengeRegisterStepProps } from "@/types/step";

const ExerciseNumber = ({ nextStep }: ChallengeRegisterStepProps) => {
  const [selectedNumber, setSelectedNumber] = useState<number>(0);

  return (
    <>
      <S.TextWrapper>
        <Typography.H1Sb color={COLORS.GRAYSCALE_900}>
          매주<S.HighlightedText>&nbsp;몇 회&nbsp;</S.HighlightedText>
          운동할까요?
        </Typography.H1Sb>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          나중에 운동 횟수를 변경할 수 없어요.
        </Typography.H4Md>
      </S.TextWrapper>
      <S.ExerciseNumberWrapper>
        <S.TextButtonContainer>
          {[1, 2, 3].map((number) => (
            <TextButton
              key={number}
              isActive={selectedNumber === number}
              onClick={() => setSelectedNumber(number)}
            >
              {number}회
            </TextButton>
          ))}
        </S.TextButtonContainer>
        <S.TextButtonContainer>
          {[4, 5, 6, 7].map((number) => (
            <TextButton
              key={number}
              isActive={selectedNumber === number}
              onClick={() => setSelectedNumber(number)}
            >
              {number}회
            </TextButton>
          ))}
        </S.TextButtonContainer>
      </S.ExerciseNumberWrapper>
      <S.NextButtonWrapper>
        <Button
          size="l"
          variant="primary"
          disabled={selectedNumber === 0}
          onClick={() =>
            nextStep(REGISTER_STEPS_LABEL.EXERCISE_NUMBER, selectedNumber)
          }
        >
          다음
        </Button>
      </S.NextButtonWrapper>
    </>
  );
};

export default ExerciseNumber;
