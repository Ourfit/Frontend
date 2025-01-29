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

  const hiddenPaths = [
    "/mypage/openchat",
    "/auth/signup",
    "/mypage/mate-history",
  ];
  const shouldHideGnb = hiddenPaths.includes(pathname);

  const bgColorGray = pathname === "/";

  return (
    <S.FrameContainer>
      <S.Content $bgColorGray={bgColorGray}>{children}</S.Content>
      {!shouldHideGnb && <Gnb />}
    </S.FrameContainer>
  );
}
