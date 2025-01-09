"use client";

import styled from "styled-components";
import React, { useState } from "react";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { useRouter } from "next/navigation";
import { SIGNUP_STEPS, StepLabel } from "@/constants/Signup";
import StepIndicator from "@/components/common/StepIndicator";

const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-top: 16px;
  height: 100%;
`;

const StepContainer = styled.div`
  display: flex;
  gap: 4px;
`;

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
      <SignUpFormContainer>
        <StepContainer>
          {step < SIGNUP_STEPS.length && (
            <StepIndicator
              totalSteps={SIGNUP_STEPS.length}
              currentStep={step}
            />
          )}
        </StepContainer>
        {CurrentStepComponent && (
          <CurrentStepComponent
            nextStep={(field, value) => handleFormDataChange(field, value)}
          />
        )}
      </SignUpFormContainer>
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
