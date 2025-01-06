export interface StepProps {
  nextStep: (field: string, value: string | Record<string, any>) => void;
}
