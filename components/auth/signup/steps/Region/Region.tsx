import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import * as S from "./Region.style";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { StepProps } from "@/types/step";
import React, { useState } from "react";
import { STEPS_LABEL } from "@/constants/Signup";
import Toast from "@/components/common/Toast/Toast";
import { TOAST_MESSAGES, TOAST_STATUSES } from "@/constants/Toast";

const Region = ({ nextStep, value }: StepProps) => {
  const [region, setRegion] = useState(typeof value === "string" ? value : "");
  const [showToast, setShowToast] = useState(false);

  const buttonClickHandler = () => {
    if (region.trim()) {
      if (nextStep) nextStep(STEPS_LABEL.REGION, region);
      else {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(e.target.value);
  };

  return (
    <S.RegionContainer>
      <S.SignupIntroContainer>
        <S.SignupIntroTitleWrapper>
          <Typography.H1Sb>
            <span style={{ color: COLORS.BLUE_500 }}>사는 지역</span>을
          </Typography.H1Sb>
          <Typography.H1Sb>선택해주세요</Typography.H1Sb>
        </S.SignupIntroTitleWrapper>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          같은 동네 메이트를 매치해드려요!
        </Typography.H4Md>
      </S.SignupIntroContainer>
      <input onChange={handleInputChange} />
      <S.ButtonContainer>
        <S.ButtonWrapper>
          <Button
            disabled={!region.trim() || region === value}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            다음
          </Button>
        </S.ButtonWrapper>
      </S.ButtonContainer>
      {showToast && (
        <Toast
          message={TOAST_MESSAGES.SUCCESS}
          status={TOAST_STATUSES.SUCCESS}
        />
      )}
    </S.RegionContainer>
  );
};

export default Region;
