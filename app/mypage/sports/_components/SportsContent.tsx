import { useState, useEffect } from "react";
import * as RS from "../../../challenge/registration/RegistrationStep/Content/RegistrationStepContent.style";

interface SportsContentProps {
  onNext: () => void;
  onSelectionChange: (isSelected: boolean) => void;
}

const SportsContent = ({ onNext, onSelectionChange }: SportsContentProps) => {
  const [selectedStrings, setSelectedStrings] = useState<string[]>([]);

  useEffect(() => {
    const isAnySelected = selectedStrings.length > 0;
    console.log('선택된 문자: ', selectedStrings); 
    onSelectionChange(isAnySelected);  
  }, [selectedStrings, onSelectionChange]);

  const handleStringClick = (string: string) => {
    setSelectedStrings((prevSelectedStrings) => {
      const updatedStrings = prevSelectedStrings.includes(string)
        ? prevSelectedStrings.filter((str) => str !== string)
        : [...prevSelectedStrings, string]; 
      
      return updatedStrings;
    });
  };

  return (
    <RS.NumberWrapper>
      <RS.NumberContentWrapper>
        {["월", "화", "수"].map((string) => (
          <RS.NumberContent
            key={string}
            $isSelected={selectedStrings.includes(string)}  
            onClick={() => handleStringClick(string)}
          >
            {string}
          </RS.NumberContent>
        ))}
      </RS.NumberContentWrapper>
      <RS.NumberContentWrapper>
        {["목", "금", "토", "일"].map((string) => (
          <RS.NumberContent
            key={string}
            $isSelected={selectedStrings.includes(string)}  
            onClick={() => handleStringClick(string)}
          >
            {string}
          </RS.NumberContent>
        ))}
      </RS.NumberContentWrapper>
    </RS.NumberWrapper>
  );
};

export default SportsContent;
