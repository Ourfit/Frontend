"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import TextButton from "@/components/common/TextButton";
import { COLORS } from "@/constants/Theme";
import { DAY_LABEL, DayLabel, DAYS_OPTIONS } from "@/constants/Challenge";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { useState } from "react";
import { useChallengeStore } from "@/stores/challengeStore";
import * as S from "./style";
import { useMutation } from "@tanstack/react-query";
import updateChallenge from "@/services/challenge/updateChallenge";
import Toast from "@/components/common/Toast/Toast";
import { TOAST_STATUSES } from "@/constants/Toast";
import { queryClient } from "@/components/common/ReactQueryProvider";
import { useRouter } from "next/navigation";

export default function EditPage() {
  const router = useRouter();
  const { challenge } = useChallengeStore();
  const initialDays = challenge?.days || [];
  const [selectedDays, setSelectedDays] = useState<DayLabel[]>(initialDays);
  const [toast, setToast] = useState("");

  const isEqual = () => {
    if (selectedDays && initialDays) {
      if (selectedDays.length !== initialDays.length) return false;
      return selectedDays.sort().toString() === initialDays.sort().toString();
    } else return true;
  };

  const handleSelection = (value: DayLabel) => {
    setSelectedDays((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : prev.length < (challenge?.days.length || 0)
          ? [...prev, value]
          : prev,
    );
  };

  const mutation = useMutation({
    mutationFn: () => updateChallenge(selectedDays, challenge?.id),
    onSuccess: (status) => {
      if (status === 200) {
        queryClient.invalidateQueries({ queryKey: ["myChallenge"] });
        queryClient.invalidateQueries({ queryKey: ["challengeRecord"] });
        router.back();
      }
    },
    onError: () => {
      setToast("잠시 후 다시 시도해주세요.");
      setTimeout(() => setToast(""), 3000);
    },
  });

  const buttonClickHandler = () => {
    mutation.mutate();
  };

  return (
    <Frame>
      <Header title="챌린지 수정" />
      <S.EditPageContainer>
        <S.FitnessSelectWrapper>
          <S.IntroContainer>
            <Typography.H1Sb>매주 어떤 요일에 운동할까요?</Typography.H1Sb>
            <Typography.H4Md color={COLORS.GRAYSCALE_600}>
              요일만 변경 가능해요.
            </Typography.H4Md>
          </S.IntroContainer>

          <S.InfoContainer>
            {DAYS_OPTIONS.map((group, idx) => (
              <S.TextButtonWrapper key={idx}>
                {group.map((item) => (
                  <TextButton
                    key={item}
                    isActive={selectedDays.includes(DAY_LABEL[item])}
                    onClick={() => handleSelection(DAY_LABEL[item])}
                  >
                    {item}
                  </TextButton>
                ))}
              </S.TextButtonWrapper>
            ))}
          </S.InfoContainer>
        </S.FitnessSelectWrapper>

        <Button
          disabled={isEqual() || selectedDays.length < initialDays.length}
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={buttonClickHandler}
        >
          변경 완료
        </Button>
      </S.EditPageContainer>
      {toast && <Toast message={toast} status={TOAST_STATUSES.ERROR} />}
    </Frame>
  );
}
