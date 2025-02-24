"use client";

import Header from "@/components/common/Header/Header";
import React, { useState } from "react";
import Facility from "../facility/Facility";
import Sports from "../sports/Sports";
import * as S from "../style";
import Time from "../time/Time";

interface EditProfileProps {
  handleEditProfile: () => void;
  isEditingDescription: boolean;
  profileImage?: string;
  nickname?: string;
  age?: number;
  gender?: string;
  skillLevel?: string;
  handleProfileImageClick: () => void;
  handleEditDescription: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string;
  handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleDescriptionBlur: () => void;
  descriptionInputRef: React.RefObject<HTMLTextAreaElement | null>;
}

export default function EditProfile({
  handleEditProfile,
  isEditingDescription,
  profileImage,
  nickname,
  age,
  gender,
  skillLevel,
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
      id: 1,
      name: "에이블짐 잠실점",
      address: "서울 송파구 올림픽로35가길 11 지하1층 001호",
    },
    {
      id: 2,
      name: "에이블짐 홍대점",
      address: "서울 마포구 양화로12길 34 2층 201호",
    },
  ];

  const skillLevelMap: Record<string, string> = {
    BEGINNER: "운동초보",
    INTERMEDIATE: "운동중수",
    ADVANCED: "운동고수",
  };

  const [selectedPreferenceFacility, setSelectedPreferenceFacility] = useState<{
    id: number;
    name: string;
    address: string;
  } | null>(null);

  const handleNavigate = (facility: {
    id: number;
    name: string;
    address: string;
  }) => {
    setSelectedPreferenceFacility(facility);
  };

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

            <S.ProfileName>{nickname}</S.ProfileName>
            <S.ProfileInfo>
              {gender === "M" ? "남성" : "여성"} · 만 {age}세
            </S.ProfileInfo>
            <S.PrimaryButton>
              {skillLevelMap[skillLevel || "BEGINNER"]}
            </S.PrimaryButton>
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
            <Sports preferences={preferences} />
            <Facility
              selectedPreferenceFacility={selectedPreferenceFacility}
              handleNavigate={() => handleNavigate(places[0])}
            />
            <Time preferences={preferences} />
          </S.PreferenceContainer>
        </S.ProfileSection>
      </S.PageContainer>
    </>
  );
}
