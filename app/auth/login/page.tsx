"use client";

import Frame from "@/components/layout/Frame";
import OurfitLogo from "@/assets/images/ourfit-logo.svg";
import KakaoLogo from "@/assets/images/Kakao_logo.svg";
import * as S from "./style";
import { Typography } from "@/components/atoms/Typography";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleClick = () => {
    router.replace("/auth/signup");
  };

  return (
    <Frame style={{ padding: "0" }} contentStyle={{ height: "100%" }}>
      <S.LoginPageContainer>
        <S.Title>
          <OurfitLogo />
          <S.Content>
            <Typography.H2Sb>함께 운동할 수 있는 메이트</Typography.H2Sb>
            <Typography.H2Bd>‘아워핏’에서 찾아요</Typography.H2Bd>
          </S.Content>
        </S.Title>
        <S.Bottom>
          <S.Tooltip>SNS로 간편하게 시작하기</S.Tooltip>
          <S.LoginButton onClick={handleClick}>
            <KakaoLogo />
            <Typography.H4Sb>카카오로 계속하기</Typography.H4Sb>
          </S.LoginButton>
        </S.Bottom>
      </S.LoginPageContainer>
    </Frame>
  );
}
