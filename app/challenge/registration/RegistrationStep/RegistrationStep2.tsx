import * as RS from "./Title/RegistrationStepTitle.style";
import RegistrationStepContent2 from "./Content/RegistrationStepContent2";
import RegistrationStepTitle2 from "./Title/RegistrationStepTitle2";

interface RegistrationStep2Props {
  onNext: () => void;
  onSelectionChange: (isSelected: boolean) => void;
}

const RegistrationStep2 = ({ onNext, onSelectionChange }: RegistrationStep2Props) => {
  return (
    <RS.MainContainer2>
      <RegistrationStepTitle2 onNext={onNext} />
      <RegistrationStepContent2 
        onNext={onNext} 
        onSelectionChange={onSelectionChange} 
      />
    </RS.MainContainer2>
  );
};

export default RegistrationStep2;
