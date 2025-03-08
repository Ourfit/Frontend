import { StepLabel, StepValue } from "@/constants/Signup";
import {
  StepLabel as ChallengeStepLabel,
  DayLabel,
} from "@/constants/Challenge";
import { FormDataType } from "@/app/challenge/registration/_components/ChallengeForm";

export interface StepProps {
  nextStep?: (field: StepLabel, value: string | string[] | object) => void;
  value?: StepValue;
}

export interface ChallengeStepProps {
  step: number;
  nextStep: (
    field: ChallengeStepLabel,
    value: number | string | DayLabel[],
  ) => void;
  formData?: FormDataType | null;
}
