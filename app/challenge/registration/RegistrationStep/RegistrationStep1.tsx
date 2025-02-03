import RegistrationStepTitle from "./Title/RegistrationStepTitle";
import * as RS from "./Title/RegistrationStepTitle.style";
import RegistrationStepContent from "./Content/RegistrationStepContent";

interface RegistrationStep1Props {
  onNext: () => void;
  onSelectionChange: (isSelected: boolean) => void;
}

const RegistrationStep1 = ({
  onNext,
  onSelectionChange,
}: RegistrationStep1Props) => {
  return (
    <RS.MainContainer2>
      <RegistrationStepTitle onNext={onNext} />
      <RegistrationStepContent
        onNext={onNext}
        onSelectionChange={onSelectionChange}
      />
    </RS.MainContainer2>
  );
};

export default RegistrationStep1;
