"use client";

import ArrowRightIcon from "@/assets/images/arrow_right.svg";
import { Typography } from "@/components/atoms/Typography";
import * as S from "./Banner.style";

export default function Banner() {
  return (
    <S.BannerContainer>
      <S.BannerContent>
        <Typography.H2Bd>
          아워핏
          <br />
          이용법을 알려드려요!
        </Typography.H2Bd>
        <S.Content>
          <Typography.H4Md>자세히보기</Typography.H4Md>
          <ArrowRightIcon />
        </S.Content>
      </S.BannerContent>
      <S.Circle />
    </S.BannerContainer>
  );
}
