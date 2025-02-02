import * as RS from "./Title/RegistrationStepTitle.style";
import RegistrationStepTitle3 from "./Title/RegistrationStepTitle3";
import RegistrationStepContent3 from "./Content/RegistrationStepContent3";

interface RegistrationStep3Props {
  onNext: () => void;
  onSelectionChange: (isSelected: boolean) => void;
}

const RegistrationStep3 = ({ onNext, onSelectionChange }: RegistrationStep3Props) => {
  return (
    <RS.MainContainer2>
      <RegistrationStepTitle3 onNext={onNext} />
      <RegistrationStepContent3 onNext={onNext} onSelectionChange={onSelectionChange} />
    </RS.MainContainer2>
  );
};

export default RegistrationStep3;
