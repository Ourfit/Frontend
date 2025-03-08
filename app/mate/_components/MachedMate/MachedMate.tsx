"use client";

import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import DefaultProfileImg from "@/components/common/DefaultProfileImg/DefaultProfileImg";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { useMateInfo } from "@/hooks/queries/useMateInfo";
import { MyPageData, useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import { unmatchMate } from "@/services/mate/unmatchMate";
import { toKoreanDay, toKoreanTime } from "@/utils/formatWorkout";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "../Modal/Modal";
import * as S from "./style";

const KOREAN_DAY_ORDER: Record<string, number> = {
  월: 0,
  화: 1,
  수: 2,
  목: 3,
  금: 4,
  토: 5,
  일: 6,
};

function sortKoreanDays(days: string[]) {
  return days
    .sort((a, b) => KOREAN_DAY_ORDER[a] - KOREAN_DAY_ORDER[b])
    .join(", ");
}

export default function MatchedMate() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: myProfile, isLoading: isLoadingMy } = useMyPageInfo();
  const { data: mateInfo, isLoading } = useMateInfo();

  const [errorMap, setErrorMap] = useState<{ [id: string]: boolean }>({});

  const handleImageError = (mateId: string | number) => {
    setErrorMap((prev) => ({
      ...prev,
      [mateId]: true,
    }));
  };

  const { myMate, workout } = mateInfo;

  const daysInKorean =
    workout.workoutDayOfWeek.length &&
    sortKoreanDays(
      workout.workoutDayOfWeek.map((day: string) => toKoreanDay(day)),
    );

  const timeRange =
    workout.workoutStartAt &&
    workout.workoutEndAt &&
    `${toKoreanTime(workout.workoutStartAt)} ~ ${toKoreanTime(
      workout.workoutEndAt,
    )}`;

  const matchedMates: MyPageData[] = [
    {
      id: myProfile?.id,
      nickname: myProfile?.nickname,
      age: myProfile?.age,
      profileUrl: myProfile?.profileUrl,
    },
    {
      id: myMate.id,
      nickname: myMate.nickname,
      age: myMate.age,
      profileUrl: myMate.profileUrl,
    },
  ];

  const [selectedFacility, setSelectedFacility] = useState<{
    id: number;
    name: string;
    address: string;
  } | null>(
    workout
      ? { id: 1, name: workout.placeName, address: workout.address }
      : null,
  );

  const [timeInfo, setTimeInfo] = useState<{
    days: string[];
    startTime: string;
    endTime: string;
  } | null>(
    workout
      ? {
          days: workout.workoutDayOfWeek,
          startTime: workout.workoutStartAt,
          endTime: workout.workoutEndAt,
        }
      : null,
  );

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSetMateUnmatched = async () => {
    if (!mateInfo?.mateId) {
      console.error("메이트 ID가 존재하지 않습니다.");
      return;
    }

    try {
      await unmatchMate(mateInfo?.mateId);
      await queryClient.invalidateQueries({ queryKey: ["mateInfo"] });
      setShowModal(false);
    } catch (error) {
      alert(error);
    }
  };

  const handleNavigate = () => {
    router.push("/mate/facility");
  };

  const handleNavigateToTime = () => {
    router.push("/mate/time");
  };

  return (
    <S.MatchedMateContainer>
      <S.MateCardWrapper>
        <S.MateCard>
          <S.MateCardHeader>
            <S.ProfileImageWrapper>
              {matchedMates.map((mate, idx) => {
                const isError = errorMap[mate.id];

                if (isError || !mate.profileUrl) {
                  return (
                    <S.ImageWrapper key={idx}>
                      <DefaultProfileImg />
                    </S.ImageWrapper>
                  );
                }

                return (
                  <S.ImageWrapper key={mate.id + mate.nickname}>
                    <S.ProfileImage
                      src={mate.profileUrl}
                      alt={mate.nickname}
                      onError={() => handleImageError(mate.id)}
                    />
                  </S.ImageWrapper>
                );
              })}
            </S.ProfileImageWrapper>
            <S.daysLeft>D+{mateInfo.daySinceAccepted}</S.daysLeft>
          </S.MateCardHeader>

          <S.MateCardContent>
            <S.MateCardInfo>
              <S.MateDetailInfo>
                <Typography.H2Sb>{myMate.nickname}</Typography.H2Sb>
                <Typography.H5Md color="#8A92A3">
                  {myMate.gender === "F" ? "여" : "남"}, {myMate.age}세
                </Typography.H5Md>
              </S.MateDetailInfo>

              <Typography.H6Sb color="#6C727F">
                {myProfile?.nickname} 님과 {mateInfo.daySinceAccepted}일째
                메이트예요!
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
                onClick={() =>
                  router.push(
                    `/mate/mateprofile/${encodeURIComponent(myMate.id)}`,
                  )
                }
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
                <Typography.H5Md
                  color="#004DFF"
                  onClick={handleNavigate}
                  style={{
                    cursor: "pointer",
                  }}
                >
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

          {selectedFacility?.name ? (
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
                <Typography.H5Md
                  color="#004DFF"
                  onClick={handleNavigateToTime}
                  style={{
                    cursor: "pointer",
                  }}
                >
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

          {timeInfo && daysInKorean ? (
            <S.TimeCard>
              <Typography.H4Sb>{daysInKorean}</Typography.H4Sb>
              <Typography.H5Md color="#8A92A3">{timeRange}</Typography.H5Md>
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
