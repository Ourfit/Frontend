import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { usePathname, useRouter } from "next/navigation";
import { SIGNUP_STEPS, StepLabel } from "@/constants/Signup";
import StepIndicator from "@/components/common/StepIndicator";
import * as S from "./SignupForm.style";
import { signup } from "@/app/(beforeLogin)/auth/_lib/signup";

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
    const res = await signup(formData as FormDataType);
    if (res.status == 201) router.replace("/");
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
    </S.SignUpFormContainer>
  );
};

export default SignupForm;
