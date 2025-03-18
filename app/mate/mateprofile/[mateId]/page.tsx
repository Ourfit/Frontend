"use client";

import Modal from "@/app/mate/_components/Modal/Modal";
import * as S from "@/app/mate/mateprofile/[mateId]/style";
import AfternoonIcon from "@/assets/images/afternoon.svg";
import {
  default as DumbbbelIcon,
  default as Dumbbels,
} from "@/assets/images/dumbbells.svg";
import EveningIcon from "@/assets/images/evening.svg";
import LoadingIcon from "@/assets/images/loader-white.svg";
import MorningIcon from "@/assets/images/morning.svg";
import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import DefaultProfileImg from "@/components/common/DefaultProfileImg/DefaultProfileImg";
import Header from "@/components/common/Header/Header";
import Toast from "@/components/common/Toast/Toast";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { COLORS } from "@/constants/Theme";
import { TIME_MAPPING } from "@/constants/Time";
import { TOAST_STATUSES } from "@/constants/Toast";
import { useMateDetail } from "@/hooks/queries/useMateDetails";
import { useMateInfo } from "@/hooks/queries/useMateInfo";
import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import { recevieMateRequest } from "@/services/mate/recevieMateRequest";
import { sendMateRequest } from "@/services/mate/sendMateRequest";
import { useNotificationStore } from "@/stores/NotificationStore";
import getTimeSlot from "@/utils/getTimeSlot";
import { AxiosError } from "axios";
import Image from "next/image";
import { queryClient } from "@/components/common/ReactQueryProvider";
import { useParams, useRouter } from "next/navigation";
import { JSX, useEffect, useState, useTransition } from "react";

export default function MateProfile() {
  const skillLevelMap: Record<string, string> = {
    BEGINNER: "운동초보",
    INTERMEDIATE: "운동중수",
    ADVANCED: "운동고수",
  };

  const iconMapping: Record<string, JSX.Element> = {
    morning: <MorningIcon />,
    afternoon: <AfternoonIcon />,
    evening: <EveningIcon />,
  };

  const router = useRouter();
  const params = useParams();
  const mateId = Number(params.mateId);

  const { data, isLoading, error } = useMateDetail(mateId);
  const { data: myMate } = useMateInfo();
  const { data: myInfo } = useMyPageInfo();
  const { notification, resetNotification } = useNotificationStore();

  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastStatus, setToastStatus] = useState<
    "success" | "error" | undefined
  >(TOAST_STATUSES.SUCCESS);
  const [buttonType, setButtonType] = useState("");
  const [receiveId, setReceiveId] = useState(0);
  const [imgError, setImgError] = useState(false);

  const isDisable =
    buttonType === "APPLY" ||
    data?.id === myMate?.myMate.id ||
    data?.id === myInfo?.id;
  const isReceive = buttonType === "RECEIVE";

  const [isPending, startTransition] = useTransition();

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSendMateRequest = () => {
    if (myMate) {
      setToastMessage("이미 메이트가 있습니다.");
      setToastStatus(TOAST_STATUSES.ERROR);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return;
    }

    if (isReceive) {
      startTransition(async () => {
        try {
          const res = await recevieMateRequest(receiveId);
          if (res === 200) {
            queryClient.invalidateQueries({ queryKey: ["mateInfo"] });
            router.push(`/mate/mateprofile/${mateId}/receive`);
          }
        } catch (error) {
          setToastMessage("메이트 수락에 실패했습니다.");
          setToastStatus(TOAST_STATUSES.ERROR);
          setShowToast(true);

          setTimeout(() => {
            setShowToast(false);
          }, 3000);

          setShowModal(false);
        }
      });

      return;
    }

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

  useEffect(() => {
    if (error) {
      const err = error as AxiosError;

      if (err.status === 404) {
        setToastMessage("탈퇴한 사용자입니다.");
        setToastStatus(TOAST_STATUSES.ERROR);
        setShowToast(true);
      }
    }
  }, [error]);

  useEffect(() => {
    if (notification.type) {
      setButtonType(notification.type);

      if (notification.type === "RECEIVE") {
        setReceiveId(notification.id!);
        setToastMessage("나에게 메이트를 신청한 유저에요");
        setToastStatus(undefined);
        setShowToast(true);
      }
    }

    return () => resetNotification();
  }, [buttonType]);

  const isEditingProfile = false;

  return (
    <>
      <Header isEditingProfile={isEditingProfile} />
      <S.PageContainer>
        <S.ProfileSection $isEditingProfile={isEditingProfile}>
          <S.ProfileOverviewWrapper>
            <S.ProfileContainerWrapper>
              <S.ProfileImageWrapper $isEditingProfile={isEditingProfile}>
                {data?.profileUrl && !imgError ? (
                  <S.BackgroundImage>
                    <Image
                      className="background-img"
                      src={data.profileUrl}
                      alt={data?.nickname}
                      width={80}
                      height={80}
                      onError={() => setImgError(true)}
                    />
                  </S.BackgroundImage>
                ) : (
                  <DefaultProfileImg size={34} />
                )}
              </S.ProfileImageWrapper>
              <S.DumbberIconWrapper>
                <DumbbbelIcon color="#FFFFFF" />
              </S.DumbberIconWrapper>

              <S.ProfileHeaderWrapper>
                <S.ProfileNameInfoWrapper>
                  <S.ProfileName>{data?.nickname}</S.ProfileName>
                  <S.ProfileInfo>
                    {data?.gender === "F" ? "여" : "남"} · 만 {data?.age}세
                  </S.ProfileInfo>
                </S.ProfileNameInfoWrapper>
                <S.SkillLevelInfo>
                  {skillLevelMap[data?.skillLevel || ""] || "미정"}
                </S.SkillLevelInfo>
              </S.ProfileHeaderWrapper>
            </S.ProfileContainerWrapper>

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
                    <Typography.H4Md>{sport.name}</Typography.H4Md>
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
                <S.PreferencePlaceWrapper>
                  <S.NoPreferenceView>
                    <Typography.H4Md>-</Typography.H4Md>
                    <Typography.H5Md color="#8A92A3">
                      선호하는 시설이 없어요.
                    </Typography.H5Md>
                  </S.NoPreferenceView>
                </S.PreferencePlaceWrapper>
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
              disabled={!data?.openChatUrl}
              onClick={() => {
                if (data?.openChatUrl) {
                  window.open(data.openChatUrl, "_blank");
                }
              }}
              style={{
                border: !data?.openChatUrl
                  ? `1px solid ${COLORS.GRAYSCALE_300}`
                  : "",
                backgroundColor: data?.openChatUrl
                  ? COLORS.BLUE_50
                  : COLORS.BASE_WHITE,
                color: !data?.openChatUrl
                  ? COLORS.GRAYSCALE_400
                  : COLORS.BLUE_500,
              }}
            >
              오픈 채팅방 이동
            </Button>
            <Button
              size={BUTTON_SIZES.MEDIUM}
              variant={BUTTON_VARIANTS.PRIMARY}
              disabled={isDisable}
              onClick={() => !isDisable && setShowModal(true)}
            >
              {isReceive ? "메이트 수락" : "메이트 신청"}
            </Button>
          </S.ButtonWrapper>
        </S.ProfileSection>

        <Modal show={showModal} onClose={handleModalClose}>
          <S.ModalAlert>
            <S.ModalAlertHeader>
              <Typography.H2Sb color="#27282D">
                {isReceive
                  ? "메이트를 수락할까요?"
                  : "메이트를 신청을 보낼까요?"}
              </Typography.H2Sb>
            </S.ModalAlertHeader>

            <S.ModalAlertContent>
              <Typography.H4Md color="#8A92A3">
                {isReceive ? (
                  <>
                    메이트 수락 시 나의 메이트 정보는
                    <br />
                    메이트 탭에서 확인 가능해요
                  </>
                ) : (
                  <>
                    상대가 메이트를 수락하면 <br />
                    알림을 보내드려요.
                  </>
                )}
              </Typography.H4Md>
            </S.ModalAlertContent>
          </S.ModalAlert>

          <S.ModalButtonWrapper>
            <S.StyledButton>
              <Typography.H3Md color="#545862">취소</Typography.H3Md>
            </S.StyledButton>
            <S.StyledButton onClick={handleSendMateRequest}>
              <Typography.H3Md color="#ffffff">
                {isPending ? <LoadingIcon /> : isReceive ? "수락" : "신청"}
              </Typography.H3Md>
            </S.StyledButton>
          </S.ModalButtonWrapper>
        </Modal>

        {showToast && (
          <Toast
            message={toastMessage}
            status={toastStatus}
            style={{ marginTop: !toastStatus ? "-45px" : "" }}
          />
        )}
      </S.PageContainer>
    </>
  );
}
