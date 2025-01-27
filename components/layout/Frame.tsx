"use client";

import Gnb from "@/components/common/Gnb";
import { usePathname } from "next/navigation";
import React from "react";
import * as S from "./Frame.style";

interface FrameProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

export default function Frame({ children }: Readonly<FrameProps>) {
  const pathname = usePathname();

  const hiddenPaths = ["/mypage/openchat", "/auth/signup"];
  const shouldHideGnb = hiddenPaths.includes(pathname);

  const grayBackgroundPaths = ["/", "/auth/signup"];
  const bgColorGray = grayBackgroundPaths.includes(pathname);

  return (
    <S.FrameContainer $bgColorGray={bgColorGray}>
      <S.Content $bgColorGray={bgColorGray}>{children}</S.Content>
      {!shouldHideGnb && <Gnb />}
    </S.FrameContainer>
  );
}
