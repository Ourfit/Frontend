import ChevronRight from "@/assets/images/chevron-right.svg";
import Link from "next/link";
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
  return (
    <S.PageContainer>
      <S.ProfileSection>
        <S.ProfileImage>
          <img src="/next.svg" />
        </S.ProfileImage>
        <S.ProfileName>홍수다람쥐</S.ProfileName>
        <S.ProfileInfo>여성 · 27세</S.ProfileInfo>
        <S.PrimaryButton>운동초보</S.PrimaryButton>
        <S.ButtonWrapper>
          <S.SecondaryButton>프로필 편집</S.SecondaryButton>
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
  );
}
