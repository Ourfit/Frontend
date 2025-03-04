"use client";

import Modal from "@/app/mate/_components/Modal/Modal";
import * as S from "@/app/mate/mateprofile/[mateId]/style";
import AfternoonIcon from "@/assets/images/afternoon.svg";
import Dumbbels from "@/assets/images/dumbbells.svg";
import EveningIcon from "@/assets/images/evening.svg";
import MorningIcon from "@/assets/images/morning.svg";
import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header/Header";
import Toast from "@/components/common/Toast/Toast";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { TIME_MAPPING } from "@/constants/Time";
import { TOAST_STATUSES } from "@/constants/Toast";
import { useMateDetail } from "@/hooks/queries/useMateDetails";
import { sendMateRequest } from "@/services/mate/sendMateRequest";
import { useParams } from "next/navigation";
import { JSX, useState, useTransition } from "react";

function getTimeSlot(
  timeKey: string,
): "morning" | "afternoon" | "evening" | "" {
  if (timeKey.includes("MORNING")) return "morning";
  if (timeKey.includes("AFTERNOON")) return "afternoon";
  if (timeKey.includes("EVENING")) return "evening";
  return "";
}

export default function MateProfile() {
  const skillLevelMap: Record<string, string> = {
    BEGINNER: "운동 초보",
    INTERMEDIATE: "운동 중수",
    ADVANCED: "운동 고수",
  };

  const iconMapping: Record<string, JSX.Element> = {
    morning: <MorningIcon />,
    afternoon: <AfternoonIcon />,
    evening: <EveningIcon />,
  };

  const params = useParams();
  const mateId = Number(params.mateId);

  const { data, isLoading, error } = useMateDetail(mateId);

  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastStatus, setToastStatus] = useState<"success" | "error">(
    TOAST_STATUSES.SUCCESS,
  );

  const [isPending, startTransition] = useTransition();

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSendMateRequest = () => {
    startTransition(async () => {
      try {
        await sendMateRequest(mateId);

        setToastMessage("메이트 신청이 완료되었습니다.");
        setToastStatus(TOAST_STATUSES.SUCCESS);
        setShowToast(true);

        setShowModal(false);

        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      } catch (error) {
        setToastMessage("메이트 신청에 실패했습니다.");
        setToastStatus(TOAST_STATUSES.ERROR);
        setShowToast(true);

        setTimeout(() => {
          setShowToast(false);
        }, 3000);

        setShowModal(false);
      }
    });
  };

  const isEditingProfile = false;

  return (
    <>
      <Header isEditingProfile={isEditingProfile} />
      <S.PageContainer>
        <S.ProfileSection $isEditingProfile={isEditingProfile}>
          <S.ProfileOverviewWrapper>
            <S.ProfileImageWrapper $isEditingProfile={isEditingProfile}>
              <S.BackgroundImage
                className="background-img"
                src={data?.profileUrl}
                alt={data?.nickname}
              />
            </S.ProfileImageWrapper>

            <S.ProfileName>{data?.nickname}</S.ProfileName>
            <S.ProfileInfo>
              {data?.gender} · 만 {data?.age}세
            </S.ProfileInfo>
            <S.PrimaryButton>
              {skillLevelMap[data?.skillLevel || ""] || "미정"}
            </S.PrimaryButton>
            <S.ProfileDescription>
              <S.DescriptionHeader>
                <S.DescriptionTitle>간단 소개</S.DescriptionTitle>
              </S.DescriptionHeader>
              <S.DescriptionContent>
                <Typography.H5Md color="#545862">
                  {data?.introduction || ""}
                </Typography.H5Md>
              </S.DescriptionContent>
            </S.ProfileDescription>
          </S.ProfileOverviewWrapper>
          <S.Line />

          <S.PreferenceContainer>
            <S.PreferenceSectionWrapper>
              <S.PreferenceHeader>
                <S.PreferenceTitle>
                  선호 운동{" "}
                  <Typography.H3Bd
                    style={{ marginLeft: "4px", color: "#004DFF" }}
                  >
                    {data?.favoriteWorkouts.length}
                  </Typography.H3Bd>
                </S.PreferenceTitle>
              </S.PreferenceHeader>
              <S.PreferenceContent>
                {data?.favoriteWorkouts.map((sport) => (
                  <S.PreferenceBadge key={sport.code}>
                    <Dumbbels color={"#004DFF"} />
                    {sport.name}
                  </S.PreferenceBadge>
                ))}
              </S.PreferenceContent>
            </S.PreferenceSectionWrapper>
            <S.Line />

            <S.PreferenceFacilityWrapper>
              <S.PreferenceHeader>
                <S.PreferenceTitle>
                  선호 운동 시설{" "}
                  <Typography.H3Bd
                    style={{ marginLeft: "4px", color: "#004DFF" }}
                  >
                    {data?.favoritePlaces.length}
                  </Typography.H3Bd>
                </S.PreferenceTitle>
              </S.PreferenceHeader>
              {data?.favoritePlaces.length === 0 && (
                <S.NoPreferenceView>
                  <Typography.H4Md>-</Typography.H4Md>
                  <Typography.H5Md color="#8A92A3">
                    선호하는 시설이 없어요.
                  </Typography.H5Md>
                </S.NoPreferenceView>
              )}
              <S.PreferencePlaceWrapper>
                {data?.favoritePlaces.map((place) => (
                  <S.PreferencePlaceInfo key={place.placeName}>
                    <S.PreferencePlaceName>
                      {place.placeName}
                    </S.PreferencePlaceName>
                    <S.PreferencePlaceAddress>
                      {place.address}
                    </S.PreferencePlaceAddress>
                  </S.PreferencePlaceInfo>
                ))}
              </S.PreferencePlaceWrapper>
            </S.PreferenceFacilityWrapper>
            <S.Line />

            <S.PreferenceTimeWrapper>
              <S.PreferenceHeader>
                <S.PreferenceTitle>선호 운동 시간 </S.PreferenceTitle>
              </S.PreferenceHeader>
              <S.PreferenceTime>
                <Typography.H4Md color="#27282D">
                  {data?.preferredWorkoutTime ? (
                    <>
                      {iconMapping[getTimeSlot(data.preferredWorkoutTime)]}
                      <Typography.H4Md
                        color="#27282D"
                        style={{ marginLeft: "8px" }}
                      >
                        {TIME_MAPPING[data.preferredWorkoutTime]}
                      </Typography.H4Md>
                    </>
                  ) : (
                    <Typography.H4Md color="#27282D">미설정</Typography.H4Md>
                  )}
                </Typography.H4Md>
              </S.PreferenceTime>
            </S.PreferenceTimeWrapper>
          </S.PreferenceContainer>
          <S.ButtonWrapper>
            <Button
              size={BUTTON_SIZES.MEDIUM}
              variant="outline"
              disabled={!data?.openChatUrl}
              onClick={() => {
                if (data?.openChatUrl) {
                  window.open(data.openChatUrl, "_blank");
                }
              }}
            >
              오픈 채팅방 이동
            </Button>
            <Button
              size={BUTTON_SIZES.MEDIUM}
              variant={BUTTON_VARIANTS.PRIMARY}
              disabled={false}
              onClick={() => setShowModal(true)}
            >
              메이트 신청
            </Button>
          </S.ButtonWrapper>
        </S.ProfileSection>

        <Modal show={showModal} onClose={handleModalClose}>
          <S.ModalAlert>
            <S.ModalAlertHeader>
              <Typography.H2Sb color="#27282D">
                메이트를 신청을 보낼까요?
              </Typography.H2Sb>
            </S.ModalAlertHeader>

            <S.ModalAlertContent>
              <Typography.H4Md color="#8A92A3">
                상대가 메이트를 수락하면 알림을 보내드려요.
              </Typography.H4Md>
            </S.ModalAlertContent>
          </S.ModalAlert>

          <S.ModalButtonWrapper>
            <S.StyledButton>
              <Typography.H3Md color="#545862">취소</Typography.H3Md>
            </S.StyledButton>
            <S.StyledButton onClick={handleSendMateRequest}>
              <Typography.H3Md color="#ffffff">
                {isPending ? "처리 중..." : "신청"}
              </Typography.H3Md>
            </S.StyledButton>
          </S.ModalButtonWrapper>
        </Modal>

        {showToast && <Toast message={toastMessage} status={toastStatus} />}
      </S.PageContainer>
    </>
  );
}
