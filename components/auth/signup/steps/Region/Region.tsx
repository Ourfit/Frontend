import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import * as S from "./Region.style";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { StepProps } from "@/types/step";
import React, { useDeferredValue, useEffect, useState } from "react";
import { STEPS_LABEL } from "@/constants/Signup";
import Toast from "@/components/common/Toast/Toast";
import { TOAST_MESSAGES, TOAST_STATUSES, ToastStatus } from "@/constants/Toast";
import Placeholder from "@/components/common/Placeholder/Placeholder";
import { useDebounce } from "@/hooks/useDebounce";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getRegions } from "@/app/(beforeLogin)/auth/_lib/getRegions";
import updateBasicInfo from "@/app/mypage/_lib/updateBasicInfo";
import { queryClient } from "@/components/common/ReactQueryProvider";

const Region = ({ nextStep, value }: StepProps) => {
  const [inputValue, setInputValue] = useState(
    typeof value === "string" ? value : "",
  );
  const deferredValue = useDeferredValue(
    inputValue === value ? "" : inputValue,
  );
  const debouncedValue = useDebounce(
    inputValue === value ? "" : inputValue,
    1000,
  );

  const [region, setRegion] = useState("");
  const [toast, setToast] = useState("");
  const [regionList, setRegionList] = useState<string[] | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["region", debouncedValue],
    queryFn: () => debouncedValue && !region && getRegions(debouncedValue),
    staleTime: 0,
    enabled: !!deferredValue,
  });

  const mutation = useMutation({
    mutationFn: () =>
      updateBasicInfo({
        region1: region.split(" ")[0].trim(),
        region2: region.split(" ")[1].trim(),
        region3: region.split(" ")[2].trim(),
      }),
    onSuccess: (status) => {
      if (status === 200) {
        setToast(TOAST_STATUSES.SUCCESS);
        setTimeout(() => setToast(""), 1500);
        queryClient.invalidateQueries({ queryKey: ["userMe"] });
      }
    },
    onError: () => {
      setToast(TOAST_STATUSES.ERROR);
      setTimeout(() => setToast(""), 1500);
    },
  });

  useEffect(() => {
    if (data?.data) {
      setRegionList(
        data.data.map(({ fullName }: { fullName: string }) => fullName),
      );
    }
  }, [data]);

  useEffect(() => {
    setRegionList(null);
    if (!inputValue) setRegion("");
  }, [inputValue]);

  const handleButtonClick = () => {
    if (region) {
      if (nextStep) nextStep(STEPS_LABEL.REGION, region);
      else mutation.mutate();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleRegionClick = (selectedRegion: string) => {
    setRegion(selectedRegion);
    setInputValue(selectedRegion);
    setRegionList(null);
  };

  const style = {
    backgroundColor: COLORS.BASE_WHITE,
  };

  return (
    <S.RegionContainer
      $gap={!regionList || !inputValue || region ? "36px" : "16px"}
    >
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
      {isLoading || !regionList || !inputValue || region ? (
        <S.ButtonContainer>
          <Button
            disabled={!region || region === value}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={handleButtonClick}
          >
            {nextStep ? "다음" : "변경 완료"}
          </Button>
        </S.ButtonContainer>
      ) : (
        <S.RegionList>
          {regionList.map((region, idx) => (
            <S.Region key={idx} onClick={() => handleRegionClick(region)}>
              {region}
            </S.Region>
          ))}
        </S.RegionList>
      )}
      {toast && (
        <Toast
          message={
            toast === TOAST_STATUSES.SUCCESS
              ? TOAST_MESSAGES.SUCCESS
              : TOAST_MESSAGES.ERROR
          }
          status={toast as ToastStatus}
        />
      )}
    </S.RegionContainer>
  );
};

export default Region;
