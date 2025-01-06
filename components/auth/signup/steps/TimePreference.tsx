import { StepProps } from "@/types/step";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import TextButton from "@/components/common/TextButton";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import styled from "styled-components";
import { useState } from "react";
import MorningIcon from "@/assets/images/morning.svg";
import EveningIcon from "@/assets/images/evening.svg";
import AfternoonIcon from "@/assets/images/afternoon.svg";
import Button from "@/components/common/Button";
import { STEPS_LABEL, TIME_PREFERENCES } from "@/constants/Signup";

const ICONS = {
  MorningIcon: <MorningIcon />,
  AfternoonIcon: <AfternoonIcon />,
  EveningIcon: <EveningIcon />,
};

const TimePreferenceContainer = styled.div`
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
  width: 100%;
  max-width: 100%;
  gap: 10px;
  color: ${COLORS.GRAYSCALE_600};
  white-space: nowrap;
`;

const TimePreference = ({ nextStep }: StepProps) => {
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const handleTimeClick = (time: string) => {
    setSelectedTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time],
    );
  };

  const buttonClickHandler = () => {
    if (selectedTimes.length > 0) {
      nextStep(STEPS_LABEL.TIME_PREFERENCES, selectedTimes);
    }
  };

  return (
    <TimePreferenceContainer>
      <SignupIntroContainer>
        <SignupIntroTitleWrapper>
          <Typography.H1Sb>선호하는</Typography.H1Sb>
          <Typography.H1Sb>
            <span style={{ color: COLORS.BLUE_500 }}>운동 시간대</span>를
            선택해주세요!
          </Typography.H1Sb>
        </SignupIntroTitleWrapper>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          메이트 매칭 시 나의 프로필에 보여지는 정보에요.
        </Typography.H4Md>
      </SignupIntroContainer>
      <InfoContainer>
        <Typography.H4Sb>평일</Typography.H4Sb>
        <TextButtonWrapper>
          {TIME_PREFERENCES.WEEKDAY.map(({ label, icon }) => (
            <TextButton
              key={label}
              icon={ICONS[icon]}
              isActive={selectedTimes.includes(label)}
              onClick={() => handleTimeClick(label)}
            >
              {label}
            </TextButton>
          ))}
        </TextButtonWrapper>
      </InfoContainer>
      <InfoContainer>
        <Typography.H4Sb>주말</Typography.H4Sb>
        <TextButtonWrapper>
          {TIME_PREFERENCES.WEEKEND.map(({ label, icon }) => (
            <TextButton
              key={label}
              icon={ICONS[icon]}
              isActive={selectedTimes.includes(label)}
              onClick={() => handleTimeClick(label)}
            >
              {label}
            </TextButton>
          ))}
        </TextButtonWrapper>
      </InfoContainer>
      <ButtonContainer>
        <ButtonWrapper>
          <Button
            disabled={selectedTimes.length === 0}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            다음
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
    </TimePreferenceContainer>
  );
};

export default TimePreference;
