import * as RS from "./Title/RegistrationStepTitle.style";
import RegistrationStepTitle4 from "./Title/RegistrationStepTitle4";
import RegistrationStepContent4 from "./Content/RegistrationStepContent4";

interface RegistrationStep4Props {
  onNext: () => void;
  onSelectionChange: (date: Date | null) => void;
  disabled: boolean;
}

const RegistrationStep4 = ({
  onNext,
  onSelectionChange,
  disabled,
}: RegistrationStep4Props) => {
  return (
    <RS.MainContainer2>
      <RegistrationStepTitle4 />
      <RegistrationStepContent4
        onNext={onNext}
        onSelectionChange={onSelectionChange}
        disabled={disabled}
        isRegistration
      />
    </RS.MainContainer2>
  );
};

export default RegistrationStep4;
