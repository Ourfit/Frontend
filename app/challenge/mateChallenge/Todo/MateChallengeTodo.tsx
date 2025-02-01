"use client";

import { useRouter } from "next/navigation";
import CheckGrayIcon from "@/assets/images/checkGray.svg";
import * as S from "./MateChallengeTodo.style";

export const MateChallengeTodo = () => {
  const router = useRouter();

  return (
    <>
      <S.DescriptionWrapper>
        <S.ContentWrapper>
          <S.GrayCheckIconWrapper>
            <CheckGrayIcon />
          </S.GrayCheckIconWrapper>
          <S.Content>매주</S.Content>
          <S.PointContent>월/수/금</S.PointContent>
          <S.Content>운동하기</S.Content>
        </S.ContentWrapper>
      </S.DescriptionWrapper>
    </>
  );
};
