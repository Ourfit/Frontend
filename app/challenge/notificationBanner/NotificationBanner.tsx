import React, { useState } from "react";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import * as S from "../../home/_components/NotificationBanner/NotificationBanner.style";
import * as CS from "./NotificationBanner.style";
import { CheckButton } from "../mate/Profile/MateProfile.style";
import XButtonIcon from "@/assets/images/x.svg";
import * as M from "./Modal.style";
import Button from "@/components/common/Button";

export default function NotificationBanner({
  isChallenge,
}: {
  isChallenge?: boolean;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false); 

  const handleCheckButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAnswerButtonClick = (answer: string) => {
    setSelected(answer);
  };

  const handleCompleteExerciseClick = () => {
    setIsNotificationVisible(true);
    setTimeout(() => {
      setIsNotificationVisible(false);
    }, 2000); 
  };

  return (
    <S.BannerContainer $isChallenge={isChallenge}>
      <S.ContentWrapper>
        <S.IconWrapper>
          <DumbbellsIcon />
        </S.IconWrapper>
        <CS.NotificationContent $isChallenge={isChallenge}>
          {isChallenge ? (
            <>
              <Typography.H6Md>챌린지 도전</Typography.H6Md>
              <Typography.H4Sb>챌린지 시작 +24일!</Typography.H4Sb>
            </>
          ) : (
            <>
              <Typography.H6Md>1월 26일</Typography.H6Md>
              <Typography.H4Sb>오늘은 운동하는 날이에요!</Typography.H4Sb>
            </>
          )}
        </CS.NotificationContent>
      </S.ContentWrapper>
      {!isChallenge && (
        <CheckButton onClick={handleCheckButtonClick}>운동 완료</CheckButton>
      )}

      {/* 모달 */}
      {isModalOpen && (
        <M.ModalContainer>
          <M.TextContainer>
            <M.TitleWrapper>
              <M.TitleContainer>
                <M.TitleContent>오늘 운동은 어떠셨어요?</M.TitleContent>
                <XButtonIcon onClick={handleCloseModal}>닫기</XButtonIcon>
              </M.TitleContainer>
            </M.TitleWrapper>
            <M.TitleWrapper>
              <M.QuestionContent>
                <Typography.H4Sb>운동은 메이트와 함께했나요?</Typography.H4Sb>
              </M.QuestionContent>
              <M.AnswerContainer>
                <M.AnswerButton
                  onClick={() => handleAnswerButtonClick("네")}
                  isSelected={selected === "네"}
                >
                  <Typography.H4Md>네</Typography.H4Md>
                </M.AnswerButton>

                <M.AnswerButton
                  onClick={() => handleAnswerButtonClick("아니오")}
                  isSelected={selected === "아니오"}
                >
                  <Typography.H4Md>아니오</Typography.H4Md>
                </M.AnswerButton>
              </M.AnswerContainer>
            </M.TitleWrapper>
            <M.TitleWrapper>
              <M.QuestionContent>
                <Typography.H4Sb>
                  오늘의 운동 강도는 어떠셨어요?
                </Typography.H4Sb>
              </M.QuestionContent>
              <M.AnswerContainer>
                <M.AnswerButton
                  onClick={() => handleAnswerButtonClick("아쉬워요")}
                  isSelected={selected === "아쉬워요"}
                >
                  <Typography.H4Md>아쉬워요</Typography.H4Md>
                </M.AnswerButton>

                <M.AnswerButton
                  onClick={() => handleAnswerButtonClick("적당했어요")}
                  isSelected={selected === "적당했어요"}
                >
                  <Typography.H4Md>적당했어요</Typography.H4Md>
                </M.AnswerButton>
                <M.AnswerButton
                  onClick={() => handleAnswerButtonClick("완전 만족해요")}
                  isSelected={selected === "완전 만족해요"}
                >
                  <Typography.H4Md>완전 만족해요</Typography.H4Md>
                </M.AnswerButton>
              </M.AnswerContainer>
            </M.TitleWrapper>
          </M.TextContainer>
          <M.ButtonWrapper>
            <Button
              size="l"
              variant="primary"
              disabled={false}
              onClick={handleCompleteExerciseClick} 
            >
              오운완
            </Button>
          </M.ButtonWrapper>
        </M.ModalContainer>
      )}

      {/* 운동 완료 알림창 */}
      {isNotificationVisible && (
        <M.Notification>
          <Typography.H4Md>💪🏻 오늘 운동 완료! 완전 멋져요! </Typography.H4Md>
        </M.Notification>
      )}
    </S.BannerContainer>
  );
}
