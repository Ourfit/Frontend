import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import * as S from "./Region.style";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { StepProps } from "@/types/step";
import React, { useState } from "react";
import { STEPS_LABEL } from "@/constants/Signup";
import Placeholder from "@/components/common/Placeholder/Placeholder";

const Region = ({ nextStep }: StepProps) => {
  const [inputValue, setInputValue] = useState("");
  const [region, setRegion] = useState("");
  const [show, setShow] = useState(false);

  const buttonClickHandler = () => {
    if (region) {
      nextStep(STEPS_LABEL.REGION, region);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    setTimeout(() => {
      setShow(true);
    }, 1000);
  };

  const handleClick = (region: string) => {
    setRegion(region);
    setShow(false);
    setInputValue(region);
  };

  const regionList = [
    "송파구 신천동",
    "송파구 신천동",
    "송파구 신천동",
    "송파구 신천동",
    "송파구 신천동",
  ];

  const style = {
    backgroundColor: COLORS.BASE_WHITE,
  };

  return (
    <S.RegionContainer $gap={show ? "16px" : "36px"}>
      <S.RegionWrapper>
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
        <Placeholder
          inputValue={inputValue}
          setInputValue={setInputValue}
          onChange={handleInputChange}
          style={style}
          placeholder="동명으로 검색 (ex.신천동)"
          showLength={false}
        />
      </S.RegionWrapper>
      {!show ? (
        <S.ButtonContainer>
          <Button
            disabled={!region}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={buttonClickHandler}
          >
            다음
          </Button>
        </S.ButtonContainer>
      ) : (
        <S.RegionList>
          {regionList.map((region, idx) => (
            <S.Region key={idx} onClick={() => handleClick(region)}>
              {region}
            </S.Region>
          ))}
        </S.RegionList>
      )}
    </S.RegionContainer>
  );
};

export default Region;
