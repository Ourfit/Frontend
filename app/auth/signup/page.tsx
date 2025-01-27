"use client";

import Frame from "@/components/layout/Frame";
import SignupForm from "@/components/auth/signup/SignupForm";
import { useState } from "react";
import { SIGNUP_STEPS } from "@/constants/Signup";
import { COLORS } from "@/constants/Theme";

const SignupPage = () => {
  const [step, setStep] = useState<number>(SIGNUP_STEPS[0].id);
  const bgColor = {
    backgroundColor:
      step === SIGNUP_STEPS.length ? COLORS.BASE_WHITE : COLORS.GRAYSCALE_100,
  };

  return (
    <Frame
      style={{ ...bgColor, height: "100svh" }}
      contentStyle={{ ...bgColor }}
    >
      <SignupForm step={step} setStep={setStep} />
    </Frame>
  );
};

export default SignupPage;
