import Header from "@/components/common/Header";
import React from "react";
import * as S from "./Frame.style";
import Gnb from "@/components/common/Gnb";

interface FrameProps {
  children: React.ReactNode;
}

export default function Frame({ children }: Readonly<FrameProps>) {
  return (
    <S.FrameContainer>
      <Header />
      <S.Content>{children}</S.Content>
      <Gnb />
    </S.FrameContainer>
  );
}
