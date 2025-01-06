import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { StepProps } from "@/types/step";
import { useState } from "react";

const RegionContainer = styled.div`
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

const Region = ({ nextStep }: StepProps) => {
  const [region, setRegion] = useState("");

  const buttonClickHandler = () => {
    if (region.trim()) {
      nextStep("region", region);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(e.target.value);
  };

  return (
    <RegionContainer>
      <SignupIntroContainer>
        <SignupIntroTitleWrapper>
          <Typography.H1Sb>
            <span style={{ color: COLORS.BLUE_500 }}>사는 지역</span>을
          </Typography.H1Sb>
          <Typography.H1Sb>선택해주세요</Typography.H1Sb>
        </SignupIntroTitleWrapper>
        <Typography.H4Md color={COLORS.GRAYSCALE_600}>
          같은 동네 메이트를 매치해드려요!
        </Typography.H4Md>
      </SignupIntroContainer>
      <input onChange={handleInputChange} />
      <ButtonContainer>
        <ButtonWrapper>
          <Button
            disabled={!region.trim()}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            다음
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
    </RegionContainer>
  );
};

export default Region;
