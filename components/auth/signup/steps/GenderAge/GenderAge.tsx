import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import SelectBar from "@/components/common/SelectBar/SelectBar";
import TextButton from "@/components/common/TextButton";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { GENDER, STEPS_LABEL } from "@/constants/Signup";
import { COLORS } from "@/constants/Theme";
import { StepProps } from "@/types/step";
import { useState } from "react";
import * as S from "./GenderAge.style";

const GenderAge = ({ nextStep }: StepProps) => {
  const [gender, setGender] = useState<string | null>(null);
  const [age, setAge] = useState<number>(0);

  const handleGenderClick = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const buttonClickHandler = () => {
    if (gender && age) {
      nextStep(STEPS_LABEL.GENDER_AGE, { gender, age });
    }
  };

  return (
    <S.GenderAgeContainer>
      <S.GenderAgeWrapper>
        <S.SignupIntroContainer>
          <S.SignupIntroTitleWrapper>
            <Typography.H1Sb>
              <span style={{ color: COLORS.BLUE_500 }}>성별</span>과&nbsp;
              <span style={{ color: COLORS.BLUE_500 }}>나이</span>를
            </Typography.H1Sb>
            <Typography.H1Sb>선택해주세요</Typography.H1Sb>
          </S.SignupIntroTitleWrapper>
          <Typography.H4Md color={COLORS.GRAYSCALE_600}>
            메이트 매칭 시 나의 프로필에 보여지는 정보에요.
          </Typography.H4Md>
        </S.SignupIntroContainer>
        <S.InfoContainer>
          <Typography.H4Sb>성별</Typography.H4Sb>
          <S.TextButtonWrapper>
            {Object.values(GENDER).map((option) => (
              <TextButton
                key={option}
                isActive={gender === option}
                onClick={() => handleGenderClick(option)}
              >
                {option}
              </TextButton>
            ))}
          </S.TextButtonWrapper>
        </S.InfoContainer>
        <S.InfoContainer>
          <Typography.H4Sb>나이</Typography.H4Sb>
          <SelectBar selectType="age" optionValue={age} setOption={setAge} />
        </S.InfoContainer>
      </S.GenderAgeWrapper>
      <S.ButtonContainer>
        <Button
          disabled={!gender || !age}
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={buttonClickHandler}
        >
          다음
        </Button>
      </S.ButtonContainer>
    </S.GenderAgeContainer>
  );
};

export default GenderAge;
