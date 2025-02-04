
import * as RS from "../../../challenge/registration/RegistrationStep/Title/RegistrationStepTitle.style";
import SportsContent from "./SportsContent";
import { SportsTitle } from "./SportsTitle";

interface SportsStepProps {
  onNext: () => void;
  onSelectionChange: (isSelected: boolean) => void;
}

export const SportsStep = ({ onNext, onSelectionChange }: SportsStepProps) => {
  return (
    <RS.MainContainer2>
      <SportsTitle onNext={onNext} />
      <SportsContent onNext={onNext} onSelectionChange={onSelectionChange} />
    </RS.MainContainer2>
  );
};
