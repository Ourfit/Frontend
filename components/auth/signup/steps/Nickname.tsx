import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";
import { StepProps } from "@/types/step";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import React, { useState } from "react";
import { STEPS_LABEL } from "@/constants/Signup";

const NicknameContainer = styled.div`
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

const Nickname = ({ nextStep }: StepProps) => {
  const [nickname, setNickname] = useState("");

  const buttonClickHandler = () => {
    if (nickname.trim()) {
      nextStep(STEPS_LABEL.NICKNAME, nickname);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  return (
    <NicknameContainer>
      <SignupIntroContainer>
        <SignupIntroTitleWrapper>
          <Typography.H1Sb>반가워요!</Typography.H1Sb>
          <Typography.H1Sb>
            <span style={{ color: COLORS.BLUE_500 }}>닉네임</span>을
            설정해주세요
          </Typography.H1Sb>
        </SignupIntroTitleWrapper>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          닉네임은 30일마다 변경할 수 있어요.
        </Typography.H4Md>
      </SignupIntroContainer>
      <input
        placeholder={"한글만 입력 가능, 최대 12자"}
        onChange={handleInputChange}
      />
      <ButtonContainer>
        <ButtonWrapper>
          <Button
            disabled={!nickname.trim()}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            다음
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
    </NicknameContainer>
  );
};

export default Nickname;
