"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import * as S from "../style";

export default function Page() {
  const tabItems = ["챌린지", "기록"];

  return (
    <Frame>
      <Header />

      <S.PageContainer></S.PageContainer>
    </Frame>
  );
}
