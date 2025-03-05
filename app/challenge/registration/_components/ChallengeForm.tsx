import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./ChallengeForm.style";
import { CHALLENGE_STEPS, DayLabel, StepLabel } from "@/constants/Challenge";
import StepIndicator from "@/components/common/StepIndicator";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import { createChallenge } from "@/services/challenge/createChallenge";
import Toast from "@/components/common/Toast/Toast";
import { TOAST_STATUSES } from "@/constants/Toast";
import { AxiosError } from "axios";

interface ChallengeFormProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export type FormDataType = {
  goalWorkoutCount?: number;
  goalWorkoutDayOfWeeks?: DayLabel[];
  challengeDurationInMonths?: number;
  startAt?: string;
};

export default function ChallengeForm({ step, setStep }: ChallengeFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormDataType | null>(null);
  const [toast, setToast] = useState("");
  const isComplete = step === CHALLENGE_STEPS.length;

  const handleFormDataChange = (
    field: StepLabel,
    value: number | string | DayLabel[],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setStep((prev) => prev + 1);
  };

  const handleStartClick = async () => {
    try {
      const res = await createChallenge(1, formData!);
      if (res.message === "OK") {
        router.replace("/challenge");
      }
    } catch (err) {
      const error = err as AxiosError;
      if (error.status === 400) setToast("올바른 형식이 아닙니다");
      else if (error.status === 409)
        setToast("이미 등록된 챌린지가 존재합니다");
      else setToast("문제가 발생했습니다");

      setTimeout(() => setToast(""), 3000);
    }
  };

  const CurrentStepComponent = CHALLENGE_STEPS[step - 1]?.component;

  return (
    <S.ChallengeFormContainer>
      <S.ChallengeFormWrapper>
        {step < CHALLENGE_STEPS.length && step !== 1 && (
          <S.StepContainer>
            <StepIndicator
              totalSteps={CHALLENGE_STEPS.length - 2}
              currentStep={step - 1}
            />
          </S.StepContainer>
        )}
        {CurrentStepComponent && (
          <CurrentStepComponent
            step={step}
            nextStep={(field, value) => handleFormDataChange(field, value)}
            formData={isComplete ? formData : undefined}
          />
        )}
      </S.ChallengeFormWrapper>
      {(step === 1 || isComplete) && (
        <Button
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          disabled={false}
          onClick={() => {
            if (isComplete) handleStartClick();
            else setStep((prev) => prev + 1);
          }}
        >
          {isComplete ? "챌린지 페이지로 이동" : "시작하기"}
        </Button>
      )}
      {toast && <Toast message={toast} status={TOAST_STATUSES.ERROR} />}
    </S.ChallengeFormContainer>
  );
}
