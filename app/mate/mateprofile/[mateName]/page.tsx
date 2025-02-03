"use client";

import Modal from "@/app/mate/_components/Modal/Modal";
import * as S from "@/app/mate/mateprofile/[mateName]/style";
import Dumbbels from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header/Header";
import Toast from "@/components/common/Toast/Toast";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { TOAST_STATUSES } from "@/constants/Toast";
import { useMateInfoStore } from "@/stores/mateInfoStore";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function MateProfile() {
  const { mateName } = useParams();
  const decodedMateName = decodeURIComponent(mateName as string);
  const mateInfo = useMateInfoStore((state) =>
    state.mates.find((mate) => mate.name === decodedMateName),
  );

  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastStatus, setToastStatus] = useState(TOAST_STATUSES.SUCCESS);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSendMateRequest = () => {
    setToastMessage("메이트 신청이 완료되었습니다.");
    setToastStatus(TOAST_STATUSES.SUCCESS);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const isEditingProfile = false;

  if (!mateInfo) {
    return <div>해당 메이트 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <Header isEditingProfile={isEditingProfile} />
      <S.PageContainer>
        <S.ProfileSection $isEditingProfile={isEditingProfile}>
          <S.ProfileOverviewWrapper>
            <S.ProfileImageWrapper $isEditingProfile={isEditingProfile}>
              <S.BackgroundImage
                className="background-img"
                src={mateInfo.profileImage}
                alt={mateInfo.name}
              />
              <S.OverlayImage
                className="overlay"
                src="/image-2.svg"
                alt="Gallery"
              />
            </S.ProfileImageWrapper>

            <S.ProfileName>{mateInfo.name}</S.ProfileName>
            <S.ProfileInfo>
              {mateInfo.gender} · 만 {mateInfo.age}세
            </S.ProfileInfo>
            <S.PrimaryButton>운동중수</S.PrimaryButton>
            <S.ProfileDescription>
              <S.DescriptionHeader>
                <S.DescriptionTitle>간단 소개</S.DescriptionTitle>
              </S.DescriptionHeader>
              <S.DescriptionContent
                disabled={true}
                defaultValue={mateInfo.description}
              />
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
                    {mateInfo.tags.length}
                  </Typography.H3Bd>
                </S.PreferenceTitle>
              </S.PreferenceHeader>
              <S.PreferenceContent>
                {mateInfo.tags.map((sport) => (
                  <S.PreferenceBadge key={sport}>
                    <Dumbbels />
                    {sport}
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
                    {mateInfo.preferencesFacility.length}
                  </Typography.H3Bd>
                </S.PreferenceTitle>
              </S.PreferenceHeader>
              <S.PreferencePlaceWrapper>
                {mateInfo.preferencesFacility.map((place) => (
                  <S.PreferencePlaceInfo key={place.name}>
                    <S.PreferencePlaceName>{place.name}</S.PreferencePlaceName>
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
                <S.PreferenceTimeTitle>
                  {mateInfo.preferencesTime.title}
                </S.PreferenceTimeTitle>
                <S.PreferenceTimeRange>
                  {mateInfo.preferencesTime.range}
                </S.PreferenceTimeRange>
              </S.PreferenceTime>
            </S.PreferenceTimeWrapper>
          </S.PreferenceContainer>
          <S.ButtonWrapper>
            <Button
              size={BUTTON_SIZES.MEDIUM}
              variant="outline"
              disabled={!mateInfo.openchatLink}
              onClick={() => {
                if (mateInfo.openchatLink) {
                  window.open(mateInfo.openchatLink, "_blank");
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
              <Typography.H3Md color="#ffffff">신청</Typography.H3Md>
            </S.StyledButton>
          </S.ModalButtonWrapper>
        </Modal>

        {showToast && <Toast message={toastMessage} status={toastStatus} />}
      </S.PageContainer>
    </>
  );
}
