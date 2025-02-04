"use client";

import Header from "@/components/common/Header/Header";
import { SIGNUP_STEPS } from "@/constants/Signup";
import { Container } from "@mui/material";
import React, { useState } from "react";
import SignupForm from "@/components/auth/signup/SignupForm";

export default function Page() {
  const [step, setStep] = useState<number>(SIGNUP_STEPS[4].id);

  return (
    <>
      <Header />
      <Container>
        <SignupForm step={step} setStep={setStep} />
      </Container>
    </>
  );
}
