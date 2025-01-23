"use client";

import ChevronLeft from "@/assets/images/chevron-left.svg";
import Header from "@/components/common/Header/Header";
import Link from "next/link";
import * as S from "../style";

interface ViewProfileProps {
  isEditingProfile: boolean;
  profileImage: string;
  handleEditProfile: () => void;
  managementLinks: { href: string; label: string }[];
}

export default function ViewProfile({
  isEditingProfile,
  profileImage,
  handleEditProfile,
  managementLinks,
}: ViewProfileProps) {
  return (
    <>
      <Header isEditingProfile={isEditingProfile} />
      <S.PageContainer>
        <S.ProfileSection $isEditingProfile={false}>
          <S.ProfileImageWrapper $isEditingProfile={false}>
            <S.BackgroundImage
              className="background-img"
              src={profileImage}
              alt="Profile"
            />
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
                <ChevronLeft />
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
