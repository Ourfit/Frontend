import React, { useState } from "react";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import * as S from "../../../components/NotificationBanner/NotificationBanner.style";
import * as CS from "./NotificationBanner.style";
import { CheckButton } from "../mate/Profile/MateProfile.style";
import XButtonIcon from "@/assets/images/x.svg";
import * as M from "./Modal.style";
import Button from "@/components/common/Button";
import Toast from "@/components/common/Toast/Toast";
import { CALENDAR_BADGE, CalendarBadge } from "@/constants/Calendar";
import { dateFormat } from "@/utils/monthList";

interface NotificationBannerProps {
  isChallenge?: boolean;
  setCalendarData?: React.Dispatch<
    React.SetStateAction<{
      [key: string]: CalendarBadge;
    } | null>
  >;
  todayStatus?: CalendarBadge | null;
}

export default function NotificationBanner({
  isChallenge,
  setCalendarData,
  todayStatus,
}: NotificationBannerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWithMate, setIsWithMate] = useState<string | null>(null);
  const [selectedIntensity, setSelectedIntensity] = useState<string | null>(
    null,
  );
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const isExerciseDay = todayStatus === CALENDAR_BADGE.EXPECTED;
  const isComplete = todayStatus === CALENDAR_BADGE.COMPLETE;

  const handleCheckButtonClick = () => {
    if (!isComplete) setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsWithMate(null);
    setSelectedIntensity(null);
  };

  const handleAnswerButtonClick = (answer: string) => {
    if (answer === "네" || answer === "아니오") setIsWithMate(answer);
    else setSelectedIntensity(answer);
  };

  const handleCompleteExerciseClick = () => {
    setIsNotificationVisible(true);
    setTimeout(() => {
      setIsNotificationVisible(false);
    }, 2000);

    handleCloseModal();

    if (setCalendarData) {
      const date = dateFormat(new Date());
      const newData = {
        [date]: CALENDAR_BADGE.COMPLETE,
      };
      setCalendarData((prev) => ({ ...prev, ...newData }));
    }
  };

  return (
    <S.BannerWrapper>
      <S.BannerContainer>
        <S.ContentWrapper>
          <S.IconWrapper>
            <DumbbellsIcon />
          </S.IconWrapper>
          <CS.NotificationContent>
            {isChallenge ? (
              <>
                <Typography.H6Md>챌린지 도전</Typography.H6Md>
                <Typography.H4Sb>챌린지 시작 +24일!</Typography.H4Sb>
              </>
            ) : isExerciseDay || isComplete ? (
              <>
                <Typography.H6Md>1월 26일</Typography.H6Md>
                <Typography.H4Sb>오늘은 운동하는 날이에요!</Typography.H4Sb>
              </>
            ) : (
              <>
                <Typography.H6Md>1월 26일</Typography.H6Md>
                <Typography.H4Sb>오늘은 예정된 운동이 없어요</Typography.H4Sb>
              </>
            )}
          </CS.NotificationContent>
        </S.ContentWrapper>
        {!isChallenge && (isExerciseDay || isComplete) && (
          <CheckButton onClick={handleCheckButtonClick} disabled={isComplete}>
            운동 완료
          </CheckButton>
        )}

        {/* 모달 */}
        {isModalOpen && (
          <M.ModalContainer>
            <M.TextContainer>
              <M.TitleWrapper>
                <M.ModalBarWrapper>
                  <M.ModalBar />
                </M.ModalBarWrapper>
                <M.TitleContainer>
                  <M.TitleContent>오늘 운동은 어떠셨어요?</M.TitleContent>
                  <XButtonIcon onClick={handleCloseModal}>닫기</XButtonIcon>
                </M.TitleContainer>
              </M.TitleWrapper>
              <M.ContentWrapper>
                <M.QuestionWrapper>
                  <M.QuestionContent>
                    운동은 메이트와 함께했나요?
                  </M.QuestionContent>
                  <M.AnswerContainer>
                    <M.AnswerButton
                      onClick={() => handleAnswerButtonClick("네")}
                      $isSelected={isWithMate === "네"}
                    >
                      <Typography.H4Md>네</Typography.H4Md>
                    </M.AnswerButton>

                    <M.AnswerButton
                      onClick={() => handleAnswerButtonClick("아니오")}
                      $isSelected={isWithMate === "아니오"}
                    >
                      <Typography.H4Md>아니오</Typography.H4Md>
                    </M.AnswerButton>
                  </M.AnswerContainer>
                </M.QuestionWrapper>
                <M.QuestionWrapper>
                  <M.QuestionContent>
                    오늘의 운동 강도는 어떠셨어요?
                  </M.QuestionContent>
                  <M.AnswerContainer>
                    <M.AnswerButton
                      onClick={() => handleAnswerButtonClick("아쉬워요")}
                      $isSelected={selectedIntensity === "아쉬워요"}
                    >
                      <Typography.H4Md>아쉬워요</Typography.H4Md>
                    </M.AnswerButton>

                    <M.AnswerButton
                      onClick={() => handleAnswerButtonClick("적당했어요")}
                      $isSelected={selectedIntensity === "적당했어요"}
                    >
                      <Typography.H4Md>적당했어요</Typography.H4Md>
                    </M.AnswerButton>
                    <M.AnswerButton
                      onClick={() => handleAnswerButtonClick("완전 만족해요")}
                      $isSelected={selectedIntensity === "완전 만족해요"}
                    >
                      <Typography.H4Md>완전 만족해요</Typography.H4Md>
                    </M.AnswerButton>
                  </M.AnswerContainer>
                </M.QuestionWrapper>
              </M.ContentWrapper>
            </M.TextContainer>
            <M.ButtonWrapper>
              <Button
                size="l"
                variant="primary"
                disabled={!isWithMate || !selectedIntensity}
                onClick={handleCompleteExerciseClick}
              >
                오운완!
              </Button>
            </M.ButtonWrapper>
          </M.ModalContainer>
        )}

        {/* 운동 완료 알림창 */}
        {isNotificationVisible && (
          <Toast message="💪🏻 오늘 운동 완료! 완전 멋져요!" />
        )}
      </S.BannerContainer>
    </S.BannerWrapper>
  );
}
