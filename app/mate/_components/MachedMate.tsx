"use client";

import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { useState } from "react";
import Modal from "./Modal";
import * as S from "./style";

interface MatchedMateProps {
  name: string;
  age: number;
  daysLeft: number;
}

export default function MatchedMate({ name, age, daysLeft }: MatchedMateProps) {
  const matchedMates = [
    { id: 1, name: "준영", age: 26, daysLeft: 24, profileImage: "/next.svg" },
    { id: 2, name: "수연", age: 27, daysLeft: 24, profileImage: "/globe.svg" },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <S.MatchedMateContainer>
      <S.MateCardWrapper>
        <S.MateCard>
          <S.MateCardHeader>
            <S.ProfileImageWrapper>
              {matchedMates.map((mate) => (
                <S.ProfileImage
                  key={mate.id}
                  src={mate.profileImage}
                  alt={mate.name}
                />
              ))}
            </S.ProfileImageWrapper>
            <S.daysLeft>D+24</S.daysLeft>
          </S.MateCardHeader>

          <S.MateCardContent>
            <S.MateCardInfo>
              <S.MateDetailInfo>
                <Typography.H2Sb>{name}</Typography.H2Sb>
                <Typography.H5Md color="#8A92A3">남, {age}세</Typography.H5Md>
              </S.MateDetailInfo>

              <Typography.H6Sb color="#6C727F">
                종수다방님 남은 {daysLeft}일째 메이트예요!
              </Typography.H6Sb>
            </S.MateCardInfo>

            <S.ActionButtonsWrapper>
              <Button
                disabled={false}
                size={BUTTON_SIZES.EXTRA_SMALL}
                variant={BUTTON_VARIANTS.OUTLINE}
                onClick={handleModalOpen}
              >
                메이트 해제
              </Button>
              <Button
                disabled={false}
                size={BUTTON_SIZES.EXTRA_SMALL}
                variant={BUTTON_VARIANTS.PRIMARY}
              >
                프로필 보기
              </Button>
            </S.ActionButtonsWrapper>
          </S.MateCardContent>
        </S.MateCard>
      </S.MateCardWrapper>

      <S.MateFacilityInfoWrapper>
        <S.FacilityInfo>
          <S.FacilityInfoHeader>
            <Typography.H3Bd>🏃🏻 운동 시설</Typography.H3Bd>
            <Typography.H5Md color="#ADB3C2">
              메이트와 함께 운동하는 시설이에요.
            </Typography.H5Md>
          </S.FacilityInfoHeader>

          <Button
            disabled={true}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.OUTLINE}
          >
            등록하기
          </Button>
        </S.FacilityInfo>
      </S.MateFacilityInfoWrapper>
      <S.Line />

      <S.MateTimeWrapper>
        <S.TimeInfo>
          <S.TimeInfoHeader>
            <Typography.H3Bd>⏱️ 운동 시간</Typography.H3Bd>
            <Typography.H5Md color="#ADB3C2">
              메이트와 함께 운동하는 시간이에요.
            </Typography.H5Md>
          </S.TimeInfoHeader>

          <Button
            disabled={true}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.OUTLINE}
          >
            등록하기
          </Button>
        </S.TimeInfo>
      </S.MateTimeWrapper>

      <Modal show={showModal} onClose={handleModalClose}>
        <S.ModalAlert>
          <S.ModalAlertHeader>
            <Typography.H2Sb color="#27282D">
              메이트를 해제할까요?😢
            </Typography.H2Sb>
          </S.ModalAlertHeader>

          <S.ModalAlertContent>
            <Typography.H4Md color="#8A92A3">메이트 해제 시</Typography.H4Md>
            <Typography.H4Md color="#FA6767">
              *챌린지도 같이 초기화돼요.
            </Typography.H4Md>
          </S.ModalAlertContent>
        </S.ModalAlert>

        <S.ModalButtonWrapper>
          <S.StyledButton>취소</S.StyledButton>
          <S.StyledButton>해제</S.StyledButton>
        </S.ModalButtonWrapper>
      </Modal>
    </S.MatchedMateContainer>
  );
}
