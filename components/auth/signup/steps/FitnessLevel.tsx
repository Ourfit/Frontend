import { StepProps } from "@/types/step";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import { useState } from "react";
import TextButton from "@/components/common/TextButton";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import styled from "styled-components";
import { FITNESS_LEVELS } from "@/constants/Signup";

const GenderAgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SignupIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SignupIntroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  box-sizing: border-box;
  width: 65px;
`;

const TextButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
`;

const CustomTextButton = styled(TextButton)`
  display: flex;
  gap: 8px;
`;

const FitnessLevel = ({ nextStep }: StepProps) => {
  const [level, setLevel] = useState<string | null>(null);

  const handleLevelClick = (selectedGender: string) => {
    setLevel(selectedGender);
  };

  const buttonClickHandler = () => {
    if (level) {
      nextStep("level", level);
    }
  };

  return (
    <GenderAgeContainer>
      <SignupIntroContainer>
        <SignupIntroTitleWrapper>
          <Typography.H1Sb>
            나의&nbsp;<span style={{ color: COLORS.BLUE_500 }}>운동 실력</span>
            &nbsp;은?
          </Typography.H1Sb>
        </SignupIntroTitleWrapper>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          메이트 매칭 시 나의 프로필에 보여지는 정보에요.
        </Typography.H4Md>
      </SignupIntroContainer>
      <TextButtonWrapper>
        {Object.values(FITNESS_LEVELS).map(({ label, description }) => (
          <CustomTextButton
            key={label}
            isActive={level === label}
            onClick={() => handleLevelClick(label)}
          >
            <Typography.H5Sb>{label}</Typography.H5Sb>
            <Typography.H5Md>{description}</Typography.H5Md>
          </CustomTextButton>
        ))}
      </TextButtonWrapper>
      <ButtonContainer>
        <ButtonWrapper>
          <Button
            disabled={!level}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            다음
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
    </GenderAgeContainer>
  );
};

export default FitnessLevel;
