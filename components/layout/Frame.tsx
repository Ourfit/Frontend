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

  const hiddenGnbPaths = ["/mypage/openchat", "/mate/facility", "/mate/time"];

  const shouldHideGnb = hiddenGnbPaths.includes(pathname);

  return (
    <S.FrameContainer style={{ ...style }}>
      <S.Content>{children}</S.Content>
      {!shouldHideGnb && <Gnb />}
    </S.FrameContainer>
  );
}
