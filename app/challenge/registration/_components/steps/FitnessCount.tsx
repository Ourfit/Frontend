import { ChallengeStepProps } from "@/types/step";
import * as S from "../ChallengeForm.style";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import TextButton from "@/components/common/TextButton";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { useState } from "react";
import { DAY_LABEL, DayKey, STEPS_LABEL } from "@/constants/Challenge";
import Toast from "@/components/common/Toast/Toast";
import { TOAST_STATUSES } from "@/constants/Toast";

const COUNT_OPTIONS = [
  [1, 2, 3],
  [4, 5, 6, 7],
];

const DAYS_OPTIONS = [
  ["월", "화", "수"],
  ["목", "금", "토", "일"],
];

export default function FitnessCount({ step, nextStep }: ChallengeStepProps) {
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [toast, setToast] = useState("");
  const isCountPage = step === 2;

  const handleSelection = (value: number | string) => {
    if (typeof value === "number") {
      setSelectedCount(value);
    } else {
      setSelectedDays((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : prev.length < selectedCount
            ? [...prev, value]
            : prev,
      );
    }
  };

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(""), 2000);
  };

  const buttonClickHandler = () => {
    if (isCountPage) {
      nextStep(STEPS_LABEL.FITNESS_COUNT, selectedCount);
    } else {
      if (selectedDays.length < selectedCount) {
        showToast("앞서 고른 운동 횟수만큼 요일을 선택해주세요.");
      } else {
        nextStep(
          STEPS_LABEL.FITNESS_DAYS,
          selectedDays.map((day) => DAY_LABEL[day as DayKey]),
        );
      }
    }
  };

  return (
    <>
      <S.FitnessSelectWrapper>
        <S.IntroContainer>
          <S.IntroTitleWrapper>
            <Typography.H1Sb>
              매주
              <span style={{ color: COLORS.BLUE_500 }}>
                {isCountPage ? " 몇 회 " : " 어떤 요일"}
              </span>
              {isCountPage && "에 "}운동할까요?
            </Typography.H1Sb>
          </S.IntroTitleWrapper>
          <Typography.H4Md color={COLORS.GRAYSCALE_600}>
            {isCountPage
              ? "나중에 운동 횟수를 변경할 수 없어요."
              : "앞서 설정한 횟수만큼 요일을 선택해주세요."}
          </Typography.H4Md>
        </S.IntroContainer>

        <S.InfoContainer>
          {(isCountPage ? COUNT_OPTIONS : DAYS_OPTIONS).map((group, idx) => (
            <S.TextButtonWrapper key={idx}>
              {group.map((item) => (
                <TextButton
                  key={item}
                  isActive={
                    isCountPage
                      ? selectedCount === item
                      : selectedDays.includes(item as string)
                  }
                  onClick={() => handleSelection(item)}
                >
                  {item}
                  {isCountPage ? "회" : ""}
                </TextButton>
              ))}
            </S.TextButtonWrapper>
          ))}
        </S.InfoContainer>
      </S.FitnessSelectWrapper>

      <Button
        disabled={isCountPage ? !selectedCount : !selectedDays.length}
        size={BUTTON_SIZES.LARGE}
        variant={BUTTON_VARIANTS.PRIMARY}
        onClick={buttonClickHandler}
      >
        다음
      </Button>
      {toast && <Toast message={toast} status={TOAST_STATUSES.ERROR} />}
    </>
  );
}
