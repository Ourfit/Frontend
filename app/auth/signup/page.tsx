"use client";

import Frame from "@/components/layout/Frame";
import SignupForm from "@/components/auth/signup/SignupForm";
import { useState } from "react";
import { SIGNUP_STEPS } from "@/constants/Signup";
import { COLORS } from "@/constants/Theme";
import Header from "@/components/common/Header/Header";

const SignupPage = () => {
  const [step, setStep] = useState<number>(SIGNUP_STEPS[0].id);
  const bgColor = {
    backgroundColor:
      step === SIGNUP_STEPS.length ? COLORS.BASE_WHITE : COLORS.GRAYSCALE_100,
  };
  const onClick = () => {
    if (step === 1) window.history.back();
    else setStep((prev) => prev - 1);
  };

  return (
    <Frame
      style={{ ...bgColor, height: "100svh" }}
      contentStyle={{ ...bgColor }}
    >
      <Header onClick={onClick} />
      <SignupForm step={step} setStep={setStep} />
    </Frame>
  );
};

export default SignupPage;
