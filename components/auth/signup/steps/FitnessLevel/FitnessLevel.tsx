import { StepProps } from "@/types/step";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import { useState } from "react";
import * as S from "./FitnessLeve.style";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import {
  FITNESS_LEVELS,
  FitnessLevelType,
  STEPS_LABEL,
} from "@/constants/Signup";
import Toast from "@/components/common/Toast/Toast";
import { TOAST_MESSAGES, TOAST_STATUSES, ToastStatus } from "@/constants/Toast";
import { useMutation } from "@tanstack/react-query";
import updateBasicInfo from "@/services/mypage/updateBasicInfo";
import { queryClient } from "@/components/common/ReactQueryProvider";

const FitnessLevel = ({ nextStep, value }: StepProps) => {
  const [level, setLevel] = useState<string | null>(
    typeof value === "string" ? value : null,
  );
  const [toast, setToast] = useState("");

  const mutation = useMutation({
    mutationFn: () =>
      updateBasicInfo({
        skillLevel: Object.entries(FITNESS_LEVELS).filter(
          ([, { label }]) => label === level,
        )[0][0] as FitnessLevelType,
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

  const handleLevelClick = (selectedGender: string) => {
    setLevel(selectedGender);
  };

  const buttonClickHandler = () => {
    if (level) {
      if (nextStep) nextStep(STEPS_LABEL.FITNESS_LEVEL, level);
      else mutation.mutate();
    }
  };

  return (
    <S.FitnessLevelContainer>
      <S.FitnessLevelWrapper>
        <S.SignupIntroContainer>
          <S.SignupIntroTitleWrapper>
            <Typography.H1Sb>
              나의&nbsp;
              <span style={{ color: COLORS.BLUE_500 }}>운동 실력</span>
              &nbsp;은?
            </Typography.H1Sb>
          </S.SignupIntroTitleWrapper>
          <Typography.H4Md color={COLORS.GRAYSCALE_600}>
            메이트 매칭 시 나의 프로필에 보여지는 정보에요.
          </Typography.H4Md>
        </S.SignupIntroContainer>
        <S.TextButtonWrapper>
          <Typography.H4Sb>나의 운동 수준은?</Typography.H4Sb>
          {Object.values(FITNESS_LEVELS).map(({ label, description }) => (
            <S.CustomTextButton
              key={label}
              isActive={level === label}
              onClick={() => handleLevelClick(label)}
            >
              <Typography.H5Sb>{label}</Typography.H5Sb>
              <Typography.H5Md>{description}</Typography.H5Md>
            </S.CustomTextButton>
          ))}
        </S.TextButtonWrapper>
      </S.FitnessLevelWrapper>
      <S.ButtonContainer>
        <Button
          disabled={!level || level === value}
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={buttonClickHandler}
        >
          {nextStep ? "다음" : "변경 완료"}
        </Button>
      </S.ButtonContainer>
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
    </S.FitnessLevelContainer>
  );
};

export default FitnessLevel;
