"use client";

import ChevronRight from "@/assets/images/chevron-right.svg";
import DumbbbelIcon from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import DefaultProfileImg from "@/components/common/DefaultProfileImg/DefaultProfileImg";
import Header from "@/components/common/Header/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import * as S from "../style";
import Image from "next/image";

interface ViewProfileProps {
  profileImage?: string;
  nickname?: string;
  gender?: string;
  age?: number;
  sns?: string;
  email?: string;
  skillLevel?: string;
  handleEditProfile: () => void;
  handleEditBasicInfo: () => void;
  managementLinks: { href: string; label: string; target?: string }[];
}

export default function ViewProfile({
  profileImage,
  nickname,
  gender,
  age,
  sns,
  email,
  skillLevel,
  handleEditProfile,
  handleEditBasicInfo,
  managementLinks,
}: ViewProfileProps) {
  const router = useRouter();
  const [imgError, setImgError] = useState(false);

  const skillLevelMap: Record<string, string> = {
    BEGINNER: "운동초보",
    INTERMEDIATE: "운동중수",
    ADVANCED: "운동고수",
  };

  const memoizedManagementLinks = useMemo(
    () => managementLinks,
    [managementLinks],
  );

  return (
    <>
      <Header />
      <S.PageContainer>
        <S.ProfileSection $isEditingProfile={false}>
          <S.ProfileContainerWrapper>
            <S.ProfileImageWrapper $isEditingProfile={false}>
              {profileImage && !imgError ? (
                <S.BackgroundImage>
                  <Image
                    className="background-img"
                    src={profileImage}
                    alt="Profile"
                    width={72}
                    height={72}
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

          <S.ButtonWrapper>
            <S.SecondaryButton onClick={handleEditProfile}>
              프로필 편집
            </S.SecondaryButton>
            <S.SecondaryButton onClick={handleEditBasicInfo}>
              기본 정보 편집
            </S.SecondaryButton>
          </S.ButtonWrapper>
        </S.ProfileSection>

        <S.ManagementSection>
          <S.List>
            {memoizedManagementLinks.map((link) => {
              const isAccountInfo =
                link.label === "계정 정보" && sns === "KAKAO";

              return (
                <S.ListItem
                  key={link.href}
                  onClick={() => router.push(link.href)}
                >
                  {isAccountInfo ? (
                    <>
                      <Link href={link.href} target={link.target}>
                        {link.label}
                      </Link>
                      <S.SNSLoginInfo>
                        <Typography.H6Md color="#ADB3C2">
                          SNS 로그인(카카오)
                        </Typography.H6Md>
                        <Typography.H6Md color="#ADB3C2">
                          {email}
                        </Typography.H6Md>
                      </S.SNSLoginInfo>
                    </>
                  ) : (
                    <Link href={link.href} target={link.target}>
                      {link.label}
                    </Link>
                  )}
                  {!isAccountInfo && link.label !== "앱 버전" && (
                    <ChevronRight />
                  )}{" "}
                </S.ListItem>
              );
            })}
          </S.List>

          <S.LinksWrapper>
            <Link href="/terms">
              <S.UnderlinedWrapper>
                <Typography.H6Md color="#ADB3C2">이용약관</Typography.H6Md>
              </S.UnderlinedWrapper>
            </Link>
            <Link href="/privacy">
              <S.UnderlinedWrapper>
                {" "}
                <Typography.H6Md color="#ADB3C2">
                  개인정보 처리방침
                </Typography.H6Md>
              </S.UnderlinedWrapper>
            </Link>
          </S.LinksWrapper>
        </S.ManagementSection>
      </S.PageContainer>
    </>
  );
}
