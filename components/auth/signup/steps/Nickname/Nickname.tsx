import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import { StepProps } from "@/types/step";
import * as S from "./Nickname.style";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import React, { useState } from "react";
import { STEPS_LABEL } from "@/constants/Signup";
import Input from "@/components/common/Input/Input";
import { INPUT_STATUS, InputStatus } from "@/constants/InputStatus";

const Nickname = ({ nextStep }: StepProps) => {
  const [nickname, setNickname] = useState("");
  const [status, setStatus] = useState<InputStatus>("default");
  const [isTyping, setIsTyping] = useState(false);

  const inputStyle = {
    backgroundColor: COLORS.BASE_WHITE,
    color: COLORS.GRAYSCALE_900,
  };

  const buttonClickHandler = () => {
    if (nickname.trim()) {
      nextStep(STEPS_LABEL.NICKNAME, nickname);
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
          disabled={!nickname.trim()}
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={buttonClickHandler}
        >
          다음
        </Button>
      </S.ButtonContainer>
    </S.NicknameContainer>
  );
};

export default Nickname;
