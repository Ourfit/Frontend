import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import SelectBar from "@/components/common/SelectBar/SelectBar";
import TextButton from "@/components/common/TextButton";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { GENDER, STEPS_LABEL, StepValue } from "@/constants/Signup";
import { COLORS } from "@/constants/Theme";
import { StepProps } from "@/types/step";
import { useState } from "react";
import * as S from "./GenderAge.style";
import { useMutation } from "@tanstack/react-query";
import updateBasicInfo from "@/app/mypage/_lib/updateBasicInfo";
import { TOAST_MESSAGES, TOAST_STATUSES, ToastStatus } from "@/constants/Toast";
import { queryClient } from "@/components/common/ReactQueryProvider";
import Toast from "@/components/common/Toast/Toast";

const GenderAge = ({ nextStep, value }: StepProps) => {
  const getValue = (value: StepValue | undefined) => {
    if (typeof value === "object" && "gender" in value && "age" in value) {
      return value;
    }
  };

  const [gender, setGender] = useState<string | null>(
    getValue(value)?.gender || null,
  );
  const [age, setAge] = useState<string>(
    getValue(value)?.age ? `${getValue(value)?.age}세` : "00세",
  );
  const [toast, setToast] = useState("");

  const mutation = useMutation({
    mutationFn: () =>
      updateBasicInfo({
        gender: gender === "여성" ? "F" : "M",
        age: Number(age.split("세")[0]),
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

  const handleGenderClick = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const buttonClickHandler = () => {
    if (gender && age) {
      if (nextStep) nextStep(STEPS_LABEL.GENDER_AGE, { gender, age });
      else mutation.mutate();
    }
  };

  return (
    <S.GenderAgeContainer>
      <S.GenderAgeWrapper>
        <S.SignupIntroContainer>
          <S.SignupIntroTitleWrapper>
            <Typography.H1Sb>
              <span style={{ color: COLORS.BLUE_500 }}>성별</span>과&nbsp;
              <span style={{ color: COLORS.BLUE_500 }}>나이</span>를
            </Typography.H1Sb>
            <Typography.H1Sb>선택해주세요</Typography.H1Sb>
          </S.SignupIntroTitleWrapper>
          <Typography.H4Md color={COLORS.GRAYSCALE_600}>
            메이트 매칭 시 나의 프로필에 보여지는 정보에요.
          </Typography.H4Md>
        </S.SignupIntroContainer>
        <S.InfoContainer>
          <Typography.H4Sb>성별</Typography.H4Sb>
          <S.TextButtonWrapper>
            {Object.values(GENDER).map((option) => (
              <TextButton
                key={option}
                isActive={gender === option}
                onClick={() => handleGenderClick(option)}
              >
                {option}
              </TextButton>
            ))}
          </S.TextButtonWrapper>
        </S.InfoContainer>
        <S.InfoContainer>
          <Typography.H4Sb>나이</Typography.H4Sb>
          <SelectBar
            selectType="age"
            optionValue={age || `${age}0세`}
            setOption={setAge}
          />
        </S.InfoContainer>
      </S.GenderAgeWrapper>
      <S.ButtonContainer>
        <Button
          disabled={
            !gender ||
            !age ||
            (`${getValue(value)?.age}세` === age &&
              getValue(value)?.gender === gender)
          }
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
    </S.GenderAgeContainer>
  );
};

export default GenderAge;
