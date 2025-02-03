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

export default function Frame({ children, style }: Readonly<FrameProps>) {
  const pathname = usePathname();

  const hiddenGnbPaths = [
    "/mypage/openchat",
    "/mate/facility",
    "/mate/time",
    "/mate/mateprofile",
  ];
  const bgColorGray = pathname === "/";

  const isGnbHidden = hiddenGnbPaths.some((path) => pathname.startsWith(path));
  return (
    <S.FrameContainer style={{ ...style }}>
      <S.Content $bgColorGray={bgColorGray}>{children}</S.Content>
      {!isGnbHidden && <Gnb />}
    </S.FrameContainer>
  );
}
