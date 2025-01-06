"use client";

import Header from "@/components/common/Header/Header";
import Toast from "@/components/common/Toast/Toast";
import { TOAST_MESSAGES, TOAST_STATUSES } from "@/constants/Toast";
import React, { useEffect, useState } from "react";
import * as S from "./Frame.style";

interface FrameProps {
  children: React.ReactNode;
}

export default function Frame({ children }: Readonly<FrameProps>) {
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
    <S.FrameContainer>
      <Header />
      {isToastVisible && (
        <Toast message={TOAST_MESSAGES.ERROR} status={TOAST_STATUSES.ERROR} />
      )}
      <S.Content>{children}</S.Content>
    </S.FrameContainer>
  );
}
