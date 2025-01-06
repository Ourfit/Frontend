"use client";

import styled from "styled-components";
import React, { useState } from "react";
import EllipseIcon from "@/assets/images/ellipse.svg";
import { COLORS } from "@/constants/Theme";
import { SIGNUP_STEPS } from "@/components/auth/signup/steps";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { useRouter } from "next/navigation";

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

const Ellipse = styled(EllipseIcon)<{ $isActive: boolean }>`
  & > circle {
    fill: ${({ $isActive }) =>
      $isActive ? COLORS.BLUE_500 : COLORS.GRAYSCALE_200} !important;
  }
`;

const SignupForm = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(SIGNUP_STEPS[0].id);
  const [formData, setFormData] = useState({});

  const handleFormDataChange = (
    field: string,
    value: string | Record<string, any>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setStep((prev) => prev + 1);
  };

  const handleStartClick = () => {
    console.log("폼 데이터:", formData);
    router.push("/");
  };

  const CurrentStepComponent = SIGNUP_STEPS[step - 1]?.component;

  return (
    <>
      <SignUpFormContainer>
        <StepContainer>
          {step < SIGNUP_STEPS.length &&
            SIGNUP_STEPS.map((_, index) => (
              <Ellipse key={index} $isActive={index + 1 === step} />
            ))}
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
