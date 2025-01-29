import { StepProps } from "@/types/step";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import Button from "@/components/common/Button";
import * as S from "./SportsPreference.style";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { useState } from "react";
import TextButton from "@/components/common/TextButton";
import { SPORTS_LABEL, STEPS_LABEL } from "@/constants/Signup";

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
    if (selectedSports.length >= 1 && nextStep) {
      nextStep(STEPS_LABEL.SPORTS_PREFERENCES, selectedSports);
    }
  };

  return (
    <S.SportsPreferenceContainer>
      <S.SignupIntroContainer>
        <S.SignupIntroTitleWrapper>
          <Typography.H1Sb>
            선호하는 <span style={{ color: COLORS.BLUE_500 }}>운동</span>을
            선택해주세요!
          </Typography.H1Sb>
        </S.SignupIntroTitleWrapper>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          최소 1개, 최대 3개까지 선택해주세요.
        </Typography.H4Md>
      </S.SignupIntroContainer>
      <S.InfoContainer>
        <S.TextButtonWrapper>
          {Object.values(SPORTS_LABEL).map((sport) => (
            <TextButton
              key={sport}
              isActive={selectedSports.includes(sport)}
              onClick={() => handleSportClick(sport)}
            >
              {sport}
            </TextButton>
          ))}
        </S.TextButtonWrapper>
      </S.InfoContainer>
      <S.ButtonContainer>
        <S.ButtonWrapper>
          <Button
            disabled={selectedSports.length === 0}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            다음
          </Button>
        </S.ButtonWrapper>
      </S.ButtonContainer>
    </S.SportsPreferenceContainer>
  );
};

export default SportsPreference;
