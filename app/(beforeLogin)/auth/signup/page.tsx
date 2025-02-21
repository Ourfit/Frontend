"use client";

import Frame from "@/components/layout/Frame";
import SignupForm from "@/components/auth/signup/SignupForm";
import { useEffect, useState } from "react";
import { SIGNUP_STEPS } from "@/constants/Signup";
import { COLORS } from "@/constants/Theme";
import Header from "@/components/common/Header/Header";
import { useOAuthIdStore } from "@/stores/oAuthIdStore";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [step, setStep] = useState<number>(SIGNUP_STEPS[0].id);
  const { oAuthId } = useOAuthIdStore();
  const router = useRouter();

  useEffect(() => {
    if (!oAuthId) router.replace("/auth/login");
  }, [oAuthId]);

  const bgColor = {
    backgroundColor:
      step === SIGNUP_STEPS.length ? COLORS.BASE_WHITE : COLORS.GRAYSCALE_100,
  };

  const onClick = () => {
    if (step === 1) window.history.back();
    else setStep((prev) => prev - 1);
  };

  return (
    <Frame style={{ ...bgColor }} contentStyle={{ ...bgColor, height: "100%" }}>
      <Header onClick={onClick} isSignup={step === SIGNUP_STEPS.length} />
      <SignupForm step={step} setStep={setStep} />
    </Frame>
  );
};

export default SignupPage;
