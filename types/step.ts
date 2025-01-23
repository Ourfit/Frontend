import { StepLabel } from "@/constants/Signup";
import { ChallengeRegisterStepLabel } from "@/constants/ChallengeSettings";

export interface StepProps {
  nextStep: (field: StepLabel, value: string | string[] | object) => void;
}

export interface ChallengeRegisterStepProps {
  nextStep: (
    field: ChallengeRegisterStepLabel,
    value: number | string | string[] | object,
  ) => void;
}
