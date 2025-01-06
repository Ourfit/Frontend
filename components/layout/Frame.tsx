"use client";

import Toast from "@/components/common/Toast/Toast";
import { TOAST_MESSAGES, TOAST_STATUSES } from "@/constants/Toast";
import React, { useEffect, useState } from "react";
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
  const [isToastVisible, setToastVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <S.FrameContainer style={style}>
      {isToastVisible && (
        <Toast message={TOAST_MESSAGES.ERROR} status={TOAST_STATUSES.ERROR} />
      )}
      <S.Content style={contentStyle}>{children}</S.Content>
    </S.FrameContainer>
  );
}
