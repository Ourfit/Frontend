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

  const hiddenGnbPaths = [
    "/mypage/openchat",
    "/mate/facility",
    "/mate/time",
    "/mate/mateprofile",
    "/auth/signup",
    "/auth/login",
    "/challenge/registration",
  ];

  const isGnbHidden = hiddenGnbPaths.some((path) => pathname.startsWith(path));

  const isHeightFull = pathname === "/mate/facility";

  return (
    <S.FrameContainer style={{ ...style }}>
      <S.Content
        style={{ ...contentStyle, height: isHeightFull ? "100%" : "" }}
      >
        {children}
      </S.Content>
      {!isGnbHidden && <Gnb />}
    </S.FrameContainer>
  );
}
