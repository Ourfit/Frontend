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
import Input from "@/components/common/Input/Input";
import { INPUT_STATUS, InputStatus } from "@/constants/InputStatus";

const Nickname = ({ nextStep, value }: StepProps) => {
  const [nickname, setNickname] = useState(
    typeof value === "string" ? value : "",
  );
  const [showToast, setShowToast] = useState(false);
  const [status, setStatus] = useState<InputStatus>("default");
  const [isTyping, setIsTyping] = useState(false);

  const inputStyle = {
    backgroundColor: COLORS.BASE_WHITE,
    color: COLORS.GRAYSCALE_900,
  };

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

    if (nickname.trim() === "") {
      setStatus(INPUT_STATUS.DEFAULT);
      setIsTyping(false);
    } else {
      setIsTyping(true);
      setStatus(INPUT_STATUS.TYPING);
    }
  };

  const handleInputBlur = () => {
    if (nickname.trim() !== "") {
      setStatus(INPUT_STATUS.COMPLETE);
    } else {
      setStatus(INPUT_STATUS.DEFAULT);
    }
    setIsTyping(false);
  };

  const handleClear = () => {
    setNickname("");
  };

  return (
    <S.NicknameContainer>
      <S.NicknameWrapper>
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
        <Input
          value={nickname}
          deferredValue={nickname}
          placeholder={"한글만 입력 가능, 최대 12자"}
          status={status}
          isTyping={isTyping}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onClear={handleClear}
          inputStyle={{ ...inputStyle }}
        />
      </S.NicknameWrapper>
      <S.ButtonContainer>
        <Button
          disabled={!nickname.trim() || nickname === value}
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={buttonClickHandler}
        >
          {nextStep ? "다음" : "변경완료"}
        </Button>
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
