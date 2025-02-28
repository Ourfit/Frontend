"use client";

import Frame from "@/components/layout/Frame";
import OurfitLogo from "@/assets/images/ourfit-logo.svg";
import KakaoLogo from "@/assets/images/Kakao_logo.svg";
import * as S from "./style";
import { Typography } from "@/components/atoms/Typography";
import { useTokenStore } from "@/stores/tokenStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { token } = useTokenStore();
  const router = useRouter();

  useEffect(() => {
    if (token) router.replace("/");
  }, [token]);

  const kakaoLoginHandler = () => {
    window.Kakao.Auth.authorize({
      redirectUri:
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI_LOCAL
          : process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
    });
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
          <S.LoginButton onClick={kakaoLoginHandler}>
            <KakaoLogo />
            <Typography.H4Sb>카카오로 계속하기</Typography.H4Sb>
          </S.LoginButton>
        </S.Bottom>
      </S.LoginPageContainer>
    </Frame>
  );
}
