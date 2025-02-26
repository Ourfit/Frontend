import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import * as S from "./Region.style";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { StepProps } from "@/types/step";
import React, { useDeferredValue, useEffect, useState } from "react";
import { STEPS_LABEL } from "@/constants/Signup";
import Toast from "@/components/common/Toast/Toast";
import { TOAST_MESSAGES, TOAST_STATUSES } from "@/constants/Toast";
import Placeholder from "@/components/common/Placeholder/Placeholder";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { getRegions } from "@/services/signup/getRegions";

const Region = ({ nextStep, value }: StepProps) => {
  const [inputValue, setInputValue] = useState("");
  const deferredValue = useDeferredValue(inputValue);
  const debouncedValue = useDebounce(inputValue, 1000);

  const [region, setRegion] = useState(typeof value === "string" ? value : "");
  const [showToast, setShowToast] = useState(false);
  const [regionList, setRegionList] = useState<string[] | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["region", debouncedValue],
    queryFn: () => debouncedValue && !region && getRegions(debouncedValue),
    staleTime: 1000 * 60 * 5,
    enabled: !!deferredValue,
  });

  useEffect(() => {
    if (data) {
      setRegionList(
        data.data.map(
          (value: {
            fullName: string;
            region1: string;
            region2: string;
            region3: string;
          }) => value.fullName,
        ),
      );
    }
  }, [data]);

  useEffect(() => {
    setRegionList(null);
    if (!inputValue.trim()) setRegion("");
  }, [inputValue]);

  const buttonClickHandler = () => {
    if (region) {
      if (nextStep) nextStep(STEPS_LABEL.REGION, region);
      else {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = (region: string) => {
    setRegion(region);
    setRegionList(null);
    setInputValue(region);
  };

  const style = {
    backgroundColor: COLORS.BASE_WHITE,
  };

  return (
    <S.RegionContainer $gap={!regionList || !inputValue ? "36px" : "16px"}>
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
          text="동명으로 검색 (ex.신천동)"
          borderColor
        />
      </S.RegionWrapper>
      {isLoading ? null : !regionList || !inputValue ? (
        <S.ButtonContainer>
          <Button
            disabled={!region || region === value}
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
