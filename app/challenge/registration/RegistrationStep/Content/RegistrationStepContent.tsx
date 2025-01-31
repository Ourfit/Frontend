import { useState, useEffect } from "react";
import * as RS from "../Content/RegistrationStepContent.style";

interface RegistrationStepContentProps {
  onNext: () => void;
  onSelectionChange: (isSelected: boolean) => void;
}

const RegistrationStepContent = ({ onNext, onSelectionChange }: RegistrationStepContentProps) => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  useEffect(() => {
    onSelectionChange(selectedNumbers.length > 0);
  }, [selectedNumbers, onSelectionChange]); 

  const handleNumberClick = (number: number) => {
    setSelectedNumbers((prevSelectedNumbers) => {
      const updatedNumbers = prevSelectedNumbers.includes(number)
        ? prevSelectedNumbers.filter((num) => num !== number)
        : [...prevSelectedNumbers, number];

      return updatedNumbers;
    });
  };

  return (
    <RS.NumberWrapper>
      <RS.NumberContentWrapper>
        {[1, 2, 3].map((number) => (
          <RS.NumberContent
            key={number}
            $isSelected={selectedNumbers.includes(number)}  // $isSelected로 변경
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
            $isSelected={selectedNumbers.includes(number)} 
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
