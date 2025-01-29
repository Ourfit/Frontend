import { StepProps } from "@/types/step";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import { useState } from "react";
import * as S from "./FitnessLeve.style";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { FITNESS_LEVELS, STEPS_LABEL } from "@/constants/Signup";

const FitnessLevel = ({ nextStep }: StepProps) => {
  const [level, setLevel] = useState<string | null>(null);

  const handleLevelClick = (selectedGender: string) => {
    setLevel(selectedGender);
  };

  const buttonClickHandler = () => {
    if (level && nextStep) {
      nextStep(STEPS_LABEL.FITNESS_LEVEL, level);
    }
  };

  return (
    <S.GenderAgeContainer>
      <S.SignupIntroContainer>
        <S.SignupIntroTitleWrapper>
          <Typography.H1Sb>
            나의&nbsp;
            <span style={{ color: COLORS.BLUE_500 }}>운동 실력</span>
            &nbsp;은?
          </Typography.H1Sb>
        </S.SignupIntroTitleWrapper>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          메이트 매칭 시 나의 프로필에 보여지는 정보에요.
        </Typography.H4Md>
      </S.SignupIntroContainer>
      <S.TextButtonWrapper>
        {Object.values(FITNESS_LEVELS).map(({ label, description }) => (
          <S.CustomTextButton
            key={label}
            isActive={level === label}
            onClick={() => handleLevelClick(label)}
          >
            <Typography.H5Sb>{label}</Typography.H5Sb>
            <Typography.H5Md>{description}</Typography.H5Md>
          </S.CustomTextButton>
        ))}
      </S.TextButtonWrapper>
      <S.ButtonContainer>
        <S.ButtonWrapper>
          <Button
            disabled={!level}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            다음
          </Button>
        </S.ButtonWrapper>
      </S.ButtonContainer>
    </S.GenderAgeContainer>
  );
};

export default FitnessLevel;
