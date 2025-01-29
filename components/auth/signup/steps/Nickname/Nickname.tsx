import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import { StepProps } from "@/types/step";
import * as S from "./Nickname.style";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import React, { useState } from "react";
import { STEPS_LABEL } from "@/constants/Signup";
import Toast from "@/components/common/Toast/Toast";
import { TOAST_MESSAGES, TOAST_STATUSES } from "@/constants/Toast";

const Nickname = ({ nextStep, value }: StepProps) => {
  const [nickname, setNickname] = useState(value || "");
  const [showToast, setShowToast] = useState(false);

  const buttonClickHandler = () => {
    if (nickname.trim()) {
      if (nextStep) nextStep(STEPS_LABEL.NICKNAME, nickname);
      else {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <S.NicknameContainer>
      <S.SignupIntroContainer>
        <S.SignupIntroTitleWrapper>
          <Typography.H1Sb>반가워요!</Typography.H1Sb>
          <Typography.H1Sb>
            <span style={{ color: COLORS.BLUE_500 }}>닉네임</span>을
            설정해주세요
          </Typography.H1Sb>
        </S.SignupIntroTitleWrapper>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          닉네임은 30일마다 변경할 수 있어요.
        </Typography.H4Md>
      </S.SignupIntroContainer>
      <input
        placeholder={"한글만 입력 가능, 최대 12자"}
        onChange={handleInputChange}
      />
      <S.ButtonContainer>
        <S.ButtonWrapper>
          <Button
            disabled={!nickname.trim() || nickname === value}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            {nextStep ? "다음" : "변경완료"}
          </Button>
        </S.ButtonWrapper>
      </S.ButtonContainer>
      {showToast && (
        <Toast
          message={TOAST_MESSAGES.SUCCESS}
          status={TOAST_STATUSES.SUCCESS}
        />
      )}
    </S.NicknameContainer>
  );
};

export default Nickname;
