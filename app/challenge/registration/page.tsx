"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import RegistrationStart from "./RegistrationStart";
import RegistrationStep1 from "./RegistrationStep/RegistrationStep1";
import RegistrationStep2 from "./RegistrationStep/RegistrationStep2";
import RegistrationStep3 from "./RegistrationStep/RegistrationStep3";
import RegistrationStep4 from "./RegistrationStep/RegistrationStep4";
import RegistrationFinish from "./RegistrationFinish";
import * as S from "./style";
import { FrameContainer } from "@/components/layout/Frame.style";

export default function Page() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [isAnyNumberSelected, setIsAnyNumberSelected] = useState(false);
  const [isAnyStringSelected, setIsAnyStringSelected] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleNextStep = () => {
    if (step === 1) {
      setStep(step + 1);
    } else if (step === 2 && isAnyNumberSelected) {
      setStep(step + 1);
    } else if (step === 3 && isAnyStringSelected) {
      setStep(step + 1);
    } else if (step === 4 && isAnyStringSelected) {
      setStep(step + 1);
    } else if (step === 5 && isAnyStringSelected) {
      setStep(step + 1);
    } else if (step !== 2 && step !== 3 && step !== 4 && step !== 5) {
      setStep(step + 1);
    }
  };

  const handleMoveToChallenge = () => {
    router.push("/challenge/mateChallenge");
  };

  const Container =
    step === 1 || step === 6 ? S.PageContainer : S.RegistrationPageContainer;

  const isButtonActive =
    (step === 1 ||
      (isAnyNumberSelected && step === 2) ||
      (isAnyStringSelected && (step === 3 || step === 4 || step === 5))) ||
    step === 6;

  const bgColorGray = step !== 1 && step !== 6;

  return (
    <FrameContainer $bgColorGray={bgColorGray}>
      <Header />
      <Container>
        {step === 1 && <RegistrationStart onNext={handleNextStep} />}
        {step === 2 && (
          <RegistrationStep1
            onNext={handleNextStep}
            onSelectionChange={setIsAnyNumberSelected}
          />
        )}
        {step === 3 && (
          <RegistrationStep2
            onNext={handleNextStep}
            onSelectionChange={setIsAnyStringSelected}
          />
        )}
        {step === 4 && (
          <RegistrationStep3
            onNext={handleNextStep}
            onSelectionChange={setIsAnyStringSelected}
          />
        )}
        {step === 5 && (
          <RegistrationStep4
            onNext={handleNextStep}
            onSelectionChange={setSelectedDate}
            disabled={!isButtonActive}
          />
        )}
        {step === 6 && (
          <RegistrationFinish
            selectedDate={selectedDate!}
            onNext={handleNextStep}
          />
        )}
        <S.Button
          onClick={step === 6 ? handleMoveToChallenge : handleNextStep}
          style={{
            backgroundColor: isButtonActive ? "#004EFF" : "#DCE0EB",
          }}
          disabled={!isButtonActive}
        >
          {step === 6
            ? "챌린지 페이지로 이동"
            : step === 1
            ? "시작하기"
            : "다음"}
        </S.Button>
      </Container>
    </FrameContainer>
  );
}
