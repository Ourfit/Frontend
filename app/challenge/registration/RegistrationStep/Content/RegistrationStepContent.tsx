import { useState, useEffect } from "react";
import * as RS from "../Content/RegistrationStepContent.style";

interface RegistrationStepContentProps {
  onNext: () => void;
  onSelectionChange: (isSelected: boolean) => void;
}

const RegistrationStepContent = ({ onNext, onSelectionChange }: RegistrationStepContentProps) => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  useEffect(() => {
    onSelectionChange(selectedNumber !== null);
    console.log('선택된 문자: ', selectedNumber); 
  }, [selectedNumber, onSelectionChange]);

  const handleNumberClick = (number: number) => {
    setSelectedNumber((prevSelectedNumber) =>
      prevSelectedNumber === number ? null : number
    );
  };

  return (
    <RS.NumberWrapper>
      <RS.NumberContentWrapper>
        {[1, 2, 3].map((number) => (
          <RS.NumberContent
            key={number}
            $isSelected={selectedNumber === number} 
            onClick={() => handleNumberClick(number)}
          >
            {number}회
          </RS.NumberContent>
        ))}
      </RS.NumberContentWrapper>
      <RS.NumberContentWrapper>
        {[4, 5, 6, 7].map((number) => (
          <RS.NumberContent
            key={number}
            $isSelected={selectedNumber === number} 
            onClick={() => handleNumberClick(number)}
          >
            {number}회
          </RS.NumberContent>
        ))}
      </RS.NumberContentWrapper>
    </RS.NumberWrapper>
  );
};

export default RegistrationStepContent;
