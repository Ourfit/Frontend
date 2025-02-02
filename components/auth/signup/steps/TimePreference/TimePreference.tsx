import { StepProps } from "@/types/step";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import * as S from "./TimePreference.style";
import TextButton from "@/components/common/TextButton";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
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
    <S.TimePreferenceContainer>
      <S.TimePreferenceWrapper>
        <S.SignupIntroContainer>
          <S.SignupIntroTitleWrapper>
            <Typography.H1Sb>선호하는</Typography.H1Sb>
            <Typography.H1Sb>
              <span style={{ color: COLORS.BLUE_500 }}>운동 시간대</span>를
              선택해주세요!
            </Typography.H1Sb>
          </S.SignupIntroTitleWrapper>
          <Typography.H4Md color={COLORS.GRAYSCALE_600}>
            메이트 매칭 시 나의 프로필에 보여지는 정보에요.
          </Typography.H4Md>
        </S.SignupIntroContainer>
        <S.InfoWrapper>
          <S.InfoContainer>
            <Typography.H4Sb>평일</Typography.H4Sb>
            <S.TextButtonWrapper>
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
            </S.TextButtonWrapper>
          </S.InfoContainer>
          <S.InfoContainer>
            <Typography.H4Sb>주말</Typography.H4Sb>
            <S.TextButtonWrapper>
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
            </S.TextButtonWrapper>
          </S.InfoContainer>
        </S.InfoWrapper>
      </S.TimePreferenceWrapper>
      <S.ButtonContainer>
        <Button
          disabled={selectedTimes.length === 0}
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={buttonClickHandler}
        >
          다음
        </Button>
      </S.ButtonContainer>
    </S.TimePreferenceContainer>
  );
};

export default TimePreference;
