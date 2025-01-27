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

export default function Frame({
  children,
  style,
  contentStyle,
}: Readonly<FrameProps>) {
  const pathname = usePathname();

  const hiddenPaths = ["/mypage/openchat", "/auth/signup"];
  const shouldHideGnb = hiddenPaths.includes(pathname);

  return (
    <S.FrameContainer style={{ ...style }}>
      <S.Content style={{ ...contentStyle }}>{children}</S.Content>
      {!shouldHideGnb && <Gnb />}
    </S.FrameContainer>
  );
}
