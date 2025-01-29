import { StepLabel, StepValue } from "@/constants/Signup";

export interface StepProps {
  nextStep?: (field: StepLabel, value: string | string[] | object) => void;
  value?: StepValue;
}
