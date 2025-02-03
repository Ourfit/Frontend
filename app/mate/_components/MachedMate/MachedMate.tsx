"use client";

import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { calculateDaysElapsed } from "@/utils/dateUtils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import * as S from "./style";

interface MatchedMateProps {
  name: string;
  age: number;
  startDate: string;
  setIsMatched: (v: boolean) => void;
}

export default function MatchedMate({
  name,
  age,
  startDate,
  setIsMatched,
}: MatchedMateProps) {
  const router = useRouter();
  const daysElapsed = calculateDaysElapsed(startDate);
  const matchedMates = [
    {
      id: 1,
      name: "준영",
      age: 26,
      profileImage: "/next.svg",
    },
    {
      id: 2,
      name: "수연",
      age: 27,
      profileImage: "/globe.svg",
    },
  ];

  const [selectedFacility, setSelectedFacility] = useState<{
    id: number;
    name: string;
    address: string;
  } | null>(null);

  const [timeInfo, setTimeInfo] = useState<{
    days: string[];
    startTime: string;
    endTime: string;
  } | null>(null);

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSetMateUnmatched = () => {
    localStorage.removeItem("sportTimeInfo");
    localStorage.removeItem("selectedFacility");

    setSelectedFacility(null);
    setTimeInfo(null);

    setIsMatched(false);
  };

  const handleNavigate = () => {
    router.push("/mate/facility");
  };

  const handleNavigateToTime = () => {
    router.push("/mate/time");
  };

  useEffect(() => {
    const storedTimeInfo = localStorage.getItem("sportTimeInfo");
    const savedFacility = localStorage.getItem("selectedFacility");

    if (storedTimeInfo) {
      setTimeInfo(JSON.parse(storedTimeInfo));
    }
    if (savedFacility) {
      setSelectedFacility(JSON.parse(savedFacility));
    }
  }, []);

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
            <S.daysLeft>D+{daysElapsed}</S.daysLeft>
          </S.MateCardHeader>

          <S.MateCardContent>
            <S.MateCardInfo>
              <S.MateDetailInfo>
                <Typography.H2Sb>{name}</Typography.H2Sb>
                <Typography.H5Md color="#8A92A3">남, {age}세</Typography.H5Md>
              </S.MateDetailInfo>

              <Typography.H6Sb color="#6C727F">
                프론트엔드 님은 {daysElapsed}일째 메이트예요!
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
            {selectedFacility ? (
              <S.FacilityInfoHeaderTitle $hasData={!!selectedFacility}>
                <Typography.H3Bd>🏃🏻 운동 시설</Typography.H3Bd>
                <Typography.H5Md color="#004DFF" onClick={handleNavigate}>
                  편집
                </Typography.H5Md>
              </S.FacilityInfoHeaderTitle>
            ) : (
              <Typography.H3Bd>🏃🏻 운동 시설</Typography.H3Bd>
            )}

            <Typography.H5Md color="#ADB3C2">
              메이트와 함께 운동하는 시설이에요.
            </Typography.H5Md>
          </S.FacilityInfoHeader>

          {selectedFacility ? (
            <S.FacilityCard>
              <Typography.H4Sb>{selectedFacility.name}</Typography.H4Sb>
              <Typography.H6Md color="#8A92A3">
                {selectedFacility.address}
              </Typography.H6Md>
            </S.FacilityCard>
          ) : (
            <Button
              disabled={false}
              size={BUTTON_SIZES.LARGE}
              variant={BUTTON_VARIANTS.OUTLINE}
              onClick={handleNavigate}
            >
              등록하기
            </Button>
          )}
        </S.FacilityInfo>
      </S.MateFacilityInfoWrapper>
      <S.Line />

      <S.MateTimeWrapper>
        <S.TimeInfo>
          <S.TimeInfoHeader>
            {timeInfo ? (
              <S.TimeInfoHeaderTitle $hasData={!!timeInfo}>
                <Typography.H3Bd>⏱️ 운동 시간</Typography.H3Bd>
                <Typography.H5Md color="#004DFF" onClick={handleNavigateToTime}>
                  편집
                </Typography.H5Md>
              </S.TimeInfoHeaderTitle>
            ) : (
              <Typography.H3Bd>⏱️ 운동 시간</Typography.H3Bd>
            )}

            <Typography.H5Md color="#ADB3C2">
              메이트와 함께 운동하는 시간이에요.
            </Typography.H5Md>
          </S.TimeInfoHeader>

          {timeInfo ? (
            <S.TimeCard>
              <Typography.H4Sb>{timeInfo.days.join(", ")}</Typography.H4Sb>
              <Typography.H5Md color="#8A92A3">
                {timeInfo.startTime} ~ {timeInfo.endTime}
              </Typography.H5Md>
            </S.TimeCard>
          ) : (
            <Button
              disabled={false}
              size={BUTTON_SIZES.LARGE}
              variant={BUTTON_VARIANTS.OUTLINE}
              onClick={handleNavigateToTime}
            >
              등록하기
            </Button>
          )}
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
          <S.StyledButton onClick={handleSetMateUnmatched}>해제</S.StyledButton>
        </S.ModalButtonWrapper>
      </Modal>
    </S.MatchedMateContainer>
  );
}
