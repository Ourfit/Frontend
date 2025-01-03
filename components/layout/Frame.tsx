import Header from "@/components/common/Header";
import React from "react";
import * as S from "./Frame.style";

interface FrameProps {
  children: React.ReactNode;
}

export default function Frame({ children }: Readonly<FrameProps>) {
  return (
    <S.FrameContainer>
      <Header />
      <S.Content>{children}</S.Content>
    </S.FrameContainer>
  );
}
