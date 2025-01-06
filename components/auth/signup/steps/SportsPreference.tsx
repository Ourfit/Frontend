import { StepProps } from "@/types/step";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { useState } from "react";
import TextButton from "@/components/common/TextButton";
import styled from "styled-components";
import { SPORTS_LABEL } from "@/constants/Signup";

const SportsPreferenceContainer = styled.div`
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
  gap: 10px;
  width: 100%;
  white-space: nowrap;
  flex-wrap: wrap;
`;

const SportsPreference = ({ nextStep }: StepProps) => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

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

  const buttonClickHandler = () => {
    if (selectedSports.length >= 1) {
      nextStep("sportsPreference", selectedSports);
    }
  };

  return (
    <SportsPreferenceContainer>
      <SignupIntroContainer>
        <SignupIntroTitleWrapper>
          <Typography.H1Sb>
            선호하는 <span style={{ color: COLORS.BLUE_500 }}>운동</span>을
            선택해주세요!
          </Typography.H1Sb>
        </SignupIntroTitleWrapper>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          최소 1개, 최대 3개까지 선택해주세요.
        </Typography.H4Md>
      </SignupIntroContainer>
      <InfoContainer>
        <TextButtonWrapper>
          {Object.values(SPORTS_LABEL).map((sport) => (
            <TextButton
              key={sport}
              isActive={selectedSports.includes(sport)}
              onClick={() => handleSportClick(sport)}
            >
              {sport}
            </TextButton>
          ))}
        </TextButtonWrapper>
      </InfoContainer>
      <ButtonContainer>
        <ButtonWrapper>
          <Button
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            다음
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
    </SportsPreferenceContainer>
  );
};

export default SportsPreference;
