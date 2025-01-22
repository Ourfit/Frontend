"use client";

import ChevronRight from "@/assets/images/chevron-right.svg";
import Dumbbels from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import Header from "@/components/common/Header/Header";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as S from "./style";

const managementLinks = [
  { href: "/mypage/openchat", label: "오픈 채팅 관리" },
  { href: "/mypage/mate-history", label: "메이트 내역" },
  { href: "/mypage/contact", label: "문의하기" },
  { href: "/mypage/suggestions", label: "건의하기" },
  { href: "/mypage/account-info", label: "계정 정보" },
  { href: "", label: "앱 버전" },
];

export default function Mypage() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [description, setDescription] = useState<string>("");
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [profileImage, setProfileImage] = useState<string>("/next.svg");

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);

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

  const handleEditProfile = () => {
    setIsEditingProfile(true);
  };

  const handleEditDescription = () => {
    setIsEditingDescription(true);
    setTimeout(() => {
      descriptionInputRef.current?.focus();
    }, 100);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(e.target.value);
  };

  const handleDescriptionBlur = () => {
    setIsEditingDescription(false);
    fileInputRef.current?.blur();
    if (typeof window !== "undefined") {
      localStorage.setItem("description", description);
    }
  };

  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        setProfileImage(imageUrl);
        if (typeof window !== "undefined") {
          localStorage.setItem("description", description);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const saveDescription = () => {
    if (description) localStorage.setItem("description", description);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", saveDescription);
    return () => {
      window.removeEventListener("beforeunload", saveDescription);
    };
  }, [description]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDescription = localStorage.getItem("description");
      const savedProfileImage = localStorage.getItem("profileImage");

      if (savedDescription) setDescription(savedDescription);
      if (savedProfileImage) setProfileImage(savedProfileImage);
    }
  }, []);

  if (isEditingProfile) {
    return (
      <>
        <Header isEditingProfile={isEditingProfile} />
        <S.PageContainer>
          <S.ProfileSection $isEditingProfile={isEditingProfile}>
            <S.ProfileOverviewWrapper>
              <S.ProfileImageWrapper
                $isEditingProfile={isEditingProfile}
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
                      {2}
                    </Typography.H3Bd>
                  </S.PreferenceTitle>
                  <S.PreferenceEdit>편집</S.PreferenceEdit>
                </S.PreferenceHeader>
                <S.PreferencePlaceWrapper>
                  {places.map((place) => (
                    <S.PreferencePlaceInfo key={place.name}>
                      <S.PreferencePlaceName>
                        {place.name}
                      </S.PreferencePlaceName>
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

  return (
    <>
      <Header isEditingProfile={isEditingProfile} />
      <S.PageContainer>
        <S.ProfileSection $isEditingProfile={isEditingProfile}>
          <S.ProfileImageWrapper $isEditingProfile={isEditingProfile}>
            {localStorage.getItem("profileImage") ? (
              <S.BackgroundImage
                className="background-img"
                src={profileImage}
                alt="Profile"
              />
            ) : (
              <S.BackgroundImage
                className="background-img"
                src="/next.svg"
                alt="Profile"
              />
            )}
          </S.ProfileImageWrapper>
          <S.ProfileName>정준영</S.ProfileName>
          <S.ProfileInfo>남성 · 만 25세</S.ProfileInfo>
          <S.PrimaryButton>운동중수</S.PrimaryButton>
          <S.ButtonWrapper>
            <S.SecondaryButton onClick={handleEditProfile}>
              프로필 편집
            </S.SecondaryButton>
            <S.SecondaryButton>기본 정보 편집</S.SecondaryButton>
          </S.ButtonWrapper>
        </S.ProfileSection>

        <S.ManagementSection>
          <S.List>
            {managementLinks.map((link) => (
              <S.ListItem key={link.href}>
                <Link href={link.href}>{link.label}</Link>
                <ChevronRight />
              </S.ListItem>
            ))}
          </S.List>
        </S.ManagementSection>

        <S.InfoSection>
          <S.LinksWrapper>
            <Link href="/terms">이용약관</Link>
            <Link href="/privacy">개인정보 처리방침</Link>
          </S.LinksWrapper>
        </S.InfoSection>
      </S.PageContainer>
    </>
  );
}
