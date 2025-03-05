"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import ChallengeForm from "./_components/ChallengeForm";
import { useState } from "react";
import { CHALLENGE_STEPS } from "@/constants/Challenge";
import { COLORS } from "@/constants/Theme";

export default function Page() {
  const [step, setStep] = useState<number>(CHALLENGE_STEPS[0].id);

  const bgColor = {
    backgroundColor:
      step === CHALLENGE_STEPS.length || step === 1
        ? COLORS.BASE_WHITE
        : COLORS.GRAYSCALE_100,
  };

  const onClick = () => {
    if (step === 1) window.history.back();
    else setStep((prev) => prev - 1);
  };

  return (
    <Frame style={bgColor} contentStyle={{ ...bgColor, height: "100%" }}>
      <Header onClick={onClick} />
      <ChallengeForm step={step} setStep={setStep} />
    </Frame>
  );
}
