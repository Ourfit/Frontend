import { StepProps } from "@/types/step";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";
import { useState } from "react";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import TextButton from "@/components/common/TextButton";
import { GENDER } from "@/constants/Signup";

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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
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
  gap: 16px;
`;

const GenderAge = ({ nextStep }: StepProps) => {
  const [gender, setGender] = useState<string | null>(null);
  const [age, setAge] = useState<string>("");

  const handleGenderClick = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAge(e.target.value);
  };

  const buttonClickHandler = () => {
    if (gender && age) {
      nextStep("genderAge", { gender, age });
    }
  };

  return (
    <GenderAgeContainer>
      <SignupIntroContainer>
        <SignupIntroTitleWrapper>
          <Typography.H1Sb>
            <span style={{ color: COLORS.BLUE_500 }}>성별</span>과&nbsp;
            <span style={{ color: COLORS.BLUE_500 }}>나이</span>를
          </Typography.H1Sb>
          <Typography.H1Sb>선택해주세요</Typography.H1Sb>
        </SignupIntroTitleWrapper>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          메이트 매칭 시 나의 프로필에 보여지는 정보에요.
        </Typography.H4Md>
      </SignupIntroContainer>
      <InfoContainer>
        <Typography.H4Sb>시간대</Typography.H4Sb>
        <TextButtonWrapper>
          {Object.values(GENDER).map((option) => (
            <TextButton
              key={option}
              isActive={gender === option}
              onClick={() => handleGenderClick(option)}
            >
              {option}
            </TextButton>
          ))}
        </TextButtonWrapper>
      </InfoContainer>
      <InfoContainer>
        <Typography.H4Sb>나이</Typography.H4Sb>
        <select value={age} onChange={handleAgeChange}>
          <option value="">나이를 선택하세요</option>
          {Array.from({ length: 69 - 15 + 1 }, (_, index) => (
            <option key={index} value={index + 15}>
              {index + 15}세
            </option>
          ))}
        </select>
      </InfoContainer>
      <ButtonContainer>
        <ButtonWrapper>
          <Button
            disabled={!gender || !age}
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

export default GenderAge;
