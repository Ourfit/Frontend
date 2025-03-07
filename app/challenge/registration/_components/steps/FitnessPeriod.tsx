import { ChallengeStepProps } from "@/types/step";
import * as S from "../ChallengeForm.style";
import Button from "@/components/common/Button";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import SelectBar from "@/components/common/SelectBar/SelectBar";
import { useState } from "react";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { STEPS_LABEL } from "@/constants/Challenge";

export default function FitnessPeriod({ nextStep }: ChallengeStepProps) {
  const [selectedMonth, setSelectedMonth] = useState<string>("00개월");

  const buttonClickHandler = () => {
    if (selectedMonth !== "00개월") {
      nextStep(STEPS_LABEL.FITNESS_PERIOD, selectedMonth.split("개월")[0]);
    }
  };

  return (
    <>
      <S.FitnessSelectWrapper>
        <S.IntroContainer>
          <S.IntroTitleWrapper>
            <Typography.H1Sb>
              <span style={{ color: COLORS.BLUE_500 }}>얼마동안</span>
              도전할까요?
            </Typography.H1Sb>
          </S.IntroTitleWrapper>
          <Typography.H4Md color={COLORS.GRAYSCALE_600}>
            챌린지의 도전 기간은 나중에 수정할 수 없어요.
          </Typography.H4Md>
        </S.IntroContainer>

        <SelectBar
          selectType="month"
          optionValue={selectedMonth}
          setOption={setSelectedMonth}
        />
      </S.FitnessSelectWrapper>

      <Button
        disabled={selectedMonth === "00개월"}
        size={BUTTON_SIZES.LARGE}
        variant={BUTTON_VARIANTS.PRIMARY}
        onClick={buttonClickHandler}
      >
        다음
      </Button>
    </>
  );
}
