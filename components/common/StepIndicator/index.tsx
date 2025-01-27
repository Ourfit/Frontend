"use client";

import EllipseIcon from "@/assets/images/ellipse.svg";
import * as S from "./StepIndicator.style";
import React from "react";

interface StepIndicatorProps {
  totalSteps: number;
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  totalSteps,
  currentStep,
}) => {
  return (
    <S.StepContainer>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <S.Ellipse key={index} $isActive={index + 1 === currentStep}>
          <EllipseIcon />
        </S.Ellipse>
      ))}
    </S.StepContainer>
  );
};

export default StepIndicator;
