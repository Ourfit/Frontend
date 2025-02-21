import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { usePathname, useRouter } from "next/navigation";
import { SIGNUP_STEPS, StepLabel } from "@/constants/Signup";
import StepIndicator from "@/components/common/StepIndicator";
import * as S from "./SignupForm.style";
import { signup } from "@/app/(beforeLogin)/auth/_lib/signup";
import { useOAuthIdStore } from "@/stores/oAuthIdStore";
import Toast from "@/components/common/Toast/Toast";
import { TOAST_STATUSES } from "@/constants/Toast";
import { useTokenStore } from "@/stores/tokenStore";

interface SignupFormProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export type FormDataType = {
  nickname?: string;
  region?: string;
  genderAge?: {
    gender: string;
    age: string;
  };
  fitnessLevel?: string;
  timePreferences?: string[];
  sportsPreferences?: string[];
};

const SignupForm = ({ step, setStep }: SignupFormProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [formData, setFormData] = useState<FormDataType | null>(null);
  const [toast, setToast] = useState("");
  const { oAuthId } = useOAuthIdStore();
  const { addToken } = useTokenStore.getState();

  const handleFormDataChange = (
    field: StepLabel,
    value: string | string[] | object,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setStep((prev) => prev + 1);
  };

  const handleStartClick = async () => {
    if (oAuthId) {
      const res = await signup(oAuthId, formData as FormDataType);
      if (res.message === "OK") {
        addToken(res.data.accessToken);
        sessionStorage.setItem("refreshToken", res.data.refreshToken);

        router.replace("/");
      } else {
        if (res.status === 400) setToast("올바른 형식이 아닙니다");
        else if (res.status === 409)
          setToast("이미 등록된 사용자가 존재합니다");
        else setToast("문제가 발생했습니다");

        setTimeout(() => setToast(""), 3000);
      }
    } else setToast("카카오 로그인을 진행해주세요");
  };

  const CurrentStepComponent = SIGNUP_STEPS[step - 1]?.component;

  const isSportsPage =
    pathname === "/mypage/sports" || pathname === "/mypage/time";

  return (
    <S.SignUpFormContainer>
      <S.SignUpFormWrapper $flexGrow={step === SIGNUP_STEPS.length}>
        {!isSportsPage && step < SIGNUP_STEPS.length && (
          <S.StepContainer>
            <StepIndicator
              totalSteps={SIGNUP_STEPS.length}
              currentStep={step}
            />
          </S.StepContainer>
        )}
        {CurrentStepComponent && (
          <CurrentStepComponent
            nextStep={(field, value) => handleFormDataChange(field, value)}
          />
        )}
      </S.SignUpFormWrapper>
      {step === SIGNUP_STEPS.length && (
        <Button
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={handleStartClick}
          disabled={false}
        >
          아워핏 시작하기
        </Button>
      )}
      {toast && <Toast message={toast} status={TOAST_STATUSES.ERROR} />}
    </S.SignUpFormContainer>
  );
};

export default SignupForm;
