import { ChallengeStepProps } from "@/types/step";
import * as S from "../ChallengeForm.style";
import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { COLORS } from "@/constants/Theme";
import CalendarComponent from "@/app/challenge/_components/Calendar/CalendarComponent";
import { useState } from "react";
import { STEPS_LABEL } from "@/constants/Challenge";
import { dateFormat } from "@/utils/monthList";

export default function FitnessStart({ nextStep }: ChallengeStepProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const onSelectionChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const buttonClickHandler = () => {
    if (selectedDate) {
      nextStep(STEPS_LABEL.FITNESS_START, dateFormat(selectedDate));
    }
  };

  return (
    <>
      <S.FitnessSelectWrapper>
        <S.IntroContainer>
          <S.IntroTitleWrapper>
            <Typography.H1Sb>
              <span style={{ color: COLORS.BLUE_500 }}>언제부터</span>
              시작할까요?
            </Typography.H1Sb>
          </S.IntroTitleWrapper>
          <Typography.H4Md color={COLORS.GRAYSCALE_600}>
            챌린지의 시작 기간은 나중에 수정할 수 없어요.
          </Typography.H4Md>
        </S.IntroContainer>

        <CalendarComponent
          onSelectionChange={onSelectionChange}
          isRegistration
        />
      </S.FitnessSelectWrapper>

      <Button
        disabled={!selectedDate}
        size={BUTTON_SIZES.LARGE}
        variant={BUTTON_VARIANTS.PRIMARY}
        onClick={buttonClickHandler}
      >
        다음
      </Button>
    </>
  );
}
