"use client";

import Dumbbels from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import Header from "@/components/common/Header/Header";
import React from "react";
import * as S from "../style";

interface EditProfileProps {
  handleEditProfile: () => void;
  isEditingDescription: boolean;
  profileImage: string;
  handleProfileImageClick: () => void;
  handleEditDescription: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleDescriptionBlur: () => void;
  descriptionInputRef: React.RefObject<HTMLTextAreaElement | null>;
}

export default function EditProfile({
  handleEditProfile,
  isEditingDescription,
  profileImage,
  handleProfileImageClick,
  handleEditDescription,
  fileInputRef,
  handleFileChange,
  description,
  handleDescriptionChange,
  handleDescriptionBlur,
  descriptionInputRef,
}: EditProfileProps) {
  const preferences = ["헬스", "필라테스"];
  const places = [
    {
      name: "에이쁠짐 잠실점",
      address: "서울 송파구 올림픽로35가길 11 지하1층 001호",
    },
    {
      name: "에이쁠짐 홍대점",
      address: "서울 마포구 양화로12길 34 2층 201호",
    },
  ];

  return (
    <>
      <Header title="프로필 편집" onClick={handleEditProfile} />
      <S.PageContainer>
        <S.ProfileSection $isEditingProfile={true}>
          <S.ProfileOverviewWrapper>
            <S.ProfileImageWrapper
              $isEditingProfile={true}
              onClick={handleProfileImageClick}
            >
              <S.BackgroundImage
                className="background-img"
                src={profileImage}
                alt="Profile"
              />
              <S.OverlayImage
                className="overlay"
                src="/image-2.svg"
                alt="Gallery"
              />
            </S.ProfileImageWrapper>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <S.ProfileName>정준영</S.ProfileName>
            <S.ProfileInfo>남성 · 만 25세</S.ProfileInfo>
            <S.PrimaryButton>운동중수</S.PrimaryButton>
            <S.ProfileDescription>
              <S.DescriptionHeader>
                <S.DescriptionTitle>간단 소개</S.DescriptionTitle>
                <S.DescriptionEdit onClick={handleEditDescription}>
                  편집
                </S.DescriptionEdit>
              </S.DescriptionHeader>
              <S.DescriptionContent
                ref={descriptionInputRef}
                disabled={!isEditingDescription}
                value={description}
                onChange={handleDescriptionChange}
                onBlur={handleDescriptionBlur}
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
                    {preferences.length}
                  </Typography.H3Bd>
                </S.PreferenceTitle>
                <S.PreferenceEdit>편집</S.PreferenceEdit>
              </S.PreferenceHeader>
              <S.PreferenceContent>
                {preferences.map((sport) => (
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
                    {places.length}
                  </Typography.H3Bd>
                </S.PreferenceTitle>
                <S.PreferenceEdit>편집</S.PreferenceEdit>
              </S.PreferenceHeader>
              <S.PreferencePlaceWrapper>
                {places.map((place) => (
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
                <S.PreferenceEdit>편집</S.PreferenceEdit>
              </S.PreferenceHeader>
              <S.PreferenceTime>
                <S.PreferenceTimeTitle>주말 아침</S.PreferenceTimeTitle>
                <S.PreferenceTimeRange>
                  오전 9시 ~ 오전 11시
                </S.PreferenceTimeRange>
              </S.PreferenceTime>
            </S.PreferenceTimeWrapper>
          </S.PreferenceContainer>
        </S.ProfileSection>
      </S.PageContainer>
    </>
  );
}
