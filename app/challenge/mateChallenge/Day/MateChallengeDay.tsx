"use client";

import { useRouter } from "next/navigation";
import * as S from "./MateChallengeDay.style";

export const MateChallengeDay = () => {
  const router = useRouter();

  return (
    <>
        <S.TitleContainer>
          <S.LeftTitleWrapper>
            <S.DeadLineTitle>마감일</S.DeadLineTitle>
            <S.DateTitle>2025.4.21</S.DateTitle>
          </S.LeftTitleWrapper>
          <S.RigthTitleContainer>
            <S.DdayTitle>D-120</S.DdayTitle>
          </S.RigthTitleContainer>
        </S.TitleContainer>
    </>
  );
};
