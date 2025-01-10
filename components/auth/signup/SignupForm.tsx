"use client";

import React, { useState } from "react";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { useRouter } from "next/navigation";
import { SIGNUP_STEPS, StepLabel } from "@/constants/Signup";
import StepIndicator from "@/components/common/StepIndicator";
import * as S from "./SignupForm.style";

const SignupForm = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(SIGNUP_STEPS[0].id);
  const [formData, setFormData] = useState({});

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

  const handleStartClick = () => {
    // TODO: API 연결 후 삭제
    console.log("폼 데이터:", formData);
    router.push("/");
  };

  const CurrentStepComponent = SIGNUP_STEPS[step - 1]?.component;

  return (
    <>
      <S.SignUpFormContainer>
        <S.StepContainer>
          {step < SIGNUP_STEPS.length && (
            <StepIndicator
              totalSteps={SIGNUP_STEPS.length}
              currentStep={step}
            />
          )}
        </S.StepContainer>
        {CurrentStepComponent && (
          <CurrentStepComponent
            nextStep={(field, value) => handleFormDataChange(field, value)}
          />
        )}
      </S.SignUpFormContainer>
      {step === SIGNUP_STEPS.length && (
        <Button
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={handleStartClick}
        >
          아워핏 시작하기
        </Button>
      )}
    </>
  );
};

export default SignupForm;
