import { COLORS } from "@/constants/Theme";
import * as S from "./ExercisePeriod.style";
import { Typography } from "@/components/atoms/Typography";
import SelectBar from "@/components/common/SelectBar/SelectBar";
import { useState } from "react";
import Button from "@/components/common/Button";
import { ChallengeRegisterStepProps } from "@/types/step";
import { REGISTER_STEPS_LABEL } from "@/constants/ChallengeSettings";

const ExercisePeriod = ({ nextStep }: ChallengeRegisterStepProps) => {
  const [period, setPeriod] = useState<number>(0);

  return (
    <>
      <S.TextWrapper>
        <Typography.H1Sb color={COLORS.GRAYSCALE_900}>
          <S.HighlightedText>얼마 동안&nbsp;</S.HighlightedText>
          도전할까요?
        </Typography.H1Sb>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          챌린지의 도전 기간은 나중에 수정할 수 없어요.
        </Typography.H4Md>
      </S.TextWrapper>
      <S.SelectBarWrapper>
        <SelectBar
          selectType="month"
          optionValue={period}
          setOption={setPeriod}
        />
      </S.SelectBarWrapper>
      <S.NextButtonWrapper>
        <Button
          size="l"
          variant="primary"
          disabled={period === 0}
          onClick={() => nextStep(REGISTER_STEPS_LABEL.EXERCISE_PERIOD, period)}
        >
          다음
        </Button>
      </S.NextButtonWrapper>
    </>
  );
};

export default ExercisePeriod;
