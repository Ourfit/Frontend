import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import * as S from "./Region.style";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { StepProps } from "@/types/step";
import React, { useState } from "react";
import { STEPS_LABEL } from "@/constants/Signup";

const Region = ({ nextStep }: StepProps) => {
  const [region, setRegion] = useState("");

  const buttonClickHandler = () => {
    if (region.trim()) {
      nextStep(STEPS_LABEL.REGION, region);
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
            disabled={!region.trim()}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            다음
          </Button>
        </S.ButtonWrapper>
      </S.ButtonContainer>
    </S.RegionContainer>
  );
};

export default Region;
