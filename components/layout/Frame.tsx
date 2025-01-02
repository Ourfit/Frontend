import Header from "@/components/common/Header";
import React from "react";
import * as S from "./Frame.style";

interface FrameProps {
  children: React.ReactNode;
}

export default function Frame({ children }: FrameProps) {
  return (
    <S.FrameContainer>
      <Header /> {/* common 폴더의 Header를 그대로 사용 */}
      <S.Content>{children}</S.Content>
    </S.FrameContainer>
  );
}
