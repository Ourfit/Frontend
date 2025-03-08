import { Typography } from "@/components/atoms/Typography";
import XIcon from "@/assets/images/x.svg";
import * as S from "./BottomSheet.style";
import TextButton from "@/components/common/TextButton";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { useEffect, useState } from "react";

export default function BottomSheet({
  modalShow,
  handleClose,
  completeWorkout,
}: {
  modalShow: boolean;
  handleClose: () => void;
  completeWorkout: (intensity: number) => void;
}) {
  const ANSWER_OPTION = ["네", "아니요"];
  const INTENSITY_LEVEL = ["아쉬워요", "적당했어요", "완전 만족해요"];

  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState("");
  const [intensityLevel, setIntensityLevel] = useState("");

  useEffect(() => {
    if (modalShow) setTimeout(() => setShow(true), 0);
  }, [modalShow]);

  return (
    <S.BottomSheetContainer>
      <S.BottomSheet $show={show}>
        <S.BottomSheetTop>
          <S.HolderWrapper>
            <S.Holder />
          </S.HolderWrapper>
          <S.Title>
            <Typography.H2Sb>오늘 운동은 어떠셨어요?</Typography.H2Sb>
            <S.IconWrapper>
              <XIcon onClick={handleClose} />
            </S.IconWrapper>
          </S.Title>
        </S.BottomSheetTop>
        <S.SelectContainer>
          <S.SelectWrapper>
            <Typography.H4Sb>운동은 메이트와 함께했나요?</Typography.H4Sb>
            <S.TextButtonWrapper>
              {ANSWER_OPTION.map((option) => (
                <TextButton
                  key={option}
                  isActive={option === answer}
                  onClick={() => setAnswer(option)}
                >
                  <Typography.H4Md>{option}</Typography.H4Md>
                </TextButton>
              ))}
            </S.TextButtonWrapper>
          </S.SelectWrapper>
          <S.SelectWrapper>
            <Typography.H4Sb>오늘의 운동 강도는 어떠셨어요?</Typography.H4Sb>
            <S.TextButtonWrapper>
              {INTENSITY_LEVEL.map((option) => (
                <TextButton
                  key={option}
                  isActive={option === intensityLevel}
                  onClick={() => setIntensityLevel(option)}
                >
                  <Typography.H4Md>{option}</Typography.H4Md>
                </TextButton>
              ))}
            </S.TextButtonWrapper>
          </S.SelectWrapper>
        </S.SelectContainer>
        <S.ButtonWrapper>
          <Button
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            disabled={!answer || !intensityLevel}
            onClick={() =>
              completeWorkout(INTENSITY_LEVEL.indexOf(intensityLevel))
            }
          >
            오운완!
          </Button>
        </S.ButtonWrapper>
      </S.BottomSheet>
    </S.BottomSheetContainer>
  );
}
