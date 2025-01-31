"use client";

import * as S from "@/app/mate/mateprofile/[mateName]/style";
import Dumbbels from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header/Header";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { useMateInfoStore } from "@/stores/mateInfoStore";
import { useParams } from "next/navigation";

export default function MateProfile() {
  const { mateName } = useParams();
  const decodedMateName = decodeURIComponent(mateName as string);
  const mateInfo = useMateInfoStore((state) =>
    state.mates.find((mate) => mate.name === decodedMateName),
  );

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
            <S.PreferenceTimeWrapper>
              <S.PreferenceHeader>
                <S.PreferenceTitle>
                  선호 운동 시간{" "}
                  <Typography.H3Bd
                    style={{ marginLeft: "4px", color: "#004DFF" }}
                  ></Typography.H3Bd>
                </S.PreferenceTitle>
              </S.PreferenceHeader>
              <S.PreferenceTime>
                <S.PreferenceTimeTitle>주말 아침</S.PreferenceTimeTitle>
                <S.PreferenceTimeRange>
                  오전 9시 ~ 오전 11시
                </S.PreferenceTimeRange>
              </S.PreferenceTime>
            </S.PreferenceTimeWrapper>
          </S.PreferenceContainer>
          <S.ButtonWrapper>
            <Button
              size={BUTTON_SIZES.MEDIUM}
              variant="outline"
              disabled={false}
            >
              오픈 채팅방 이동
            </Button>
            <Button
              size={BUTTON_SIZES.MEDIUM}
              variant={BUTTON_VARIANTS.PRIMARY}
              disabled={false}
            >
              메이트 신청
            </Button>
          </S.ButtonWrapper>
        </S.ProfileSection>
      </S.PageContainer>
    </>
  );
}
