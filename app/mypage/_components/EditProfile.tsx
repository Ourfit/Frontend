"use client";

import DumbbbelIcon from "@/assets/images/dumbbells.svg";
import DefaultProfileImg from "@/components/common/DefaultProfileImg/DefaultProfileImg";
import Header from "@/components/common/Header/Header";
import { queryClient } from "@/components/common/ReactQueryProvider";
import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import { updateUserProfile } from "@/services/updateUserProfile";
import { useUserInfoStore } from "@/stores/userInfoStore";
import Image from "next/image";
import React, { useState } from "react";
import Facility from "../facility/Facility";
import Sports from "../sports/Sports";
import Time from "../time/Time";
import * as S from "./EditProfile.style";

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
  introduction?: string;
  handleIntroductionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleIntroductionBlur: () => void;
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
  introduction,
  handleIntroductionChange,
  handleIntroductionBlur,
  descriptionInputRef,
}: EditProfileProps) {
  const { userInfo, fetchUserInfo } = useUserInfoStore();
  const [imgError, setImgError] = useState(false);
  const { data: userData } = useMyPageInfo();

  const saveIntroduction = async () => {
    handleIntroductionBlur();

    try {
      const introductionValue = introduction?.trim() || null;

      const openChatUrlValue = userInfo?.openChatUrl || null;

      await updateUserProfile({
        introduction: introductionValue,
        openChatUrl: openChatUrlValue,
      });
      await fetchUserInfo();
      if (userData?.id) {
        await queryClient.refetchQueries({
          queryKey: ["mateDetail", userData?.id],
          exact: true,
        });
      }
    } catch (error) {
      console.error("자기소개 업데이트 실패:", error);
    }
  };

  const skillLevelMap: Record<string, string> = {
    BEGINNER: "운동초보",
    INTERMEDIATE: "운동중수",
    ADVANCED: "운동고수",
  };

  return (
    <>
      <Header title="프로필 편집" onClick={handleEditProfile} />
      <S.PageContainer>
        <S.ProfileSection $isEditingProfile={true}>
          <S.ProfileOverviewWrapper>
            <S.ProfileContainerWrapper>
              <S.ProfileImageWrapper
                $isEditingProfile={true}
                onClick={handleProfileImageClick}
              >
                {profileImage && !imgError ? (
                  <S.BackgroundImage>
                    <Image
                      className="background-img"
                      src={profileImage}
                      alt="Profile"
                      width={80}
                      height={80}
                      onError={() => setImgError(true)}
                    />
                  </S.BackgroundImage>
                ) : (
                  <DefaultProfileImg size={34} />
                )}
                <S.OverlayImage
                  className="overlay"
                  src="/image-2.svg"
                  alt="Gallery"
                />
              </S.ProfileImageWrapper>
              <S.DumbberIconWrapper>
                <DumbbbelIcon color="#FFFFFF" />
              </S.DumbberIconWrapper>

              <S.ProfileHeaderWrapper>
                <S.ProfileNameInfoWrapper>
                  <S.ProfileName>{nickname}</S.ProfileName>
                  <S.ProfileInfo>
                    {gender === "M" ? "남성" : "여성"} · 만 {age}세
                  </S.ProfileInfo>
                </S.ProfileNameInfoWrapper>
                <S.SkillLevelInfo>
                  {skillLevelMap[skillLevel || "BEGINNER"]}
                </S.SkillLevelInfo>
              </S.ProfileHeaderWrapper>
            </S.ProfileContainerWrapper>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

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
                value={introduction || ""}
                onChange={handleIntroductionChange}
                onBlur={saveIntroduction}
              />
            </S.ProfileDescription>
          </S.ProfileOverviewWrapper>

          <S.PreferenceContainer>
            <S.Line />
            <Sports />
            <S.Line />
            <Facility />
            <S.Line />
            <Time />
          </S.PreferenceContainer>
        </S.ProfileSection>
      </S.PageContainer>
    </>
  );
}
