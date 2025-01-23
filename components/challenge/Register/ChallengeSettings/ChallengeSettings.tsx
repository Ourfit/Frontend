import { useState } from "react";
import * as S from "./ChallengeSettings.style";
import StepIndicator from "@/components/common/StepIndicator";
import {
  ChallengeRegisterStepLabel,
  REGISTER_STEPS,
} from "@/constants/ChallengeSettings";

export default function ChallengeSettings() {
  const [step, setStep] = useState(REGISTER_STEPS[0].id);
  const [, setFormData] = useState({});
  const CurrentStepComponent = REGISTER_STEPS[step - 1].component;

  const handleFormDataChange = (
    field: ChallengeRegisterStepLabel,
    value: number | string | string[] | object,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setStep((prev) => prev + 1);
  };

  return (
    <S.ChallengeSettingsContainer>
      <S.ContentContainer>
        <S.StepContainer>
          <StepIndicator
            totalSteps={REGISTER_STEPS.length}
            currentStep={step}
          />
        </S.StepContainer>
        <CurrentStepComponent
          nextStep={(field, value) => handleFormDataChange(field, value)}
        />
      </S.ContentContainer>
    </S.ChallengeSettingsContainer>
  );
}
